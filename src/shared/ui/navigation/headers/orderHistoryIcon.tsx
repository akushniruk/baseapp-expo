import React, { FC } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { HistoryIcon } from "../../../../assets/images/system/history";
import { useLinkTo } from "@react-navigation/native";

export const OrderHistoryIcon: FC = () => {
    const linkTo = useLinkTo();

    return (
        <Pressable style={{ marginLeft: -10 }} onPress={() => linkTo("/Orders")}>
            <View style={styles.textContainer}>
                <HistoryIcon />
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
