import { withAuth } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { View, Text } from "react-native";

const ProfileScreen = () => {
    return (
        <View>
            <Text>Profile</Text>
        </View>
    );
};

export default withAuth(ProfileScreen);
