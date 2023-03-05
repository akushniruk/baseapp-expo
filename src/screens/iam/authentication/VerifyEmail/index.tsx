import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { VerifyEmail } from "@akushniruk/baseapp-expo-sdk";
import { globalStyles } from "../../../../shared/styles/global";

const VerifyEmailScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={globalStyles.layoutContainer}>
                <VerifyEmail />
            </ScrollView>
        </SafeAreaView>
    );
};

export default VerifyEmailScreen;
