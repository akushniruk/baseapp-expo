import { Button, OrderbookWidget, TickerV1 } from "@akushniruk/baseapp-expo-sdk";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import { useLinkTo, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView, View, SafeAreaView } from "react-native";
import { marketTradingStyles } from "./marketTrading.styles";

const MarketTradingScreen = () => {
    const navigation = useNavigation();
    const { theme } = useThemeContext();

    const styles = marketTradingStyles(theme);

    const {
        params: { id, base_unit, quote_unit },
    } = useRoute();

    const customButtonBidStyles = {
        button: { ...styles.button },
        active: {
            ...styles.buttonBidActive,
        },
    };

    const customButtonAskStyles = {
        button: { ...styles.button },
        active: {
            ...styles.buttonAskActive,
        },
    };

    const redirectToTrades = (side: string) => {
        navigation.navigate("TradesStack", {
            side: side,
        });
    };

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.tradingStack}>
                    <View style={styles.tradingStackTicker}>
                        <TickerV1 marketId={id} />
                    </View>
                    <View style={styles.tradingStackOrderBook}>
                        <OrderbookWidget />
                    </View>
                </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <Button
                    onPress={() => redirectToTrades("bid")}
                    customStyles={customButtonBidStyles}
                    title="Buy"
                    isLoading={false}
                />
                <Button
                    onPress={() => redirectToTrades("ask")}
                    customStyles={customButtonAskStyles}
                    title="Sell"
                    isLoading={false}
                />
            </View>
        </SafeAreaView>
    );
};

export default MarketTradingScreen;
