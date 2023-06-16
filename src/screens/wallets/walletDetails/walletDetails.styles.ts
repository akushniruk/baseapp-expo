import { getPalette } from "@akushniruk/baseapp-expo-sdk/src/shared/libs/getPalette";
import { StyleSheet } from "react-native";

export const walletDetailsStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            position: "relative",
            height: "100%",
            width: "100%",
        },

        buttonContainer: {
            position: "absolute",
            left: "2%",
            zIndex: 10,
            bottom: 42,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: palette.Background["body-background-color"].value,
        },
        button: {
            width: "48%",
        },
    });
};
