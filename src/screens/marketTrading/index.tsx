import { Button, LineChartKline, OrderbookWidget, TabPanel, TickerV1, Trades } from "@akushniruk/baseapp-expo-sdk";
import { IRoute } from "@akushniruk/baseapp-expo-sdk/src/shared";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { SceneRendererProps } from "react-native-tab-view";
import { marketTradingStyles } from "./marketTrading.styles";

const renderScene = (props: SceneRendererProps & { route: any }, tabIndex) => {
    switch (props.route.key) {
        case "orderbook":
            return tabIndex === 0 && <OrderbookWidget />;
        case "trades":
            return tabIndex === 1 && <Trades />;
        default:
            return null;
    }
};

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

    return (
        <View style={styles.safeAreaContainer}>
            <ScrollView>
                <View style={styles.scrollViewContainer}>
                    <View style={styles.tradingStack}>
                        <View style={styles.tradingStackTicker}>
                            <TickerV1 marketId={id} />
                            <View style={{ paddingTop: 24, paddingBottom: 36 }}>
                                <LineChartKline />
                            </View>
                        </View>
                        <View style={styles.tradingStackOrderBook}>
                            <TabPanel
                                currentTabIndex={tabIndex}
                                renderScene={(props: SceneRendererProps & { route: any }) =>
                                    renderScene(props, tabIndex)
                                }
                                routes={routes}
                                onCurrentTabChange={setTabIndex}
                            />
                        </View>
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
        </View>
    );
};

export default MarketTradingScreen;
