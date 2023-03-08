import React from "react";
import { Router } from "./src/router/router";
import { ReduxProvider } from "@akushniruk/baseapp-expo-sdk";
import { StatusBar } from "expo-status-bar";

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <ReduxProvider>
                <Router />
            </ReduxProvider>
        </>
    );
}
