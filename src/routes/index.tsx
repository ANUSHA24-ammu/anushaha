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

const faqs = [
  { q: "What kind of projects do you take on?", a: "Premium websites, e-commerce platforms, Android & iOS apps, and Shopify/WordPress builds for founders and brands who value craft." },
  { q: "How long does a typical project take?", a: "Landing pages: 1–2 weeks. Business sites: 3–5 weeks. Web apps, mobile apps and e-commerce: 6–12 weeks depending on scope." },
  { q: "Do you work with international clients?", a: "Yes — I'm based in Bangalore, India and collaborate with clients globally, adapting to your timezone for meetings and reviews." },
  { q: "Do you offer ongoing maintenance?", a: "Absolutely. Monthly retainers cover updates, monitoring, backups, security patches and iterative improvements." },
  { q: "Can you help with SEO?", a: "Yes. Technical SEO, on-page optimization, Core Web Vitals, and Google Search Console setup are core services." },
  { q: "What's your pricing model?", a: "Fixed-price for well-scoped projects, monthly retainers for ongoing work. Reach out for a tailored quote." },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
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
