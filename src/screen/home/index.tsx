import { useContext } from "react"
import { View, FlatList } from "react-native";
import { HomeHeader } from "../../components/headers/home";
import { AddTab } from "../../components/button/addBtn";
import SQLiteContext from "../../contexts/SQlite";
import { NoteView } from "../../components/views/Note";


export function HomeScreen() {
    const { notes } = useContext(SQLiteContext)
    return (
        <View className="flex-1 pt-8 bg-background dark:bg-darkBackground " >
            <HomeHeader />
            <AddTab />

            <FlatList
                data={notes}
                className="flex-1 px-2 my-2 "
                keyExtractor={(item) => { return `${item.id!}` }}
                renderItem={({ item }) => { return <NoteView title={item.title} note={item.note} id={item.id} /> }}
            />

        </View>
    )
}
