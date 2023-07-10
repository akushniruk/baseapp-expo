import { withAuth, DepositHistory, WithdrawalHistory, TransferHistory, TabPanel } from "@akushniruk/baseapp-expo-sdk";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import React, { useState } from "react";
import { View } from "react-native";
import { historyStyles } from "./history.styles";
import { SceneRendererProps } from "react-native-tab-view";
import { IRoute } from "@akushniruk/baseapp-expo-sdk/src/shared";

const renderScene = (props: SceneRendererProps & { route: any }) => {
    switch (props.route.key) {
        case "deposit":
            return <DepositHistory />;
        case "withdrawal":
            return <WithdrawalHistory />;
        case "transfer":
            return <TransferHistory />;
        default:
            return null;
    }
};

const HistoryScreen = () => {
    const { theme } = useThemeContext();
    const styles = historyStyles(theme);

    const [tabIndex, setTabIndex] = useState<number>(0);
    const [routes] = useState<IRoute[]>([
        { key: "deposit", title: "Deposit" },
        { key: "withdrawal", title: "Withdrawal" },
        { key: "transfer", title: "Transfer" },
    ]);

    return (
        <View style={styles.safeAreaViewContainer}>
            <TabPanel
                currentTabIndex={tabIndex}
                renderScene={(props: SceneRendererProps & { route: any }) => renderScene(props)}
                routes={routes}
                onCurrentTabChange={setTabIndex}
            />
        </View>
    );
};

export default withAuth(HistoryScreen);
