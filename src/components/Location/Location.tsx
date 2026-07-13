import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { weddingConfig } from "../../config/weddingConfig";

export default function Location() {
  const venue = weddingConfig.venues[0];

  const details = [
    {
      icon: "📅",
      label: "Date",
      value: venue.date,
    },
    {
      icon: "🕐",
      label: "Time",
      value: venue.time,
    },
    {
      icon: "📍",
      label: "Venue",
      value: venue.venue,
      sub: venue.address,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#090909] py-16 md:py-20 px-6">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl"
      >

        {/* Heading */}

        <div className="text-center">

          <div className="mb-4 text-3xl text-[#D4AF37]">
            ❁
          </div>

          <p className="text-xs uppercase tracking-[7px] text-[#D4AF37]/80">
            Venue Details
          </p>

          <h2 className="hero-title mt-4 text-4xl md:text-6xl text-[#D4AF37]">
            Dawat-e-Walima
          </h2>

          <div className="mx-auto mt-7 h-px w-36 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-gray-400">
            Join us for an evening filled with
            love, laughter, delicious dinner
            and countless duas.
          </p>

        </div>

        {/* Card */}

        <motion.div
          whileHover={{
            y: -4,
          }}
          className="mt-14 rounded-[32px] border border-[#D4AF37]/20 bg-white/[0.03] p-6 md:p-10 backdrop-blur-xl shadow-[0_0_60px_rgba(212,175,55,.08)]"
        >

          {/* Details */}

          <div className="space-y-5">

            {details.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  x: 5,
                }}
                className="flex items-start gap-4 rounded-2xl border border-[#D4AF37]/10 bg-[#D4AF37]/5 p-4"
              >

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-2xl">

                  {item.icon}

                </div>

                <div>

                  <p className="text-[11px] uppercase tracking-[4px] text-[#D4AF37]/70">
                    {item.label}
                  </p>

                  <p className="mt-1 text-xl font-semibold text-white">
                    {item.value}
                  </p>

                  {"sub" in item && item.sub && (
                    <p className="mt-1 text-gray-400">
                      {item.sub}
                    </p>
                  )}

                </div>

              </motion.div>

            ))}

          </div>

          {/* Divider */}

          <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          {/* Map Heading */}

          <p className="mt-8 text-center text-xs uppercase tracking-[6px] text-[#D4AF37]/80">
            Venue Map
          </p>

          {/* Google Map */}

          <motion.div
            whileHover={{
              scale: 1.01,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
            }}
            className="relative mt-5 overflow-hidden rounded-[28px] border border-[#D4AF37]/20 shadow-[0_0_60px_rgba(212,175,55,.18)]"
          >

            <iframe
              src={venue.embedMap}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

  {/* Live Badge */}
  <div className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-md shadow-lg">
    📍 Live Location
  </div>

            {/* Golden Overlay */}

            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-t from-[#D4AF37]/10 via-transparent to-white/5" />

          </motion.div>

          {/* Navigation Hint */}

          <motion.p
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="mt-5 text-center text-xs uppercase tracking-[4px] text-[#D4AF37]"
          >
            📍 Tap below to start navigation
          </motion.p>

          {/* Button */}

          <a
            href={venue.map}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-3 rounded-full bg-[#D4AF37] py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(212,175,55,.35)] active:scale-95"
          >

            <FaLocationDot />

            Open in Google Maps

          </a>

          {/* Bottom Divider */}

          <div className="mt-10 flex items-center justify-center gap-3">

            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

            <span className="text-lg text-[#D4AF37]">
              ❁
            </span>

            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

          </div>

          {/* Quote */}

          <p className="mt-8 text-center italic leading-8 text-gray-400">
            We can't wait to welcome you
            <br />
            and celebrate this beautiful occasion together.
          </p>

        </motion.div>

      </motion.div>

    </section>
  );
}