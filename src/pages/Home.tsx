import Hero from "../components/Hero/Hero";
import Countdown from "../components/Countdown";
import Events from "../components/Events";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <Countdown />
      {/* <Events /> */}
      <Timeline />
    </>
  );
}