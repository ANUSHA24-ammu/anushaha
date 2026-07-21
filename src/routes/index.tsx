import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About, Services, Skills, Portfolio, Process,
  WhyChoose, Testimonials, FAQ, Contact, Footer,
} from "@/components/portfolio/Sections";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <ClientOnly fallback={null}>
        <Loader />
        <SmoothScroll />
      </ClientOnly>
      <Nav />
      <main className="relative bg-[#050505] text-white">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Portfolio />
        <Process />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
