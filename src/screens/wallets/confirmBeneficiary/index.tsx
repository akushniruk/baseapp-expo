import { ConfirmBeneficiary, withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { View } from "react-native";

const ConfirmBeneficiaryScreen = () => {
    return (
        <View>
            <ConfirmBeneficiary />
        </View>
    );
};

export default withAuth(ConfirmBeneficiaryScreen);
