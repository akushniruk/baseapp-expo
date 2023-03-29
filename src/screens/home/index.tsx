import React, { useMemo } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";
import { useAppSelector } from "@akushniruk/baseapp-expo-sdk/src/shared";
import { RootState } from "@akushniruk/baseapp-expo-sdk/src/shared/providers/redux/model/store";
// import { getPalette } from "@akushniruk/baseapp-expo-sdk/src/shared/libs/getPalette";

const HomeScreen = () => {
    const userProfile = useAppSelector(
        (state: RootState) => state.user.profile
    );

    const renderAuth = useMemo(() => {
        if (userProfile) {
            return (
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title}>Welcome to Baseapp</Text>
                        {/* Place for image */}
                    </View>
                    <View style={styles.containerForButtons}>
                        <Link
                            to={{ screen: "Register" }}
                            style={[styles.button, styles.buttonRegister]}
                        >
                            <Text>Register</Text>
                        </Link>
                        <Link
                            to={{ screen: "Login" }}
                            style={[styles.button, styles.buttonLogin]}
                        >
                            <Text>Login</Text>
                        </Link>
                    </View>
                </View>
            );
        }

        return null;
    }, [userProfile]);

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <>
                {renderAuth}
                <View style={styles.marketsContainer}></View>
                <Text style={styles.title}>Markets</Text>
            </>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    safeAreaContainer: {
        paddingHorizontal: 12,
    },
    marketsContainer: {
        marginTop: 24,
    },
    container: {
        backgroundColor: "#dbdde5",
        paddingHorizontal: 12,
        paddingBottom: 12,
        paddingTop: 24,
        borderRadius: 12,
    },
    title: {
        fontWeight: "bold",
        marginBottom: 12,
        fontSize: 16,
    },
    containerForButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    button: {
        width: "48%",
        textAlign: "center",
        padding: 12,
        marginTop: 12,
    },
    buttonLogin: {
        backgroundColor: "#4c40e6",
        color: "#fff",
    },
    buttonRegister: {
        backgroundColor: "#fff",
    },
});
