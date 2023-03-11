import React from "react";
import { View, Text } from "react-native";
import { Link } from "@react-navigation/native";
import { useAppSelector } from "@akushniruk/baseapp-expo-sdk/src/shared";
import { RootState } from "@akushniruk/baseapp-expo-sdk/src/shared/providers/redux/model/store";

const HomeScreen = () => {
    const userProfile = useAppSelector(
        (state: RootState) => state.user.profile
    );

    return (
        <View>
            <Text>{userProfile?.uid}</Text>
            <Link to={{ screen: "Login" }}>
                <Text>Login</Text>
            </Link>
            <Link to={{ screen: "Register" }}>
                <Text>Register</Text>
            </Link>
        </View>
    );
};

export default HomeScreen;
