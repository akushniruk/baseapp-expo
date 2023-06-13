import { FC, useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationIcons } from "../../assets/images/navigation/navigationIcons";
import { HomeStack, MarketsStack, TradesStack, WalletsStack } from "../stack";
import { getPalette } from "../../shared/lib/getPalette";
// TODO: fix import
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

export const AppNavigation: FC = () => {
    const { theme } = useThemeContext();

    const palette = getPalette(theme);

    return (
        <Tab.Navigator
            initialRouteName="Exchange"
            screenOptions={useCallback(
                ({ route }) => ({
                    headerShown: false,
                    tabBarStyle: Platform.OS === "android" && {
                        paddingVertical: 24,
                        height: 54,
                    },
                    tabBarItemStyle: Platform.OS === "android" && {
                        paddingBottom: 10,
                    },
                    tabBarIconStyle: Platform.OS === "android" && {
                        paddingBottom: 14,
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        return <NavigationIcons name={route.name} focused={focused} />;
                    },
                    tabBarActiveTintColor: palette.Navbar["navbar-control-layer-color"][60].value,
                    tabBarInactiveTintColor: palette.Controls["neutral-control-layer-color"][70].value,
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
                name="WalletsStack"
                component={WalletsStack}
                options={{
                    tabBarLabel: "Wallets",
                }}
            />
        </Tab.Navigator>
    );
};
