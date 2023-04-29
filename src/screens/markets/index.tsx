import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { MarketsV1 } from "@akushniruk/baseapp-expo-sdk";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import { marketsStyles } from "./markets.styles";

const MarketsScreen = () => {
    const navigation = useNavigation();
    const { theme } = useThemeContext();

    const styles = marketsStyles(theme);

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView style={styles.scrollViewContainer}>
                <MarketsV1 navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    );
};

export default MarketsScreen;
