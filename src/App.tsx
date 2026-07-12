import { useEffect, useState } from "react";

import Loader from "./components/Loader/Loader";
import TapToOpen from "./components/TapToOpen/TapToOpen";
import Home from "./pages/Home";

type Screen = "loader" | "tap" | "home";

function App() {
  const [screen, setScreen] = useState<Screen>("loader");

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen("tap");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  switch (screen) {
    case "loader":
      return <Loader />;

    case "tap":
      return (
        <TapToOpen
          onOpen={() => setScreen("home")}
        />
      );

    case "home":
      return <Home />;

    default:
      return null;
  }
}

export default App;