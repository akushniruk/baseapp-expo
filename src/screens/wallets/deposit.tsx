import { Deposit, withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { View } from "react-native";

const DepositScreen = () => {
    return (
        <View>
            <Deposit />
        </View>
    );
};

export default withAuth(DepositScreen);
