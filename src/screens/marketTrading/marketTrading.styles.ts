import { getPalette } from "@akushniruk/baseapp-expo-sdk/src/shared/libs/getPalette";
import { StyleSheet } from "react-native";

export const marketTradingStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        safeAreaContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
        },
        scrollViewContainer: {
            width: "100%",
            paddingHorizontal: 12,
            marginBottom: 52,
        },
        tradingStack: {
            paddingBottom: 12,
            borderColor: palette.Controls["divider-color"][20].value,
            borderBottomWidth: 4,
        },
        tradingStackTicker: {
            paddingBottom: 12,
        },
        tradingStackOrderBook: {
            paddingTop: 12,
            borderColor: palette.Controls["divider-color"][20].value,
            borderTopWidth: 4,
        },
        buttonContainer: {
            paddingHorizontal: 12,
            paddingTop: 12,
            paddingBottom: 32,
            position: "absolute",
            zIndex: 2,
            bottom: 60,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
            backgroundColor: palette.Background["body-background-color"].value,
        },
        button: {
            width: "48%",
        },
        buttonAskActive: {
            backgroundColor: palette.System.ask[60].value,
            color: palette["text-color"]["00"].value,
        },
        buttonBidActive: {
            backgroundColor: palette.System.bid[60].value,
            color: palette["text-color"]["00"].value,
        },
    });
};
