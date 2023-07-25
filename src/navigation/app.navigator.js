import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSendbirdChat } from "@sendbird/uikit-react-native";
import { GroupChannelListScreen } from "../screens/channels/group-channel-list.screen";
import { LoginScreen } from "../screens/accounts/login.screen";

const RootStack = createNativeStackNavigator();
export const Navigation = () => {
  const { currentUser } = useSendbirdChat();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!!currentUser ? (
          <RootStack.Screen name={"SignIn"} component={LoginScreen} />
        ) : (
          <>
            <RootStack.Screen
              name={"GroupChannelList"}
              component={GroupChannelListScreen}
            />
            {/* <RootStack.Screen name={'GroupChannelCreate'} component={GroupChannelCreateScreen} /> */}
            {/* <RootStack.Screen name={'GroupChannel'} component={GroupChannelScreen} /> */}
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
