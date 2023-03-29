import { withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { ProfileWidget } from "@akushniruk/baseapp-expo-sdk";
import { globalStyles } from "../../shared/styles/global";

const ProfileScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView
                style={[globalStyles.layoutContainer, styles.container]}
            >
                <ProfileWidget />
            </ScrollView>
        </SafeAreaView>
    );
};

export default withAuth(ProfileScreen);

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
});
