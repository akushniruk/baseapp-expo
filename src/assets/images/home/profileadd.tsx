import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../system/history";

export const InviteIcon: FC<IconProps> = ({ color, width }: IconProps) => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
                d="M18.5 19.5H14.5M16.5 21.5V17.5M11.99 21.81C10.17 21.81 8.36004 21.35 6.98004 20.43C4.56004 18.81 4.56004 16.17 6.98004 14.56C9.73004 12.72 14.24 12.72 16.99 14.56M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C10.6822 10.831 9.59468 10.3468 8.79767 9.51996C8.00066 8.69308 7.55678 7.58845 7.56004 6.44C7.55846 5.85733 7.67189 5.28008 7.89384 4.74133C8.11579 4.20258 8.44188 3.71294 8.85343 3.30046C9.26497 2.88799 9.75388 2.56079 10.2921 2.33763C10.8304 2.11447 11.4074 1.99974 11.99 2C14.44 2 16.43 3.99 16.43 6.44C16.43 8.84 14.53 10.79 12.16 10.87Z"
                stroke={color || "#090909"}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </Svg>
    );
};