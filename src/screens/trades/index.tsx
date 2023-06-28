import { OrderWidget } from "@akushniruk/baseapp-expo-sdk";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TradesScreen = () => {
    return (
        <>
            {/* <ScrollView style={{ height: "100%" }}> */}
            <OrderWidget />
            {/* </ScrollView> */}
        </>
    );
};

export default TradesScreen;
