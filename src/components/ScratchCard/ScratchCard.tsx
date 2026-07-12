import { motion } from "framer-motion";
import { useState } from "react";
import ScratchOverlay from "./ScratchOverlay";

export default function ScratchCard() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="bg-[#090909] py-28 px-6">

      <h2 className="text-center text-5xl text-[#D4AF37] mb-14">
        A Special Surprise
      </h2>

      <div className="mx-auto max-w-xl">

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-white/5 backdrop-blur-xl shadow-2xl"
        >

          <div className="p-12 text-center">

            <h3 className="text-4xl text-[#D4AF37]">
              Assalamu Alaikum
            </h3>

            <p className="mt-8 text-lg leading-8 text-gray-300">

              Your presence is the greatest gift
              we could ask for.

              <br /><br />

              We warmly invite you and your family
              to celebrate this joyous occasion.

            </p>

            <p className="mt-10 text-[#D4AF37] text-2xl">
              ❤️
            </p>

          </div>

          {!opened && (
            <div
              onClick={() => setOpened(true)}
              className="absolute inset-0 cursor-pointer"
            >
              <ScratchOverlay />
            </div>
          )}

        </motion.div>

      </div>

    </section>
  );
}