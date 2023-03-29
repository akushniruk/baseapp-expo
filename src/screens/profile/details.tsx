import { withAuth, ProfileDetails } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { globalStyles } from "../../shared/styles/global";

const ProfileDetailsScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView
                style={[globalStyles.layoutContainer, styles.container]}
            >
                <ProfileDetails />
            </ScrollView>
        </SafeAreaView>
    );
};

export default withAuth(ProfileDetailsScreen);

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
});
