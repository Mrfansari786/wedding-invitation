import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

type TapToOpenProps = {
  onOpen: () => void;
};

export default function TapToOpen({ onOpen }: TapToOpenProps) {
  return (
    <div className="h-screen bg-[#090909] flex flex-col items-center justify-center text-center px-6">

      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <FaEnvelope size={80} className="text-[#D4AF37]" />
      </motion.div>

      <motion.h1
        className="text-6xl mt-10 text-[#D4AF37]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        You've Received
      </motion.h1>

      <p className="text-gray-400 mt-4 text-xl">
        A Wedding Invitation
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpen}
        className="mt-12 px-10 py-4 rounded-full bg-[#D4AF37] text-black font-semibold"
      >
        Tap To Open
      </motion.button>

    </div>
  );
}