import { useEffect, useState } from "react";

import CountdownCard from "./CountdownCard";

import { getRemainingTime } from "../../utils/countdown";

import { weddingConfig } from "../../config/weddingConfig";

export default function Countdown() {

  const [time, setTime] = useState(
    getRemainingTime(weddingConfig.weddingDate)
  );

  useEffect(() => {

    const timer = setInterval(() => {

      setTime(
        getRemainingTime(
          weddingConfig.weddingDate
        )
      );

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <section className="bg-[#090909] py-32">

      <h2 className="mb-16 text-center text-5xl text-[#D4AF37]">

        Countdown

      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">

        <CountdownCard
          value={time.days}
          label="Days"
        />

        <CountdownCard
          value={time.hours}
          label="Hours"
        />

        <CountdownCard
          value={time.minutes}
          label="Minutes"
        />

        <CountdownCard
          value={time.seconds}
          label="Seconds"
        />

      </div>

    </section>

  );

}