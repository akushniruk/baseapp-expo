import React, { FC } from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { useLinkTo } from "@react-navigation/native";
import { SettingsSystemIcon } from "../../../../assets/images/system/settings";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import { getPalette } from "@akushniruk/baseapp-expo-sdk/src/shared/libs/getPalette";

export const SettingsIcon: FC = () => {
    const { theme } = useThemeContext();
    const palette = getPalette(theme);
    const linkTo = useLinkTo();

    return (
        <Pressable style={{ marginLeft: -10 }} onPress={() => linkTo("/Settings")}>
            <View style={styles.textContainer}>
                <SettingsSystemIcon color={palette["text-color"][100].value} />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingVertical: 12,
        paddingLeft: 12,
        marginRight: -10,
    },
});
