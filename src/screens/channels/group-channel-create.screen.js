import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createGroupChannelCreateFragment } from "@sendbird/uikit-react-native";

const GroupChannelCreateFragment = createGroupChannelCreateFragment();

export const GroupChannelCreateScreen = () => {
  const navigation = useNavigation();

  return (
    <GroupChannelCreateFragment
      onCreateChannel={(channel) => {
        navigation.replace("GroupChannel", { channelUrl: channel.url });
      }}
      onPressHeaderLeft={() => navigation.goBack()}
    />
  );
};
