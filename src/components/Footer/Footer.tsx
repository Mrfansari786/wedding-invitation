import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#090909] py-24">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-60 w-[35rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >

        <div className="mx-auto mb-10 h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        <h2 className="hero-title text-5xl text-[#D4AF37]">
          Thank You
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          Thank you for being a part of our special day.
          <br />
          Your love, prayers and blessings mean the world to us.
        </p>

        <div className="mt-14 space-y-3">

          <p className="text-3xl text-[#D4AF37]">
            Maruf ❤️ Mantasha
          </p>

          <p className="text-3xl text-[#D4AF37]">
            Farhan ❤️ Misbah
          </p>

        </div>

        <p className="mt-12 text-xl italic text-[#D4AF37]/80">
          May Allah bless this union with love,
          mercy and endless barakah.
        </p>

        <div className="mx-auto mt-12 h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        <p className="mt-8 text-sm tracking-[3px] text-gray-500">
          Made with ❤️ for our beloved family & friends
        </p>

      </motion.div>

    </footer>
  );
}