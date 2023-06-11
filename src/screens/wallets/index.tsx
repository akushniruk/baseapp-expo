import { Wallets, withAuth } from "@akushniruk/baseapp-expo-sdk";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import React from "react";
import { SafeAreaView } from "react-native";
import { walletsStyles } from "./wallets.styles";

const WalletsScreen = () => {
    const { theme } = useThemeContext();
    const styles = walletsStyles(theme);

    return (
        <SafeAreaView style={styles.safeAreaViewContainer}>
            <Wallets />
        </SafeAreaView>
    );
};

export default withAuth(WalletsScreen);
