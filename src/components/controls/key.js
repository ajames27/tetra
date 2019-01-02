import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const styles = StyleSheet.create({
    keyFrame: {
        // backgroundColor: "#000",
        height: wp("30%"),
        width: wp("30%"),
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
});

const sphere = require("../../assets/forgedKeyAssets/Sphere.png");
const tetra = require("../../assets/forgedKeyAssets/Tetrahedron.png");
const cube = require("../../assets/forgedKeyAssets/Cube.png");
const circle = require("../../assets/keyAssets/Circle.png");
const triangle = require("../../assets/keyAssets/Triangle.png");
const square = require("../../assets/keyAssets/Square.png");

const getKey = ({ color, isForged }) => {
    if (isForged) {
        switch (color) {
            case "blue":
                return sphere;
            case "yellow":
                return tetra;
            case "red":
                return cube;
        }
    } else {
        switch (color) {
            case "blue":
                return circle;
            case "yellow":
                return triangle;
            case "red":
                return square;
        }
    }
};
export const Key = ({ color, isForged, modifyGameState, player }) => (
    <TouchableOpacity
        style={styles.keyFrame}
        onPress={() => modifyGameState({ player, action: isForged ? "UNFORGE" : "FORGE", keyType: color })}
    >
        <Image
            source={getKey({ color, isForged })}
            style={{
                height: isForged ? hp("17%") : hp("12%"),
                width: isForged ? wp("32%") : wp("26%"),
            }}
            resizeMode="contain"
        />
    </TouchableOpacity>
);
