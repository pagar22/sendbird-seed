import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home.screen";

const RootStack = createNativeStackNavigator();
export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name={"Home"} component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
