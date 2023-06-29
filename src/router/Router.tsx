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

const Stack = createNativeStackNavigator();

export const Router: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions()}>
                <Stack.Screen
                    name="App"
                    component={AppNavigation}
                    options={{
                        header: () => null,
                    }}
                />
                {authStack()}
                {profileStack()}
                {tradingStack()}
                {walletDetailsStack()}
                {webViewStack()}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
