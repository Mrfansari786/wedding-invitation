import { FaLocationDot } from "react-icons/fa6";
import { weddingConfig } from "../../config/weddingConfig";

export default function Location() {
  return (
    <section className="bg-[#090909] py-28 px-6">

      <h2 className="text-center text-5xl text-[#D4AF37] mb-16">
        Wedding Venue
      </h2>

      <div className="mx-auto max-w-5xl rounded-3xl border border-[#D4AF37]/20 bg-white/5 p-10 backdrop-blur-xl">

        <div className="flex items-center justify-center gap-3">

          <FaLocationDot className="text-[#D4AF37] text-3xl" />

          <h3 className="text-3xl text-[#D4AF37]">
            {weddingConfig.venue}
          </h3>

        </div>

        <p className="mt-6 text-center text-gray-300">
          {weddingConfig.address}
        </p>

        <div className="mt-10 flex justify-center">

          <a
            href={weddingConfig.mapLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#D4AF37] px-8 py-4 text-black font-semibold transition hover:scale-105"
          >
            Open Google Maps
          </a>

        </div>

      </div>

    </section>
  );
}