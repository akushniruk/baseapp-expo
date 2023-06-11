import { Withdrawal, withAuth } from "@akushniruk/baseapp-expo-sdk";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import React from "react";
import { View } from "react-native";
import { withdrawalStyles } from "./withdrawal.styles";

const WithdrawalScreen = () => {
    const { theme } = useThemeContext();
    const styles = withdrawalStyles(theme);

    return (
        <View style={styles.container}>
            <Withdrawal />
        </View>
    );
};

export default withAuth(WithdrawalScreen);
