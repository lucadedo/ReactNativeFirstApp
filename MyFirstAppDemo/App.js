// import { StatusBar } from "expo-status-bar";
import { WelcomeScreen } from "./app/screens/WelcomeScreen.js";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "green",
        width: 120,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          width: 60,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
    </View>
  );
}
