import { getPalette } from "@akushniruk/baseapp-expo-sdk/src/shared/libs/getPalette";
import { StyleSheet } from "react-native";

export const withdrawalStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        container: {
            position: "relative",
            height: "100%",
            paddingHorizontal: 12,
            width: "100%",
        },
    });
};
