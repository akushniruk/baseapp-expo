import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { NavigationIconProps } from "./navigationIcons";

export const ArrowRight: FC<NavigationIconProps> = ({ color }) => {
    return (
        <Svg width="9" height="14" viewBox="0 0 9 14" fill="none">
            <Path
                d="M7.19052e-08 12.3555L5.56275 7.00049L5.40054e-07 1.64549L1.71255 0.000485982L9 7.00049L1.71255 14.0005L7.19052e-08 12.3555Z"
                fill={color || "#090909"}
            />
        </Svg>
    );
};
