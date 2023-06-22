import { ConfirmBeneficiary, withAuth } from "@akushniruk/baseapp-expo-sdk";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";

const ConfirmBeneficiaryScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ConfirmBeneficiary navigation={navigation} />
        </SafeAreaView>
    );
};

export default withAuth(ConfirmBeneficiaryScreen);
