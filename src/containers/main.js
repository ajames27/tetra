import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { Keys } from "../components/controls/keys";
import { Logo } from "../components/logoComponent/logo";
import Controls from "./controls";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const keyTypeToState = {
    blue: "blueKeyForged",
    yellow: "yellowKeyForged",
    red: "redKeyForged",
};

const initialState = {
    topPlayer: {
        chainsCount: 0,
        aemberCount: 0,
        keyCost: 6,
        blueKeyForged: false,
        yelloKeyForged: false,
        redKeyForged: false,
    },
    bottomPlayer: {
        chainsCount: 0,
        aemberCount: 0,
        keyCost: 6,
        blueKeyForged: false,
        yellowKeyForged: false,
        redKeyForged: false,
    },
};
class Main extends Component {
    state = {
        topPlayer: {
            chainsCount: 0,
            aemberCount: 0,
            keyCost: 6,
            blueKeyForged: false,
            yellowKeyForged: false,
            redKeyForged: false,
        },
        bottomPlayer: {
            chainsCount: 0,
            aemberCount: 0,
            keyCost: 6,
            blueKeyForged: false,
            yellowKeyForged: false,
            redKeyForged: false,
        },
    };

    getOtherPlayer = player => (player === "topPlayer" ? "bottomPlayer" : "topPlayer");
    modifyGameState = ({ player, action, keyType }) => {
        switch (action) {
            // AEMBER
            case "INCREMENTAEMBER":
                this.setState(prevState => ({
                    [player]: { ...prevState[player], aemberCount: prevState[player].aemberCount + 1 },
                }));
                break;
            case "DECREMENTAEMBER":
                this.setState(prevState => ({
                    [player]: {
                        ...prevState[player],
                        aemberCount: prevState[player].aemberCount - 1 < 0 ? 0 : prevState[player].aemberCount - 1,
                    },
                }));
                break;
            case "FORGE":
                this.setState(prevState =>
                    prevState[player].aemberCount - prevState[player].keyCost >= 0 &&
                    !prevState[player][keyTypeToState[keyType]]
                        ? {
                              [player]: {
                                  ...prevState[player],
                                  aemberCount: prevState[player].aemberCount - prevState[player].keyCost,
                                  [keyTypeToState[keyType]]: true,
                              },
                          }
                        : prevState
                );
                break;
            case "UNFORGE":
                this.setState(prevState => ({
                    [player]: {
                        ...prevState[player],
                        [keyTypeToState[keyType]]: false,
                    },
                }));
                break;
            case "STEAL":
                this.setState(prevState => {
                    const otherPlayer = this.getOtherPlayer(player);
                    if (prevState[otherPlayer].aemberCount > 0) {
                        return {
                            [player]: { ...prevState[player], aemberCount: prevState[player].aemberCount + 1 },
                            [otherPlayer]: {
                                ...prevState[otherPlayer],
                                aemberCount: prevState[otherPlayer].aemberCount - 1,
                            },
                        };
                    }
                });
                break;
            // CHAINS
            case "INCREMENTCHAINS":
                this.setState(prevState => ({
                    [player]: { ...prevState[player], chainsCount: prevState[player].chainsCount + 1 },
                }));
                break;
            case "DECREMENTCHAINS":
                this.setState(prevState => ({
                    [player]: {
                        ...prevState[player],
                        chainsCount: prevState[player].chainsCount - 1 < 0 ? 0 : prevState[player].chainsCount - 1,
                    },
                }));
                break;
            // GLOBAL ACTIONS
            case "RESET":
                this.setState(initialState);
                break;
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <Keys player="topPlayer" state={this.state} modifyGameState={this.modifyGameState} />
                <Controls
                    flip={true}
                    modifyGameState={this.modifyGameState}
                    gameState={this.state}
                    player="topPlayer"
                />
                <Logo />
                <Controls modifyGameState={this.modifyGameState} gameState={this.state} player="bottomPlayer" />
                <Keys player="bottomPlayer" state={this.state} modifyGameState={this.modifyGameState} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
});

export default Main;
