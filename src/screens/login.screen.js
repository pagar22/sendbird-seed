import { useConnection } from "@sendbird/uikit-react-native";
import React from "react";
import { Pressable, Text, View } from "react-native";

export const LoginScreen = ({ navigation }) => {
  const { connect } = useConnection();
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
        onPress={() => connect("USER_ID", { nickname: "Nickname" })}
      >
        <Text style={{ fontSize: 20 }}>Login in!</Text>
      </Pressable>
    </View>
  );
};
