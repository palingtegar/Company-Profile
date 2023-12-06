import OurworkCard from "./components/OurworkCard";
import Testimony from "./components/Testimony";
import Hero from "./components/Hero";
import PhilosophyHome from "./philosophy/components/PhilosophyHome";

export default function Home() {
  return (
    <>
      <Hero />
      <PhilosophyHome />
      <OurworkCard />
      <Testimony />
    </>
  );
}
