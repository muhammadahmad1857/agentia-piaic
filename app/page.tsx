// import AnimatedLayout from "@/components/home/AnimatedLayout";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
import Working from "@/components/home/Working";
import TechStack from "@/components/home/TechStack";

export default function Home() {
  return (
    <main>
      {/* <AnimatedLayout /> */}
      <Hero />
      <Pillars />
      <Working />
      <TechStack />
      <CTA />
    </main>
  );
}
