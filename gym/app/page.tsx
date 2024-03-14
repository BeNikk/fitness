"use client";
import About from "@/components/About";
import MainPage from "@/components/mainPage";

export default function Home() {
  return (
    <main>
      <MainPage />
      <section id="About">
        <About />
      </section>
    </main>
  );
}
