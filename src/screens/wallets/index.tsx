import { withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { View, Text } from "react-native";

const WalletsScreen = () => {
    return (
        <View>
            <Text>Wallets</Text>
        </View>
    );
};

export default withAuth(WalletsScreen);
