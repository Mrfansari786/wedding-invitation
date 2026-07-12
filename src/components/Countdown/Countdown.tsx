import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CountdownCard from "./CountdownCard";
import { getRemainingTime } from "../../utils/countdown";
import { weddingConfig } from "../../config/weddingConfig";

export default function Countdown() {
  const [time, setTime] = useState(
    getRemainingTime(weddingConfig.weddingDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getRemainingTime(weddingConfig.weddingDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#090909] py-32">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-24 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[200px]" />

      {/* Pattern */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#D4AF37 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: .8,
        }}
        className="relative z-10"
      >

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="tracking-[6px] uppercase text-[#D4AF37]/80 text-sm">
            Counting The Moments
          </p>

          <h2 className="hero-title mt-4 text-5xl md:text-6xl text-[#D4AF37]">
            Until Our Dawat-e-Walima
          </h2>

          <p className="mt-5 text-lg text-gray-300">
            {weddingConfig.displayWeddingDate}
          </p>

          <p className="mt-2 text-[#D4AF37]">
            6:00 PM Onwards
          </p>

          <div className="mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        </div>

        {/* Countdown Box */}

        <div className="mx-auto max-w-6xl rounded-[32px] border border-[#D4AF37]/20 bg-white/[0.03] p-10 backdrop-blur-xl shadow-[0_0_60px_rgba(212,175,55,.08)]">

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

            <CountdownCard
              value={time.days}
              label="Days"
            />

            <CountdownCard
              value={time.hours}
              label="Hours"
            />

            <CountdownCard
              value={time.minutes}
              label="Minutes"
            />

            <CountdownCard
              value={time.seconds}
              label="Seconds"
            />

          </div>

        </div>

        {/* Bottom Text */}

        <p className="mx-auto mt-14 max-w-2xl text-center text-lg leading-8 text-gray-400">
          Every passing moment brings us closer to a beautiful
          celebration filled with love, happiness,
          duas and cherished memories.
        </p>

      </motion.div>

    </section>
  );
}