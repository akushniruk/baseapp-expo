import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

export interface IconProps {
    color?: string;
    width?: number;
}

export const HistoryIcon: FC<IconProps> = ({ color, width }: IconProps) => {
    return (
        <Svg style={{ width }} width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M20.5 11.3V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.96 4.96 21.59 6.73 19.69L6.74 19.68C7.56 18.81 8.81 18.88 9.52 19.83L10.53 21.18"
                stroke={color || "#090909"}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <Path
                d="M22 22L21 21M8 7H16M9 11H15M18.2 21.4C19.0487 21.4 19.8626 21.0629 20.4627 20.4627C21.0629 19.8626 21.4 19.0487 21.4 18.2C21.4 17.3513 21.0629 16.5374 20.4627 15.9373C19.8626 15.3371 19.0487 15 18.2 15C17.3513 15 16.5374 15.3371 15.9373 15.9373C15.3371 16.5374 15 17.3513 15 18.2C15 19.0487 15.3371 19.8626 15.9373 20.4627C16.5374 21.0629 17.3513 21.4 18.2 21.4Z"
                stroke={color || "#090909"}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};
