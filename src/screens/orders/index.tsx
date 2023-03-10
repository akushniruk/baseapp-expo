import React from "react";
import { View, Text } from "react-native";
import { withAuth } from "@akushniruk/baseapp-expo-sdk";

const OrdersScreen = () => {
    return (
        <View>
            <Text>Orders</Text>
        </View>
    );
};

export default withAuth(OrdersScreen);
