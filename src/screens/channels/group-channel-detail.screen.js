import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  createGroupChannelFragment,
  useSendbirdChat,
} from "@sendbird/uikit-react-native";
import { useGroupChannel } from "@sendbird/uikit-chat-hooks";

const GroupChannelFragment = createGroupChannelFragment();

export const GroupChannelScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const { sdk } = useSendbirdChat();
  const { channel } = useGroupChannel(sdk, params.channelUrl);

  return (
    channel && (
      <GroupChannelFragment
        channel={channel}
        onChannelDeleted={() => {
          navigation.navigate("GroupChannelList");
        }}
        onPressHeaderLeft={() => navigation.goBack()}
        onPressHeaderRight={() => {
          navigation.navigate("GroupChannelSettings", {
            channelUrl: params.channelUrl,
          });
        }}
      />
    )
  );
};
