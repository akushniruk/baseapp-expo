import React, { FC, useCallback } from "react";
import { Pressable } from "react-native";
import { ProfileIcon } from "../../../../../assets/images/profile/profileIcon";
import { useAppSelector } from "@akushniruk/baseapp-expo-sdk/src/shared";
import { RootState } from "@akushniruk/baseapp-expo-sdk/src/shared/providers/redux/model/store";

export const ProfileHomeIcon: FC<any> = ({ navigation }) => {
    const userProfile = useAppSelector(
        (state: RootState) => state.user.profile
    );
    const returnHome = useCallback(() => {
        userProfile
            ? navigation.navigate("Profile")
            : navigation.navigate("Login");
    }, [userProfile, navigation]);

    return (
        <Pressable style={{ marginLeft: -10 }} onPress={returnHome}>
            <ProfileIcon />
        </Pressable>
    );
};
