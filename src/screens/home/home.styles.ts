import { getPalette } from "@akushniruk/baseapp-expo-sdk/src/shared/libs/getPalette";
import { StyleSheet } from "react-native";

export const homeStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        safeAreaContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        scrollViewContainer: {
            width: "100%",
        },
        infoBlockMargin: {
            marginTop: 24,
        },
        infoBlock: {
            paddingHorizontal: 12,
            width: "100%",
        },
        title: {
            fontWeight: "700",
            fontSize: 18,
        },
        profileInfoContainer: {},
        serviceViewContainer: {
            marginTop: 12,
            paddingHorizontal: 12,
        },
        serviceContainer: {
            marginTop: 12,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-start",
        },
        serviceBox: {
            width: 80,
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: palette.Background["main-background-color"].value,
            borderWidth: 1,
            borderColor: palette.Controls["divider-color"][20].value,
            marginRight: 6,
            marginTop: 6,
            borderRadius: 2,
            padding: 6,
        },
        serviceBoxPressed: {
            backgroundColor: palette.Controls["divider-color"][20].value,
        },
        serviceIcon: {
            marginBottom: 6,
        },
        serviceTitle: {
            color: palette["text-color"][70].value,
        },
        bannerContainer: {
            width: "100%",
            marginTop: 24,
            paddingHorizontal: 12,
        },
        banner: {
            width: "100%",
            height: 120,
        },
    });
};
