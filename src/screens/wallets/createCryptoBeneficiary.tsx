import { CreateCryptoBeneficiary, withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { View } from "react-native";

const CreateCryptoBeneficiaryScreen = () => {
    return (
        <View>
            <CreateCryptoBeneficiary />
        </View>
    );
};

export default withAuth(CreateCryptoBeneficiaryScreen);
