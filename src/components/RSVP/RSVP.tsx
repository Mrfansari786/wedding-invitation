import { FaWhatsapp } from "react-icons/fa6";
import { weddingConfig } from "../../config/weddingConfig";

export default function RSVP() {
  return (
    <section className="bg-[#090909] py-28 px-6">

      <h2 className="text-center text-5xl text-[#D4AF37]">
        RSVP
      </h2>

      <p className="mt-6 text-center text-gray-300">
        We would be delighted to celebrate with you.
      </p>

      <div className="mt-12 flex justify-center">

        <a
          href={`https://wa.me/${weddingConfig.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 text-white transition hover:scale-105"
        >
          <FaWhatsapp />

          Confirm Attendance

        </a>

      </div>

    </section>
  );
}