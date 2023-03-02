import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "@/screens/iam/authentication/Login";
import RegisterScreen from "../screens/iam/authentication/Register";
import ProfileScreen from "../screens/profile/Profile";

const Stack = createStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login Screen" component={LoginScreen} />
            <Stack.Screen name="Login Screen" component={RegisterScreen} />
        </Stack.Navigator>
    );
};

export const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile Screen" component={ProfileScreen} />
        </Stack.Navigator>
    );
};
