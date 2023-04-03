import { useContext } from "react"
import { View, FlatList } from "react-native";
import { HomeHeader } from "../../components/headers/home";
import { AddTab } from "../../components/button/addBtn";
import SQLiteContext from "../../contexts/SQlite";
import { NoteView } from "../../components/views/Note";
import { BackGround } from "../../components/views/Background";


export function HomeScreen() {
    const { notes } = useContext(SQLiteContext)
    return (
        <BackGround>
            <HomeHeader />
            <AddTab />

            <FlatList
                data={notes}
                className="flex-1 px-2 my-2 "
                keyExtractor={(item) => { return `${item.id!}` }}
                renderItem={({ item }) => { return <NoteView title={item.title} note={item.note} id={item.id} /> }}
            />

        </BackGround>
    )
}
