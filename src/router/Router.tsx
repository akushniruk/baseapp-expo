import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { authStack, profileStack } from "./stack";
import { AppNavigation } from "./appNavigation/appNavigation";
import { screenOptions } from "./options";

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
            </Stack.Navigator>
        </NavigationContainer>
    );
};
