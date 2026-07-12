import { motion } from "framer-motion";
import { useState } from "react";
import EnvelopeBackground from "./EnvelopeBackground";
import EnvelopeLetter from "./EnvelopeLetter";

type Props = {
  onOpen?: () => void;
};

export default function Envelope({ onOpen }: Props) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);

    setTimeout(() => {
      onOpen?.();
    }, 1800);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090909]">

      <EnvelopeBackground />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
        className="relative cursor-pointer"
        onClick={handleOpen}
      >
        {/* Shadow */}

        <motion.div
          animate={{
            scale: [1,1.1,1],
            opacity:[.3,.5,.3]
          }}
          transition={{
            repeat:Infinity,
            duration:2
          }}
          className="absolute top-52 left-1/2 h-8 w-72 -translate-x-1/2 rounded-full bg-black blur-xl"
        />

        <div className="relative w-80 h-56">

          {/* Back */}

          <div className="absolute inset-0 rounded-lg bg-[#1a1a1a]" />

          {/* Letter */}

          <EnvelopeLetter opened={opened}/>

          {/* Flap */}

          <motion.div

            animate={{
              rotateX: opened ? 180 : 0
            }}

            transition={{
              duration:.8
            }}

            style={{
              transformOrigin:"top"
            }}

            className="absolute top-0 left-0 h-28 w-full bg-[#D4AF37]"
          />

          {/* Bottom */}

          <div
            className="absolute bottom-0 h-28 w-full bg-[#222]"
            style={{
              clipPath:"polygon(0 100%,50% 0,100% 100%)"
            }}
          />

        </div>

        <motion.p

          animate={{
            opacity:[.5,1,.5]
          }}

          transition={{
            repeat:Infinity,
            duration:2
          }}

          className="mt-10 text-center tracking-[8px] uppercase text-[#D4AF37]"
        >

          Click Envelope

        </motion.p>

      </motion.div>

    </div>
  );
}