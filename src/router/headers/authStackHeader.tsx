import { FC, useCallback } from "react";
import { Pressable, Image } from "react-native";

export const AuthStackHeader: FC<any> = ({ navigation }) => {
    const returnHome = useCallback(() => {
        navigation.navigate("Home");
    }, [navigation]);

    return (
        <Pressable onPress={returnHome}>
            <Image
                source={require("../../../assets/images/system/cancel.png")}
            />
        </Pressable>
    );
};
