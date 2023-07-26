import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
// internal
import { SENDBIRD_APP_ID } from "./secrets/secrets";
import { Navigation } from "./src/navigation/app.navigator";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <SendbirdApp
        appId={SENDBIRD_APP_ID}
        userId={"pagar22"}
        breakpoint={true}
      />
    </View>
  );
}
