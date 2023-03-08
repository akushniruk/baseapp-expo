import { lightPalette } from "../shared/styles/theme/light";

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
