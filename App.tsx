import React from "react";
import { StyleSheet } from "react-native";
import { Router } from "./src/router/Router";
import { ReduxProvider } from "@akushniruk/baseapp-expo-sdk";
import { StatusBar } from "expo-status-bar";

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <ReduxProvider>
                <Router />
            </ReduxProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
