import { motion } from "framer-motion";
import { useState } from "react";
import {
  Smartphone, Apple, Globe, Layers, ShoppingBag, Palette,
  FileCode, Store, CreditCard, Rocket, Building2, Briefcase,
  Search, Gauge, Wrench, ArrowUpRight, Github, ExternalLink,
  Mail, MapPin, Phone, MessageCircle,
  Sparkles, CheckCircle2,
  Code2, LifeBuoy, Award, Zap, Cpu,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { MagneticButton } from "./MagneticButton";
import { Modal } from "./Modal";
import anushaAsset from "@/assets/anusha.jpeg.asset.json";

/* ============================== ABOUT ============================== */
export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#3B82F6]/10 blur-[120px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16">
        {/* Photo column */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#3B82F6]/40 via-[#93C5FD]/20 to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-[#3B82F6]/40 bg-[#141821] p-2">
                  <img
                    src={anushaAsset.url}
                    alt="Anusha H A — App Developer & Full Stack Developer"
                    className="w-full rounded-[1.6rem] object-cover"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] ring-1 ring-inset ring-white/10" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="glass-strong absolute -bottom-6 -right-6 rounded-2xl px-5 py-4 md:-bottom-8 md:-right-8"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] text-white">
                    <Award size={18} />
                  </div>
                  <div>
                    <div className="font-display text-xl font-semibold text-white">4+ Years</div>
                    <div className="text-[10px] uppercase tracking-widest text-[#3B82F6]/80">Experience</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="glass-strong absolute -top-4 -left-4 flex items-center gap-2 rounded-full px-4 py-2"
              >
                <MapPin size={14} className="text-[#3B82F6]" />
                <span className="text-xs text-white/85">Bangalore, Karnataka</span>
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* Text column */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/25 bg-[#141821] px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[#93C5FD] sm:text-xs">
              <Sparkles size={12} /> About
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-6xl">
              Anusha H A —{" "}
              <span className="text-gradient-accent">App Developer</span>{" "}
              & Full Stack Developer
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-sans text-lg leading-relaxed text-white/70">
              4+ years crafting scalable, cinematic digital products — from{" "}
              <span className="text-[#93C5FD]">Android &amp; iOS apps</span> to headless{" "}
              <span className="text-[#93C5FD]">Shopify</span> storefronts,{" "}
              <span className="text-[#93C5FD]">WordPress</span> sites, and premium web
              applications. Based in Bangalore, working with brands worldwide.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 font-sans leading-relaxed text-white/60">
              I obsess over the detail no one notices — motion curves, Core Web Vitals, checkout
              micro-copy — because that&apos;s where premium is felt.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
              {[
                { l: "Experience", v: "4+ Years" },
                { l: "Based in", v: "Bangalore, India" },
                { l: "Working with", v: "Brands worldwide" },
              ].map((k) => (
                <div key={k.l} className="rounded-2xl border border-white/8 bg-white/[0.02] p-5">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-[#93C5FD]/70">{k.l}</div>
                  <div className="mt-2 font-display text-lg font-semibold text-white md:text-xl">{k.v}</div>
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
type Service = {
  icon: typeof Smartphone;
  title: string;
  desc: string;
  details: string;
  deliverables: string[];
};

const services: Service[] = [
  { icon: Smartphone, title: "Android App Development", desc: "Native & cross-platform Android apps built for scale.", details: "Kotlin, Jetpack Compose, and cross-platform React Native / Flutter builds engineered for Play Store approval, offline resilience, and buttery 60fps UI.", deliverables: ["Play Store–ready APK/AAB", "Push notifications & analytics", "Offline-first architecture", "In-app purchases & auth"] },
  { icon: Apple, title: "iOS App Development", desc: "Refined, App Store–ready iOS experiences.", details: "Swift, SwiftUI, and cross-platform builds tuned for App Store review, HIG-perfect motion, and Sign in with Apple.", deliverables: ["App Store submission ready", "HIG-compliant UI", "Biometric auth", "Widgets & App Clips"] },
  { icon: Globe, title: "Website Development", desc: "Marketing sites engineered for conversion.", details: "React / Next.js / TanStack sites with server-side rendering, edge deployment and CRO-first sections that turn traffic into revenue.", deliverables: ["Responsive, mobile-first", "Copywriting hooks", "A/B ready sections", "CMS integration"] },
  { icon: Layers, title: "Web Applications", desc: "Complex SPAs & dashboards with robust auth.", details: "Multi-tenant SaaS, admin dashboards, real-time collaboration — with Supabase / Firebase / custom Node backends, role-based access, and observability baked in.", deliverables: ["Multi-role auth (RLS)", "Realtime updates", "Stripe billing", "Admin dashboards"] },
  { icon: ShoppingBag, title: "Shopify Development", desc: "Bespoke themes & headless storefronts.", details: "Liquid theme surgery, custom Shopify apps, and Hydrogen/Remix headless stores for luxury and DTC brands who need editorial-grade UX.", deliverables: ["Custom Liquid theme", "Headless Hydrogen build", "Custom checkout ext.", "Metaobjects & sections"] },
  { icon: Palette, title: "Shopify Customization", desc: "Theme surgery & merchandising flows.", details: "Speed-optimised theme refactors, custom sections, upsell/cross-sell blocks and checkout tweaks proven to lift AOV.", deliverables: ["Speed refactor (Lighthouse)", "Custom sections", "Upsell & bundling", "Subscription integration"] },
  { icon: FileCode, title: "WordPress Development", desc: "Custom themes & Gutenberg blocks.", details: "ACF-powered custom themes, custom Gutenberg blocks, and headless WP builds that stay fast at scale.", deliverables: ["Custom theme from Figma", "ACF flexible content", "Custom Gutenberg blocks", "Headless WP + Next.js"] },
  { icon: Store, title: "WooCommerce", desc: "Full-stack WooCommerce builds.", details: "Payments, shipping, subscriptions and multi-currency — configured, secured and speed-tuned end-to-end.", deliverables: ["Payment gateways", "Multi-currency", "Subscriptions", "Speed optimisation"] },
  { icon: CreditCard, title: "E-commerce Development", desc: "End-to-end commerce platforms.", details: "Next.js + Stripe + Sanity / headless CMS platforms tuned for growth, SEO and lifetime value.", deliverables: ["Headless commerce", "Stripe & payments", "Inventory sync", "SEO architecture"] },
  { icon: Rocket, title: "Landing Pages", desc: "High-converting one-pagers.", details: "Cinematic launch pages with scroll storytelling, 3D visuals and CRO-driven layouts for campaigns and product drops.", deliverables: ["Scroll storytelling", "3D visuals", "Analytics wired", "Sub-2s LCP"] },
  { icon: Building2, title: "Business Websites", desc: "Corporate presence with brand credibility.", details: "Corporate sites that establish authority — services, case studies, careers and lead capture, all on-brand.", deliverables: ["Case studies", "Careers & lead capture", "Multi-language ready", "Brand system"] },
  { icon: Briefcase, title: "Portfolio Websites", desc: "Award-worthy portfolios for creatives.", details: "Editorial portfolios with cinematic transitions and case-study layouts designed for Awwwards-tier presentation.", deliverables: ["Editorial layouts", "Cinematic transitions", "Case study system", "CMS-driven"] },
  { icon: Search, title: "SEO Optimization", desc: "Technical + on-page SEO that ships wins.", details: "Full technical audit, schema, sitemaps, internal linking and content optimisation with measurable ranking outcomes.", deliverables: ["Tech audit + fixes", "Schema & sitemaps", "Keyword mapping", "Content briefs"] },
  { icon: Gauge, title: "Speed Optimization", desc: "Core Web Vitals — dialed in.", details: "LCP, INP, CLS and TBT audits with actionable fixes. Image, font, JS and CSS budgets enforced with CI.", deliverables: ["LCP/INP/CLS fixes", "Image pipeline", "Font subsetting", "CI performance budgets"] },
  { icon: Wrench, title: "Maintenance & Support", desc: "Long-term partnership & iterations.", details: "Monthly retainers covering monitoring, backups, security patches, small features and design iterations.", deliverables: ["Uptime monitoring", "Weekly backups", "Security patches", "Iteration credits"] },
];

export function Services() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? services[openIdx] : null;
  return (
    <section id="services" className="relative py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/25 bg-[#141821] px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[#93C5FD] sm:text-xs">
                <Sparkles size={12} /> Services
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-6xl">
                A full studio, <span className="text-gradient-accent">in one person.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-white/60">Click any service to see the full delivery scope.</p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-[#3B82F6]/15 bg-[#3B82F6]/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} index={i} onClick={() => setOpenIdx(i)} />
          ))}
        </div>
      </div>

      <Modal open={openIdx !== null} onClose={() => setOpenIdx(null)} maxWidth="max-w-2xl">
        {active && (
          <div>
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ rotate: -20, scale: 0.6 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] text-white"
              >
                <active.icon size={26} />
              </motion.div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#3B82F6]/70">Service</div>
                <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">{active.title}</h3>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-white/75">{active.details}</p>
            <div className="mt-8">
              <div className="text-xs uppercase tracking-[0.3em] text-[#3B82F6]/70">What you get</div>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {active.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-sm text-white/80">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#3B82F6]" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href="#contact">Start a project <ArrowUpRight size={16} /></MagneticButton>
              <MagneticButton variant="outline" href="mailto:aanushaha1998@gmail.com">Email me</MagneticButton>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

function ServiceCard({ s, index, onClick }: { s: Service; index: number; onClick: () => void }) {
  const Icon = s.icon;
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      style={{ transformPerspective: 1000 }}
      className="group relative overflow-hidden bg-[#141821] p-8 text-left transition-colors duration-500 hover:bg-[#1E2330]"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#3B82F6]/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
      <div className="relative flex items-start justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#3B82F6]/25 bg-gradient-to-br from-[#3B82F6]/15 to-transparent text-[#93C5FD] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon size={22} strokeWidth={1.4} />
        </div>
        <ArrowUpRight className="text-white/20 transition-all duration-500 group-hover:text-[#3B82F6] group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
      </div>
      <h3 className="relative mt-8 font-display text-xl font-medium text-white">{s.title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-white/55">{s.desc}</p>
      <div className="relative mt-8 h-px w-full overflow-hidden bg-white/5">
        <div className="h-full w-0 bg-gradient-to-r from-[#3B82F6] to-transparent transition-all duration-700 group-hover:w-full" />
      </div>
    </motion.button>
  );
}

/* ============================== SKILLS ============================== */
const skillGroups = [
  { label: "App Development", items: ["Custom Mobile Apps", "Android (Kotlin)", "iOS (Swift)", "React Native", "Flutter", "API Integration", "App Testing & QA", "Maintenance & Support"] },
  { label: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js / R3F"] },
  { label: "Backend", items: ["Node.js", "Express", "Firebase", "Supabase", "REST", "GraphQL"] },
  { label: "CMS & Commerce", items: ["Shopify", "Shopify Hydrogen", "WordPress", "WooCommerce"] },
  { label: "Design & UX", items: ["UI/UX Design", "Figma", "Prototyping", "Design Systems"] },
  { label: "SEO & Performance", items: ["Technical SEO", "On-Page SEO", "Core Web Vitals", "Google Analytics", "Search Console"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Cloudflare"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/25 bg-[#141821] px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[#93C5FD] sm:text-xs">
              <Sparkles size={12} /> Skills
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-6xl">
              A refined <span className="text-gradient-accent">technology stack.</span>
            </h2>
          </Reveal>
        </div>
        <div className="space-y-4">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, x: i % 2 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="glass rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-[#3B82F6]/40">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr] md:items-center">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#3B82F6] animate-accent-pulse" />
                    <div className="font-display text-xl font-medium text-white">{g.label}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item, k) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: k * 0.03, duration: 0.4 }}
                        className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white/80 transition-all duration-300 hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/5 hover:text-[#93C5FD]"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================== PORTFOLIO ============================== */
const categories = ["All", "Websites", "Apps", "Shopify"] as const;
type Cat = (typeof categories)[number];

type Project = {
  title: string;
  cat: Exclude<Cat, "All">;
  desc: string;
  details: string;
  features: string[];
  tech: string[];
  url: string;
  img: string;
};

const shot = (url: string) => `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1280&h=860`;

const projects: Project[] = [
  // WEBSITES
  { title: "Florida Green Contractors", cat: "Websites", desc: "Service business site with lead-capture.", details: "Full corporate site for a US-based contractor — services, portfolio, credibility signals and multi-step quote flow.", features: ["Service & portfolio pages", "Multi-step quote flow", "On-page SEO structure"], tech: ["WordPress", "PHP", "SEO"], url: "https://floridagreencontractors.com/", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80" },
  { title: "Rol Drive", cat: "Websites", desc: "Automotive / mobility platform.", details: "Mobility brand website with fleet showcase and booking journey.", features: ["Fleet showcase", "Booking journey", "Responsive layouts"], tech: ["Next.js", "Tailwind"], url: "https://www.roldrive.com/", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80" },
  { title: "RebuildIt Inc.", cat: "Websites", desc: "Construction & remodeling company site.", details: "Corporate site for a construction firm — service pages, gallery, testimonials and inquiry pipeline.", features: ["Service pages & gallery", "Testimonials section", "Inquiry pipeline"], tech: ["React", "Tailwind"], url: "https://RebuildItInc.com", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80" },
  { title: "Saksham Fashion", cat: "Websites", desc: "Fashion brand storefront concept.", details: "Fashion-forward marketing site built on Netlify with a lookbook-first structure and product spotlight sections.", features: ["Lookbook-first structure", "Product spotlight sections", "Netlify deployment"], tech: ["React", "Netlify", "Tailwind"], url: "https://sakshamfashion.netlify.app/", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80" },
  { title: "Birla Pivot Form", cat: "Websites", desc: "Enterprise B2B form & flow.", details: "Multi-step enterprise onboarding form for Birla Pivot.", features: ["Multi-step onboarding", "Validation logic", "Enterprise UI patterns"], tech: ["React", "Form logic"], url: "http://birlapivot.com/form", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80" },
  { title: "Author Pratik", cat: "Websites", desc: "Author personal branding site.", details: "Editorial author site with book showcase, blog and speaking enquiries.", features: ["Book showcase", "Blog with ACF fields", "Speaking enquiry form"], tech: ["WordPress", "ACF"], url: "http://authorpratik.com", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80" },
  { title: "Barry Miller", cat: "Websites", desc: "Personal brand website.", details: "Elegant personal brand site with case studies and press.", features: ["Case study layouts", "Press section", "Editorial typography"], tech: ["WordPress"], url: "https://www.barrymiller.net/", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80" },
  { title: "Ruby Todd", cat: "Websites", desc: "Author / creative portfolio.", details: "Boutique portfolio for an author — refined typography and long-form content layouts.", features: ["Long-form layouts", "Refined typography", "Content management"], tech: ["WordPress"], url: "https://www.ruby-todd.com/", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80" },
  { title: "Anusha Portfolio", cat: "Websites", desc: "Personal portfolio site — cinematic, editorial.", details: "Editorial portfolio site built with React and scroll-driven storytelling. Focus on typographic hierarchy and refined motion.", features: ["Scroll-driven storytelling", "Typographic hierarchy", "Refined motion"], tech: ["React", "GSAP", "Tailwind"], url: "https://anushaha99.portfolio.website/", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80" },

  // APPS
  { title: "Unboxify", cat: "Apps", desc: "Product app experience.", details: "Custom mobile app development with polished UI and API-driven content.", features: ["Custom mobile app UI", "API-driven content", "Cross-platform build"], tech: ["React Native", "REST API"], url: "https://www.unboxify.in", img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=80" },
  { title: "Olives.ie", cat: "Apps", desc: "Irish product platform.", details: "Product/e-commerce app experience with modern UI/UX.", features: ["Product browsing flow", "Modern UI/UX", "API integration"], tech: ["React", "API"], url: "https://olives.ie/", img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&q=80" },
  { title: "MeetMux", cat: "Apps", desc: "Social/meeting platform.", details: "Social meetup platform — modern responsive UI with real-time features.", features: ["Real-time features", "Responsive UI", "Social meetup flows"], tech: ["React", "Realtime"], url: "https://www.meetmux.com/", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" },

  // SHOPIFY
  { title: "Fitera Sport", cat: "Shopify", desc: "Sports & performance Shopify store.", details: "Shopify storefront for a performance sports brand — custom sections, product bundles and speed-tuned theme.", features: ["Custom Liquid sections", "Product bundles", "Speed-tuned theme"], tech: ["Shopify", "Liquid"], url: "https://Fiterasport.store", img: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=1200&q=80" },
  { title: "The Saje", cat: "Shopify", desc: "Lifestyle Shopify storefront.", details: "Boutique lifestyle Shopify build with editorial merchandising.", features: ["Editorial merchandising", "Custom collection pages", "Boutique PDP"], tech: ["Shopify", "Liquid"], url: "https://www.thesaje.com", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80" },
  { title: "RK Trends", cat: "Shopify", desc: "UAE fashion Shopify store.", details: "Fashion Shopify build for the UAE market — multi-currency, RTL-aware sections.", features: ["Multi-currency setup", "RTL-aware sections", "Fashion merchandising"], tech: ["Shopify", "Multi-currency"], url: "https://www.rktrends.ae/", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80" },
  { title: "Element Home", cat: "Shopify", desc: "Home & living Shopify store.", details: "Home & living Shopify build with editorial category pages.", features: ["Editorial category pages", "Custom sections", "Clean product grid"], tech: ["Shopify", "Liquid"], url: "https://elementhome.net/", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80" },
  { title: "Saramor", cat: "Shopify", desc: "Fashion Shopify storefront.", details: "Fashion Shopify storefront with bundle logic and premium PDP.", features: ["Bundle logic", "Premium PDP", "Custom theme work"], tech: ["Shopify", "Liquid"], url: "https://saramor.store/", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80" },
];

export function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);
  const current = openIdx !== null ? filtered[openIdx] : null;

  return (
    <section id="portfolio" className="relative py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/25 bg-[#141821] px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[#93C5FD] sm:text-xs">
                <Sparkles size={12} /> Selected Work
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-6xl">
                Live client projects, <span className="text-gradient-accent">shipped and running.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => { setActive(c); setOpenIdx(null); }}
                  className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-widest transition-all ${
                    active === c
                      ? "border-[#3B82F6] bg-[#3B82F6] text-white"
                      : "border-white/10 text-white/55 hover:border-[#3B82F6]/50 hover:text-[#93C5FD]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="space-y-16 md:space-y-24">
          {filtered.map((p, i) => (
            <ProjectBand key={p.title + p.url} p={p} index={i} onClick={() => setOpenIdx(i)} />
          ))}
        </div>
      </div>

      <Modal open={openIdx !== null} onClose={() => setOpenIdx(null)} maxWidth="max-w-3xl">
        {current && (
          <div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <ProjectShot p={current} className="h-56 w-full object-cover object-top md:h-80" />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#3B82F6]/40 bg-[#3B82F6]/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#93C5FD]">
                {current.cat}
              </span>
              <h3 className="font-display text-2xl font-bold text-white md:text-4xl">{current.title}</h3>
            </div>
            <p className="mt-4 leading-relaxed text-white/70">{current.details}</p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {current.features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-sm text-white/80">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#3B82F6]" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {current.tech.map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/60">{t}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={current.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#3B82F6] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#2563EB]"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#141821] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/20"
              >
                Start a similar project
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

function ProjectShot({ p, className }: { p: Project; className?: string }) {
  return (
    <img
      src={shot(p.url)}
      alt={`${p.title} — live site screenshot`}
      loading="lazy"
      className={className}
      onError={(e) => {
        const img = e.currentTarget;
        if (img.src !== p.img) img.src = p.img;
      }}
    />
  );
}

function ProjectBand({ p, index, onClick }: { p: Project; index: number; onClick: () => void }) {
  const flipped = index % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14"
    >
      {/* Screenshot */}
      <div className={`lg:col-span-7 ${flipped ? "lg:order-2" : ""}`}>
        <button
          type="button"
          onClick={onClick}
          aria-label={`View details for ${p.title}`}
          className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-[#141821] p-2 text-left transition-all duration-500 hover:border-[#3B82F6]/40 md:rounded-3xl md:p-3"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -inset-20 bg-[#3B82F6]/10 blur-3xl" />
          </div>
          {/* Browser chrome */}
          <div className="relative mb-2 flex items-center gap-2 px-2 py-1.5">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="ml-2 truncate text-[10px] text-white/35">{p.url.replace(/^https?:\/\//, "")}</span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl md:rounded-2xl">
            <ProjectShot p={p} className="h-full w-full object-cover object-top transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0F]/60 via-transparent to-transparent" />
          </div>
        </button>
      </div>

      {/* Copy */}
      <div className={`lg:col-span-5 ${flipped ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#93C5FD]">
            {p.cat}
          </span>
          <span className="font-mono text-[11px] text-white/25">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">{p.title}</h3>
        <p className="mt-3 leading-relaxed text-white/60">{p.details}</p>
        <ul className="mt-6 space-y-2.5">
          {p.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-white/75">
              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#3B82F6]" /> {f}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-white/65">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#3B82F6] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
          <button
            type="button"
            onClick={onClick}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#141821] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/20 hover:bg-[#1E2330]"
          >
            View Details <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}


/* ============================== WHY CHOOSE ME ============================== */
const reasons = [
  { icon: Award, label: "Premium UI/UX" },
  { icon: Smartphone, label: "Responsive Design" },
  { icon: Zap, label: "High Performance" },
  { icon: Code2, label: "Clean Code" },
  { icon: Search, label: "SEO Friendly" },
  { icon: Cpu, label: "Secure Development" },
  { icon: Sparkles, label: "Modern Technologies" },
  { icon: MessageCircle, label: "Clear Communication" },
  { icon: LifeBuoy, label: "Long-Term Support" },
];

export function WhyChoose() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/25 bg-[#141821] px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[#93C5FD] sm:text-xs">
              <Sparkles size={12} /> Why Choose Me
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-6xl">
              Nine reasons to <span className="text-gradient-accent">work together.</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <div className="group glass flex items-center gap-4 rounded-2xl p-6 transition-all duration-500 hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/[0.04]">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <r.icon size={18} />
                </div>
                <div className="font-display text-lg font-medium text-white">{r.label}</div>
              </div>
            </motion.div>
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
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-16 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/25 bg-[#141821] px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[#93C5FD] sm:text-xs">
              <Sparkles size={12} /> Testimonials
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-6xl">
              Kind words from <span className="text-gradient-accent">partners.</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="glass-strong group relative overflow-hidden rounded-3xl p-8 md:p-10">
                <div className="pointer-events-none absolute -right-8 -top-8 font-display text-[180px] leading-none text-[#3B82F6]/10">&ldquo;</div>
                <p className="relative font-display text-xl leading-relaxed text-white/85 md:text-2xl">&ldquo;{t.quote}&rdquo;</p>
                <div className="relative mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] font-display text-sm font-semibold text-white">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-medium text-white">{t.name}</div>
                    <div className="text-xs uppercase tracking-widest text-[#3B82F6]/70">{t.role}</div>
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

/* ============================== CONTACT ============================== */
export function Contact() {
  const initialContactState = { name: "", email: "", projectType: "Website", message: "" };
  const [state, setState] = useState(initialContactState);
  const [sent, setSent] = useState(false);
  const [focus, setFocus] = useState<string | null>(null);
  const projectTypes = ["Website", "App", "Shopify", "Full Stack"];

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setState(initialContactState), 450);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_60%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ rotateX: [0, 18, 0], rotateY: [0, -28, 0], y: [0, -28, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[8%] top-24 hidden h-28 w-28 rounded-3xl border border-[#3B82F6]/25 bg-[#3B82F6]/5 shadow-[0_0_70px_-20px_rgba(59,130,246,0.7)] backdrop-blur-xl lg:block"
        style={{ transformPerspective: 900 }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotateZ: [0, 360], scale: [1, 1.12, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute bottom-28 left-[6%] hidden h-36 w-36 rounded-full border border-dashed border-[#3B82F6]/20 lg:block"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-20 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/25 bg-[#141821] px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[#93C5FD] sm:text-xs">
              <Sparkles size={12} /> Contact
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl">
              Let&apos;s create <span className="text-gradient-accent">something premium.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {[
              { icon: Mail, label: "Email", value: "aanushaha1998@gmail.com", href: "mailto:aanushaha1998@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 96634 71531", href: "tel:+919663471531" },
              { icon: MessageCircle, label: "WhatsApp", value: "+91 96634 71531", href: "https://wa.me/919663471531" },
              { icon: Globe, label: "Portfolio", value: "View live work", href: "#portfolio" },
              { icon: MapPin, label: "Location", value: "Bangalore, Karnataka, India" },
            ].map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                whileHover={{ x: 6 }}
                className="group glass flex items-center gap-5 rounded-2xl p-5 transition-colors hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/[0.04]"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] text-white">
                  <c.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-widest text-[#3B82F6]/70">{c.label}</div>
                  <div className="mt-0.5 truncate font-display text-lg text-white">{c.value}</div>
                </div>
                {c.href && <ArrowUpRight className="text-white/30 transition-all group-hover:text-[#3B82F6] group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />}
              </motion.a>
            ))}
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <iframe title="Contact form delivery" name="contact-submit-frame" className="hidden" />
              <form
                action="https://formsubmit.co/aanushaha1998@gmail.com"
                method="POST"
                target="contact-submit-frame"
                onSubmit={handleSubmit}
                className="glass-strong space-y-6 rounded-3xl p-8 md:p-10"
              >
                <input type="hidden" name="_subject" value="New portfolio inquiry for Anusha H A" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />
                {(["name", "email"] as const).map((f) => (
                  <div key={f} className="relative">
                    <label className={`absolute left-0 pointer-events-none font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 ${focus === f || state[f] ? "-top-1 text-[10px] text-[#3B82F6]" : "top-4 text-white/40"}`}>
                      {f === "name" ? "Your Name" : "Email Address"}
                    </label>
                    <input
                      type={f === "email" ? "email" : "text"}
                      required
                      name={f}
                      maxLength={f === "email" ? 255 : 100}
                      value={state[f]}
                      onFocus={() => setFocus(f)}
                      onBlur={() => setFocus(null)}
                      onChange={(e) => setState({ ...state, [f]: e.target.value })}
                      className="w-full border-b border-white/20 bg-transparent pb-2 pt-6 text-white outline-none transition-colors focus:border-[#3B82F6]"
                    />
                  </div>
                ))}
                <div>
                  <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#3B82F6]/75">Project Type</div>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {projectTypes.map((type) => (
                      <label
                        key={type}
                        className={`group relative cursor-pointer rounded-2xl border p-4 text-center text-xs uppercase tracking-widest transition-all duration-300 ${
                          state.projectType === type
                            ? "border-[#3B82F6] bg-[#3B82F6]/10 text-[#93C5FD] shadow-[0_0_30px_-18px_rgba(59,130,246,0.9)]"
                            : "border-white/10 bg-white/[0.02] text-white/55 hover:border-[#3B82F6]/50 hover:text-[#93C5FD]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={type}
                          checked={state.projectType === type}
                          onChange={() => setState({ ...state, projectType: type })}
                          className="sr-only"
                        />
                        <span className="mx-auto mb-2 block h-2 w-2 rounded-full bg-[#3B82F6] opacity-40 transition-opacity group-hover:opacity-100" />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <label className={`absolute left-0 pointer-events-none font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 ${focus === "message" || state.message ? "-top-1 text-[10px] text-[#3B82F6]" : "top-4 text-white/40"}`}>
                    Tell me about your project
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    maxLength={1000}
                    value={state.message}
                    onFocus={() => setFocus("message")}
                    onBlur={() => setFocus(null)}
                    onChange={(e) => setState({ ...state, message: e.target.value })}
                    className="w-full resize-none border-b border-white/20 bg-transparent pb-2 pt-6 text-white outline-none transition-colors focus:border-[#3B82F6]"
                  />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="text-xs text-white/40">{sent ? "Details sent to aanushaha1998@gmail.com." : "Typical reply within 24 hours."}</div>
                  <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] px-7 py-3.5 text-sm font-medium tracking-wide text-white accent-glow-hover">
                    Send Message <ArrowUpRight size={16} />
                  </button>
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
  return (
    <footer className="relative border-t border-[#3B82F6]/15 bg-[#0A0B0F] pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-3xl md:text-4xl font-semibold text-gradient-accent">Anusha H A</div>
            <p className="mt-4 max-w-sm text-white/60">App Developer &amp; Full Stack Developer crafting cinematic digital experiences for premium brands worldwide. Based in Bangalore, Karnataka.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { icon: Globe, href: "#portfolio", label: "Portfolio" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Mail, href: "mailto:aanushaha1998@gmail.com", label: "Email" },
                { icon: MessageCircle, href: "https://wa.me/919663471531", label: "WhatsApp" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white/70 transition-all hover:border-[#3B82F6] hover:bg-[#3B82F6]/10 hover:text-[#93C5FD]">
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-[#3B82F6]/70">Quick Links</div>
            <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm">
              {["About", "Services", "Skills", "Portfolio", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="text-white/60 transition-colors hover:text-[#93C5FD]">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.3em] text-[#3B82F6]/70">Reach Out</div>
            <ul className="mt-5 space-y-2 text-sm">
              <li><a href="mailto:aanushaha1998@gmail.com" className="text-white/60 hover:text-[#93C5FD]">aanushaha1998@gmail.com</a></li>
              <li><a href="tel:+919663471531" className="text-white/60 hover:text-[#93C5FD]">+91 96634 71531</a></li>
              <li className="flex items-center gap-1.5 text-white/60"><MapPin size={12} className="text-[#3B82F6]" /> Bangalore, Karnataka</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 py-8 md:flex-row">
          <div className="text-xs text-white/40">© {new Date().getFullYear()} Anusha H A. Crafted with obsession.</div>
          <div className="text-xs text-white/40">Built with React · TanStack · Framer Motion · Three.js</div>
        </div>
      </div>
    </footer>
  );
}
