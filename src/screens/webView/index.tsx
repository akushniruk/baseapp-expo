import { useRoute } from "@react-navigation/native";
import * as React from "react";
import { WebView } from "react-native-webview";

const WebViewScreen = () => {
    const {
        params: { path },
    } = useRoute();

    return <WebView source={{ uri: path }} />;
};

export default WebViewScreen;
