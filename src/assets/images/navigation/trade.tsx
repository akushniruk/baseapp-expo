import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { NavigationIconProps } from "./navigationIcons";

export const Trade: FC<NavigationIconProps> = ({ color }) => {
    return (
        <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
            <Path
                d="M20.4291 19.273H0.714844V20.4282H20.4291V19.273Z"
                fill={color}
            />
            <Path
                d="M15.2118 4.58357H11.1496V18.1179H15.2118V4.58357Z"
                fill={color}
            />
            <Path
                d="M20.4291 0.713867H16.3669V18.1179H20.4291V0.713867Z"
                fill={color}
            />
            <Path
                d="M9.99442 8.45326H5.9322V18.1179H9.99442V8.45326Z"
                fill={color}
            />
            <Path
                d="M4.77707 12.323H0.714844V18.1179H4.77707V12.323Z"
                fill={color}
            />
        </Svg>
    );
};
