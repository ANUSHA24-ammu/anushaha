import { motion } from "framer-motion";
import { useState } from "react";
import {
  Smartphone, Apple, Globe, Layers, ShoppingBag, Palette,
  FileCode, Store, CreditCard, Rocket, Building2, Briefcase,
  Search, Gauge, Wrench, ArrowUpRight, Github, ExternalLink,
  Plus, Minus, Mail, Linkedin, MapPin, Phone, MessageCircle,
  ArrowUp, Sparkles, CheckCircle2, Compass, Ruler, PenTool,
  Code2, TestTube2, Cloud, LifeBuoy,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { MagneticButton } from "./MagneticButton";

/* ============================== ABOUT ============================== */
export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32 md:py-40">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              <Sparkles size={12} /> About
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-white md:text-6xl">
              Crafting <span className="text-gradient-gold italic font-normal">elegant</span> digital products with obsession for detail.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <Reveal delay={0.2}>
            <p className="font-sans text-lg leading-relaxed text-white/70">
              I'm <span className="text-[#E8C767] font-medium">Anusha H A</span> — a full-stack developer with a designer's eye and an engineer's discipline. I build scalable, responsive, and high-performance digital experiences that blend cinematic aesthetics with rock-solid engineering.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 font-sans leading-relaxed text-white/60">
              From premium landing pages to production-grade e-commerce platforms, from Android and iOS apps to WordPress and Shopify storefronts — I partner with founders and brands who care about the details most people never notice.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#D4AF37]/15 pt-8">
              {[
                { n: 80, s: "+", l: "Projects Delivered" },
                { n: 50, s: "+", l: "Happy Clients" },
                { n: 5, s: "★", l: "Average Rating" },
              ].map((k) => (
                <div key={k.l}>
                  <div className="font-display text-3xl md:text-5xl font-semibold text-gradient-gold">
                    <Counter to={k.n} suffix={k.s} />
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-white/50">{k.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================== SERVICES ============================== */
const services = [
  { icon: Smartphone, title: "Android App Development", desc: "Native and cross-platform Android apps built for scale and speed." },
  { icon: Apple, title: "iOS App Development", desc: "Refined, App Store–ready iOS experiences with premium polish." },
  { icon: Globe, title: "Website Development", desc: "Marketing sites engineered for conversion and performance." },
  { icon: Layers, title: "Web Applications", desc: "Complex SPAs and dashboards with robust state and auth." },
  { icon: ShoppingBag, title: "Shopify Development", desc: "Bespoke Shopify themes, apps, and headless storefronts." },
  { icon: Palette, title: "Shopify Customization", desc: "Theme surgery, checkout tweaks, and merchandising flow work." },
  { icon: FileCode, title: "WordPress Development", desc: "Custom themes, ACF-powered blocks, and Gutenberg patterns." },
  { icon: Store, title: "WooCommerce", desc: "Full-stack WooCommerce builds with payments and shipping." },
  { icon: CreditCard, title: "E-commerce Development", desc: "End-to-end commerce platforms tuned for growth." },
  { icon: Rocket, title: "Landing Pages", desc: "High-converting one-pagers for launches and campaigns." },
  { icon: Building2, title: "Business Websites", desc: "Corporate presence sites built with brand and credibility." },
  { icon: Briefcase, title: "Portfolio Websites", desc: "Award-worthy portfolios for creatives and studios." },
  { icon: Search, title: "SEO Optimization", desc: "Technical + on-page SEO that ships measurable wins." },
  { icon: Gauge, title: "Speed Optimization", desc: "Core Web Vitals, LCP, INP and CLS — dialed in." },
  { icon: Wrench, title: "Maintenance & Support", desc: "Long-term partnership: updates, monitoring, iterations." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                <Sparkles size={12} /> Services
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
                A full studio, <span className="text-gradient-gold italic font-normal">in one person.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-white/60">Fifteen premium capabilities spanning design, engineering and growth — delivered with cinematic craft.</p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, desc, index }: { icon: typeof Smartphone; title: string; desc: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      className="group relative overflow-hidden bg-[#0a0a0a] p-8 transition-colors duration-500 hover:bg-[#0d0b06]"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4AF37]/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
      <div className="relative flex items-start justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/15 to-transparent text-[#E8C767] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon size={22} strokeWidth={1.4} />
        </div>
        <ArrowUpRight className="text-white/20 transition-all duration-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
      </div>
      <h3 className="relative mt-8 font-display text-xl font-medium text-white">{title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-white/55">{desc}</p>
      <div className="relative mt-8 h-px w-full overflow-hidden bg-white/5">
        <div className="h-full w-0 bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-700 group-hover:w-full" />
      </div>
    </motion.div>
  );
}

/* ============================== SKILLS ============================== */
const skillGroups = [
  { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Firebase", "Supabase"] },
  { label: "CMS", items: ["WordPress", "WooCommerce", "Shopify"] },
  { label: "Tools", items: ["Git", "GitHub", "Figma", "VS Code", "Vercel", "Netlify"] },
  { label: "SEO", items: ["Technical SEO", "On-Page SEO", "Core Web Vitals", "Google Analytics", "Google Search Console"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              <Sparkles size={12} /> Skills
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
              A refined <span className="text-gradient-gold italic font-normal">technology stack.</span>
            </h2>
          </Reveal>
        </div>
        <div className="space-y-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.06}>
              <div className="glass rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-[#D4AF37]/40">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr] md:items-center">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-gold-pulse" />
                    <div className="font-display text-xl font-medium text-white">{g.label}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white/80 transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 hover:text-[#E8C767]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== PORTFOLIO ============================== */
const categories = ["All", "Websites", "Android Apps", "iOS Apps", "Shopify", "WordPress", "E-commerce"] as const;

const projects = [
  { title: "Aurum Atelier", cat: "Shopify", desc: "Headless Shopify storefront for a luxury jewelry maison with editorial-grade product storytelling.", tech: ["Shopify", "Hydrogen", "Tailwind", "GSAP"], img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1200&q=80" },
  { title: "Solace Wellness", cat: "Websites", desc: "Cinematic marketing site for a premium wellness brand with parallax storytelling.", tech: ["React", "Framer Motion", "Three.js"], img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80" },
  { title: "Vault Banking", cat: "iOS Apps", desc: "Refined iOS banking experience with biometric auth and glass UI.", tech: ["Swift", "SwiftUI", "Firebase"], img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=80" },
  { title: "Trail Runner Pro", cat: "Android Apps", desc: "Native Android fitness tracker with offline maps and real-time telemetry.", tech: ["Kotlin", "Jetpack", "Firebase"], img: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?w=1200&q=80" },
  { title: "Maison Noir", cat: "E-commerce", desc: "End-to-end commerce platform with headless CMS and custom checkout.", tech: ["Next.js", "Stripe", "Sanity"], img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80" },
  { title: "Editorial Weekly", cat: "WordPress", desc: "Custom Gutenberg blocks and ACF-driven long-form editorial platform.", tech: ["WordPress", "ACF", "PHP"], img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80" },
];

export function Portfolio() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="portfolio" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                <Sparkles size={12} /> Selected Work
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
                Portfolio of <span className="text-gradient-gold italic font-normal">craft.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-all ${
                    active === c
                      ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                      : "border-white/10 text-white/60 hover:border-[#D4AF37]/50 hover:text-[#E8C767]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, index }: { p: (typeof projects)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/15 bg-[#0a0a0a]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        <div className="absolute left-6 top-6">
          <span className="rounded-full border border-[#D4AF37]/40 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#E8C767] backdrop-blur">
            {p.cat}
          </span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-display text-2xl font-medium text-white md:text-3xl">{p.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{p.desc}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/60">{t}</span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/5 pt-6">
          <a href="#" className="inline-flex items-center gap-1.5 rounded-full bg-[#D4AF37] px-4 py-2 text-xs font-medium text-black transition-transform hover:scale-105">
            <ExternalLink size={13} /> Live Demo
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 transition-colors hover:border-[#D4AF37] hover:text-[#E8C767]">
            <Github size={13} /> GitHub
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 transition-colors hover:border-[#D4AF37] hover:text-[#E8C767]">
            Case Study <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ============================== PROCESS ============================== */
const steps = [
  { icon: Compass, title: "Discovery", desc: "Understanding your business, users, and ambitions." },
  { icon: Ruler, title: "Planning", desc: "Architecture, scope, and a measurable roadmap." },
  { icon: PenTool, title: "Design", desc: "Cinematic, on-brand interfaces that convert." },
  { icon: Code2, title: "Development", desc: "Production-grade code, engineered to scale." },
  { icon: TestTube2, title: "Testing", desc: "Cross-device QA and performance budgets." },
  { icon: Cloud, title: "Deployment", desc: "Zero-downtime launches on modern edge infra." },
  { icon: LifeBuoy, title: "Support", desc: "Ongoing iteration, monitoring, and evolution." },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              <Sparkles size={12} /> Process
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
              From idea to <span className="text-gradient-gold italic font-normal">launch.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent lg:block" />
          <div className="space-y-6 lg:space-y-16">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className={`grid grid-cols-1 items-center gap-6 lg:grid-cols-2 ${i % 2 ? "lg:direction-rtl" : ""}`}>
                  <div className={i % 2 ? "lg:order-2 lg:pl-16" : "lg:order-1 lg:pr-16 lg:text-right"}>
                    <div className={`glass-strong inline-block rounded-3xl p-8 md:p-10 ${i % 2 ? "" : ""}`}>
                      <div className={`mb-4 flex items-center gap-4 ${i % 2 ? "" : "lg:flex-row-reverse"}`}>
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#E8C767] to-[#A8862A] text-black">
                          <s.icon size={20} />
                        </div>
                        <div className="font-mono text-xs tracking-widest text-[#D4AF37]/60">STEP / {String(i + 1).padStart(2, "0")}</div>
                      </div>
                      <h3 className="font-display text-2xl font-medium text-white md:text-3xl">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
                    </div>
                  </div>
                  <div className={`hidden lg:block ${i % 2 ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative h-1 w-full">
                      <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37] gold-glow" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== WHY CHOOSE ME ============================== */
const reasons = [
  "Premium UI/UX", "Responsive Design", "High Performance",
  "Clean Code", "SEO Friendly", "Secure Development",
  "Modern Technologies", "Professional Communication", "Long-Term Support",
];

export function WhyChoose() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              <Sparkles size={12} /> Why Choose Me
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
              Nine reasons to <span className="text-gradient-gold italic font-normal">work together.</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r} delay={(i % 3) * 0.08}>
              <div className="group glass flex items-center gap-4 rounded-2xl p-6 transition-all duration-500 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/[0.04]">
                <CheckCircle2 className="shrink-0 text-[#D4AF37] transition-transform duration-500 group-hover:scale-110" size={22} />
                <div className="font-display text-lg font-medium text-white">{r}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== TESTIMONIALS ============================== */
const testimonials = [
  { quote: "Anusha delivered a Shopify storefront that felt like a piece of couture. Every animation, every transition — flawless.", name: "Elena Voss", role: "Founder, Maison Aurum" },
  { quote: "The most detail-obsessed developer I've worked with. Our Core Web Vitals went from red to all-green in a week.", name: "Marcus Chen", role: "CTO, Solace Studio" },
  { quote: "A rare blend of design taste and engineering rigor. Our iOS app shipped on time and looks premium.", name: "Priya Rao", role: "Product Lead, Vault" },
  { quote: "Communication was cinematic — clear, prompt, and thoughtful. The result speaks for itself.", name: "Julien Marchand", role: "Creative Director, Noir & Co" },
];

export function Testimonials() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              <Sparkles size={12} /> Testimonials
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
              Kind words from <span className="text-gradient-gold italic font-normal">partners.</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="glass-strong group relative overflow-hidden rounded-3xl p-8 md:p-10">
                <div className="pointer-events-none absolute -right-8 -top-8 font-display text-[180px] leading-none text-[#D4AF37]/10">"</div>
                <p className="relative font-display text-xl leading-relaxed text-white/85 md:text-2xl">"{t.quote}"</p>
                <div className="relative mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#E8C767] to-[#A8862A] font-display text-sm font-semibold text-black">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-medium text-white">{t.name}</div>
                    <div className="text-xs uppercase tracking-widest text-[#D4AF37]/70">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== FAQ ============================== */
const faqs = [
  { q: "What kind of projects do you take on?", a: "I focus on premium websites, e-commerce platforms, mobile apps, and Shopify/WordPress builds for founders and brands who value craft." },
  { q: "How long does a typical project take?", a: "Landing pages: 1–2 weeks. Business sites: 3–5 weeks. Web apps and e-commerce: 6–12 weeks depending on scope." },
  { q: "Do you work with international clients?", a: "Yes — I collaborate with clients globally and adapt to your timezone for meetings and reviews." },
  { q: "Do you offer ongoing maintenance?", a: "Absolutely. I offer monthly maintenance retainers covering updates, monitoring, backups, and iterative improvements." },
  { q: "Can you help with SEO?", a: "Yes. Technical SEO, on-page optimization, Core Web Vitals, and Google Search Console setup are core services." },
  { q: "What's your pricing model?", a: "Fixed-price for well-scoped projects, monthly retainers for ongoing work. Reach out for a tailored quote." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              <Sparkles size={12} /> FAQ
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
              Frequently <span className="text-gradient-gold italic font-normal">asked.</span>
            </h2>
          </Reveal>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <div className={`glass overflow-hidden rounded-2xl transition-all duration-500 ${open === i ? "border-[#D4AF37]/40" : ""}`}>
                <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-6 p-6 text-left md:p-8">
                  <span className="font-display text-lg font-medium text-white md:text-xl">{f.q}</span>
                  <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#D4AF37]/30 text-[#D4AF37] transition-transform duration-500 ${open === i ? "rotate-180 bg-[#D4AF37]/10" : ""}`}>
                    {open === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-white/65 md:px-8 md:pb-8">{f.a}</div>
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== CONTACT ============================== */
export function Contact() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focus, setFocus] = useState<string | null>(null);

  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              <Sparkles size={12} /> Contact
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.02] text-white md:text-7xl">
              Let's create <span className="text-gradient-gold italic font-normal">something premium.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {[
              { icon: Mail, label: "Email", value: "aanushaha1998@gmail.com", href: "mailto:aanushaha1998@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 96634 71531", href: "tel:+919663471531" },
              { icon: Linkedin, label: "LinkedIn", value: "anusha-h-a", href: "https://www.linkedin.com/in/anusha-h-a-b44081220" },
              { icon: MapPin, label: "Location", value: "Karnataka, India" },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <a
                  href={c.href}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group glass flex items-center gap-5 rounded-2xl p-5 transition-all hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/[0.04]"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#E8C767] to-[#A8862A] text-black">
                    <c.icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs uppercase tracking-widest text-[#D4AF37]/70">{c.label}</div>
                    <div className="mt-0.5 truncate font-display text-lg text-white">{c.value}</div>
                  </div>
                  {c.href && <ArrowUpRight className="text-white/30 transition-all group-hover:text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />}
                </a>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); setState({ name: "", email: "", message: "" }); }}
                className="glass-strong space-y-6 rounded-3xl p-8 md:p-10"
              >
                {(["name", "email"] as const).map((f) => (
                  <div key={f} className="relative">
                    <label className={`absolute left-0 pointer-events-none font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 ${focus === f || state[f] ? "-top-1 text-[10px] text-[#D4AF37]" : "top-4 text-white/40"}`}>
                      {f === "name" ? "Your Name" : "Email Address"}
                    </label>
                    <input
                      type={f === "email" ? "email" : "text"}
                      required
                      maxLength={f === "email" ? 255 : 100}
                      value={state[f]}
                      onFocus={() => setFocus(f)}
                      onBlur={() => setFocus(null)}
                      onChange={(e) => setState({ ...state, [f]: e.target.value })}
                      className="w-full border-b border-white/20 bg-transparent pb-2 pt-6 text-white outline-none transition-colors focus:border-[#D4AF37]"
                    />
                  </div>
                ))}
                <div className="relative">
                  <label className={`absolute left-0 pointer-events-none font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 ${focus === "message" || state.message ? "-top-1 text-[10px] text-[#D4AF37]" : "top-4 text-white/40"}`}>
                    Tell me about your project
                  </label>
                  <textarea
                    required
                    rows={5}
                    maxLength={1000}
                    value={state.message}
                    onFocus={() => setFocus("message")}
                    onBlur={() => setFocus(null)}
                    onChange={(e) => setState({ ...state, message: e.target.value })}
                    className="w-full resize-none border-b border-white/20 bg-transparent pb-2 pt-6 text-white outline-none transition-colors focus:border-[#D4AF37]"
                  />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="text-xs text-white/40">{sent ? "Message sent — I'll be in touch soon." : "Typical reply within 24 hours."}</div>
                  <MagneticButton onClick={() => {}}>
                    Send Message <ArrowUpRight size={16} />
                  </MagneticButton>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== FOOTER ============================== */
export function Footer() {
  const [visible, setVisible] = useState(false);
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setVisible(window.scrollY > 500), { once: true });
  }

  return (
    <footer className="relative border-t border-[#D4AF37]/15 bg-[#050505] pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-3xl md:text-4xl font-semibold text-gradient-gold">Anusha H A</div>
            <p className="mt-4 max-w-sm text-white/60">Full stack developer crafting cinematic digital experiences for premium brands worldwide.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/anusha-h-a-b44081220", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Mail, href: "mailto:aanushaha1998@gmail.com", label: "Email" },
                { icon: MessageCircle, href: "https://wa.me/919663471531", label: "WhatsApp" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 transition-all hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 hover:text-[#E8C767]">
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]/70">Quick Links</div>
            <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm">
              {["About", "Services", "Skills", "Portfolio", "Process", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-white/60 transition-colors hover:text-[#E8C767]">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]/70">Reach Out</div>
            <div className="mt-5 space-y-2 text-sm text-white/60">
              <div>aanushaha1998@gmail.com</div>
              <div>+91 96634 71531</div>
              <div>Karnataka, India</div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 py-8 md:flex-row">
          <div className="text-xs text-white/40">© {new Date().getFullYear()} Anusha H A. All rights reserved.</div>
          <div className="text-xs text-white/40">Designed & Developed by <span className="text-[#E8C767]">Anusha H A</span></div>
        </div>
      </div>

      {visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#E8C767] to-[#A8862A] text-black gold-glow transition-transform hover:scale-110"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}
