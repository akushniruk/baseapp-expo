import React from "react";
import { OrdersHistoryWidget, withAuth } from "@akushniruk/baseapp-expo-sdk";
import { View } from "react-native";

const OrdersScreen = () => {
    return (
        <View style={{ paddingHorizontal: 12 }}>
            <OrdersHistoryWidget />
        </View>
    );
};

export default withAuth(OrdersScreen);
