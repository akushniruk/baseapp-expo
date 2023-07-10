import { Image } from "react-native";
import { P2PIcon } from "../../assets/images/home/p2p";
import { InviteIcon } from "../../assets/images/home/profileadd";
import { ReceiveIcon } from "../../assets/images/home/receive";
import { SendIcon } from "../../assets/images/home/send";
import { Support24Icon } from "../../assets/images/home/support";
import { TradeIcon } from "../../assets/images/home/trade";
import { ConvertIcon } from "../../assets/images/home/convert";

export const SERVICES = [
    {
        id: 0,
        img_key: "deposit",
        title: "Deposit",
        path: "/Deposit",
    },
    {
        id: 1,
        img_key: "send",
        title: "Send",
        path: "/Withdrawal",
    },
    {
        id: 2,
        img_key: "exchange",
        title: "Exchange",
        path: "/MarketsStack",
    },
    {
        id: 4,
        img_key: "p2p",
        title: "P2P",
        path: "/P2P",
    },
    {
        id: 5,
        img_key: "convert",
        title: "Convert",
        path: "/Convert",
    },
    {
        id: 6,
        img_key: "invite",
        title: "Invite",
        path: "/Referral",
    },
    {
        id: 6,
        img_key: "support",
        title: "Support",
        path: "/Support",
    },
];

export const renderServiceImage = (key: string, color: string) => {
    switch (key) {
        case "deposit":
            return <ReceiveIcon color={color} />;
        case "send":
            return <SendIcon color={color} />;
        case "exchange":
            return <TradeIcon color={color} />;
        case "p2p":
            return <P2PIcon color={color} />;
        case "convert":
            return <ConvertIcon color={color} />;
        case "invite":
            return <InviteIcon color={color} />;
        case "support":
            return <Support24Icon color={color} />;
        default:
            return null;
    }
};

export const BANNERS = [
    {
        id: 0,
        img: (
            <Image
                style={{ width: "100%", borderRadius: 2, height: 250 }}
                source={require("../../assets/images/home/banner.png")}
            />
        ),
        path: "https://www.openware.com/opendax",
    },
    {
        id: 1,
        img: (
            <Image
                style={{ width: "100%", borderRadius: 2, height: 250 }}
                source={require("../../assets/images/home/bannerCommunity.png")}
            />
        ),
        path: "https://www.openware.com/opendax",
    },
];
