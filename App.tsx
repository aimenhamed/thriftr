import Router from "./Router";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Azeret: require("./assets/AzeretMono.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return <Router />;
}
