import React from "react";
import { Text, View } from "react-native";

export const LoginScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>Login in Here!</Text>
    </View>
  );
};
