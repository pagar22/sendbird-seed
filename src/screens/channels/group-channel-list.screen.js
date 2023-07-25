import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createGroupChannelListFragment } from "@sendbird/uikit-react-native";

const GroupChannelListFragment = createGroupChannelListFragment();

export const GroupChannelListScreen = () => {
  const navigation = useNavigation();

  return <GroupChannelListFragment />;
};
