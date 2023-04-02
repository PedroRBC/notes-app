import { TouchableOpacity, useColorScheme } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export function AddTab() {
    const { navigate } = useNavigation();
    const theme = useColorScheme();
    var iconColor = '#000'
    if (theme == 'dark') {
        iconColor = '#FFF'
    }

    return (
        <TouchableOpacity
            className="absolute bottom-5 right-5 rounded-2xl p-2 items-center bg-Header dark:bg-darkHeader"
            activeOpacity={0.7} onPress={() => { navigate("Create") }}
        >
            <MaterialCommunityIcons name="plus-circle-outline" color={iconColor} size={36} />
        </TouchableOpacity>
    )
}