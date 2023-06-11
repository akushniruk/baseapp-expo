import { Withdrawal, withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { View } from "react-native";

const WithdrawalScreen = () => {
    return (
        <View>
            <Withdrawal />
        </View>
    );
};

export default withAuth(WithdrawalScreen);
