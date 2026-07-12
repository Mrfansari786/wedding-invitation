import { useState } from "react";
import Envelope from "../components/Envelope";

import HomeScreen from "./HomeScreen";

export default function EnvelopeScreen() {
  const [opened, setOpened] = useState(false);

  if (opened) {
    return <HomeScreen />;
  }

  return <Envelope onOpen={() => setOpened(true)} />;
}