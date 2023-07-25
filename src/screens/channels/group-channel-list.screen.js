import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createGroupChannelListFragment } from "@sendbird/uikit-react-native";

const GroupChannelListFragment = createGroupChannelListFragment();

export const GroupChannelListScreen = () => {
  const navigation = useNavigation();

  return (
    <GroupChannelListFragment
      onPressChannel={(channel) => {
        navigation.navigate("GroupChannel", { channelUrl: channel.url });
      }}
      onPressCreateChannel={(channelType) => {
        navigation.navigate("GroupChannelCreate", { channelType });
      }}
    />
  );
};
