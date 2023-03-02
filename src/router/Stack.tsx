import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/iam/authentication/Login";
import RegisterScreen from "../screens/iam/authentication/Register";
import ProfileScreen from "../screens/profile/Profile";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    );
};

export const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
    );
};
