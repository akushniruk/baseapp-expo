import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { ResetPassword } from "@akushniruk/baseapp-expo-sdk";
import { globalStyles } from "../../../../shared/styles/global";

const ResetPasswordScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={globalStyles.layoutContainer}>
                <ResetPassword />
            </ScrollView>
        </SafeAreaView>
    );
};

export default ResetPasswordScreen;
