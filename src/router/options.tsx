import React from "react";
import { BackArrowButton } from "../shared/ui/navigation/headers/backArrowButton";
import { CloseStackHeader } from "../shared/ui/navigation/headers/closeStackHeader";
import { ProfileHomeIcon } from "../shared/ui/navigation/headers/profileHomeIcon";
import { LoginButton } from "../shared/ui/navigation/headers/loginButton";
import { getPalette } from "../shared/lib/getPalette";

export const screenOptions = () => {
    const palette = getPalette("light");

    return {
        headerShadowVisible: false,
        headerStyle: {
            backgroundColor: palette.Background["main-background-color"].value,
        },
        contentStyle: {
            backgroundColor: palette.Background["main-background-color"].value,
        },
    };
};

export const screenWithoutHeader = {
    headerShown: true,
};

export const stackHeaderOptions = (
    navigation: any,
    headerBackVisible?: boolean,
    headerRight?: boolean,
    hideHeaderLeft?: boolean,
    title?: string
) => ({
    title: title || "",
    headerBackVisible: headerBackVisible,
    headerShadowVisible: false,
    headerLeft: () => {
        return !hideHeaderLeft ? (
            <BackArrowButton navigation={navigation} />
        ) : undefined;
    },
    headerRight: () => {
        return headerRight ? (
            <CloseStackHeader navigation={navigation} />
        ) : undefined;
    },
});

// TODO: move to separate component
export const stackHomeHeaderOptions = (navigation: any, title?: string) => ({
    title: title || "",
    headerBackVisible: false,
    headerShadowVisible: false,
    headerLeft: () => <ProfileHomeIcon navigation={navigation} />,
    headerRight: () => <LoginButton navigation={navigation} />,
});
