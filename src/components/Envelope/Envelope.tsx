import { motion } from "framer-motion";
import EnvelopeLetter from "./EnvelopeLetter";

type Props = {
  onOpen: () => void;
  opened: boolean;
};

export default function Envelope({ onOpen, opened }: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-[#090909]">

      {/* Golden Flash */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={
          opened
            ? {
                opacity: [0, 0.18, 0],
                scale: [1, 1.4, 1.8],
              }
            : {}
        }
        transition={{
          duration: 0.8,
        }}
        className="absolute h-[600px] w-[600px] rounded-full bg-[#D4AF37]"
      />

      <motion.div
        initial={{
          opacity: 1,
          scale: 1,
        }}
        animate={
          opened
            ? {
                opacity: 0,
                scale: 0.9,
                y: -40,
              }
            : {}
        }
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: opened ? 0.9 : 1.03,
        }}
        whileTap={{
          scale: 0.98,
        }}
        onClick={() => {
          if (!opened) onOpen();
        }}
        className="relative cursor-pointer"
      >

        <div className="relative h-[240px] w-[360px] overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#161616] shadow-[0_0_80px_rgba(212,175,55,.15)]">

          {/* Letter */}

          <motion.div
            animate={
              opened
                ? {
                    y: -150,
                  }
                : {
                    y: 30,
                  }
            }
            transition={{
              duration: 0.8,
            }}
          >
            <EnvelopeLetter />
          </motion.div>

          {/* Flap */}

          <motion.div
            animate={
              opened
                ? {
                    rotateX: -180,
                  }
                : {
                    rotateX: 0,
                  }
            }
            transition={{
              duration: 0.8,
            }}
            style={{
              transformOrigin: "top",
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[#d4af37] to-[#7d6200]"
          />

        </div>

        {/* Text */}

        <motion.p
          animate={
            opened
              ? {
                  opacity: 0,
                }
              : {
                  y: [0, -8, 0],
                }
          }
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-10 text-center tracking-[8px] text-[#D4AF37]"
        >
          TAP TO OPEN
        </motion.p>

      </motion.div>

    </div>
  );
}