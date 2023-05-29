import { AccountActivity, withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { globalStyles } from "../../shared/styles/global";

const AccountActivityScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView style={[globalStyles.layoutContainer, styles.container]}>
                <AccountActivity />
            </ScrollView>
        </SafeAreaView>
    );
};

export default withAuth(AccountActivityScreen);

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
});
