import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Login } from "@akushniruk/baseapp-expo-sdk";
import { globalStyles } from "../../../../shared/styles/global";

const LoginScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={globalStyles.layoutContainer}>
                <Login />
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;
