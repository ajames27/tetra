import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Key } from "./key";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const Keys = ({ state, player, modifyGameState }) => {
    return (
        <View
            style={[
                {
                    width: "96%",
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                },
                player === "topPlayer" ? { transform: [{ rotate: "180deg" }] } : null,
            ]}
        >
            <Key
                color="blue"
                isForged={state[player].blueKeyForged}
                modifyGameState={modifyGameState}
                player={player}
            />
            <Key
                color="yellow"
                isForged={state[player].yellowKeyForged}
                modifyGameState={modifyGameState}
                player={player}
            />
            <Key color="red" isForged={state[player].redKeyForged} modifyGameState={modifyGameState} player={player} />
        </View>
    );
};
