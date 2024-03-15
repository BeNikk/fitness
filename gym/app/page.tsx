"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import MainPage from "@/components/mainPage";

export default function Home() {
  return (
    <main>
      <MainPage />
      <section>
        <About />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Testimonials">
        <Testimonials />
      </section>
      <section id="Pricing">
        <Pricing />
      </section>
      <section id="Contact us">
        <Contact />
      </section>
      <div className="w-full h-[500px]"></div>
    </main>
  );
}
