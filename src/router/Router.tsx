import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppNavigation } from "./appNavigation/appNavigation";
import { screenOptions } from "./options";
import { authStack } from "./stack/authStack";
import { profileStack } from "./stack/profileStack";
import { tradingStack } from "./stack/tradingStack";
import { walletDetailsStack } from "./stack/walletDetailsStack";
import { webViewStack } from "./stack/webViewStack";
import { ordersStack } from "./stack/ordersStack";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import { getPalette } from "@akushniruk/baseapp-expo-sdk/src/shared/libs/getPalette";

const Stack = createNativeStackNavigator();

export const Router: FC = () => {
    const { theme } = useThemeContext();
    const palette = getPalette(theme);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions()}>
                <Stack.Screen
                    name="App"
                    component={() => AppNavigation(palette)}
                    options={{
                        header: () => null,
                    }}
                />
                {authStack()}
                {profileStack()}
                {tradingStack()}
                {walletDetailsStack()}
                {ordersStack()}
                {webViewStack()}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
