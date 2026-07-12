
import { motion } from "framer-motion";

type TimelineItemProps = {
  icon: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  isLast?: boolean;
};

export default function TimelineItem({
  icon,
  title,
  date,
  time,
  venue,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-6">

      {/* Left */}
      <div className="flex flex-col items-center">

        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37] bg-[#111] text-2xl">
          {icon}
        </div>

        {!isLast && (
          <div className="mt-2 h-40 w-[2px] bg-[#D4AF37]/30" />
        )}
      </div>

      {/* Right */}
      <motion.div
        whileHover={{ y: -5 }}
        className="mb-10 flex-1 rounded-3xl border border-[#D4AF37]/20 bg-white/5 p-6 backdrop-blur-xl"
      >
        <h3 className="text-2xl font-semibold text-[#D4AF37]">
          {title}
        </h3>

        <p className="mt-4 text-gray-300">📅 {date}</p>
        <p className="mt-2 text-gray-300">🕒 {time}</p>
        <p className="mt-2 text-gray-300">📍 {venue}</p>
      </motion.div>
    </div>
  );
}