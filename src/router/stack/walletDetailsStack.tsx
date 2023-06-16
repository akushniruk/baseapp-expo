import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { stackHeaderOptions } from "../options";

import WalletDetailsScreen from "../../screens/wallets/walletDetails";
import DepositScreen from "../../screens/wallets/deposit";
import WithdrawalScreen from "../../screens/wallets/withdrawal";
import BeneficiariesScreen from "../../screens/wallets/beneficiaries";
import CreateCryptoBeneficiaryScreen from "../../screens/wallets/createCryptoBeneficiary";
import ConfirmBeneficiaryScreen from "../../screens/wallets/confirmBeneficiary";
import HistoryScreen from "../../screens/history";

import { CryptoIconFromWallet } from "../../shared/ui/navigation/headers/cryptoIconFromWallet";

const Stack = createNativeStackNavigator();

export const walletDetailsStack = () => {
    return (
        <>
            <Stack.Screen
                name="WalletDetails"
                component={WalletDetailsScreen}
                options={({ navigation }) =>
                    stackHeaderOptions(navigation, false, false, false, "", <CryptoIconFromWallet />)
                }
            />
            <Stack.Screen
                name="Deposit"
                component={DepositScreen}
                options={({ navigation }) =>
                    stackHeaderOptions(navigation, false, true, true, "", <CryptoIconFromWallet />)
                }
            />
            <Stack.Screen
                name="Withdrawal"
                component={WithdrawalScreen}
                options={({ navigation }) =>
                    stackHeaderOptions(navigation, false, true, true, "", <CryptoIconFromWallet />)
                }
            />
            <Stack.Screen
                name="Beneficiaries"
                component={BeneficiariesScreen}
                options={({ navigation }) =>
                    stackHeaderOptions(navigation, false, false, false, "", <CryptoIconFromWallet />)
                }
            />
            <Stack.Screen
                name="CreateCryptoBeneficiary"
                component={CreateCryptoBeneficiaryScreen}
                options={({ navigation }) =>
                    stackHeaderOptions(navigation, false, true, true, "", <CryptoIconFromWallet />)
                }
            />
            <Stack.Screen
                name="ConfirmBeneficiary"
                component={ConfirmBeneficiaryScreen}
                options={({ navigation }) =>
                    stackHeaderOptions(navigation, false, true, true, "", <CryptoIconFromWallet />)
                }
            />
            <Stack.Screen
                name="History"
                component={HistoryScreen}
                options={({ navigation }) => stackHeaderOptions(navigation, false, true, true, "History")}
            />
        </>
    );
};
