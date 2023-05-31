import { withAuth, BackupKeyForm } from "@akushniruk/baseapp-expo-sdk";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { globalStyles } from "../../shared/styles/global";

const BackupKeyFormScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={[globalStyles.layoutContainer, styles.container]}>
                <BackupKeyForm navigation={navigation} />
            </View>
        </SafeAreaView>
    );
};

export default withAuth(BackupKeyFormScreen);

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
});
