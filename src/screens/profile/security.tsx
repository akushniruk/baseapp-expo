import { withAuth, Security } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { globalStyles } from "../../shared/styles/global";

const SecurityScreen = () => {
    return (
        <SafeAreaView>
            <View style={[globalStyles.layoutContainer, styles.container]}>
                <Security />
            </View>
        </SafeAreaView>
    );
};

export default withAuth(SecurityScreen);

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
});
