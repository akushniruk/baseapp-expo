import { Button, OrderbookWidget, TabPanel, TickerV1 } from "@akushniruk/baseapp-expo-sdk";
import { IRoute } from "@akushniruk/baseapp-expo-sdk/src/shared";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView, View, SafeAreaView, Text } from "react-native";
import { SceneMap } from "react-native-tab-view";
import { marketTradingStyles } from "./marketTrading.styles";

const MarketTradingScreen = () => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [routes] = useState<IRoute[]>([
        { key: "orderbook", title: "Order Book" },
        { key: "trades", title: "Trades" },
    ]);

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

    const OrderBook = () => <OrderbookWidget />;
    const Trades = () => <Text>Trades Widget</Text>;

    const renderScene = SceneMap({
        orderbook: OrderBook,
        trades: Trades,
    });

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.tradingStack}>
                    <View style={styles.tradingStackTicker}>
                        <TickerV1 marketId={id} />
                    </View>
                    <View style={styles.tradingStackOrderBook}>
                        <TabPanel
                            currentTabIndex={tabIndex}
                            renderScene={renderScene}
                            routes={routes}
                            onCurrentTabChange={setTabIndex}
                        />
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
