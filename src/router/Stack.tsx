import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home";
import LoginScreen from "../screens/iam/authentication/Login";
import RegisterScreen from "../screens/iam/authentication/Register";
import ForgotPasswordScreen from "../screens/iam/authentication/ForgotPassword";
import VerifyEmailScreen from "../screens/iam/authentication/VerifyEmail";
import ResetPasswordScreen from "../screens/iam/authentication/ResetPassword";

import ProfileScreen from "../screens/profile";
import MarketsScreen from "../screens/markets";
import TradesScreen from "../screens/trades";
import OrdersScreen from "../screens/orders";
import WalletsScreen from "../screens/wallets";
import { screenOptions, screenWithoutHeader } from "./options";

const Stack = createNativeStackNavigator();

export const authStack = () => {
    return (
        <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
            />
            <Stack.Screen name="ResetPassword" component={VerifyEmailScreen} />
            <Stack.Screen name="VerifyEmail" component={ResetPasswordScreen} />
        </>
    );
};

export const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ ...screenWithoutHeader, ...screenOptions }}
            initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
};

export const MarketsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ ...screenWithoutHeader, ...screenOptions }}
            initialRouteName="Markets"
        >
            <Stack.Screen name="Markets" component={MarketsScreen} />
        </Stack.Navigator>
    );
};

export const TradesStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ ...screenWithoutHeader, ...screenOptions }}
            initialRouteName="Trades"
        >
            <Stack.Screen name="Trades" component={TradesScreen} />
        </Stack.Navigator>
    );
};

export const OrdersStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ ...screenWithoutHeader, ...screenOptions }}
            initialRouteName="Orders"
        >
            <Stack.Screen name="Orders" component={OrdersScreen} />
        </Stack.Navigator>
    );
};

export const WalletsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ ...screenWithoutHeader, ...screenOptions }}
            initialRouteName="Wallets"
        >
            <Stack.Screen name="Wallets" component={WalletsScreen} />
        </Stack.Navigator>
    );
};
