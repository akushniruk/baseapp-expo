import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { ForgotPassword } from "@akushniruk/baseapp-expo-sdk";
import { globalStyles } from "../../../../shared/styles/global";

const ForgotPasswordScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={globalStyles.layoutContainer}>
                <ForgotPassword />
            </ScrollView>
        </SafeAreaView>
    );
};

export default ForgotPasswordScreen;
