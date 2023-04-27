import React, { FC } from "react";
import { Home } from "./home";
import { Markets } from "./markets";
import { Trade } from "./trade";
import { Orders } from "./orders";
import { Wallet } from "./wallet";
import { getPalette } from "../../../shared/lib/getPalette";
// TODO: fix import
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";

export interface NavigationIconProps {
    color?: string;
}

interface Props {
    name: string;
    focused: boolean;
}

export const NavigationIcons: FC<Props> = ({ name, focused }) => {
    const { theme } = useThemeContext();

    const palette = getPalette(theme);

    switch (name) {
        case "HomeStack":
            return (
                <Home
                    color={
                        focused
                            ? palette.Navbar["navbar-control-layer-color"][60]
                                  .value
                            : palette.Controls["neutral-control-color"][70]
                                  .value
                    }
                />
            );
        case "MarketsStack":
            return (
                <Markets
                    color={
                        focused
                            ? palette.Navbar["navbar-control-layer-color"][60]
                                  .value
                            : palette.Controls["neutral-control-color"][70]
                                  .value
                    }
                />
            );
        case "TradesStack":
            return (
                <Trade
                    color={
                        focused
                            ? palette.Navbar["navbar-control-layer-color"][60]
                                  .value
                            : palette.Controls["neutral-control-color"][80]
                                  .value
                    }
                />
            );
        case "OrdersStack":
            return (
                <Orders
                    color={
                        focused
                            ? palette.Navbar["navbar-control-layer-color"][60]
                                  .value
                            : palette.Controls["neutral-control-color"][80]
                                  .value
                    }
                />
            );
        case "WalletsStack":
            return (
                <Wallet
                    color={
                        focused
                            ? palette.Navbar["navbar-control-layer-color"][60]
                                  .value
                            : palette.Controls["neutral-control-color"][80]
                                  .value
                    }
                />
            );
        default:
            return null;
    }
};
