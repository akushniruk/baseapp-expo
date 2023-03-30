import { withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import { globalStyles } from "../../shared/styles/global";

const ApiKeysScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView
                style={[globalStyles.layoutContainer, styles.container]}
            >
                <Text>ApiKeys</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default withAuth(ApiKeysScreen);

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
});
