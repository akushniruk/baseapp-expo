import React, { FC } from "react";
import { CryptoIcon } from "@akushniruk/baseapp-expo-sdk/src/services/wallets/ui/cryptoIcon";
import { Text, View, StyleSheet } from "react-native";
import { useAppSelector } from "@akushniruk/baseapp-expo-sdk/src/shared";
import { RootState } from "@akushniruk/baseapp-expo-sdk/src/shared/providers/redux/model/store";
import { IWallet } from "@akushniruk/baseapp-expo-sdk/src/services/wallets/api/types";

export const CryptoIconFromWallet: FC<any> = () => {
    const wallet: IWallet | null = useAppSelector((state: RootState) => state.wallet.wallet);

    return (
        <View style={styles.container}>
            <CryptoIcon size="sm" code={wallet?.currency?.toLowerCase() || ""} />
            <Text style={styles.code}>{wallet?.currency?.toUpperCase()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    code: {
        marginLeft: 6,
        fontWeight: "700",
    },
});
