import React, { FC, useCallback } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { ProfileIcon } from "../../../../assets/images/profile/profileIcon";
import { useAppSelector } from "@akushniruk/baseapp-expo-sdk/src/shared";
import { RootState } from "@akushniruk/baseapp-expo-sdk/src/shared/providers/redux/model/store";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import { getPalette } from "@akushniruk/baseapp-expo-sdk/src/shared/libs/getPalette";

export const ProfileHomeIcon: FC<any> = ({ navigation }) => {
    const { theme } = useThemeContext();
    const palette = getPalette(theme);

    const userProfile = useAppSelector((state: RootState) => state.user.profile);
    const returnHome = useCallback(() => {
        userProfile ? navigation.navigate("Profile") : navigation.navigate("Login");
    }, [userProfile, navigation]);

    return (
        <Pressable style={{ marginLeft: -10 }} onPress={returnHome}>
            <View style={styles.textContainer}>
                <ProfileIcon />
                {
                    <Text style={[styles.text, { color: palette["text-color"][70].value }]}>
                        {!userProfile ? "Sign up / Log in" : "Profile"}
                    </Text>
                }
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
        paddingRight: 12,
        paddingVertical: 12,
    },
    text: {
        marginLeft: 6,
    },
});
