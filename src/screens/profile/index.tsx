import { withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ProfileWidget } from "@akushniruk/baseapp-expo-sdk";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <ProfileWidget />
        </View>
    );
};

export default withAuth(ProfileScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        marginTop: 24,
    },
});
