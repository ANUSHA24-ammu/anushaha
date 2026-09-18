import { createFileRoute } from "@tanstack/react-router";
import { ClientOnly } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About, Services, Skills, Portfolio,
  WhyChoose, Testimonials, Contact, Footer,
} from "@/components/portfolio/Sections";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Loader } from "@/components/portfolio/Loader";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Anusha H A — App & Full Stack Developer" },
      { name: "description", content: "Anusha H A creates premium mobile apps, websites, Shopify stores, and full-stack products for clients worldwide." },
      { property: "og:title", content: "Anusha H A — App & Full Stack Developer" },
      { property: "og:description", content: "Explore premium mobile apps, websites, Shopify stores, and full-stack client work by Anusha H A." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Anusha H A",
          jobTitle: "App Developer & Full Stack Developer",
          url: "https://anushaha.lovable.app",
          email: "mailto:aanushaha1998@gmail.com",
          telephone: "+91-9663471531",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Anusha H A — Full Stack Development",
          image: "https://anushaha.lovable.app/favicon.ico",
          url: "https://anushaha.lovable.app",
          telephone: "+91-9663471531",
          email: "aanushaha1998@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
          areaServed: "Worldwide",
        }),
      },
    ],
  }),
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
        <WhyChoose />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
