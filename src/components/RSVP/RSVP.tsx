import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhone,
  FaCalendarDays,
  FaUser,
} from "react-icons/fa6";
import { weddingConfig } from "../../config/weddingConfig";

export default function RSVP() {
  return (
    <section className="relative overflow-hidden bg-[#090909] py-28 px-6">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[35rem] w-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-6xl"
      >

        <div className="text-center">

          <p className="tracking-[6px] uppercase text-[#D4AF37]/80 text-sm">
            Contact & RSVP
          </p>

          <h2 className="hero-title mt-4 text-5xl">
            We'd Love To See You
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 leading-8">
            We look forward to celebrating with you.
            <br />
            Your presence will be our greatest honour.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {weddingConfig.contactPersons.map((person, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="rounded-[28px] border border-[#D4AF37]/20 bg-white/[0.03] p-8 text-center backdrop-blur-xl shadow-[0_0_40px_rgba(212,175,55,.08)]"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10">

                <FaUser
                  size={24}
                  className="text-[#D4AF37]"
                />

              </div>

              <h3 className="mt-6 text-2xl text-[#D4AF37]">
                {person.name}
              </h3>

              <p className="mt-2 uppercase tracking-[4px] text-gray-400">
                {person.relation}
              </p>

              <a
                href={`tel:+${person.phone}`}
                className="mt-6 inline-block text-lg text-white hover:text-[#D4AF37]"
              >
                📞 +{person.phone}
              </a>

            </motion.div>

          ))}

        </div>

        {/* Buttons */}

        <div className="mt-16 flex flex-wrap justify-center gap-5">

          <a
            href={`https://wa.me/${weddingConfig.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition hover:scale-105"
          >
            <FaWhatsapp />
            WhatsApp RSVP
          </a>

          <a
            href={`tel:+${weddingConfig.contactPersons[0].phone}`}
            className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37] px-8 py-4 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            <FaPhone />
            Call Now
          </a>

          <a
            href="/calendar/wedding-invitation.ics"
            download
            className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37] px-8 py-4 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            <FaCalendarDays />
            Save The Date
          </a>

        </div>
<div className="mx-auto mt-12 mb-8 h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

<p className="text-center text-sm italic text-gray-400">
  Kindly confirm your gracious presence
  <br />
  at your earliest convenience.
</p>

      </motion.div>

    </section>
  );
}