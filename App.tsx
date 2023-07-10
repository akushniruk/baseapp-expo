import React from "react";
import { Router } from "./src/router/Router";
import { CoreProvider } from "@akushniruk/baseapp-expo-sdk";
import { StatusBar } from "expo-status-bar";

// TODO: Keep the splash screen visible while we fetch configs

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <CoreProvider>
                <Router />
            </CoreProvider>
        </>
    );
}
