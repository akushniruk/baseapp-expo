import { getPalette } from "@akushniruk/baseapp-expo-sdk/src/shared/libs/getPalette";
import { StyleSheet } from "react-native";

export const marketsStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        safeAreaContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingHorizontal: 12,
        },
        scrollViewContainer: {
            width: "100%",
        },
    });
};
