import { withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import { globalStyles } from "../../shared/styles/global";

const SecurityScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView
                style={[globalStyles.layoutContainer, styles.container]}
            >
                <Text>Security</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default withAuth(SecurityScreen);

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
});
