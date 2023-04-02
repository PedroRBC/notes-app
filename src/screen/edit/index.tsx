import { useState, useContext } from "react"
import { View } from "react-native";
import { ReturnHeader } from "../../components/headers/return";
import { Input } from "../../components/inputs/Input";
import { SendBtn } from "../../components/button/sendBtn";
import SQLiteContext, { Note } from "../../contexts/SQlite";
import { useNavigation, useRoute } from "@react-navigation/native";


export function EditScreen() {
    const { params } = useRoute();
    const NOTE = params as Note;
    const [title, setTitle] = useState(NOTE.title);
    const [note, setNote] = useState(NOTE.note);
    const { updateNote } = useContext(SQLiteContext);
    const { goBack } = useNavigation()

    function saveNote() {
        updateNote({ title: title, note: note, id: NOTE.id! });
        goBack();
    }

    return (
        <View className="flex-1 pt-8 bg-background dark:bg-darkBackground " >
            <ReturnHeader />

            <View className="flex-1 pl-4 pr-2 pt-3" >
                <Input
                    placeholder="Título"
                    onChangeText={setTitle}
                    value={title}

                />

                <Input
                    placeholder="Nota" multiline={true}
                    onChangeText={setNote} autoFocus={true}
                    className="text-lg" value={note}
                />

                <SendBtn
                    onPress={saveNote}
                />

            </View>

        </View>
    )
}