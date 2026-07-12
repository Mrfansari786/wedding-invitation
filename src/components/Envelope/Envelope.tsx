import { motion } from "framer-motion";
import EnvelopeBackground from "./EnvelopeBackground";
import EnvelopeLetter from "./EnvelopeLetter";

type Props = {
  onOpen?: () => void;
};

export default function Envelope({ onOpen }: Props) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090909]">

      <EnvelopeBackground />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 cursor-pointer"
        onClick={onOpen}
      >
        {/* Shadow */}
        <div className="absolute left-1/2 top-52 h-8 w-72 -translate-x-1/2 rounded-full bg-black/40 blur-xl" />

        {/* Envelope */}
        <div className="relative h-56 w-80 rounded-lg border border-[#D4AF37]/40 bg-[#111111] shadow-[0_0_60px_rgba(212,175,55,0.18)]">

          {/* Flap */}
          <div
            className="absolute left-0 top-0 h-28 w-full"
            style={{
              clipPath: "polygon(0 0,100% 0,50% 100%)",
              background: "#D4AF37",
            }}
          />

          {/* Letter */}
          <EnvelopeLetter />

          {/* Bottom */}
          <div
            className="absolute bottom-0 h-28 w-full"
            style={{
              clipPath: "polygon(0 100%,50% 0,100% 100%)",
              background: "#171717",
            }}
          />
        </div>

        <p className="mt-10 text-center text-lg tracking-[8px] uppercase text-[#D4AF37]">
          Tap To Open
        </p>
      </motion.div>
    </div>
  );
}