import {
  createNativeClipboardService,
  createNativeFileService,
  createNativeMediaService,
} from "@sendbird/uikit-react-native";

import Clipboard from "@react-native-clipboard/clipboard";
// import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import { Video } from "expo-av";
import * as DocumentPicker from "expo-document-picker";
import * as FileAccess from "react-native-file-access";
import * as ImagePicker from "react-native-image-picker";
import * as Permissions from "react-native-permissions";
import * as CreateThumbnail from "expo-video-thumbnails";
import * as ImageResizer from "@bam.tech/react-native-image-resizer";

export const ClipboardService = createNativeClipboardService(Clipboard);

export const FileService = createNativeFileService({
  fsModule: FileAccess,
  permissionModule: Permissions,
  imagePickerModule: ImagePicker,
  // mediaLibraryModule: CameraRoll,
  documentPickerModule: DocumentPicker,
});

export const MediaService = createNativeMediaService({
  VideoComponent: Video,
  thumbnailModule: CreateThumbnail,
  imageResizerModule: ImageResizer,
});
