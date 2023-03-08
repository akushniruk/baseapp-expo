import { FC, useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationIcons } from "../../../assets/images/navigation/navigationIcons";
import {
    HomeStack,
    MarketsStack,
    OrdersStack,
    TradesStack,
    WalletsStack,
} from "../stack";
import { lightPalette } from "../../shared/styles/theme/light";

const Tab = createBottomTabNavigator();

export const AppNavigation: FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="exchange"
            screenOptions={useCallback(
                ({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <NavigationIcons
                                name={route.name}
                                focused={focused}
                            />
                        );
                    },
                    tabBarActiveTintColor:
                        lightPalette.Navbar["navbar-control-layer-color"][60]
                            .value,
                    tabBarInactiveTintColor:
                        lightPalette.Controls["neutral-control-layer-color"][70]
                            .value,
                }),
                []
            )}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: "Home",
                }}
            />
            <Tab.Screen
                name="MarketsStack"
                component={MarketsStack}
                options={{
                    tabBarLabel: "Markets",
                }}
            />
            <Tab.Screen
                name="TradesStack"
                component={TradesStack}
                options={{
                    tabBarLabel: "Trades",
                }}
            />
            <Tab.Screen
                name="OrdersStack"
                component={OrdersStack}
                options={{
                    tabBarLabel: "Orders",
                }}
            />
            <Tab.Screen
                name="WalletsStack"
                component={WalletsStack}
                options={{
                    tabBarLabel: "Wallets",
                }}
            />
        </Tab.Navigator>
    );
};
