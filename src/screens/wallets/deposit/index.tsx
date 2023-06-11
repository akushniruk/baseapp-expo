import { Deposit, withAuth } from "@akushniruk/baseapp-expo-sdk";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import React from "react";
import { View } from "react-native";
import { depositStyles } from "./deposit.styles";

const DepositScreen = () => {
    const { theme } = useThemeContext();
    const styles = depositStyles(theme);

    return (
        <View style={styles.container}>
            <Deposit />
            {/* TODO: add share */}
            {/* <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Save as Image" isLoading={false} />
                </View>

                <View style={styles.button}>
                    <Button title="Share Address" isLoading={false} />
                </View>
            </View> */}
        </View>
    );
};

export default withAuth(DepositScreen);
