import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../../screens/iam/authentication/Login";
import RegisterScreen from "../../screens/iam/authentication/Register";
import ForgotPasswordScreen from "../../screens/iam/authentication/ForgotPassword";
import VerifyEmailScreen from "../../screens/iam/authentication/VerifyEmail";
import ResetPasswordScreen from "../../screens/iam/authentication/ResetPassword";

import { stackHeaderOptions } from "../options";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

export const authStack = () => {
    return (
        <>
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, true, true, "", <View />)}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "", <View />)}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPasswordScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "", <View />)}
            />
            <Stack.Screen
                name="VerifyEmail"
                component={VerifyEmailScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "", <View />)}
            />
            <Stack.Screen
                name="ResetPassword"
                component={ResetPasswordScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "", <View />)}
            />
        </>
    );
};
