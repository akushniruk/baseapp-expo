import { Beneficiaries, withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { View } from "react-native";

const BeneficiariesScreen = () => {
    return (
        <View>
            <Beneficiaries />
        </View>
    );
};

export default withAuth(BeneficiariesScreen);
