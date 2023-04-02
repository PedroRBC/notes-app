import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, useColorScheme } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SQLiteContext, { Note } from "../../contexts/SQlite";
import { useContext } from "react";

type HeaderProp = {
    note?: Note,
}

export function ReturnHeader({ note, }: HeaderProp) {
    const { goBack, navigate } = useNavigation()
    const theme = useColorScheme();
    const { delNote } = useContext(SQLiteContext);
    var iconColor = '#000'
    if (theme == 'dark') {
        iconColor = '#FFF'
    }
    return (
        <View className="flex-row mx-2 justify-between " >
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={goBack}
            >
                <MaterialCommunityIcons name="arrow-left" color={iconColor} size={32} />
            </TouchableOpacity>

            {!note ? (<View />) : (
                <View className="flex-row justify-between" >
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => { navigate("Edit", note) }}
                    >
                        <MaterialCommunityIcons name="pencil" color={iconColor} size={35} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => { delNote(note.id!); goBack() }}
                    >
                        <MaterialCommunityIcons name="delete-forever" color="#F00" size={35} />
                    </TouchableOpacity>
                </View>
            )}

        </View>
    )
}