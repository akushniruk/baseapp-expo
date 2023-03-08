import React, { FC } from "react";
import { Home } from "./home";
import { Markets } from "./markets";
import { Trade } from "./trade";
import { Orders } from "./orders";
import { Wallet } from "./wallet";
import { lightPalette } from "../../../src/shared/styles/theme/light";

export interface NavigationIconProps {
    color?: string;
}

interface Props {
    name: string;
    focused: boolean;
}

export const NavigationIcons: FC<Props> = ({ name, focused }) => {
    switch (name) {
        case "HomeStack":
            return (
                <Home
                    color={
                        focused
                            ? lightPalette.Navbar["navbar-control-bg-color"][80]
                                  .value
                            : lightPalette.Controls["neutral-control-color"][70]
                                  .value
                    }
                />
            );
        case "MarketsStack":
            return (
                <Markets
                    color={
                        focused
                            ? lightPalette.Navbar["navbar-control-bg-color"][80]
                                  .value
                            : lightPalette.Controls["neutral-control-color"][70]
                                  .value
                    }
                />
            );
        case "TradesStack":
            return (
                <Trade
                    color={
                        focused
                            ? lightPalette.Navbar["navbar-control-bg-color"][80]
                                  .value
                            : lightPalette.Controls["neutral-control-color"][80]
                                  .value
                    }
                />
            );
        case "OrdersStack":
            return (
                <Orders
                    color={
                        focused
                            ? lightPalette.Navbar["navbar-control-bg-color"][80]
                                  .value
                            : lightPalette.Controls["neutral-control-color"][80]
                                  .value
                    }
                />
            );
        case "WalletsStack":
            return (
                <Wallet
                    color={
                        focused
                            ? lightPalette.Navbar["navbar-control-bg-color"][80]
                                  .value
                            : lightPalette.Controls["neutral-control-color"][80]
                                  .value
                    }
                />
            );
        default:
            return null;
    }
};
