import { motion } from "framer-motion";

export default function EnvelopeBackground() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#090909] to-black" />

      {/* Main Glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
        }}
        className="absolute left-1/2 top-1/2 h-[55rem] w-[55rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37] blur-[220px]"
      />

      {/* Secondary Glow */}
      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      {/* Luxury Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#D4AF37 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]" />

      {/* Top Light */}
      <div className="absolute left-1/2 top-0 h-40 w-[26rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      {/* Bottom Light */}
      <div className="absolute bottom-0 left-1/2 h-40 w-[26rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
    </>
  );
}