import { getPalette } from "@akushniruk/baseapp-expo-sdk/src/shared/libs/getPalette";
import { StyleSheet } from "react-native";

export const walletDetailsStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        safeAreaContainer: {
            position: "relative",
            height: "100%",
            paddingHorizontal: 12,
            width: "100%",
        },
        // scrollViewContainer: {
        //     width: "100%",
        //     paddingHorizontal: 12,
        //     marginBottom: 52,
        // },
        buttonContainer: {
            paddingHorizontal: 12,
            paddingTop: 12,
            paddingBottom: 32,
            position: "absolute",
            zIndex: 2,
            bottom: 0,
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            backgroundColor: palette.Background["body-background-color"].value,
        },
        button: {
            width: "48%",
        },
    });
};
