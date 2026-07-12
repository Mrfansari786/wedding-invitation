import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { weddingConfig } from "../../config/weddingConfig";

export default function Timeline() {
  return (
    <section className="relative overflow-hidden bg-[#090909] py-32">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#D4AF37 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-20 text-center"
      >
        <p className="tracking-[6px] uppercase text-[#D4AF37]/80 text-sm">
          Our Celebration
        </p>

        <h2 className="hero-title mt-4 text-5xl md:text-6xl">
          Wedding Timeline
        </h2>

        <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </motion.div>

      {/* Timeline */}

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Center Line */}

        <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-[#D4AF37]/20 md:block" />

        {weddingConfig.events.map((event, index) => (

          <TimelineItem
            key={index}
            {...event}
            isLast={index === weddingConfig.events.length - 1}
            index={index}
          />

        ))}

      </div>

    </section>
  );
}