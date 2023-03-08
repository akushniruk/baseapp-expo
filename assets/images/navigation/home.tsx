import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { NavigationIconProps } from "./navigationIcons";

export const Home: FC<NavigationIconProps> = ({ color }) => {
    return (
        <Svg width="24" height="22" viewBox="0 0 24 22" fill="none">
            <Path
                d="M9.35294 22V14.2353H14.5294V22H21V11.6471H24.8824L11.9412 0L-1 11.6471H2.88235V22H9.35294Z"
                fill={color}
            />
        </Svg>
    );
};
