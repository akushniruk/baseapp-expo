import { Image } from "react-native";

export const SERVICES = [
    {
        id: 0,
        img: (
            <Image
                style={{ height: 24, resizeMode: "contain" }}
                source={require("../../assets/images/home/receive.png")}
            />
        ),
        title: "Deposit",
        path: "/Deposit",
    },
    {
        id: 1,
        img: (
            <Image
                style={{ height: 24, resizeMode: "contain" }}
                source={require("../../assets/images/home/send2.png")}
            />
        ),
        title: "Sent",
        path: "/Withdrawal",
    },
    {
        id: 2,
        img: (
            <Image
                style={{ height: 24, resizeMode: "contain" }}
                source={require("../../assets/images/home/trade.png")}
            />
        ),
        title: "Exchange",
        path: "/MarketsStack",
    },
    {
        id: 4,
        img: (
            <Image
                style={{ height: 24, resizeMode: "contain" }}
                source={require("../../assets/images/home/profile2user.png")}
            />
        ),
        title: "P2P",
        path: "/P2P",
    },
    {
        id: 5,
        img: (
            <Image
                style={{ height: 24, resizeMode: "contain" }}
                source={require("../../assets/images/home/recoveryconvert.png")}
            />
        ),
        title: "Convert",
        path: "/Convert",
    },
    {
        id: 6,
        img: (
            <Image
                style={{ height: 24, resizeMode: "contain" }}
                source={require("../../assets/images/home/profileadd.png")}
            />
        ),
        title: "Invite",
        path: "/Referral",
    },
    {
        id: 6,
        img: (
            <Image
                style={{ height: 24, resizeMode: "contain" }}
                source={require("../../assets/images/home/i24support.png")}
            />
        ),
        title: "Support",
        path: "/Support",
    },
];

export const BANNERS = [
    {
        id: 0,
        img: (
            <Image
                style={{ width: "100%", borderRadius: 2, height: 180 }}
                source={require("../../assets/images/home/banner.png")}
            />
        ),
    },
    {
        id: 1,
        img: (
            <Image
                style={{ width: "100%", borderRadius: 2, height: 180 }}
                source={require("../../assets/images/home/bannerCommunity.png")}
            />
        ),
    },
    {
        id: 2,
        img: (
            <Image
                style={{ width: "100%", borderRadius: 2, height: 180 }}
                source={require("../../assets/images/home/bannerBounty.png")}
            />
        ),
    },
];
