import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const { height, width } = Dimensions.get("window");

export const ChainsCounter = ({ gameState, player, modifyGameState }) => {
    return (
        <View style={styles.chainsContainer}>
            <TouchableOpacity
                style={styles.leftChainBtn}
                onPress={() => modifyGameState({ player, action: "DECREMENTCHAINS" })}
            />
            <TouchableOpacity
                style={styles.rightChainBtn}
                onPress={() => modifyGameState({ player, action: "INCREMENTCHAINS" })}
            />
            <View style={styles.chainsLabelContainer}>
                <Text style={styles.chainsLabel}>CHAINS</Text>
            </View>
            <View pointerEvents="none" style={styles.chainsCounterContainer}>
                <Text style={styles.chainsCounter}>{gameState[player].chainsCount}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    chainsContainer: {
        flex: 1,
        flexDirection: "row",
        position: "relative",
    },
    chainsLabelContainer: {
        position: "absolute",
        width: 120,
        height: 30,
        left: "50%",
        marginLeft: -60,
        alignItems: "center",
        justifyContent: "center",
    },
    chainsLabel: {
        fontSize: hp("3%"),
        fontFamily: "open-sans-light",
        color: "white",
    },
    leftChainBtn: {
        flex: 1,
        backgroundColor: "#122438",
        borderBottomLeftRadius: 7,
        borderTopLeftRadius: 7,
    },
    rightChainBtn: {
        flex: 1,
        backgroundColor: "#122438",
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
    },
    chainsCounterContainer: {
        position: "absolute",
        width: 100,
        height: 100,
        left: "50%",
        marginLeft: -50,
        top: "50%",
        marginTop: -39,
        alignItems: "center",
        justifyContent: "center",
    },
    chainsCounter: {
        fontFamily: "open-sans-bold",
        fontSize: height < 700 ? hp("6%") : hp("6%"),
        color: "white",
    },
});
