import { motion } from "framer-motion";
import { weddingConfig } from "../../config/weddingConfig";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#090909]">

      {/* Background Glow */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-6"
      >
        <p className="tracking-[8px] uppercase text-[#D4AF37] text-sm">
          Together With Their Families
        </p>

        <h1 className="mt-8 text-7xl md:text-8xl text-[#D4AF37]">
          {weddingConfig.groom}
        </h1>

        <p className="text-5xl text-white my-5">&</p>

        <h1 className="text-7xl md:text-8xl text-[#D4AF37]">
          {weddingConfig.bride}
        </h1>

        <p className="mt-10 text-gray-400">
          Request the honour of your presence
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 rounded-full border border-[#D4AF37] px-8 py-4 text-[#D4AF37]"
        >
          Scroll Down
        </motion.button>
      </motion.div>
    </section>
  );
}