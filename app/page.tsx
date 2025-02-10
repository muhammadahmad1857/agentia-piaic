// import AnimatedLayout from "@/components/home/AnimatedLayout";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
import Working from "@/components/home/Working";
import TechStack from "@/components/home/TechStack";
import About from "@/components/home/about";

export default function Home() {
  return (
    <main>
      {/* <AnimatedLayout /> */}
      <Hero />
      <About/>
      <Pillars />
      <Working />
      <TechStack />
      <CTA />
    </main>
  );
}
