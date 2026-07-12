import { motion } from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";
import { weddingConfig } from "../../config/weddingConfig";
import Petals from "../Petals";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090909] px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#090909] to-black" />

      {/* Golden Glow */}
      <div className="absolute left-1/2 top-1/2 h-[75rem] w-[75rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[260px]" />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#D4AF37 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,.08),transparent_70%)]" />

      <Petals />

      {/* Decorative Corners */}

      <motion.div
        animate={{ rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute left-8 top-8 text-6xl text-[#D4AF37]/30"
      >
        ❀
      </motion.div>

      <motion.div
        animate={{ rotate: [90, 95, 90] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute right-8 top-8 text-6xl text-[#D4AF37]/30"
      >
        ❀
      </motion.div>

      <motion.div
        animate={{ rotate: [-90, -85, -90] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-8 left-8 text-6xl text-[#D4AF37]/30"
      >
        ❀
      </motion.div>

      <motion.div
        animate={{ rotate: [180, 185, 180] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute bottom-8 right-8 text-6xl text-[#D4AF37]/30"
      >
        ❀
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 mx-auto w-full max-w-5xl text-center"
      >

        {/* Heading */}

        <div className="mb-16 mt-20">

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="hero-title text-4xl md:text-5xl"
          >
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
            className="mt-6 text-xs uppercase tracking-[8px] text-[#D4AF37]/80 md:text-sm"
          >
            Together With Their Families
          </motion.p>

        </div>

        {/* Couples */}

        <div className="space-y-16">

          {weddingConfig.couples.map((couple, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .35,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="mx-auto w-full max-w-4xl rounded-[32px] border border-[#D4AF37]/20 bg-white/[0.03] px-8 py-12 shadow-[0_0_90px_rgba(212,175,55,.12)] backdrop-blur-xl"
            >

<p className="mb-2 text-sm uppercase tracking-[5px] text-gray-400">
  Beloved Son of
</p>

<p className="mb-8 text-lg md:text-xl text-[#D4AF37]/90">
  {couple.groomFather}
</p>
              <h1 className="hero-title text-[3rem] sm:text-6xl md:text-8xl font-medium tracking-[2px] sm:tracking-[8px] md:tracking-[14px] transition-all duration-500 md:hover:tracking-[18px] break-words">
                {couple.groom}
              </h1>

              <p className="my-4 text-5xl text-white">&</p>

              <h1 className="hero-title text-[3rem] sm:text-6xl md:text-8xl font-medium tracking-[2px] sm:tracking-[8px] md:tracking-[14px] transition-all duration-500 md:hover:tracking-[18px] break-words">
                {couple.bride}
              </h1>
              <p className="mt-8 text-sm uppercase tracking-[5px] text-gray-400">
  Beloved Daughter of
</p>

<p className="mt-3 text-lg md:text-xl text-[#D4AF37]/90">
  {couple.brideFather}
</p>

              <div className="mt-8 flex justify-center">
                <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              </div>

              {index !== weddingConfig.couples.length - 1 && (

                <div className="my-10 flex items-center justify-center gap-6">

                  <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

                  <motion.span
                    animate={{
                      rotate: [0, 180, 360],
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                    }}
                    className="text-3xl text-[#D4AF37]"
                  >
                    ❁
                  </motion.span>

                  <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

                </div>

              )}

            </motion.div>

          ))}

        </div>
                {/* Invitation */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mx-auto mt-20 max-w-3xl"
        >

          <p className="text-sm uppercase tracking-[6px] text-[#D4AF37]">
            Wedding Invitation
          </p>

          <h2 className="hero-title mt-6 text-4xl md:text-5xl">
            You Are Invited
          </h2>

          <p className="mt-8 text-xl leading-[2.8rem] text-gray-300">
            With the blessings of Allah (SWT),
            <br />
            we cordially invite you and your family
            <br />
            to celebrate our
            <span className="font-medium text-[#D4AF37]"> Nikah </span>
            &
            <span className="font-medium text-[#D4AF37]">
              {" "}Dawat-e-Walima
            </span>.
          </p>

        </motion.div>

        {/* Divider */}

        <div className="mt-16 flex items-center justify-center gap-5">

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <motion.span
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
            className="text-2xl text-[#D4AF37]"
          >
            ✦
          </motion.span>

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        </div>

        {/* Dua */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mx-auto mt-10 max-w-2xl text-lg italic leading-8 text-[#D4AF37]/70"
        >
          "May Allah bless this union with endless love,
          mercy and barakah."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-8 text-gray-400"
        >
          May Allah (SWT) shower His countless blessings
          upon us and unite our hearts forever.
        </motion.p>

      </motion.div>

      {/* Bottom Glow */}

      <div className="absolute bottom-0 left-1/2 h-40 w-[32rem] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      {/* Scroll */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 12, 0],
        }}
        transition={{
          opacity: {
            delay: 2,
            duration: 1,
          },
          y: {
            repeat: Infinity,
            duration: 2,
          },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >

        <div className="flex flex-col items-center text-[#D4AF37]">

          <p className="mb-3 text-xs uppercase tracking-[8px] text-[#D4AF37]/70">
            Explore Invitation
          </p>

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            <FaAnglesDown
              size={34}
              className="drop-shadow-[0_0_12px_rgba(212,175,55,.8)]"
            />
          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}