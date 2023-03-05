import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Register } from "@akushniruk/baseapp-expo-sdk";
import { globalStyles } from "../../../../shared/styles/global";

const RegisterScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={globalStyles.layoutContainer}>
                <Register />
            </ScrollView>
        </SafeAreaView>
    );
};

export default RegisterScreen;
