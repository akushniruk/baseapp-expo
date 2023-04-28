import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

const MarketTradingScreen = () => {
    const {
        params: { id },
    } = useRoute();
    console.log(id);
    return (
        <View>
            <Text>{id}</Text>
        </View>
    );
};

export default MarketTradingScreen;
