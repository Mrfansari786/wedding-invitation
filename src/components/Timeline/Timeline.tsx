import TimelineItem from "./TimelineItem";
import { weddingConfig } from "../../config/weddingConfig";

export default function Timeline() {
  return (
    <section className="bg-[#090909] py-28">

      <h2 className="mb-16 text-center text-5xl text-[#D4AF37]">
        Wedding Timeline
      </h2>

      <div className="mx-auto max-w-4xl px-6">

        {weddingConfig.events.map((event, index) => (
          <TimelineItem
            key={event.title}
            {...event}
            isLast={index === weddingConfig.events.length - 1}
          />
        ))}

      </div>

    </section>
  );
}