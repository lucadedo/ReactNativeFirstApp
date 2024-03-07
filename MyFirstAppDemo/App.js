// import { StatusBar } from "expo-status-bar";
import React from "react";
import { FunctionalComponent } from "./test";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    (
      <Button
        title="press me"
        style={{ color: "black", width: 100, height: 100 }}
        onPress={FunctionalComponent("hi luca")}
      ></Button>
    ),
    (
      <View
        style={{
          flex: 1,
          backgroundColor: "green",
          width: 120,
          height: 120,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
    )
  );
}

function FunctionalComponent1(params) {
  return (
    console.log(params),
    (
      <View
        style={{
          backgroundColor: "red",
          width: 60,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
    )
  );
}
