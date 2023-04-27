import { Image } from "react-native";

export const INFO_AURORA = [
    {
        id: "customers",
        name: "Customers",
        amount: "30M+",
    },
    {
        id: "volume",
        name: "30 day volume",
        amount: "+$30M+",
    },
    {
        id: "countries",
        name: "Countries",
        amount: "101",
    },
];

export const PLATFORM_FEATURES = [
    {
        id: "exchange",
        img: (
            <Image
                style={{ height: 100, resizeMode: "contain" }}
                source={require("../../assets/images/home/exchange.png")}
            />
        ),
        title: "Exchange",
        content:
            "Baseapp offers the most liquid order book in the world, allowing users to easily exchange Bitcoin, Ethereum, EOS, Litecoin, Ripple, NEO and many other digital assets with minimal slippage.",
    },
    {
        id: "order_types",
        img: (
            <Image
                style={{ height: 100, resizeMode: "contain" }}
                source={require("../../assets/images/home/order_types.png")}
            />
        ),
        title: "Order types",
        content:
            "Baseapp offers a suite of order types to give traders the tools they need for every scenario. Discover more about our most advanced Algorithmic orders types.",
    },
    {
        id: "security",
        img: (
            <Image
                style={{ height: 100, resizeMode: "contain" }}
                source={require("../../assets/images/home/security.png")}
            />
        ),
        title: "Security",
        content:
            "Security of user information and funds is our first priority. Contact us to learn more about our security features and integrations.",
    },
    {
        id: "api_integration",
        img: (
            <Image
                style={{ height: 100, resizeMode: "contain" }}
                source={require("../../assets/images/home/api_integration.png")}
            />
        ),
        title: "API integration",
        content:
            "Our Websocket feed lets you easily gain access to real-time market data, while our trading API lets you develop secure, programmatic trading bots.",
    },
    {
        id: "customizable_interface",
        img: (
            <Image
                style={{ height: 100, resizeMode: "contain" }}
                source={require("../../assets/images/home/custom_interface.png")}
            />
        ),
        title: "Customizable interface",
        content:
            "Organize your workspace according to your needs: compose your layout, choose between themes, set up notifications and data preferences.",
    },
    {
        id: "community",
        img: (
            <Image
                style={{ height: 100, resizeMode: "contain" }}
                source={require("../../assets/images/home/community.png")}
            />
        ),
        title: "Community",
        content:
            "Join a global community that believes in the power of crypto.",
    },
];

export const LETS_GET_STARTED = [
    {
        id: "1",
        title: "Verify your identity",
        content:
            "Please confirm your identity by undergoing the identity verification procedure to ensure the safety of your account and transactions.",
    },
    {
        id: "2",
        title: "Fund your account",
        content:
            "To begin trading cryptocurrencies, add funds to your account using various payment methods.",
    },
    {
        id: "3",
        title: "Start trading",
        content:
            "You are now ready to start trading! Purchase or sell cryptocurrencies, establish regular purchases for your investments, and explore the many features of Aurora.",
    },
];
