import { WalletDetailsWidget, withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { View } from "react-native";

const WalletDetailsScreen = () => {
    return (
        <View>
            <WalletDetailsWidget />
        </View>
    );
};

export default withAuth(WalletDetailsScreen);
