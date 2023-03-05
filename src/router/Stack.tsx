import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { lightPalette } from "../shared/styles/theme/light";

import HomeScreen from "../screens/home";
import LoginScreen from "../screens/iam/authentication/Login";
import RegisterScreen from "../screens/iam/authentication/Register";
import ForgotPasswordScreen from "../screens/iam/authentication/ForgotPassword";
import VerifyEmailScreen from "../screens/iam/authentication/VerifyEmail";
import ResetPasswordScreen from "../screens/iam/authentication/ResetPassword";

import ProfileScreen from "../screens/profile";

const Stack = createNativeStackNavigator();

// TODO: move outside
const screenOptions = {
    headerStyle: {
        backgroundColor: lightPalette.Background["main-background-color"].value,
    },
    contentStyle: {
        backgroundColor: lightPalette.Background["main-background-color"].value,
    },
    headerShown: true,
};

export const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
            />
            <Stack.Screen name="ResetPassword" component={VerifyEmailScreen} />
            <Stack.Screen name="VerifyEmail" component={ResetPasswordScreen} />
        </Stack.Navigator>
    );
};

export const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>
    );
};
