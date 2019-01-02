import React, { Component } from "react";
import { View, Image, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const { height, width } = Dimensions.get("window");

export const Logo = () => (
    <Image
        source={require("../../assets/logoAssets/Logo.png")}
        style={{ height: hp("10%"), width: wp("75%") }}
        resizeMode="center"
    />
);
