import Hero from "../components/Hero/Hero";
import ScratchCard from "../components/ScratchCard";
import Countdown from "../components/Countdown";
import Timeline from "../components/Timeline";
// import Gallery from "../components/Gallery";
import Location from "../components/Location";
import RSVP from "../components/RSVP";
import Footer from "../components/Footer/Footer";
import Music from "../components/Music/Music";
import DuaSection from "../components/DuaSection";

export default function Home() {
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
      <Music />
    </>
  );
}