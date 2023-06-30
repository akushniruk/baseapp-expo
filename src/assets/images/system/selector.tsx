import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./history";

export const SelectIcon: FC<IconProps> = ({ color, width }: IconProps) => {
    return (
        <Svg width="11" height="8" viewBox="0 0 11 8" fill="none">
            <Path
                d="M1.33608 0.943848L5.50108 5.27043L9.66608 0.943848L10.9455 2.27583L5.50108 7.94385L0.0566406 2.27583L1.33608 0.943848Z"
                fill="#090909"
            />
        </Svg>
    );
};
