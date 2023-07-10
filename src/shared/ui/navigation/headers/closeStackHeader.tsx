import { FC, useCallback } from "react";
import { Pressable, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export const CloseStackHeader: FC<any> = ({ navigation }) => {
    const route = useRoute();

    const returnHome = useCallback(() => {
        switch (route.name) {
            case "Deposit":
            case "History":
            case "Withdrawal":
            case "Orders":
            case "Beneficiaries":
            case "ConfirmBeneficiary":
            case "CreateCryptoBeneficiary":
                navigation.goBack();
                break;
            default:
                navigation.navigate("Home");
                break;
        }
    }, [navigation]);

    return (
        <Pressable onPress={returnHome} style={{ paddingLeft: 12, paddingVertical: 12 }}>
            <Image style={styles.cancel} source={require("../../../../assets/images/system/cancel.png")} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    cancel: {
        height: 24,
        width: 24,
    },
});
