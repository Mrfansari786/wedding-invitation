import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#090909] px-6">

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [0.98, 1.02, 0.98],
          y: [-8, 0, -8],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
        }}
        className="
          hero-title
          max-w-4xl
          -translate-y-6
          text-center
          text-[2rem]
          leading-[2.4]
          text-[#D4AF37]
          sm:text-5xl
          md:text-6xl
        "
      >
        بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
      </motion.h1>

    </div>
  );
}