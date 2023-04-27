import { FC, useCallback } from "react";
import { Pressable } from "react-native";
import { ArrowLeft } from "../../../../assets/images/navigation/arrowLeft";

export const BackArrowButton: FC<any> = ({ navigation }) => {
    const returnHome = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Pressable style={{ marginLeft: -10 }} onPress={returnHome}>
            <ArrowLeft />
        </Pressable>
    );
};
