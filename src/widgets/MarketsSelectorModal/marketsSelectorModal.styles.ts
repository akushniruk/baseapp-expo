import { getPalette } from "@akushniruk/baseapp-expo-sdk/src/shared/libs/getPalette";
import { StyleSheet } from "react-native";

export const marketsSelectorModalStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        title: {
            fontWeight: "700",
            fontSize: 14,
        },
        modalTitle: {
            fontSize: 24,
            fontWeight: "700",
        },
        marketSelectorModal: {
            margin: 0,
            paddingHorizontal: 12,
            paddingVertical: 100,
            display: "flex",
            justifyContent: "flex-start",

            width: "80%",
            backgroundColor: palette.Background["body-background-color"].value,
        },
    });
};
