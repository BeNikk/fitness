"use client";
import About from "@/components/About";
import Services from "@/components/Services";
import MainPage from "@/components/mainPage";

export default function Home() {
  return (
    <main>
      <MainPage />
      <section id="About">
        <About />
      </section>
      <section id="Services">
        <Services />
      </section>
    </main>
  );
}
