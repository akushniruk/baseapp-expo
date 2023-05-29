import { ChangePasswordForm, withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { globalStyles } from "../../shared/styles/global";

const ChangePassowrdScreen = () => {
    return (
        <SafeAreaView>
            <View style={[globalStyles.layoutContainer, styles.container]}>
                <ChangePasswordForm />
            </View>
        </SafeAreaView>
    );
};

export default withAuth(ChangePassowrdScreen);

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
});
