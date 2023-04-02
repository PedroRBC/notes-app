import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View, useColorScheme } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function HomeHeader() {
    const { navigate } = useNavigation();
    const theme = useColorScheme();
    var iconColor = '#000'
    if (theme == 'dark') {
        iconColor = '#FFF'
    }
    return (
        <View className="flex-row justify-between rounded-2xl mx-2 px-3 items-center bg-Header dark:bg-darkHeader" >
            <Text className="dark:text-DarkFont font-semibold text-2xl" >Notas</Text>
            <TouchableOpacity
                className="flex-row items-center p-2"
                activeOpacity={0.7}
                onPress={() => { navigate("Create") }}
            >
                <MaterialCommunityIcons name="plus-circle" color={iconColor} size={30} />
                <Text className="dark:text-DarkFont font-semibold text-xl ml-2" >Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}