import { useEffect, useState } from "react";

import LoadingScreen from "./screens/LoadingScreen";
import IntroScreen from "./screens/IntroScreen";
import EnvelopeScreen from "./screens/EnvelopeScreen";
import HomeScreen from "./screens/HomeScreen";

type Screen =
  | "loading"
  | "intro"
  | "envelope"
  | "home";

function App() {
  const [screen, setScreen] = useState<Screen>("loading");

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen("intro");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  switch (screen) {
    case "loading":
      return <LoadingScreen />;

    case "intro":
      return (
        <IntroScreen
          onOpen={() => setScreen("envelope")}
        />
      );

    case "envelope":
      return <EnvelopeScreen />;

    case "home":
      return <HomeScreen />;

    default:
      return null;
  }
}

export default App;