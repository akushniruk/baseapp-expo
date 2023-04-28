import React, { useCallback } from "react";
import { SafeAreaView, Text, Image, ScrollView, View } from "react-native";
import { useAppSelector } from "@akushniruk/baseapp-expo-sdk/src/shared";
import { RootState } from "@akushniruk/baseapp-expo-sdk/src/shared/providers/redux/model/store";
import { Button, MarketsV1 } from "@akushniruk/baseapp-expo-sdk";
import { INFO_AURORA, LETS_GET_STARTED, PLATFORM_FEATURES } from "./config";
import { homeStyles } from "./home.styles";
// TODO: fix import
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import { useLinkTo, useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
    const linkTo = useLinkTo();
    const { theme } = useThemeContext();

    const styles = homeStyles(theme);

    const userProfile = useAppSelector(
        (state: RootState) => state.user.profile
    );

    const handleAuthRedirect = useCallback(() => {
        userProfile ? linkTo("/Profile") : linkTo("/Login");
    }, []);

    const renderInfoRow = (item) => {
        return (
            <View key={item.id}>
                <Text style={[styles.infoRowText, styles.infoRowTextBold]}>
                    {item.amount}
                </Text>
                <Text style={styles.infoRowText}>{item.name}</Text>
            </View>
        );
    };

    const renderPlatformFeatures = (item) => {
        return (
            <View key={item.id} style={styles.featureBox}>
                <View style={styles.featureBoxImage}>{item.img}</View>
                <Text style={styles.featureBoxTitle}>{item.title}</Text>
                <Text style={styles.featureBoxContent}>{item.content}</Text>
            </View>
        );
    };

    const renderLetsGetStarted = (item) => {
        return (
            <View key={item.id} style={styles.getStartedBox}>
                <View style={styles.getStartedBoxLevel}>
                    <Text style={styles.getStartedBoxLevelText}>{item.id}</Text>
                </View>
                <View style={styles.getStartedBoxInfo}>
                    <Text style={styles.getStartedBoxTitle}>{item.title}</Text>
                    <Text style={styles.getStartedBoxContent}>
                        {item.content}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <ScrollView style={styles.scrollViewContainer}>
                <View style={[styles.infoBlock]}>
                    <View style={styles.infoBlockCenter}>
                        <Image
                            style={styles.auroraImage}
                            source={require("../../assets/images/home/aurora.png")}
                        />
                    </View>

                    <Text
                        style={[
                            styles.title,
                            styles.infoExperience,
                            styles.marginTop24,
                        ]}
                    >
                        Secure trading with Aurora Exchange
                    </Text>
                    <Text style={[styles.content, styles.marginTop24]}>
                        Buy, sell, and trade a variety of digital currencies
                        easily and securely.
                    </Text>
                    <View style={styles.marginTop24}>
                        <Button
                            onPress={handleAuthRedirect}
                            title="Sign up with email"
                            isLoading={false}
                        />
                    </View>
                </View>
                <View style={styles.infoRow}>
                    {INFO_AURORA.map(renderInfoRow)}
                </View>
                <View style={[styles.infoBlock, styles.infoBlockMargin]}>
                    <Text style={styles.title}>Popular Market pairs</Text>
                    <MarketsV1 navigation={navigation} />
                </View>
                {/* Experience */}
                <View style={[styles.infoBlock, styles.infoBlockMargin]}>
                    <View style={styles.infoBlockCenter}>
                        <Image
                            style={{ height: 246, width: 350 }}
                            source={require("../../assets/images/home/experience.png")}
                        />
                    </View>
                    <Text
                        style={[
                            styles.title,
                            styles.infoExperience,
                            styles.marginTop32,
                        ]}
                    >
                        No matter your experience level
                    </Text>
                    <Text style={styles.content}>
                        Aurora offers an intuitive interface with real time
                        order books, charting tools, trade history, and a simple
                        order process so you can trade straight away!
                    </Text>
                    <View style={styles.marginTop24}>
                        <Button
                            onPress={handleAuthRedirect}
                            title="Sign up with email"
                            isLoading={false}
                        />
                    </View>
                </View>
                {/* Platform features */}
                <View style={[styles.infoBlock, styles.infoBlockMargin]}>
                    <Text style={[styles.title, styles.infoExperience]}>
                        Aurora platform features
                    </Text>
                    <View>{PLATFORM_FEATURES.map(renderPlatformFeatures)}</View>
                </View>
                {/* Let's get started */}
                <View style={[styles.infoBlock, styles.infoBlockMargin]}>
                    <Text style={[styles.title, styles.infoExperience]}>
                        Let’s get started
                    </Text>
                    <View style={styles.infoBlockCenter}>
                        <Image
                            style={{ height: 347, width: 354, marginTop: 32 }}
                            source={require("../../assets/images/home/signup.png")}
                        />
                    </View>
                    <View>{LETS_GET_STARTED.map(renderLetsGetStarted)}</View>
                </View>
                {/* Trade on the go */}
                <View style={[styles.infoBlock, styles.infoBlockMargin]}>
                    <View style={styles.infoBlockCenter}>
                        <Image
                            style={{ height: 260, width: 354 }}
                            source={require("../../assets/images/home/trade.png")}
                        />
                    </View>
                    <Text
                        style={[
                            styles.title,
                            styles.infoExperience,
                            styles.marginTop32,
                        ]}
                    >
                        Trade on the go
                    </Text>
                    <Text style={styles.content}>
                        Our platform is optimized for trading on any device. And
                        you don’t need to download any additional applications.
                        All the power of Baseapp cryptocurrency exchange, in the
                        palm of your hand.
                    </Text>
                    <View style={(styles.marginTop24, { paddingBottom: 24 })}>
                        <Button
                            onPress={handleAuthRedirect}
                            title="Let's Try"
                            isLoading={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
