import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import AemberCounter from "../components/controls/aemberCounter";
import { ChainsCounter } from "../components/controls/chainsCounter";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const { height } = Dimensions.get("window");

const Controls = ({ flip, gameState, modifyGameState, player }) => {
    return (
        <View
            style={[
                styles.controlContainer,
                player === "topPlayer" ? styles.topControlContainer : styles.bottomControlContainer,
            ]}
        >
            <View style={styles.leftSubContainer}>
                <View style={styles.chainsContainer}>
                    <ChainsCounter player={player} gameState={gameState} modifyGameState={modifyGameState} />
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.resetBtn} onPress={() => modifyGameState({ action: "RESET" })}>
                        <Image
                            resizeMode="contain"
                            style={styles.btnImage}
                            source={require("../assets/buttonAssets/ResetIcon.png")}
                        />
                    </TouchableOpacity>
                    <View style={styles.menuBtn} />
                </View>
            </View>
            <View style={styles.aemberContainer}>
                <AemberCounter player={player} gameState={gameState} modifyGameState={modifyGameState} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    controlContainer: {
        height: height < 700 ? hp("22%") : height > 900 ? hp("25%") : hp("18%"),
        width: wp("90%"),
        flexDirection: "row",
    },
    topControlContainer: {
        transform: [{ rotate: "180deg" }],
        marginBottom: hp("3%"),
    },
    bottomControlContainer: {
        marginTop: hp("3%"),
    },
    btnContainer: {
        flex: 5,
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    resetBtn: {
        flex: 1,
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 10,
        aspectRatio: 8 / 8,
        marginRight: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    btnImage: {
        height: hp("7%"),
        width: wp("7%"),
    },
    menuBtn: {
        flex: 1,
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 10,
        aspectRatio: 8 / 8,
    },
    aemberContainer: {
        flex: 10,
        marginLeft: 18,
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 7,
        backgroundColor: "#2F3F50",
    },
    leftSubContainer: {
        flex: 6,
        justifyContent: "center",
        flexDirection: "column",
    },
    chainsContainer: {
        flex: 6,
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 7,
        backgroundColor: "#2F3F50",
    },
});

export default Controls;
