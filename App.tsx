import React, { useCallback, useEffect, useState } from "react";
import { Router } from "./src/router/Router";
import { CoreProvider } from "@akushniruk/baseapp-expo-sdk";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // TODO:
                // - fetch configs base on it change state
                // PS: configs can be fetched only inside CoreProvider. That's why we need to figure out how to fetch configs before CoreProvider
                // Artificially delay for two seconds to simulate a slow loading
                // experience. Please remove this if you copy and paste the code!
                await new Promise((resolve) => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <>
            <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
                <StatusBar style="auto" />
                <CoreProvider>
                    <Router />
                </CoreProvider>
            </View>
        </>
    );
}
