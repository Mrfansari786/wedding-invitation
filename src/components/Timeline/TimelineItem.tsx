import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

type TimelineItemProps = {
  icon: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  map?: string;
  isLast?: boolean;
  index?: number;
};

export default function TimelineItem({
  icon,
  title,
  date,
  time,
  venue,
  map,
  isLast = false,
  index = 0,
}: TimelineItemProps) {
  const left = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: left ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative mb-16 flex items-center ${
        left ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline Dot */}

      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-[#111] text-3xl shadow-[0_0_30px_rgba(212,175,55,.3)]">
          {icon}
        </div>
      </div>

      {/* Card */}

      <motion.div
        whileHover={{
          scale: 1.03,
          y: -5,
        }}
        className="w-full md:w-[45%] rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03] p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(212,175,55,.08)]"
      >
        <h3 className="text-3xl font-semibold text-[#D4AF37]">
          {title}
        </h3>

        <div className="mt-6 space-y-3 text-gray-300">

          <p>📅 {date}</p>

          <p>🕒 {time}</p>

          <p>📍 {venue}</p>

        </div>

        {map && (
          <a
            href={map}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#D4AF37] px-5 py-2 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
          >
            <FaLocationDot />
            View Location
          </a>
        )}
      </motion.div>

      {!isLast && (
        <div className="hidden md:block absolute left-1/2 top-16 h-24 w-[2px] -translate-x-1/2 bg-[#D4AF37]/30" />
      )}
    </motion.div>
  );
}