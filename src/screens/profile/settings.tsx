import { withAuth, Settings } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { globalStyles } from "../../shared/styles/global";

const SettingsScreen = () => {
    return (
        <SafeAreaView>
            <View style={[globalStyles.layoutContainer, styles.container]}>
                <Settings />
            </View>
        </SafeAreaView>
    );
};

export default withAuth(SettingsScreen);

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
});
