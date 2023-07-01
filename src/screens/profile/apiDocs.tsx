import { withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import { globalStyles } from "../../shared/styles/global";

const ApiDocsScreen = () => {
    return (
        <ScrollView style={[globalStyles.layoutContainer, styles.container]}>
            <Text>API DOCS</Text>
        </ScrollView>
    );
};

export default withAuth(ApiDocsScreen);

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
});
