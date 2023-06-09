import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold } from '@expo-google-fonts/inter';
import { SQLiteProvider } from './src/contexts/SQlite';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  if (!fontsLoaded) {
    return (
      <>
      </>
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} >
      <SQLiteProvider>
        <SafeAreaProvider>
          <Routes />
        </SafeAreaProvider>
      </SQLiteProvider>
      <StatusBar style="auto" translucent backgroundColor='transparent' />
    </GestureHandlerRootView>
  );
}
