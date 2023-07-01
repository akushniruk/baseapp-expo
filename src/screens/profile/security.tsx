import { withAuth, Security } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, View } from "react-native";

const SecurityScreen = () => {
    return (
        <View style={styles.container}>
            <Security />
        </View>
    );
};

export default withAuth(SecurityScreen);

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
    },
});
