import { useState, useContext } from "react"
import { View } from "react-native";
import { ReturnHeader } from "../../components/headers/return";
import { Input } from "../../components/inputs/Input";
import { SendBtn } from "../../components/button/sendBtn";
import SQLiteContext from "../../contexts/SQlite";
import { useNavigation } from "@react-navigation/native";
import { BackGround } from "../../components/views/Background";


export function CreateScreen() {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const { addNote } = useContext(SQLiteContext);
    const { goBack } = useNavigation()

    function saveNote() {
        if (title == '' || note == '') return;
        addNote({ title: title, note: note });
        goBack();
    }

    return (
        <BackGround>
            <ReturnHeader />

            <View className="flex-1 pl-4 pr-2 pt-3" >
                <Input
                    placeholder="Título"
                    onChangeText={setTitle}

                />

                <Input
                    placeholder="Nota" multiline={true}
                    onChangeText={setNote} autoFocus={true}
                    className="text-lg"
                />

                <SendBtn
                    onPress={saveNote}
                />

            </View>

        </BackGround>
    )
}