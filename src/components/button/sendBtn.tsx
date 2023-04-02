import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";


export function SendBtn({ ...rest }: TouchableOpacityProps) {

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            className="absolute bottom-5 right-5 rounded-2xl p-2 items-center bg-Header dark:bg-darkHeader"
            {...rest}
        >
            <Text className="text-lg dark:text-DarkFont px-2" >Salvar</Text>
        </TouchableOpacity>
    )
}