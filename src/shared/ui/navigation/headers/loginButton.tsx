import { Button } from "@akushniruk/baseapp-expo-sdk";
import React, { FC, useCallback } from "react";
import { View } from "react-native";

export const LoginButton: FC<any> = ({ navigation }) => {
    const redirectToLogin = useCallback(() => {
        navigation.navigate("Login");
    }, [navigation]);

    return (
        <View style={{ marginLeft: -10 }}>
            <Button
                onPress={redirectToLogin}
                title="Login"
                isLoading={false}
            ></Button>
        </View>
    );
};
