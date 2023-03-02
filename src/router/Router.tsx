import { NavigationContainer } from "@react-navigation/native";
import { AppStack, AuthStack } from "./Stack";

export const Router = () => {
    return (
        <NavigationContainer>
            {false ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};
