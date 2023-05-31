import { withAuth, TwoFactorAuthForm } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { globalStyles } from "../../shared/styles/global";

const TwoFactorAuthScreen = () => {
    return (
        <SafeAreaView>
            <View style={[globalStyles.layoutContainer, styles.container]}>
                <TwoFactorAuthForm />
            </View>
        </SafeAreaView>
    );
};

export default withAuth(TwoFactorAuthScreen);

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
});
