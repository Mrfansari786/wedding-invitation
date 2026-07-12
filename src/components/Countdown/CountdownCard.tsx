import { motion } from "framer-motion";

type Props = {
  value: number;
  label: string;
};

export default function CountdownCard({
  value,
  label,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="group relative overflow-hidden rounded-[28px] border border-[#D4AF37]/20 bg-white/[0.04] px-8 py-8 text-center backdrop-blur-xl shadow-[0_0_35px_rgba(212,175,55,.08)]"
    >
      {/* Golden Glow */}

      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      </div>

      {/* Number */}

      <motion.h2
        key={value}
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="hero-title text-5xl font-bold text-[#D4AF37] md:text-6xl"
      >
        {String(value).padStart(2, "0")}
      </motion.h2>

      {/* Divider */}

      <div className="mx-auto my-5 h-px w-14 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Label */}

      <p className="uppercase tracking-[5px] text-xs text-gray-400">
        {label}
      </p>
    </motion.div>
  );
}