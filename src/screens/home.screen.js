import React from "react";
import { Pressable, Text, View } from "react-native";

export const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Pressable
        style={{ padding: 20, backgroundColor: "#fbd5ea", borderRadius: 20 }}
      >
        <Text style={{ fontSize: 20 }}>Home</Text>
      </Pressable>
    </View>
  );
};
