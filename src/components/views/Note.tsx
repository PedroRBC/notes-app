import { TouchableOpacity, Text } from "react-native";
import { Note } from "../../contexts/SQlite";
import { useNavigation } from "@react-navigation/native";


export function NoteView({ title, note, id }: Note) {
    const { navigate } = useNavigation()

    return (
        <TouchableOpacity
            className="bg-Header dark:bg-darkHeader rounded-xl my-2 py-2 px-2 border-b-2 "
            activeOpacity={0.7} onPress={() => { navigate("Note", id!) }}
        >
            <Text className="text-xl dark:text-DarkFont " > {title} </Text>

            <Text className="text-lg dark:text-DarkFont " > {note} </Text>

        </TouchableOpacity>
    )
}