import { Button, useAppSelector } from "@akushniruk/baseapp-expo-sdk";
import { RootState } from "@akushniruk/baseapp-expo-sdk/src/shared/providers/redux/model/store";
import React, { FC, useCallback } from "react";
import { View } from "react-native";

export const LoginButton: FC<any> = ({ navigation }) => {
    const userProfile = useAppSelector((state: RootState) => state.user.profile);

    const redirectToLogin = useCallback(() => {
        navigation.navigate("Login");
    }, [navigation]);

    if (userProfile) {
        return null;
    }

    return (
        <View style={{ marginLeft: -10 }}>
            <Button onPress={redirectToLogin} title="Login" isLoading={false}></Button>
        </View>
    );
};
