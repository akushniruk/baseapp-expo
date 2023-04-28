import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

const MarketsScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Markets</Text>
        </View>
    );
};

export default MarketsScreen;
