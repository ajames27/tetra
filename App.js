import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Font } from "expo";
import Main from "./src/containers/main";

export default class App extends React.Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            "open-sans-bold": require("./src/assets/fonts/OpenSans-Bold.ttf"),
            "open-sans-light": require("./src/assets/fonts/OpenSans-Light.ttf"),
        });

        this.setState({ fontLoaded: true });
    }
    render() {
        return this.state.fontLoaded ? (
            <SafeAreaView style={{ flex: 1, backgroundColor: "#122438" }}>
                <Main />
            </SafeAreaView>
        ) : null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#122438",
        alignItems: "center",
        justifyContent: "center",
    },
});
