import { withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { View, Text } from "react-native";
import redirectToAuth from "../../shared/lib/redirectToAuth";

const WalletsScreen = () => {
    return (
        <View>
            <Text>Wallets</Text>
        </View>
    );
};

export default withAuth(WalletsScreen, redirectToAuth);
