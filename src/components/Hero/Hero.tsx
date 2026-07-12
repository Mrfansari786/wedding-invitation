import { motion } from "framer-motion";
import { FaAnglesDown, FaLocationDot } from "react-icons/fa6";
import { weddingConfig } from "../../config/weddingConfig";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090909] px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#090909] to-black" />

      {/* Glow */}
      <div className="absolute h-[44rem] w-[44rem] rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl text-center"
      >
        {/* Heading */}

        <p className="tracking-[8px] uppercase text-[#D4AF37] text-xs md:text-sm">
          Together With Their Families
        </p>

        {/* Couples */}

        <div className="mt-14 space-y-14">

          {weddingConfig.couples.map((couple, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .3,
              }}
            >
              <h1 className="text-5xl md:text-8xl font-light text-[#D4AF37]">
                {couple.groom}
              </h1>

              <p className="my-4 text-4xl md:text-5xl text-white">&</p>

              <h1 className="text-5xl md:text-8xl font-light text-[#D4AF37]">
                {couple.bride}
              </h1>

              {index !== weddingConfig.couples.length - 1 && (
                <div className="mt-10 text-3xl text-[#D4AF37]">
                  ✦
                </div>
              )}
            </motion.div>

          ))}

        </div>

        {/* Subtitle */}

        <p className="mt-14 text-lg text-gray-400">
          Request the honour of your presence
          <br />
          as we celebrate love, happiness and togetherness.
        </p>

        {/* Date */}

        <div className="mt-10">

          <h2 className="text-3xl font-semibold text-[#D4AF37]">
            {weddingConfig.weddingDate}
          </h2>

          <p className="mt-3 text-lg text-gray-300">
            {weddingConfig.venue}
          </p>

        </div>

        {/* Buttons */}

        <div className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row">

          <button
            className="rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            View Events
          </button>

          <a
            href={weddingConfig.mapLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#D4AF37] px-8 py-4 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            <FaLocationDot />
            View Location
          </a>

        </div>

        {/* Quote */}

        <p className="mt-12 italic text-gray-500">
          “Two beautiful couples, one unforgettable celebration.”
        </p>

      </motion.div>

      {/* Scroll */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#D4AF37]"
      >
        <FaAnglesDown size={28} />
      </motion.div>

    </section>
  );
}