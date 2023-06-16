import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screens/home";
import MarketsScreen from "../../screens/markets";
import TradesScreen from "../../screens/trades";
import WalletsScreen from "../../screens/wallets";

import { stackHeaderOptions, screenOptions, screenWithoutHeader, stackHomeHeaderOptions } from "../options";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ ...screenOptions() }} initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => stackHomeHeaderOptions(navigation)}
            ></Stack.Screen>
        </Stack.Navigator>
    );
};

export const MarketsStack = () => {
    return (
        <Stack.Navigator screenOptions={{ ...screenOptions() }} initialRouteName="Markets">
            <Stack.Screen name="Markets" component={MarketsScreen} />
        </Stack.Navigator>
    );
};

export const TradesStack = () => {
    return (
        <Stack.Navigator screenOptions={{ ...screenOptions() }} initialRouteName="Trades">
            <Stack.Screen name="Trades" component={TradesScreen} />
        </Stack.Navigator>
    );
};

export const WalletsStack = () => {
    return (
        <Stack.Navigator screenOptions={{ ...screenWithoutHeader, ...screenOptions() }} initialRouteName="Wallets">
            <Stack.Screen
                name="Wallets"
                component={WalletsScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, false, true, "", "")}
            />
        </Stack.Navigator>
    );
};
