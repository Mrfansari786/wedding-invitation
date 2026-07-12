import { motion } from "framer-motion";
import { weddingConfig } from "../../config/weddingConfig";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#090909]">

      {/* Background Glow */}
      <div className="absolute w-[44rem] h-[44rem] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <p className="tracking-[8px] uppercase text-[#D4AF37] text-sm">
          Together With Their Families
        </p>

        <div className="mt-12 space-y-12">
          {weddingConfig.couples.map((couple, index) => (
            <div key={index}>
              <h1 className="text-6xl md:text-8xl font-light text-[#D4AF37]">
                {couple.groom}
              </h1>

              <p className="my-4 text-5xl text-white">&</p>

              <h1 className="text-6xl md:text-8xl font-light text-[#D4AF37]">
                {couple.bride}
              </h1>

              {index !== weddingConfig.couples.length - 1 && (
                <div className="mt-10 text-3xl text-[#D4AF37]">
                  ✦
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-12 text-lg text-gray-400">
          Request the honour of your presence
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 rounded-full border border-[#D4AF37] px-10 py-4 text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-black"
        >
          Scroll Down
        </motion.button>
      </motion.div>
    </section>
  );
}