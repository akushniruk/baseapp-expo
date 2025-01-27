import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../system/history";

export const ConvertIcon: FC<IconProps> = ({ color, width }: IconProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25M2 9C2 5.13 5.13 2 9 2L7.95 3.75M22 5.15V8.85C22 11.1 21.1 12 18.85 12H16.15C13.9 12 13 11.1 13 8.85V5.15C13 2.9 13.9 2 16.15 2H18.85C21.1 2 22 2.9 22 5.15ZM11 15.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V15.15C2 12.9 2.9 12 5.15 12H7.85C10.1 12 11 12.9 11 15.15Z"
                stroke={color || "#090909"}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};
