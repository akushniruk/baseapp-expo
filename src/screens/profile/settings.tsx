import { withAuth, Settings } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, View } from "react-native";

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Settings />
        </View>
    );
};

export default withAuth(SettingsScreen);

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
    },
});
