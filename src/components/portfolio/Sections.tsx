import { motion } from "framer-motion";
import { useState } from "react";
import {
  Smartphone, Apple, Globe, Layers, ShoppingBag, Palette,
  FileCode, Store, CreditCard, Rocket, Building2, Briefcase,
  Search, Gauge, Wrench, ArrowUpRight, Github, ExternalLink,
  Plus, Minus, Mail, Linkedin, MapPin, Phone, MessageCircle,
  Sparkles, CheckCircle2, Compass, Ruler, PenTool,
  Code2, TestTube2, Cloud, LifeBuoy, Award, Zap, Cpu,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { MagneticButton } from "./MagneticButton";
import { Modal } from "./Modal";
import anushaAsset from "@/assets/anusha.jpeg.asset.json";

/* ============================== ABOUT ============================== */
export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-32 md:py-40">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12">
        {/* Photo column */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#D4AF37]/40 via-[#E8C767]/20 to-transparent blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/40 bg-[#0a0a0a] p-2">
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
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#E8C767] to-[#A8862A] text-black">
                    <Award size={18} />
                  </div>
                  <div>
                    <div className="font-display text-xl font-semibold text-white">4+ Years</div>
                    <div className="text-[10px] uppercase tracking-widest text-[#D4AF37]/80">Experience</div>
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
                <MapPin size={14} className="text-[#D4AF37]" />
                <span className="text-xs text-white/85">Bangalore, Karnataka</span>
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* Text column */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              <Sparkles size={12} /> About
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
              Anusha H A —{" "}
              <span className="text-gradient-gold italic font-normal">App Developer</span>{" "}
              & Full Stack Developer
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-sans text-lg leading-relaxed text-white/70">
              4+ years crafting scalable, cinematic digital products — from{" "}
              <span className="text-[#E8C767]">Android &amp; iOS apps</span> to headless{" "}
              <span className="text-[#E8C767]">Shopify</span> storefronts,{" "}
              <span className="text-[#E8C767]">WordPress</span> sites, and premium web
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
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#D4AF37]/15 pt-8">
              {[
                { n: 80, s: "+", l: "Projects Delivered" },
                { n: 50, s: "+", l: "Happy Clients" },
                { n: 4, s: "+", l: "Years Experience" },
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
            <p className="max-w-sm text-white/60">Click any service to see the full delivery scope.</p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 sm:grid-cols-2 lg:grid-cols-3">
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
                className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[#E8C767] to-[#A8862A] text-black"
              >
                <active.icon size={26} />
              </motion.div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/70">Service</div>
                <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">{active.title}</h3>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-white/75">{active.details}</p>
            <div className="mt-8">
              <div className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]/70">What you get</div>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {active.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-sm text-white/80">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#D4AF37]" />
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
      className="group relative overflow-hidden bg-[#0a0a0a] p-8 text-left transition-colors duration-500 hover:bg-[#0d0b06]"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4AF37]/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
      <div className="relative flex items-start justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/15 to-transparent text-[#E8C767] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <Icon size={22} strokeWidth={1.4} />
        </div>
        <ArrowUpRight className="text-white/20 transition-all duration-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
      </div>
      <h3 className="relative mt-8 font-display text-xl font-medium text-white">{s.title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-white/55">{s.desc}</p>
      <div className="relative mt-8 h-px w-full overflow-hidden bg-white/5">
        <div className="h-full w-0 bg-gradient-to-r from-[#D4AF37] to-transparent transition-all duration-700 group-hover:w-full" />
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
            <motion.div
              key={g.label}
              initial={{ opacity: 0, x: i % 2 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="glass rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-[#D4AF37]/40">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr] md:items-center">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-gold-pulse" />
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
                        className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white/80 transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 hover:text-[#E8C767]"
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
const categories = ["All", "Websites", "Apps", "Shopify", "WordPress"] as const;
type Cat = (typeof categories)[number];

type Project = {
  title: string;
  cat: Exclude<Cat, "All">;
  desc: string;
  details: string;
  tech: string[];
  url: string;
  img: string;
};

const projects: Project[] = [
  // WEBSITES
  { title: "Anusha Portfolio", cat: "Websites", desc: "Personal portfolio site — cinematic, editorial.", details: "Editorial portfolio site built with React and scroll-driven storytelling. Focus on typographic hierarchy and refined motion.", tech: ["React", "GSAP", "Tailwind"], url: "https://anushaha99.portfolio.website/", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80" },
  { title: "Saksham Fashion", cat: "Websites", desc: "Fashion brand storefront concept.", details: "Fashion-forward marketing site built on Netlify with a lookbook-first structure and product spotlight sections.", tech: ["React", "Netlify", "Tailwind"], url: "https://sakshamfashion.netlify.app/", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80" },
  { title: "Florida Green Contractors", cat: "Websites", desc: "Service business site with lead-capture.", details: "Full corporate site for a US-based contractor — services, portfolio, credibility signals and multi-step quote flow.", tech: ["WordPress", "PHP", "SEO"], url: "https://floridagreencontractors.com/", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80" },
  { title: "Rol Drive", cat: "Websites", desc: "Automotive / mobility platform.", details: "Mobility brand website with fleet showcase and booking journey.", tech: ["Next.js", "Tailwind"], url: "https://www.roldrive.com/", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80" },
  { title: "RebuildIt Inc.", cat: "Websites", desc: "Construction & remodeling company site.", details: "Corporate site for a construction firm — service pages, gallery, testimonials and inquiry pipeline.", tech: ["React", "Tailwind"], url: "https://RebuildItInc.com", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80" },
  { title: "Birla Pivot Form", cat: "Websites", desc: "Enterprise B2B form & flow.", details: "Multi-step enterprise onboarding form for Birla Pivot.", tech: ["React", "Form logic"], url: "http://birlapivot.com/form", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80" },
  { title: "Author Pratik", cat: "Websites", desc: "Author personal branding site.", details: "Editorial author site with book showcase, blog and speaking enquiries.", tech: ["WordPress", "ACF"], url: "http://authorpratik.com", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80" },
  { title: "Barry Miller", cat: "Websites", desc: "Personal brand website.", details: "Elegant personal brand site with case studies and press.", tech: ["WordPress"], url: "https://www.barrymiller.net/", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80" },
  { title: "Ruby Todd", cat: "Websites", desc: "Author / creative portfolio.", details: "Boutique portfolio for an author — refined typography and long-form content layouts.", tech: ["WordPress"], url: "https://www.ruby-todd.com/", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80" },

  // APPS
  { title: "Unboxify", cat: "Apps", desc: "Product app experience.", details: "Custom mobile app development with polished UI and API-driven content.", tech: ["React Native", "REST API"], url: "https://www.unboxify.in", img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=80" },
  { title: "Olives.ie", cat: "Apps", desc: "Irish product platform.", details: "Product/e-commerce app experience with modern UI/UX.", tech: ["React", "API"], url: "https://olives.ie/", img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&q=80" },
  { title: "MeetMux", cat: "Apps", desc: "Social/meeting platform.", details: "Social meetup platform — modern responsive UI with real-time features.", tech: ["React", "Realtime"], url: "https://www.meetmux.com/", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" },
  { title: "Linear (inspired)", cat: "Apps", desc: "Productivity app reference build.", details: "Reference-grade productivity app UI with dense information design and buttery motion.", tech: ["React", "TypeScript"], url: "https://linear.app/", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80" },

  // SHOPIFY
  { title: "Fitera Sport", cat: "Shopify", desc: "Sports & performance Shopify store.", details: "Shopify storefront for a performance sports brand — custom sections, product bundles and speed-tuned theme.", tech: ["Shopify", "Liquid"], url: "https://Fiterasport.store", img: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=1200&q=80" },
  { title: "The Saje", cat: "Shopify", desc: "Lifestyle Shopify storefront.", details: "Boutique lifestyle Shopify build with editorial merchandising.", tech: ["Shopify", "Liquid"], url: "https://www.thesaje.com", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80" },
  { title: "RK Trends", cat: "Shopify", desc: "UAE fashion Shopify store.", details: "Fashion Shopify build for the UAE market — multi-currency, RTL-aware sections.", tech: ["Shopify", "Multi-currency"], url: "https://www.rktrends.ae/", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80" },
  { title: "Element Home", cat: "Shopify", desc: "Home & living Shopify store.", details: "Home & living Shopify build with editorial category pages.", tech: ["Shopify", "Liquid"], url: "https://elementhome.net/", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80" },
  { title: "Saramor", cat: "Shopify", desc: "Fashion Shopify storefront.", details: "Fashion Shopify storefront with bundle logic and premium PDP.", tech: ["Shopify", "Liquid"], url: "https://saramor.store/", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80" },
];

export function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);
  const current = openIdx !== null ? filtered[openIdx] : null;

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
                Live projects — <span className="text-gradient-gold italic font-normal">click to explore.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => { setActive(c); setOpenIdx(null); }}
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title + p.url} p={p} index={i} onClick={() => setOpenIdx(i)} />
          ))}
        </div>
      </div>

      <Modal open={openIdx !== null} onClose={() => setOpenIdx(null)} maxWidth="max-w-3xl">
        {current && (
          <div>
            <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/20">
              <img src={current.img} alt={current.title} className="h-64 w-full object-cover md:h-80" />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#E8C767]">
                {current.cat}
              </span>
              <h3 className="font-display text-3xl font-semibold text-white md:text-4xl">{current.title}</h3>
            </div>
            <p className="mt-4 leading-relaxed text-white/75">{current.details}</p>
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
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E8C767] via-[#D4AF37] to-[#A8862A] px-6 py-3 text-sm font-medium text-black gold-glow-hover"
              >
                <ExternalLink size={14} /> Visit Live Site
              </a>
              <MagneticButton variant="outline" href="#contact">Start a similar project</MagneticButton>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

function ProjectCard({ p, index, onClick }: { p: Project; index: number; onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-[#D4AF37]/15 bg-[#0a0a0a] text-left"
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
        <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="rounded-full bg-[#D4AF37] px-3 py-1.5 text-[11px] font-medium text-black">View details →</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-medium text-white md:text-2xl">{p.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{p.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-white/60">{t}</span>
          ))}
        </div>
        <div className="mt-4 truncate text-xs text-[#D4AF37]/70">{p.url.replace(/^https?:\/\//, "")}</div>
      </div>
    </motion.button>
  );
}

/* ============================== PROCESS ============================== */
type Step = {
  icon: typeof Compass;
  title: string;
  desc: string;
  details: string;
  outputs: string[];
};

const steps: Step[] = [
  { icon: Compass, title: "Discovery", desc: "Understanding your business, users, and ambitions.", details: "We start with a deep-dive workshop: goals, KPIs, competitors, users and constraints. I map the emotional and functional promise of the product so every later decision has a reference point.", outputs: ["Discovery doc", "User personas", "Success metrics", "Scope & risks"] },
  { icon: Ruler, title: "Planning", desc: "Architecture, scope, and a measurable roadmap.", details: "We turn the discovery into a real plan — sitemap, information architecture, technical stack, milestones and a delivery timeline you can hold me to.", outputs: ["Sitemap & IA", "Tech architecture", "Milestone roadmap", "Fixed-price scope"] },
  { icon: PenTool, title: "Design", desc: "Cinematic, on-brand interfaces that convert.", details: "High-fidelity design in Figma — design system, key screens, motion principles and prototypes. We iterate against real content until every screen feels inevitable.", outputs: ["Design system", "High-fi Figma", "Motion principles", "Interactive prototype"] },
  { icon: Code2, title: "Development", desc: "Production-grade code, engineered to scale.", details: "Clean, typed, tested code — React / TanStack / Next.js on the web, Kotlin / Swift / RN on mobile. Weekly demo builds so you see progress, never a black box.", outputs: ["Weekly demo builds", "Typed codebase", "CI/CD pipeline", "Component library"] },
  { icon: TestTube2, title: "Testing", desc: "Cross-device QA and performance budgets.", details: "Full QA across devices, unit + integration tests where they matter, accessibility audits, and Lighthouse / Core Web Vitals sign-off before launch.", outputs: ["Cross-device QA", "Accessibility audit", "CWV report", "Bug triage"] },
  { icon: Cloud, title: "Deployment", desc: "Zero-downtime launches on modern edge infra.", details: "Launch on Vercel / Cloudflare / Netlify / App Stores with zero-downtime cutover, staged environments, DNS and analytics wired up on day one.", outputs: ["Prod deploy", "Staging env", "DNS & SSL", "Analytics wired"] },
  { icon: LifeBuoy, title: "Support", desc: "Ongoing iteration, monitoring, and evolution.", details: "Monthly retainer: monitoring, backups, security patches, iteration credits and roadmap workshops so the product keeps evolving with the business.", outputs: ["Uptime monitoring", "Monthly reports", "Iteration credits", "Quarterly roadmap"] },
];

export function Process() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx !== null ? steps[openIdx] : null;

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
          <Reveal delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-sm text-white/55">Click any step to see the full playbook.</p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent lg:block" />
          <div className="space-y-6 lg:space-y-16">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
                  <div className={i % 2 ? "lg:order-2 lg:pl-16" : "lg:order-1 lg:pr-16 lg:text-right"}>
                    <button
                      type="button"
                      onClick={() => setOpenIdx(i)}
                      className="glass-strong group inline-block w-full max-w-xl rounded-3xl p-8 text-left transition-all duration-500 hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/[0.06] md:p-10"
                    >
                      <div className={`mb-4 flex items-center gap-4 ${i % 2 ? "" : "lg:flex-row-reverse"}`}>
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#E8C767] to-[#A8862A] text-black transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                          <s.icon size={20} />
                        </div>
                        <div className="font-mono text-xs tracking-widest text-[#D4AF37]/60">STEP / {String(i + 1).padStart(2, "0")}</div>
                      </div>
                      <h3 className="font-display text-2xl font-medium text-white md:text-3xl">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
                      <div className={`mt-5 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#D4AF37] ${i % 2 ? "" : "lg:flex-row-reverse"}`}>
                        Learn more <ArrowUpRight size={12} />
                      </div>
                    </button>
                  </div>
                  <div className={`hidden lg:block ${i % 2 ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative h-1 w-full">
                      <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37] gold-glow" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Modal open={openIdx !== null} onClose={() => setOpenIdx(null)} maxWidth="max-w-2xl">
        {active && (
          <div>
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ rotateY: -180, scale: 0.5, opacity: 0 }}
                animate={{ rotateY: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformPerspective: 1000 }}
                className="relative grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-[#E8C767] via-[#D4AF37] to-[#A8862A] text-black shadow-[0_0_40px_-5px_rgba(212,175,55,0.6)]"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-2xl border border-dashed border-black/20"
                />
                <active.icon size={30} />
              </motion.div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/70">
                  Step {openIdx !== null ? String(openIdx + 1).padStart(2, "0") : ""}
                </div>
                <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">{active.title}</h3>
              </div>
            </div>
            <p className="mt-6 leading-relaxed text-white/75">{active.details}</p>
            <div className="mt-8">
              <div className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]/70">Deliverables</div>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {active.outputs.map((d, i) => (
                  <motion.li
                    key={d}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-sm text-white/80"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#D4AF37]" />
                    {d}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <MagneticButton href="#contact">Start with {active.title} <ArrowUpRight size={16} /></MagneticButton>
            </div>
          </div>
        )}
      </Modal>
    </section>
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
            <motion.div
              key={r.label}
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <div className="group glass flex items-center gap-4 rounded-2xl p-6 transition-all duration-500 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/[0.04]">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#E8C767] to-[#A8862A] text-black transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
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
                <div className="pointer-events-none absolute -right-8 -top-8 font-display text-[180px] leading-none text-[#D4AF37]/10">&ldquo;</div>
                <p className="relative font-display text-xl leading-relaxed text-white/85 md:text-2xl">&ldquo;{t.quote}&rdquo;</p>
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
  { q: "What kind of projects do you take on?", a: "Premium websites, e-commerce platforms, Android & iOS apps, and Shopify/WordPress builds for founders and brands who value craft." },
  { q: "How long does a typical project take?", a: "Landing pages: 1–2 weeks. Business sites: 3–5 weeks. Web apps, mobile apps and e-commerce: 6–12 weeks depending on scope." },
  { q: "Do you work with international clients?", a: "Yes — I'm based in Bangalore, India and collaborate with clients globally, adapting to your timezone for meetings and reviews." },
  { q: "Do you offer ongoing maintenance?", a: "Absolutely. Monthly retainers cover updates, monitoring, backups, security patches and iterative improvements." },
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
              Let&apos;s create <span className="text-gradient-gold italic font-normal">something premium.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {[
              { icon: Mail, label: "Email", value: "aanushaha1998@gmail.com", href: "mailto:aanushaha1998@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 96634 71531", href: "tel:+919663471531" },
              { icon: MessageCircle, label: "WhatsApp", value: "+91 96634 71531", href: "https://wa.me/919663471531" },
              { icon: Linkedin, label: "LinkedIn", value: "anusha-h-a", href: "https://www.linkedin.com/in/anusha-h-a-b44081220" },
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
                className="group glass flex items-center gap-5 rounded-2xl p-5 transition-colors hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/[0.04]"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#E8C767] to-[#A8862A] text-black">
                  <c.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-widest text-[#D4AF37]/70">{c.label}</div>
                  <div className="mt-0.5 truncate font-display text-lg text-white">{c.value}</div>
                </div>
                {c.href && <ArrowUpRight className="text-white/30 transition-all group-hover:text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />}
              </motion.a>
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
  return (
    <footer className="relative border-t border-[#D4AF37]/15 bg-[#050505] pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-3xl md:text-4xl font-semibold text-gradient-gold">Anusha H A</div>
            <p className="mt-4 max-w-sm text-white/60">App Developer &amp; Full Stack Developer crafting cinematic digital experiences for premium brands worldwide. Based in Bangalore, Karnataka.</p>
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
            <ul className="mt-5 space-y-2 text-sm">
              <li><a href="mailto:aanushaha1998@gmail.com" className="text-white/60 hover:text-[#E8C767]">aanushaha1998@gmail.com</a></li>
              <li><a href="tel:+919663471531" className="text-white/60 hover:text-[#E8C767]">+91 96634 71531</a></li>
              <li className="flex items-center gap-1.5 text-white/60"><MapPin size={12} className="text-[#D4AF37]" /> Bangalore, Karnataka</li>
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
