import { NavigationContainer } from "@react-navigation/native";
import { AppStack, AuthStack } from "./Stack";

export const Router = () => {
    return (
        <NavigationContainer>
            {true ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};
