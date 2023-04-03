import { useContext } from "react"
import { View, Text } from "react-native";
import { ReturnHeader } from "../../components/headers/return";
import { useRoute } from "@react-navigation/native";
import SQLiteContext from "../../contexts/SQlite";
import { BackGround } from "../../components/views/Background";


export function NoteScreen() {
    const { params } = useRoute();
    const { notes } = useContext(SQLiteContext)
    const [note] = notes.filter(i => i.id == params)

    return (
        <BackGround>
            <ReturnHeader note={note} />

            <View className="px-3 pt-2" >
                <Text className="text-3xl pb-2 dark:text-DarkFont " > {note.title} </Text>

                <Text className="text-xl dark:text-DarkFont " > {note.note} </Text>
            </View>

        </BackGround>
    )
}
