import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { stackHeaderOptions } from "../options";
import { View } from "react-native";
import WebViewScreen from "../../screens/webView";

const Stack = createNativeStackNavigator();

export const webViewStack = () => {
    return (
        <>
            <Stack.Screen
                name="WebView"
                component={WebViewScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, false, "", <View />)}
            />
        </>
    );
};
