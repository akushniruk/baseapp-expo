import React from "react";
import { SafeAreaView, Text, Pressable, ScrollView, View, Dimensions } from "react-native";
import { useAppSelector } from "@akushniruk/baseapp-expo-sdk/src/shared";
import { RootState } from "@akushniruk/baseapp-expo-sdk/src/shared/providers/redux/model/store";
import { MarketsV1 } from "@akushniruk/baseapp-expo-sdk";
import { homeStyles } from "./home.styles";
// TODO: fix import
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import { useLinkTo, useNavigation } from "@react-navigation/native";
import { BANNERS, SERVICES } from "./config";
import Carousel from "react-native-reanimated-carousel";

const PAGE_WIDTH = Dimensions.get("window").width;

const HomeScreen = () => {
    const navigation = useNavigation();
    const linkTo = useLinkTo();
    const { theme } = useThemeContext();

    const styles = homeStyles(theme);

    const userProfile = useAppSelector((state: RootState) => state.user.profile);

    const renderServices = (service: (typeof SERVICES)[0]) => {
        return (
            <View key={service.id} style={styles.serviceBoxContainer}>
                <Pressable
                    style={({ pressed }) => [
                        styles.serviceBox,
                        {
                            backgroundColor: pressed
                                ? styles.serviceBoxPressed.backgroundColor
                                : styles.serviceBox.backgroundColor,
                        },
                    ]}
                    key={service.id}
                    onPress={() => linkTo(service.path)}
                >
                    <View style={styles.serviceIcon}>{service.img}</View>
                    <Text style={styles.serviceTitle}>{service.title}</Text>
                </Pressable>
            </View>
        );
    };

    const renderBanner = (banner: (typeof BANNERS)[0]) => {
        return (
            <Pressable key={banner.id} onPress={() => linkTo("/Login")}>
                {banner.img}
            </Pressable>
        );
    };

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView style={styles.scrollViewContainer}>
                <View style={styles.serviceViewContainer}>
                    <View>
                        <Text style={styles.title}>Products & Services</Text>
                    </View>
                    <View style={styles.serviceContainer}>{SERVICES.map(renderServices)}</View>
                </View>
                <View style={styles.bannerContainer}>
                    <Carousel
                        vertical={false}
                        width={PAGE_WIDTH}
                        loop
                        style={{ width: "100%" }}
                        height={250}
                        autoPlay={true}
                        autoPlayInterval={2000}
                        data={BANNERS}
                        renderItem={({ index }) => BANNERS.map(renderBanner)[index]}
                    />
                </View>
                <View style={[styles.infoBlock, styles.infoBlockMargin]}>
                    <Text style={styles.title}>Popular Market pairs</Text>
                    <MarketsV1 limit={5} navigation={navigation} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
