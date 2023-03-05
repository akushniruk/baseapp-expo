import { lightPalette } from "../shared/styles/theme/light";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
    authStack,
    HomeStack,
    MarketsStack,
    OrdersStack,
    TradesStack,
    WalletsStack,
} from "./Stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: lightPalette.Background["main-background-color"].value,
    },
    contentStyle: {
        backgroundColor: lightPalette.Background["main-background-color"].value,
    },
};

const AppNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="exchange"
            screenOptions={{ headerShown: false }}
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

export const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="App" component={AppNavigation} />
                {authStack()}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
