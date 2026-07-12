import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="h-screen flex items-center justify-center bg-[#090909]">
      <motion.h1
        className="text-6xl text-[#D4AF37]"
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        WeddingVerse
      </motion.h1>
    </div>
  );
}