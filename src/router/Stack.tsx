import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/iam/authentication/Login";
import RegisterScreen from "../screens/iam/authentication/Register";
import ForgotPasswordScreen from "../screens/iam/authentication/ForgotPassword";
import VerifyEmailScreen from "../screens/iam/authentication/VerifyEmail";
import ResetPasswordScreen from "../screens/iam/authentication/ResetPassword";

import HomeScreen from "../screens/home";
import MarketsScreen from "../screens/markets";
import TradesScreen from "../screens/trades";
import OrdersScreen from "../screens/orders";
import WalletsScreen from "../screens/wallets";

import ProfileScreen from "../screens/profile";
import ProfileDetailsScreen from "../screens/profile/details";
import ReferralScreen from "../screens/profile/referral";
import SecurityScreen from "../screens/profile/security";
import ApiKeysScreen from "../screens/profile/apiKeys";
import ApiDocsScreen from "../screens/profile/apiDocs";

import {
    stackHeaderOptions,
    screenOptions,
    screenWithoutHeader,
    stackHomeHeaderOptions,
} from "./options";

const Stack = createNativeStackNavigator();

export const authStack = () => {
    return (
        <>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={({ navigation }) =>
                    stackHeaderOptions(navigation, false, true, true)
                }
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={({ navigation }) => stackHeaderOptions(navigation)}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={({ navigation }) => stackHeaderOptions(navigation)}
            />
            <Stack.Screen
                name="ResetPassword"
                component={VerifyEmailScreen}
                options={({ navigation }) => stackHeaderOptions(navigation)}
            />
            <Stack.Screen
                name="VerifyEmail"
                component={ResetPasswordScreen}
                options={({ navigation }) => stackHeaderOptions(navigation)}
            />
        </>
    );
};

export const profileStack = () => {
    return (
        <>
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={({ navigation }) =>
                    stackHeaderOptions(
                        navigation,
                        false,
                        false,
                        false,
                        "Profile"
                    )
                }
            />
            <Stack.Screen
                name="Details"
                component={ProfileDetailsScreen}
                options={({ navigation }) =>
                    stackHeaderOptions(
                        navigation,
                        false,
                        false,
                        false,
                        "Profile info"
                    )
                }
            />
            <Stack.Screen
                name="Referral"
                component={ReferralScreen}
                options={({ navigation }) =>
                    stackHeaderOptions(
                        navigation,
                        false,
                        false,
                        false,
                        "Referral"
                    )
                }
            />
            <Stack.Screen
                name="ApiKeys"
                component={ApiKeysScreen}
                options={({ navigation }) =>
                    stackHeaderOptions(
                        navigation,
                        false,
                        false,
                        false,
                        "API Keys"
                    )
                }
            />
            <Stack.Screen
                name="Security"
                component={SecurityScreen}
                options={({ navigation }) =>
                    stackHeaderOptions(
                        navigation,
                        false,
                        false,
                        false,
                        "Security"
                    )
                }
            />
            <Stack.Screen
                name="ApiDocs"
                component={ApiDocsScreen}
                options={({ navigation }) =>
                    stackHeaderOptions(
                        navigation,
                        false,
                        false,
                        false,
                        "API Docs"
                    )
                }
            />
            <Stack.Screen
                name="Support"
                component={ProfileDetailsScreen}
                options={({ navigation }) =>
                    stackHeaderOptions(
                        navigation,
                        false,
                        false,
                        false,
                        "Help & Support"
                    )
                }
            />
        </>
    );
};

export const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{ ...screenOptions }}
            initialRouteName="Home"
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => stackHomeHeaderOptions(navigation)}
            ></Stack.Screen>
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
