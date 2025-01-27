import { Referral, withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { globalStyles } from "../../shared/styles/global";

const ReferralScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={[globalStyles.layoutContainer, styles.container]}>
                <Referral />
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
