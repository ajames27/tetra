import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const { height, width } = Dimensions.get("window");

const AemberCounter = ({ player, modifyGameState, gameState }) => {
    return (
        <View style={styles.container}>
            {/* Decrement */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => modifyGameState({ player, action: "DECREMENTAEMBER" })}
            />
            {/* Increment */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => modifyGameState({ player, action: "INCREMENTAEMBER" })}
            />
            <View
                pointerEvents="none"
                style={{
                    position: "absolute",
                    width: 150,
                    height: 150,
                    left: "50%",
                    marginLeft: -75,
                    top: "50%",
                    marginTop: -65,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text style={{ color: "white", fontSize: hp("12%"), fontFamily: "open-sans-bold" }}>
                    {gameState[player].aemberCount}
                </Text>
            </View>
            <TouchableOpacity
                style={{
                    height: height < 700 ? hp("6%") : height > 900 ? hp("6%") : hp("4%"),
                    width: wp("25%"),
                    position: "absolute",
                    right: -3,
                    top: -3,
                    borderTopRightRadius: 7,
                    borderColor: "white",
                    borderWidth: 3,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                }}
                onPress={() => modifyGameState({ player, action: "STEAL" })}
            >
                <Text
                    style={{
                        fontSize: height < 700 ? wp("4%") : wp("5%"),
                        color: "white",
                        fontFamily: "open-sans-bold",
                        marginTop: 2,
                    }}
                >
                    STEAL
                </Text>
                <Image style={styles.stealArrow} source={require("../../assets/buttonAssets/StealArrow.png")} />
            </TouchableOpacity>
            <Image style={styles.minusBtn} source={require("../../assets/buttonAssets/Minus.png")} />
            <Image style={styles.plusBtn} source={require("../../assets/buttonAssets/Plus.png")} />
            <Text style={styles.aemberLabel}>ÆMBER</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        position: "relative",
    },
    button: {
        flex: 1,
        backgroundColor: "#122438",
        borderRadius: 7,
    },
    minusBtn: {
        position: "absolute",
        bottom: 19,
        left: 16,
    },
    plusBtn: {
        position: "absolute",
        bottom: 12,
        right: 16,
        height: 18,
        width: 18,
    },
    aemberLabel: {
        fontFamily: "open-sans-light",
        fontSize: wp("6.5%"),
        color: "white",
        position: "absolute",
        top: height < 900 ? hp(".20%") : hp("-.4%"),
        left: wp("3.5%"),
    },
    stealArrow: {
        height: height < 700 ? wp("3.25%") : wp("3%"),
        width: height < 700 ? wp("4.25%") : wp("4%"),
        marginTop: 3,
        marginLeft: 3,
    },
});

export default AemberCounter;
