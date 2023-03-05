import React from "react";
import { View, Text } from "react-native";
import { Link } from "@react-navigation/native";

const HomeScreen = () => {
    return (
        <View>
            <Text>Welcome to App</Text>
            <Link to={{ screen: "Login" }}>
                <Text>Login</Text>
            </Link>
            <Link to={{ screen: "Register" }}>
                <Text>Register</Text>
            </Link>
        </View>
    );
};

export default HomeScreen;
