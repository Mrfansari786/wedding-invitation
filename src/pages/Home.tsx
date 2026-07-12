import Hero from "../components/Hero/Hero";
import ScratchCard from "../components/ScratchCard";
import Countdown from "../components/Countdown";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import RSVP from "../components/RSVP";
import Footer from "../components/Footer/Footer";
import Music from "../components/Music/Music";

export default function Home() {
  return (
    <>
      <Hero />
      <ScratchCard />
      <Countdown />
      <Timeline />
      <Gallery />
      <Location />
      <RSVP />
      <Footer />
      <Music />
    </>
  );
}