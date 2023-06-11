import { WalletDetailsWidget, withAuth, Button } from "@akushniruk/baseapp-expo-sdk";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import { useLinkTo } from "@react-navigation/native";
import React from "react";
import { View, SafeAreaView } from "react-native";
import { walletDetailsStyles } from "./walletDetails.styles";

const WalletDetailsScreen = () => {
    const linkTo = useLinkTo();

    const { theme } = useThemeContext();
    const styles = walletDetailsStyles(theme);

    const redirectTo = (path: string) => {
        linkTo(path);
    };

    return (
        <View style={styles.container}>
            <WalletDetailsWidget />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button onPress={() => redirectTo("/Deposit")} title="Deposit" isLoading={false} />
                </View>

                <View style={styles.button}>
                    <Button onPress={() => redirectTo("/Withdrawal")} title="withdrawal" isLoading={false} />
                </View>
            </View>
        </View>
    );
};

export default withAuth(WalletDetailsScreen);
