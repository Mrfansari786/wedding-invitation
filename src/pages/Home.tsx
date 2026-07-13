import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

import Hero from "../components/Hero/Hero";
import ScratchCard from "../components/ScratchCard";
import Countdown from "../components/Countdown";
import Timeline from "../components/Timeline";
import Location from "../components/Location";
import RSVP from "../components/RSVP";
import Footer from "../components/Footer/Footer";
import Music from "../components/Music/Music";
import DuaSection from "../components/DuaSection";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const duration = 1800;
    const start = window.scrollY;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeInOut =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, start * (1 - easeInOut));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        if (navigator.vibrate) {
          navigator.vibrate(20);
        }
      }
    }

    requestAnimationFrame(animate);
  };

  return (
    <>
      <Hero />
      <Countdown />
      <Timeline />
      <DuaSection />
      <ScratchCard />
      <Location />
      <RSVP />
      <Footer />
      {/* <Music /> */}

      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-7 right-6 z-50"
          >
            <div className="group relative">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  rotate: -10,
                  y: -3,
                  boxShadow: "0 0 35px rgba(212,175,55,.45)",
                }}
                whileTap={{ scale: 0.92 }}
                onClick={scrollToTop}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37] text-black transition-all duration-300"
              >
                <FaArrowUp size={18} />
              </motion.button>

              {/* Tooltip */}
              <div className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-[#D4AF37]/20 bg-[#111]/95 px-4 py-2 text-xs tracking-[2px] text-[#D4AF37] opacity-0 shadow-[0_0_20px_rgba(212,175,55,.15)] transition-all duration-300 group-hover:opacity-100 md:block">
                Back to Top
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}