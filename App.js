import { initializeApp } from "firebase/app";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SendbirdUIKitContainer } from "@sendbird/uikit-react-native";
// internal
import { SENDBIRD_APP_ID } from "./secrets/secrets";
import { FileService, ClipboardService, MediaService } from "./src/services";
import { Navigation } from "./src/navigation/app.navigator";
import { getMessaging } from "firebase/messaging";

const fireBaseConfigDevelopment = {
  apiKey: "AIzaSyBoPxATRJMVmYLLYkQfmZSRIOSDeVkZxiM",
  authDomain: "development-326115.firebaseapp.com",
  projectId: "development-326115",
  storageBucket: "development-326115.appspot.com",
  messagingSenderId: "1041408332003",
  appId: "1:1041408332003:web:99f959702b1880af9f35d6",
  measurementId: "G-J9RNLX71TV",
};
export const firebaseApp = initializeApp(fireBaseConfigDevelopment);

export default function App() {
  return (
    <SendbirdUIKitContainer
      appId={SENDBIRD_APP_ID}
      chatOptions={{ localCacheStorage: AsyncStorage }}
      platformServices={{
        file: FileService,
        notification: getMessaging(firebaseApp),
        clipboard: ClipboardService,
        media: MediaService,
      }}
    >
      <Navigation />
      <StatusBar />
    </SendbirdUIKitContainer>
  );
}
