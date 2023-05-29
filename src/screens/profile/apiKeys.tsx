import { ApiKeysWidget, withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { globalStyles } from "../../shared/styles/global";

const ApiKeysScreen = () => {
    return (
        <SafeAreaView>
            <View style={[styles.container]}>
                <ApiKeysWidget />
            </View>
        </SafeAreaView>
    );
};

export default withAuth(ApiKeysScreen);

const styles = StyleSheet.create({
    container: {
        height: "100%",
        marginTop: 24,
    },
});
