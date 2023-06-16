import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { stackHeaderOptions } from "../options";

import MarketTradingScreen from "../../screens/marketTrading";
// import { MarketsSelectorModal } from "../widgets/MarketsSelectorModal";

const Stack = createNativeStackNavigator();
export const tradingStack = () => {
    return (
        <>
            <Stack.Screen
                name="Trading"
                component={MarketTradingScreen}
                options={({ navigation, route }) =>
                    stackHeaderOptions(
                        navigation,
                        false,
                        false,
                        false,
                        `${route.params?.base_unit?.toUpperCase()}/${route.params?.quote_unit?.toUpperCase()}`
                    )
                }
            />
        </>
    );
};
