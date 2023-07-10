import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { stackHeaderOptions } from "../options";
import { View } from "react-native";

import OrdersScreen from "../../screens/orders";

const Stack = createNativeStackNavigator();
export const ordersStack = () => {
    return (
        <>
            <Stack.Screen
                name="Orders"
                component={OrdersScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, true, true, "Orders", <View />)}
            />
        </>
    );
};
