import { motion } from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";
import { weddingConfig } from "../../config/weddingConfig";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090909] px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#090909] to-black" />

      {/* Golden Glow */}
      <div className="absolute h-[60rem] w-[60rem] rounded-full bg-[#D4AF37]/10 blur-[220px]" />

      {/* Islamic Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#D4AF37 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#D4AF37]"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 6 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl text-center"
      >
        <div className="mt-10 mb-12">
          <p className="hero-title text-2xl md:text-3xl text-[#D4AF37]">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>

          <p className="mt-6 tracking-[8px] uppercase text-[#D4AF37]/80 text-xs md:text-sm">
            Together With Their Families
          </p>
        </div>

        <div className="space-y-24">
          {weddingConfig.couples.map((couple, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.35 }}
            >
              <h1 className="hero-title text-6xl md:text-8xl font-semibold tracking-[6px] text-[#D4AF37] drop-shadow-[0_0_30px_rgba(212,175,55,0.35)]">
                {couple.groom}
              </h1>

              <p className="my-4 text-5xl text-white">&amp;</p>

              <h1 className="hero-title text-6xl md:text-8xl font-semibold tracking-[6px] text-[#D4AF37] drop-shadow-[0_0_30px_rgba(212,175,55,0.35)]">
                {couple.bride}
              </h1>

              {index !== weddingConfig.couples.length - 1 && (
                <div className="my-16 flex items-center justify-center gap-6">
                  <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                  <span className="text-3xl text-[#D4AF37]">❁</span>
                  <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mx-auto mt-20 max-w-3xl text-lg leading-9 text-gray-300"
        >
          With the blessings of Allah (SWT),
          <br />
          we cordially invite you and your family
          <br />
          to celebrate our <span className="text-[#D4AF37]">Nikah</span> &amp;
          <span className="text-[#D4AF37]"> Dawat-e-Walima</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-14 text-lg italic tracking-wide text-[#D4AF37]/60"
        >
          “Two beautiful couples, one unforgettable celebration.”
        </motion.p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-[#D4AF37]">
          <p className="mb-3 text-xs tracking-[8px] text-[#D4AF37]/60">
            SCROLL
          </p>
          <FaAnglesDown
            size={34}
            className="drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
