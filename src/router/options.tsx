import React from "react";
import { lightPalette } from "../shared/styles/theme/light";
import { BackArrowButton } from "../shared/ui/navigation/headers/backArrowButton";
import { CloseStackHeader } from "../shared/ui/navigation/headers/closeStackHeader";
import { ProfileHomeIcon } from "../shared/ui/navigation/headers/profileHomeIcon";

export const screenOptions = {
    headerShadowVisible: false,
    headerStyle: {
        backgroundColor: lightPalette.Background["main-background-color"].value,
    },
    contentStyle: {
        backgroundColor: lightPalette.Background["main-background-color"].value,
    },
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
});
