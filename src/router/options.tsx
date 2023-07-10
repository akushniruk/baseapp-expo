import React, { FC } from "react";
import { BackArrowButton } from "../shared/ui/navigation/headers/backArrowButton";
import { CloseStackHeader } from "../shared/ui/navigation/headers/closeStackHeader";
import { ProfileHomeIcon } from "../shared/ui/navigation/headers/profileHomeIcon";
import { getPalette } from "../shared/lib/getPalette";
import { Platform, Text } from "react-native";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import { MarketsSelectorModal } from "../widgets/MarketsSelectorModal";
import { OrderHistoryIcon } from "../shared/ui/navigation/headers/orderHistoryIcon";
import { SettingsIcon } from "../shared/ui/navigation/headers/settingsIcon";

export const screenOptions = () => {
    const { theme } = useThemeContext();
    const palette = getPalette(theme);

    if (Platform.OS === "android") {
        const statusBarStyle: "dark" | "light" = theme === "light" ? "dark" : "light";

        return {
            headerShadowVisible: true,
            statusBarTranslucent: false,
            statusBarStyle: statusBarStyle,
            statusBarColor: palette.Background["main-background-color"].value,
            headerStyle: {
                backgroundColor: palette.Background["main-background-color"].value,
            },
            contentStyle: {
                backgroundColor: palette.Background["main-background-color"].value,
            },
        };
    }

    return {
        headerShadowVisible: true,
        headerStyle: {
            backgroundColor: palette.Background["main-background-color"].value,
        },
        contentStyle: {
            backgroundColor: palette.Background["main-background-color"].value,
        },
    };
};

export const screenWithoutHeader = {
    headerShown: false,
};

export const stackHeaderOptions = (
    navigation: any,
    headerBackVisible?: boolean,
    headerRight?: boolean,
    hideHeaderLeft?: boolean,
    title?: string,
    headerTitle?: React.ReactNode,
    customHeaderRight?: React.ReactNode
) => {
    const { theme } = useThemeContext();
    const palette = getPalette(theme);

    const defaultOptions = {
        headerBackVisible: headerBackVisible,
        headerShadowVisible: false,
        headerTitle: () => {
            return !title.length ? (
                headerTitle
            ) : (
                <Text style={{ color: palette["text-color"][70].value }}>{title}</Text>
            );
        },
        headerLeft: () => {
            return !hideHeaderLeft ? <BackArrowButton navigation={navigation} /> : undefined;
        },
    };

    if (customHeaderRight) {
        return {
            ...defaultOptions,
            headerRight: () => {
                return customHeaderRight ? customHeaderRight : null;
            },
        };
    }

    return {
        ...defaultOptions,
        headerRight: () => {
            return headerRight ? <CloseStackHeader navigation={navigation} /> : undefined;
        },
    };
};

// TODO: move to separate file
export const stackHomeHeaderOptions = (navigation: any, title?: string) => ({
    title: title || "",
    headerBackVisible: false,
    headerShadowVisible: false,
    headerLeft: () => <ProfileHomeIcon navigation={navigation} />,
    headerRight: () => <SettingsIcon />,
});

export const stackTradesHeaderOptions = (navigation: any, title?: string) => ({
    title: title || "",
    headerBackVisible: false,
    headerShadowVisible: false,
    // FIXME: hook stack issue (REACT)
    headerLeft: () => <MarketsSelectorModal />,
    headerRight: () => <OrderHistoryIcon />,
});
