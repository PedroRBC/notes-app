import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screen/home';
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

    return (
        <Navigator
            screenOptions={({ route }) => {
                return {
                    headerShown: false,
                    animation: 'slide_from_bottom',

                }
            }}
            initialRouteName='Home'

        >
            <Screen
                name='Home'
                component={HomeScreen}
            />

        </Navigator>
    )
}