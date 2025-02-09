import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
// import TechStack from "@/components/home/TechStack";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pillars />
      {/* <TechStack /> */}
      <CTA />
    </main>
  );
}
