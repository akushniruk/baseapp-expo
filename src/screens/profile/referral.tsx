import { withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import { globalStyles } from "../../shared/styles/global";

const ReferralScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView
                style={[globalStyles.layoutContainer, styles.container]}
            >
                <Text>Referral</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default withAuth(ReferralScreen);

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
});
