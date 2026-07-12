import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Envelope } from "../components/Envelope";
import HomeScreen from "./HomeScreen";

export default function EnvelopeScreen() {
  const [opened, setOpened] = useState(false);
  const [showHome, setShowHome] = useState(false);

  function handleOpen() {
    if (opened) return;

    setOpened(true);

    // Envelope animation complete hone ke baad Hero show hoga
    setTimeout(() => {
      setShowHome(true);
    }, 1200);
  }

  useEffect(() => {
    document.body.style.overflow = showHome ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showHome]);

  return (
    <AnimatePresence mode="wait">

      {!showHome ? (

        <motion.div
          key="envelope"
          exit={{
            opacity: 0,
            scale: 1.08,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Envelope
            opened={opened}
            onOpen={handleOpen}
          />
        </motion.div>

      ) : (

        <motion.div
          key="home"
          initial={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <HomeScreen />
        </motion.div>

      )}

    </AnimatePresence>
  );
}