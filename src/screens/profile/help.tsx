import { withAuth, Help } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { globalStyles } from "../../shared/styles/global";

const HelpScreen = () => {
    return (
        <SafeAreaView>
            <View style={[globalStyles.layoutContainer, styles.container]}>
                <Help />
            </View>
        </SafeAreaView>
    );
};

export default withAuth(HelpScreen);

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
});
