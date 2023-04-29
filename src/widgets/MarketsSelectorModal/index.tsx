import { MarketsV1 } from "@akushniruk/baseapp-expo-sdk";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import React, { FC, useEffect, useState } from "react";
import { Text, Pressable } from "react-native";
import Modal from "react-native-modal";
import { marketsSelectorModalStyles } from "./marketsSelectorModal.styles";

interface IMarketsSelectorModal {
    baseUnit: string;
    quoteUnit: string;
    marketId: string;
}

export const MarketsSelectorModal: FC<IMarketsSelectorModal> = ({
    baseUnit,
    quoteUnit,
    marketId,
}: IMarketsSelectorModal) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { theme } = useThemeContext();

    const styles = marketsSelectorModalStyles(theme);

    useEffect(() => {
        setIsOpen(false);
    }, [marketId]);

    return (
        <>
            <Pressable onPress={() => setIsOpen(true)}>
                <Text style={styles.title}>{`${baseUnit?.toUpperCase()} / ${quoteUnit?.toUpperCase()}`}</Text>
            </Pressable>
            <Modal
                testID={"marketSelector"}
                isVisible={isOpen}
                animationIn="slideInLeft"
                animationOut="slideOutLeft"
                style={styles.marketSelectorModal}
                onBackdropPress={() => setIsOpen(false)}
            >
                <>
                    <Text style={styles.modalTitle}>Markets</Text>
                    <MarketsV1 />
                </>
            </Modal>
        </>
    );
};
