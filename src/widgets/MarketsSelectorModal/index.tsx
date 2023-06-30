import { MarketsV1 } from "@akushniruk/baseapp-expo-sdk";
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import React, { FC, useEffect, useState } from "react";
import { Text, Pressable } from "react-native";
import Modal from "react-native-modal";
import { marketsSelectorModalStyles } from "./marketsSelectorModal.styles";
import { useAppSelector } from "@akushniruk/baseapp-expo-sdk/src/shared";
import { RootState } from "@akushniruk/baseapp-expo-sdk/src/shared/providers/redux/model/store";
import { Market } from "@akushniruk/baseapp-expo-sdk/src/services/markets/model/type";
import { SelectIcon } from "../../assets/images/system/selector";

export const MarketsSelectorModal: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { theme } = useThemeContext();

    const styles = marketsSelectorModalStyles(theme);

    const currentMarket: Market | null = useAppSelector((state: RootState) => state.markets.currentMarket);

    useEffect(() => {
        setIsOpen(false);
    }, [currentMarket]);

    return (
        <>
            <Pressable style={styles.selectorContainer} onPress={() => setIsOpen(true)}>
                <Text
                    style={styles.title}
                >{`${currentMarket?.base_unit?.toUpperCase()} / ${currentMarket?.quote_unit?.toUpperCase()}`}</Text>
                <SelectIcon color="#000000" />
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
                    <MarketsV1 />
                </>
            </Modal>
        </>
    );
};
