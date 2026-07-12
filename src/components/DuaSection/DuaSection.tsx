import { motion } from "framer-motion";

export default function DuaSection() {
  return (
    <section className="relative overflow-hidden bg-[#090909] py-28">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-5xl rounded-[32px] border border-[#D4AF37]/20 bg-white/[0.03] px-8 py-16 text-center backdrop-blur-xl"
      >
        <p className="hero-title text-4xl text-[#D4AF37]">
          A Prayer For The Couple
        </p>

        <div className="mx-auto my-8 h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        <p
          dir="rtl"
          className="text-4xl leading-[4rem] text-[#D4AF37]"
        >
          اللَّهُمَّ بَارِكْ لَهُمَا وَبَارِكْ عَلَيْهِمَا
          <br />
          وَاجْمَعْ بَيْنَهُمَا فِي خَيْرٍ
        </p>

        <p className="mt-10 text-lg italic text-gray-300">
          Allahumma barik lahuma wa barik 'alayhima
          <br />
          wajma' bainahuma fi khayr.
        </p>

        <p className="mx-auto mt-8 max-w-3xl text-gray-400 leading-8">
          "O Allah, bless them, shower Your blessings upon them,
          and unite them together in goodness."
        </p>
      </motion.div>

    </section>
  );
}