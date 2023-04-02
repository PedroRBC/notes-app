import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { Navigator, Screen } = createNativeStackNavigator();

import { HomeScreen } from '../screen/home';
import { CreateScreen } from '../screen/create';
import { NoteScreen } from '../screen/note';
import { EditScreen } from '../screen/edit';

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={({ route }) => {
                return {
                    headerShown: false,
                    animation: 'slide_from_right'
                }
            }}
            initialRouteName='Home'

        >
            <Screen
                name='Home'
                component={HomeScreen}

            />

            <Screen
                name='Note'
                component={NoteScreen}

            />

            <Screen
                name='Create'
                component={CreateScreen}
            />

            <Screen
                name='Edit'
                component={EditScreen}
            />

        </Navigator>
    )
}