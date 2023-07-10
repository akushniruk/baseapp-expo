import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../system/history";

export const SendIcon: FC<IconProps> = ({ color, width }: IconProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M10.1102 13.65L13.6902 10.06M7.40018 6.32003L15.8902 3.49003C19.7002 2.22003 21.7702 4.30003 20.5102 8.11003L17.6802 16.6C15.7802 22.31 12.6602 22.31 10.7602 16.6L9.92018 14.08L7.40018 13.24C1.69018 11.34 1.69018 8.23003 7.40018 6.32003Z"
                stroke={color || "#090909"}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};
