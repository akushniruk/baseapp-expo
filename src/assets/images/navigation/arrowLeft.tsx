import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { NavigationIconProps } from "./navigationIcons";

export const ArrowLeft: FC<NavigationIconProps> = ({ color }) => {
    return (
        <Svg width="9" height="14" viewBox="0 0 9 14" fill="none">
            <Path
                d="M9 1.645L3.43725 7L9 12.355L7.28745 14L6.47695e-07 7L7.28745 -8.45271e-08L9 1.645Z"
                fill={color || "#090909"}
            />
        </Svg>
    );
};
