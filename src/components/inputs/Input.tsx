import { TextInput, TextInputProps, useColorScheme } from "react-native";

type Pallet = {
    text: string,
}

export function Input({ ...rest }: TextInputProps) {
    const theme = useColorScheme();
    var pallet: Pallet = {
        text: "#aaa5a7",
    }
    if (theme == 'dark') {
        pallet = {
            text: '#eee0df',
        };
    }

    return (
        <TextInput
            className="font-semibold text-2xl dark:text-DarkFont "
            placeholderTextColor={pallet.text} cursorColor={pallet.text} selectionColor={pallet.text}
            {...rest}
        />
    )

} 