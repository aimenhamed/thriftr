import Router from "./Router";
import {
  useFonts,
  AzeretMono_400Regular,
  AzeretMono_700Bold,
} from "@expo-google-fonts/azeret-mono";

export default function App() {
  const [loaded] = useFonts({
    AzeretMono_400Regular,
    AzeretMono_700Bold,
  });
  if (!loaded) {
    return null;
  }

  return <Router />;
}
