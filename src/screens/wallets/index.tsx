import { Wallets, withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { View } from "react-native";

const WalletsScreen = () => {
    return (
        <View>
            <Wallets />
        </View>
    );
};

export default withAuth(WalletsScreen);
