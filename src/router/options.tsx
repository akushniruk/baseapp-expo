import React from "react";
import { lightPalette } from "../shared/styles/theme/light";
import { AuthStackHeader } from "./headers/authStackHeader";

export const screenOptions = {
    headerStyle: {
        backgroundColor: lightPalette.Background["main-background-color"].value,
    },
    contentStyle: {
        backgroundColor: lightPalette.Background["main-background-color"].value,
    },
};

export const screenWithoutHeader = {
    headerShown: false,
};

export const authStackHeaderOptions = (
    navigation: any,
    headerBackVisible?: boolean
) => ({
    title: "",
    headerBackVisible: headerBackVisible,
    headerShadowVisible: false,
    headerRight: () => {
        return <AuthStackHeader navigation={navigation} />;
    },
});
