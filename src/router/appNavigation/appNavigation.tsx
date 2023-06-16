import { FC, useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationIcons } from "../../assets/images/navigation/navigationIcons";
import { HomeStack, MarketsStack, TradesStack, WalletsStack } from "../stack/bottomTabBarStack";
import { getPalette } from "../../shared/lib/getPalette";
// TODO: fix import
import { useThemeContext } from "@akushniruk/baseapp-expo-sdk/src/shared/hooks/useThemeContext";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

export const AppNavigation: FC = () => {
    const { theme } = useThemeContext();

    const palette = getPalette(theme);

    const screenOptionsStyles = (route) => {
        if (Platform.OS === "android") {
            return {
                headerShown: false,
                tabBarStyle: {
                    paddingVertical: 24,
                    height: 54,
                },
                tabBarItemStyle: {
                    paddingBottom: 10,
                },
                tabBarIconStyle: {
                    paddingBottom: 14,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    return <NavigationIcons name={route.name} focused={focused} />;
                },
                tabBarActiveTintColor: palette.Navbar["navbar-control-layer-color"][60].value,
                tabBarInactiveTintColor: palette.Controls["neutral-control-layer-color"][70].value,
            };
        }

        return {
            headerShown: false,
            tabBarStyle: {
                backgroundColor: palette.Background["main-background-color"].value,
            },
            tabBarIcon: ({ focused, color, size }) => {
                return <NavigationIcons name={route.name} focused={focused} />;
            },
            tabBarActiveTintColor: palette.Navbar["navbar-control-layer-color"][60].value,
            tabBarInactiveTintColor: palette.Controls["neutral-control-layer-color"][70].value,
        };
    };

    return (
        <Tab.Navigator
            initialRouteName="Exchange"
            screenOptions={useCallback(({ route }) => screenOptionsStyles(route), [])}
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
