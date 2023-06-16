import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { stackHeaderOptions } from "../options";

const Stack = createNativeStackNavigator();

import ProfileScreen from "../../screens/profile";
import ProfileDetailsScreen from "../../screens/profile/details";
import ReferralScreen from "../../screens/profile/referral";
import SecurityScreen from "../../screens/profile/security";
import AccountActivityScreen from "../../screens/profile/accountActivity";
import ChangePasswordScreen from "../../screens/profile/changePassword";
import TwoFactorAuthScreen from "../../screens/profile/twoFactorAuth";
import BackupKeyScreen from "../../screens/profile/backupKey";
import SettingsScreen from "../../screens/profile/settings";
import HelpScreen from "../../screens/profile/help";
import ApiKeysScreen from "../../screens/profile/apiKeys";
import ApiDocsScreen from "../../screens/profile/apiDocs";

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
