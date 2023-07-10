import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../system/history";

export const Support24Icon: FC<IconProps> = ({ color, width }: IconProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.98001C3 3.34001 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.34001 21 4.98001V15.89C21 17.52 19.66 18.86 18 18.86Z"
                stroke={color || "#090909"}
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M7 9.15998C7 8.22998 7.76 7.46998 8.69 7.46998C9.62 7.46998 10.38 8.22998 10.38 9.15998C10.38 11.04 7.71 11.24 7.12 13.03C7 13.4 7.31 13.77 7.7 13.77H10.38M16.04 13.76V8.04998C16.0405 7.92363 15.9998 7.80055 15.924 7.69947C15.8482 7.59839 15.7414 7.52483 15.62 7.48998C15.4977 7.45544 15.3676 7.46109 15.2488 7.5061C15.1299 7.55111 15.0287 7.6331 14.96 7.73998C14.24 8.89998 13.46 10.22 12.78 11.38C12.67 11.57 12.67 11.82 12.78 12.01C12.89 12.2 13.1 12.32 13.33 12.32H17"
                stroke={color || "#090909"}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};
