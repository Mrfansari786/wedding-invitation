import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { weddingConfig } from "../../config/weddingConfig";

export default function Location() {
  return (
    <section className="relative overflow-hidden bg-[#090909] py-28 px-6">

      {/* Glow */}

      <div className="absolute left-1/2 top-20 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mb-20 text-center"
      >

        <p className="tracking-[6px] uppercase text-[#D4AF37]/80 text-sm">
          Venue Details
        </p>

        <h2 className="hero-title mt-4 text-5xl">
          Wedding Venues
        </h2>

      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 md:grid-cols-3">

        {weddingConfig.venues.map((venue, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
            }}
            className="rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03] p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(212,175,55,.08)]"
          >

            <div className="text-5xl">
              {venue.icon}
            </div>

            <h3 className="mt-5 text-3xl text-[#D4AF37]">
              {venue.title}
            </h3>

            <p className="mt-2 text-gray-400">
              {venue.couple}
            </p>

            <div className="mt-6 space-y-2 text-gray-300">

              <p>📅 {venue.date}</p>

              <p>🕐 {venue.time}</p>

              <p>📍 {venue.venue}</p>

              <p>{venue.address}</p>

            </div>

            <a
              href={venue.map}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#D4AF37] px-5 py-3 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              <FaLocationDot />

              View Location

            </a>

          </motion.div>

        ))}

      </div>

    </section>
  );
}