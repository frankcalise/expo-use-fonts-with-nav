import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
import { useColorScheme, View, Text } from "react-native";

import { SpaceGrotesk_600SemiBold } from "@expo-google-fonts/space-grotesk";
import { useFonts } from "expo-font";

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();

  let [fontsLoaded, fontError] = useFonts({
    spaceGroteskBold: SpaceGrotesk_600SemiBold,
  });

  console.log({ fontError });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>{fontError?.message || ""}</Text>
      </View>
    );
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
