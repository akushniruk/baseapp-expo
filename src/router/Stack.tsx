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

import WalletDetailsScreen from "../screens/wallets/walletDetails";
import DepositScreen from "../screens/wallets/deposit";
import WithdrawalScreen from "../screens/wallets/withdrawal";
import BeneficiariesScreen from "../screens/wallets/beneficiaries";
import CreateCryptoBeneficiaryScreen from "../screens/wallets/createCryptoBeneficiary";
import ConfirmBeneficiaryScreen from "../screens/wallets/confirmBeneficiary";

import ProfileScreen from "../screens/profile";
import ProfileDetailsScreen from "../screens/profile/details";
import ReferralScreen from "../screens/profile/referral";
import SecurityScreen from "../screens/profile/security";
import AccountActivityScreen from "../screens/profile/accountActivity";
import ChangePasswordScreen from "../screens/profile/changePassword";
import TwoFactorAuthScreen from "../screens/profile/twoFactorAuth";
import BackupKeyScreen from "../screens/profile/backupKey";
import SettingsScreen from "../screens/profile/settings";
import HelpScreen from "../screens/profile/help";
import ApiKeysScreen from "../screens/profile/apiKeys";
import ApiDocsScreen from "../screens/profile/apiDocs";

import { stackHeaderOptions, screenOptions, screenWithoutHeader, stackHomeHeaderOptions } from "./options";
import MarketTradingScreen from "../screens/marketTrading";
import React from "react";
// import { MarketsSelectorModal } from "../widgets/MarketsSelectorModal";

const Stack = createNativeStackNavigator();

export const authStack = () => {
    return (
        <>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, true, true)}
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
                name="VerifyEmail"
                component={VerifyEmailScreen}
                options={({ navigation }) => stackHeaderOptions(navigation)}
            />
            <Stack.Screen
                name="ResetPassword"
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
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "Profile")}
            />
            <Stack.Screen
                name="Details"
                component={ProfileDetailsScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "Profile info")}
            />
            <Stack.Screen
                name="Referral"
                component={ReferralScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "Referral")}
            />
            <Stack.Screen
                name="ApiKeys"
                component={ApiKeysScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "API Keys")}
            />
            <Stack.Screen
                name="Security"
                component={SecurityScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "Security")}
            />
            <Stack.Screen
                name="TwoFactorAuth"
                component={TwoFactorAuthScreen}
                options={({ navigation }) =>
                    stackHeaderOptions(navigation, false, false, false, "Google Authenticator")
                }
            />
            <Stack.Screen
                name="BackupKey"
                component={BackupKeyScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "Backup Key")}
            />
            <Stack.Screen
                name="ChangePassword"
                component={ChangePasswordScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "Change Password")}
            />
            <Stack.Screen
                name="AccountActivity"
                component={AccountActivityScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "Account Activity")}
            />
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "Settings")}
            />
            <Stack.Screen
                name="ApiDocs"
                component={ApiDocsScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "API Docs")}
            />
            <Stack.Screen
                name="Support"
                component={HelpScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "Help & Support")}
            />
        </>
    );
};

export const tradingStack = () => {
    return (
        <>
            <Stack.Screen
                name="Trading"
                component={MarketTradingScreen}
                options={({ navigation, route }) =>
                    stackHeaderOptions(
                        navigation,
                        false,
                        false,
                        false,
                        `${route.params?.base_unit?.toUpperCase()}/${route.params?.quote_unit?.toUpperCase()}`
                    )
                }
            />
        </>
    );
};

export const walletDetailsStack = () => {
    return (
        <>
            <Stack.Screen name="WalletDetails" component={WalletDetailsScreen} />
            <Stack.Screen name="Deposit" component={DepositScreen} />
            <Stack.Screen name="Withdrawal" component={WithdrawalScreen} />
            <Stack.Screen name="Beneficiaries" component={BeneficiariesScreen} />
            <Stack.Screen name="CreateCryptoBeneficiary" component={CreateCryptoBeneficiaryScreen} />
            <Stack.Screen name="ConfirmBeneficiary" component={ConfirmBeneficiaryScreen} />
        </>
    );
};

export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ ...screenOptions() }} initialRouteName="Home">
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
        <Stack.Navigator screenOptions={{ ...screenWithoutHeader, ...screenOptions() }} initialRouteName="Markets">
            <Stack.Screen name="Markets" component={MarketsScreen} />
        </Stack.Navigator>
    );
};

export const TradesStack = () => {
    return (
        <Stack.Navigator screenOptions={{ ...screenWithoutHeader, ...screenOptions() }} initialRouteName="Trades">
            <Stack.Screen name="Trades" component={TradesScreen} />
        </Stack.Navigator>
    );
};

export const OrdersStack = () => {
    return (
        <Stack.Navigator screenOptions={{ ...screenWithoutHeader, ...screenOptions() }} initialRouteName="Orders">
            <Stack.Screen name="Orders" component={OrdersScreen} />
        </Stack.Navigator>
    );
};

export const WalletsStack = () => {
    return (
        <Stack.Navigator screenOptions={{ ...screenWithoutHeader, ...screenOptions() }} initialRouteName="Wallets">
            <Stack.Screen name="Wallets" component={WalletsScreen} />
        </Stack.Navigator>
    );
};
