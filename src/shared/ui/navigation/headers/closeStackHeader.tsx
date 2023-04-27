import { FC, useCallback } from "react";
import { Pressable, Image, StyleSheet } from "react-native";

export const CloseStackHeader: FC<any> = ({ navigation }) => {
    const returnHome = useCallback(() => {
        navigation.navigate("Home");
    }, [navigation]);

    return (
        <Pressable onPress={returnHome}>
            <Image
                style={styles.cancel}
                source={require("../../../../assets/images/system/cancel.png")}
            />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    cancel: {
        height: 24,
        width: 24,
    },
});
