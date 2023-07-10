import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../system/history";

export const ReceiveIcon: FC<IconProps> = ({ color, width }: IconProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M5 17.5L19 3.5M5 17.5V7.23M5 17.5H15.27M3.5 22H20.5"
                stroke={color || "#090909"}
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};
