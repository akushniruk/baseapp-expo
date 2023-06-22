import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { NavigationIconProps } from "./navigationIcons";

export const PlusIcon: FC<NavigationIconProps> = ({ color }) => {
    return (
        <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <Path
                d="M7 11H15M11 15V7M11 21C16.5 21 21 16.5 21 11C21 5.5 16.5 1 11 1C5.5 1 1 5.5 1 11C1 16.5 5.5 21 11 21Z"
                stroke={color || "#090909"}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};
