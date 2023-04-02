import * as SQLite from "expo-sqlite";
import { createContext, PropsWithChildren, useEffect, useState } from 'react'

export type Note = {
    id?: string | number,
    title: string,
    note: string
}

type Content = {
    notes: Note[],
    addNote: ({ title, note }: Note) => void;
    delNote: (id: string | number) => void;
    updateNote: ({ title, note, id }: Note) => void;
}

const SQLiteContext = createContext<Content>({
    notes: [],
    addNote: () => { },
    delNote: () => { },
    updateNote: () => { },
})

const db = SQLite.openDatabase("db.db");

export const SQLiteProvider = ({ children }: PropsWithChildren) => {
    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS notes (id integer primary key not null, title text, note text)");
            tx.executeSql(`SELECT * FROM notes`, [], (_, { rows: { _array } }) => setNotes(_array))
        }, (err) => { console.log('ERROR: ', err) })
    }, [])

    function addNote({ title, note }: Note) {
        db.transaction((tx) => {
            tx.executeSql('insert into notes (title, note) values (?,?)', [title, note]);
            tx.executeSql(`SELECT * FROM notes`, [], (_, { rows: { _array } }) => setNotes(_array));
        }, (err) => { console.log('ERROR: ', err) })
    }

    function delNote(id: string | number) {
        db.transaction((tx) => {
            tx.executeSql('DELETE FROM notes WHERE id = ?', [id]);
            tx.executeSql(`SELECT * FROM notes`, [], (_, { rows: { _array } }) => setNotes(_array));
        }, (err) => { console.log('ERROR: ', err) })
    }

    function updateNote({ note, title, id }: Note) {
        db.transaction((tx) => {
            tx.executeSql('UPDATE notes SET title = ?, note = ? WHERE id = ? ', [title, note, id!]);
            tx.executeSql(`SELECT * FROM notes`, [], (_, { rows: { _array } }) => setNotes(_array));
        }, (err) => { console.log('ERROR: ', err) })
    }

    return (
        <SQLiteContext.Provider
            value={{
                notes: notes,
                addNote,
                delNote,
                updateNote
            }}

        >

            {children}

        </SQLiteContext.Provider>
    )

}

export default SQLiteContext