import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

const MarketTradingScreen = () => {
    const {
        params: { id, base_unit, quote_unit },
    } = useRoute();

    return (
        <View>
            <Text>{id}</Text>
        </View>
    );
};

export default MarketTradingScreen;
