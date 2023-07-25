import { initializeApp } from "firebase/app";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SendbirdUIKitContainer } from "@sendbird/uikit-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SENDBIRD_APP_ID } from "./secrets";
// internal
import {
  FileService,
  NotificationService,
  ClipboardService,
  MediaService,
} from "./src/services";
import { Navigation } from "./src/navigation/app.navigator";

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
        // notification: NotificationService(firebaseApp),
        clipboard: ClipboardService,
        media: MediaService,
      }}
    >
      <Navigation />
    </SendbirdUIKitContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
