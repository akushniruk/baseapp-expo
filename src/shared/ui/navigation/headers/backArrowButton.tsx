import { FC, useCallback } from "react";
import { Pressable } from "react-native";
import { ArrowLeft } from "../../../../assets/images/navigation/arrowLeft";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import { getPalette } from "@akushniruk/baseapp-expo-sdk/src/shared/libs/getPalette";

export const BackArrowButton: FC<any> = ({ navigation }) => {
    const { theme } = useThemeContext();
    const palette = getPalette(theme);

    const returnHome = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Pressable style={{ marginLeft: -10, paddingRight: 12, paddingVertical: 12 }} onPress={returnHome}>
            <ArrowLeft color={palette["text-color"][70].value} />
        </Pressable>
    );
};
