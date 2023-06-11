import { getPalette } from "@akushniruk/baseapp-expo-sdk/src/shared/libs/getPalette";
import { StyleSheet } from "react-native";

export const walletsStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        safeAreaViewContainer: {
            marginTop: 64,
            paddingHorizontal: 12,
        },
    });
};
