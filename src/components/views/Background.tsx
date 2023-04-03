import { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';



export function BackGround({ children }: PropsWithChildren) {

    return (
        <SafeAreaView className="flex-1 pt-3 bg-background dark:bg-darkBackground " >

            {children}

        </SafeAreaView>
    )

}