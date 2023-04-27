import { getPalette } from "@akushniruk/baseapp-expo-sdk/src/shared/libs/getPalette";
import { StyleSheet } from "react-native";

export const homeStyles = (theme: string) => {
    const palette = getPalette(theme);

    return StyleSheet.create({
        safeAreaContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 24,
        },
        scrollViewContainer: {
            width: "100%",
        },
        auroraImage: {
            marginTop: 12,
            width: 354,
            height: 220,
        },
        infoRow: {
            paddingHorizontal: 12,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            paddingVertical: 14,
            marginTop: 64,
            backgroundColor:
                palette.Controls["neutral-control-layer-color"][100].value,
        },
        infoRowText: {
            color: palette.Controls["neutral-control-color"]["00"].value,
            textAlign: "center",
            fontSize: 14,
            fontWeight: "400",
        },
        infoRowTextBold: {
            fontWeight: "700",
            fontSize: 24,
        },
        infoBlockMargin: {
            marginTop: 64,
        },
        infoBlockCenter: {
            display: "flex",
            alignItems: "center",
        },
        infoBlock: {
            paddingHorizontal: 12,
            width: "100%",
        },
        marginTop32: {
            marginTop: 32,
        },
        marginTop24: {
            marginTop: 24,
        },
        title: {
            fontWeight: "700",
            fontSize: 32,
        },
        content: {
            marginTop: 24,
            fontWeight: "400",
            fontSize: 16,
            lineHeight: 24,
        },
        infoExperience: {
            width: "80%",
        },
        featureBox: {
            width: "100%",
            backgroundColor: "#F0F0F0",
            borderRadius: 4,
            marginTop: 32,
            padding: 16,
        },
        featureBoxImage: {
            alignItems: "center",
            display: "flex",
        },
        featureBoxTitle: {
            textAlign: "center",
            fontWeight: "700",
            fontSize: 24,
            marginTop: 12,
        },
        featureBoxContent: {
            marginTop: 12,
            fontSize: 14,
            lineHeight: 21,
            fontWeight: "400",
        },
        getStartedBox: {
            borderRadius: 4,
            marginTop: 32,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
        },
        getStartedBoxLevel: {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#FCD000",
        },
        getStartedBoxLevelText: {
            fontWeight: "700",
            fontSize: 48,
            paddingHorizontal: 30,
        },
        getStartedBoxInfo: {
            backgroundColor: "#F0F0F0",
            flex: 1,
            flexWrap: "wrap",
            padding: 16,
            display: "flex",
            alignItems: "baseline",
            justifyContent: "flex-end",
        },
        getStartedBoxTitle: {
            textAlign: "center",
            fontWeight: "700",
            fontSize: 24,
            marginTop: 12,
        },
        getStartedBoxContent: {
            marginTop: 12,
            fontSize: 14,
            lineHeight: 21,
            fontWeight: "400",
        },
    });
};
