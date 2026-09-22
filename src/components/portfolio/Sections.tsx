import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { useRef, useState } from "react";
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
import anushaPortrait from "@/assets/anusha.jpeg";

/* ============================== ABOUT ============================== */
export function About() {
  const portraitSrc = anushaPortrait;


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
                className="relative pb-28 sm:pb-24 lg:pb-0"
              >
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#D4AF37]/40 via-[#E8C767]/20 to-transparent blur-2xl" />
                <div className="relative rounded-[2rem] border border-[#D4AF37]/40 bg-[#0a0a0a] p-2">
                  <img
                    src={portraitSrc}
                    alt="Anusha H A — App Developer & Full Stack Developer"
                    width={1080}
                    height={1354}
                    className="block h-auto w-full max-w-full rounded-[1.6rem] object-contain"
                    loading="eager"
                    decoding="sync"
                    fetchPriority="high"
                  />

                  <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] ring-1 ring-inset ring-white/10" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="glass-strong absolute bottom-0 right-0 rounded-2xl px-4 py-3 lg:-bottom-8 lg:-right-8 lg:px-5 lg:py-4"
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
                className="glass-strong absolute bottom-16 left-0 flex items-center gap-2 rounded-full px-3 py-1.5 lg:-left-4 lg:-top-4 lg:bottom-auto lg:px-4 lg:py-2"
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
  client: string;
  desc: string;
  problem: string;
  solution: string;
  result: string;
  tech: string[];
  url: string;
  img: string;
};

const projects: Project[] = [
  // WEBSITES
  { title: "Anusha Portfolio", cat: "Websites", client: "Personal brand", desc: "Editorial portfolio with scroll-driven storytelling.", problem: "Needed a personal brand site that instantly signalled senior-level craft to international clients.", solution: "Designed and built an editorial, scroll-driven site with refined typography and cinematic motion.", result: "Higher enquiry quality and a clear first impression for prospective clients.", tech: ["React", "GSAP", "Tailwind"], url: "https://anushaha99.portfolio.website/", img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80" },
  { title: "Saksham Fashion", cat: "Websites", client: "Fashion label", desc: "Lookbook-first storefront concept.", problem: "A fashion label needed a launch site that felt premium without a heavy platform.", solution: "Built a fast lookbook-first marketing site with product spotlight sections and clean mobile layouts.", result: "Launched quickly with a fast, image-led experience on every device.", tech: ["React", "Netlify", "Tailwind"], url: "https://sakshamfashion.netlify.app/", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80" },
  { title: "Florida Green Contractors", cat: "Websites", client: "US contractor", desc: "Service business site with lead capture.", problem: "A US contractor was losing enquiries through an outdated site with no clear quote path.", solution: "Rebuilt the site around service pages, credibility signals and a multi-step quote form.", result: "A structured lead pipeline and stronger search visibility.", tech: ["WordPress", "PHP", "SEO"], url: "https://floridagreencontractors.com/", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80" },
  { title: "Rol Drive", cat: "Websites", client: "Mobility brand", desc: "Fleet showcase and booking journey.", problem: "Customers could not easily browse the fleet or start a booking.", solution: "Created a fleet showcase with a guided booking journey and responsive layouts.", result: "Simpler booking path and clearer fleet presentation.", tech: ["Next.js", "Tailwind"], url: "https://www.roldrive.com/", img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80" },
  { title: "RebuildIt Inc.", cat: "Websites", client: "Construction firm", desc: "Remodeling company site with project gallery.", problem: "The firm's past work was invisible online, making trust hard to earn.", solution: "Built service pages, a project gallery, testimonials and an enquiry pipeline.", result: "Past work now sells the business before the first call.", tech: ["React", "Tailwind"], url: "https://RebuildItInc.com", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80" },
  { title: "Birla Pivot Form", cat: "Websites", client: "Enterprise B2B", desc: "Multi-step enterprise onboarding flow.", problem: "A long enterprise onboarding form had heavy drop-off and validation errors.", solution: "Split it into a multi-step flow with inline validation and saved progress.", result: "Cleaner submissions and a far less intimidating form.", tech: ["React", "Form logic"], url: "http://birlapivot.com/form", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80" },
  { title: "Author Pratik", cat: "Websites", client: "Author", desc: "Author branding site with book showcase.", problem: "No central home for books, blog and speaking enquiries.", solution: "Built an editorial author site with book showcase, blog and enquiry forms.", result: "One destination for readers, press and event organisers.", tech: ["WordPress", "ACF"], url: "http://authorpratik.com", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80" },
  { title: "Barry Miller", cat: "Websites", client: "Personal brand", desc: "Personal brand site with case studies.", problem: "Needed a credible online presence for a consulting practice.", solution: "Designed an elegant personal brand site with case studies and press coverage.", result: "A polished presence that supports high-value conversations.", tech: ["WordPress"], url: "https://www.barrymiller.net/", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80" },
  { title: "Ruby Todd", cat: "Websites", client: "Author", desc: "Boutique author portfolio.", problem: "Long-form writing needed a calm, readable home.", solution: "Built a boutique portfolio with refined typography and long-form layouts.", result: "A reading experience that matches the writing.", tech: ["WordPress"], url: "https://www.ruby-todd.com/", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80" },
  { title: "LearnWorlds", cat: "Websites", client: "Education technology", desc: "Udemy-style e-learning platform for courses, instructors and learners.", problem: "Learners needed one clear destination to discover courses, track progress and continue lessons across devices.", solution: "Built a responsive course marketplace with category discovery, instructor profiles, structured lesson pages, enrolment flows and learner progress dashboards.", result: "A scalable learning experience that makes finding, purchasing and completing courses simple on mobile and desktop.", tech: ["React", "TypeScript", "Learning Platform", "Responsive UI"], url: "https://learnworls.com", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80" },
  { title: "EduExplorer", cat: "Websites", client: "Study-abroad consultancy", desc: "Course and university discovery portal for students.", problem: "Students were comparing universities, courses and entry requirements across dozens of scattered pages and giving up before enquiring.", solution: "Built a searchable discovery portal with country and course filters, university profile pages, eligibility details, side-by-side comparison and a guided enquiry form that routes leads to counsellors.", result: "Students find suitable programmes in a few clicks and the team receives far better qualified enquiries.", tech: ["React", "TypeScript", "Search & Filters", "Responsive UI"], url: "https://eduexplorer.in", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" },
  { title: "Learniflex", cat: "Websites", client: "Online training provider", desc: "Flexible self-paced learning platform with live classes.", problem: "Learners wanted self-paced lessons and live sessions in one place, but the old site could not handle schedules, batches or progress.", solution: "Developed a learning platform with course catalogue, batch scheduling, live class links, downloadable resources, quizzes, certificates and a learner dashboard with progress tracking.", result: "One platform for both self-paced and live learning, with far fewer support questions about schedules and access.", tech: ["React", "TypeScript", "LMS", "Dashboards"], url: "https://learniflex.com", img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200&q=80" },
  { title: "Plato Learn", cat: "Websites", client: "K-12 tutoring brand", desc: "Tutoring and concept-learning website for school students.", problem: "Parents could not quickly understand which grades, subjects and tutors were available, and booking a demo class took too long.", solution: "Created a clean, parent-friendly site with grade and subject navigation, tutor profiles, lesson previews, pricing plans and a one-step demo class booking flow.", result: "Faster demo bookings and a clearer story for parents choosing a tutoring partner.", tech: ["React", "TypeScript", "Booking flow", "SEO"], url: "https://platolearn.com", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80" },
  { title: "SubSchool — Website", cat: "Websites", client: "School management platform", desc: "School management web platform for admins, teachers and parents.", problem: "Schools were running admissions, attendance, fees and communication on paper and spreadsheets, with no single record.", solution: "Built a role-based web platform covering student records, class and timetable management, attendance, fee tracking with receipts, exam results and announcements to parents.", result: "Administrators run daily school operations from one dashboard instead of chasing registers and sheets.", tech: ["React", "TypeScript", "Role-based access", "Dashboards"], url: "https://subschool.in", img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80" },

  // APPS
  { title: "Unboxify", cat: "Apps", client: "Product startup", desc: "Mobile app with API-driven content.", problem: "The product needed a mobile app experience that felt as polished as the brand.", solution: "Built a cross-platform app with API-driven content and a refined interface.", result: "A consistent, fast app on both Android and iOS.", tech: ["React Native", "REST API"], url: "https://www.unboxify.in", img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=80" },
  { title: "Olives.ie", cat: "Apps", client: "Irish retailer", desc: "Product and ordering experience.", problem: "Ordering was clumsy on phones and losing customers.", solution: "Rebuilt the product and ordering journey with a mobile-first interface.", result: "Smoother ordering and fewer abandoned carts.", tech: ["React", "API"], url: "https://olives.ie/", img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&q=80" },
  { title: "MeetMux", cat: "Apps", client: "Social platform", desc: "Social meetup platform with live features.", problem: "A social platform needed real-time interaction without feeling heavy.", solution: "Built responsive screens with real-time updates and clear social flows.", result: "Live interaction that stays fast on everyday phones.", tech: ["React", "Realtime"], url: "https://www.meetmux.com/", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" },

  // SHOPIFY
  { title: "Fitera Sport", cat: "Shopify", client: "Sports brand", desc: "Performance sportswear storefront.", problem: "A slow theme was hurting both conversions and mobile experience.", solution: "Built custom sections, product bundles and a speed-tuned Shopify theme.", result: "Faster store with a stronger bundle-led average order value.", tech: ["Shopify", "Liquid"], url: "https://Fiterasport.store", img: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=1200&q=80" },
  { title: "The Saje", cat: "Shopify", client: "Lifestyle brand", desc: "Editorial lifestyle storefront.", problem: "Products looked generic in a stock theme.", solution: "Created editorial merchandising sections and a boutique product page.", result: "A storefront that reads like a brand, not a template.", tech: ["Shopify", "Liquid"], url: "https://www.thesaje.com", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80" },
  { title: "RK Trends", cat: "Shopify", client: "UAE fashion", desc: "Multi-currency fashion store.", problem: "Selling across the UAE needed multi-currency and region-aware layouts.", solution: "Built multi-currency support with RTL-aware sections and localised content.", result: "A store that fits its market on the first visit.", tech: ["Shopify", "Multi-currency"], url: "https://www.rktrends.ae/", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80" },
  { title: "Element Home", cat: "Shopify", client: "Home & living", desc: "Home and living storefront.", problem: "Large catalogue was hard to browse by room and style.", solution: "Built editorial category pages with clearer filtering and imagery.", result: "Shoppers reach the right product in fewer steps.", tech: ["Shopify", "Liquid"], url: "https://elementhome.net/", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80" },
  { title: "Saramor", cat: "Shopify", client: "Fashion brand", desc: "Fashion storefront with bundle logic.", problem: "Flat product pages were not encouraging larger orders.", solution: "Built a premium product page with bundle logic and upsell sections.", result: "Larger orders and a more premium shopping feel.", tech: ["Shopify", "Liquid"], url: "https://saramor.store/", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80" },
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
                <Sparkles size={12} /> Client Work
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
                Real projects, <span className="text-gradient-gold italic font-normal">real outcomes.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 max-w-xl text-white/55">
                Every project below is live. Open one to see the brief, what I built and the outcome.
              </p>
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title + p.url} p={p} index={i} onClick={() => setOpenIdx(i)} />
          ))}
        </div>
      </div>

      <Modal open={openIdx !== null} onClose={() => setOpenIdx(null)} maxWidth="max-w-3xl">
        {current && (
          <div>
            <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/20">
              <img src={current.img} alt={current.title} className="h-56 w-full object-cover md:h-72" />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#E8C767]">
                {current.cat}
              </span>
              <h3 className="font-display text-3xl font-semibold text-white md:text-4xl">{current.title}</h3>
            </div>
            <div className="mt-2 text-sm text-white/45">{current.client}</div>

            <div className="mt-7 space-y-5">
              {[
                { label: "The brief", value: current.problem },
                { label: "What I built", value: current.solution },
                { label: "The outcome", value: current.result },
              ].map((row) => (
                <div key={row.label} className="border-l border-[#D4AF37]/30 pl-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#D4AF37]/80">{row.label}</div>
                  <p className="mt-1.5 leading-relaxed text-white/75">{row.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
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
  const cardRef = useRef<HTMLButtonElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const springX = useSpring(rotateX, { stiffness: 220, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 16);
    rotateX.set((0.5 - py) * 14);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareX.set(50);
    glareY.set(50);
  };

  return (
    <motion.button
      ref={cardRef}
      type="button"
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.985 }}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1000, transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] text-left transition-colors hover:border-[#D4AF37]/40 hover:shadow-[0_30px_80px_-40px_rgba(212,175,55,0.65)]"
    >
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 14 + (index % 4) * 2, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -inset-[65%] opacity-20 [background:conic-gradient(from_0deg,transparent_0deg,transparent_285deg,#D4AF37_330deg,transparent_360deg)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-px z-[1] rounded-[15px] bg-[#0a0a0a]"
      />
      <div className="relative z-[2] aspect-[16/10] overflow-hidden">
        <motion.img
          src={p.img}
          alt={p.title}
          loading="lazy"
          style={{ translateZ: 40 }}
          className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full border border-[#D4AF37]/40 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-[#E8C767] backdrop-blur">
          {p.cat}
        </span>
      </div>
      <motion.div
        aria-hidden
        style={{ background: useMotionTemplate`radial-gradient(400px circle at ${glareX}% ${glareY}%, rgba(212,175,55,0.18), transparent 60%)` }}
        className="pointer-events-none absolute inset-0 z-[3] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <motion.div style={{ translateZ: 25 }} className="relative z-[2] p-6">
        <h3 className="font-display text-xl font-medium text-white md:text-2xl">{p.title}</h3>
        <div className="mt-1 text-xs uppercase tracking-widest text-white/40">{p.client}</div>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{p.desc}</p>
        <div className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#D4AF37] transition-transform group-hover:translate-x-1">
          View case study <ArrowUpRight size={14} />
        </div>
      </motion.div>
    </motion.button>
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

/* ============================== CONTACT ============================== */
export function Contact() {
  const initialContactState = { name: "", email: "", message: "" };
  const [state, setState] = useState(initialContactState);
  const [sent, setSent] = useState(false);
  const [focus, setFocus] = useState<string | null>(null);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setState(initialContactState), 450);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_60%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ rotateX: [0, 18, 0], rotateY: [0, -28, 0], y: [0, -28, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-[8%] top-24 hidden h-28 w-28 rounded-3xl border border-[#D4AF37]/25 bg-[#D4AF37]/5 shadow-[0_0_70px_-20px_rgba(212,175,55,0.7)] backdrop-blur-xl lg:block"
        style={{ transformPerspective: 900 }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotateZ: [0, 360], scale: [1, 1.12, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute bottom-28 left-[6%] hidden h-36 w-36 rounded-full border border-dashed border-[#D4AF37]/20 lg:block"
      />
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
                    <label className={`absolute left-0 pointer-events-none font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 ${focus === f || state[f] ? "-top-1 text-[10px] text-[#D4AF37]" : "top-4 text-white/40"}`}>
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
                    name="message"
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
                  <div className="text-xs text-white/40">{sent ? "Details sent to aanushaha1998@gmail.com." : "Typical reply within 24 hours."}</div>
                  <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E8C767] via-[#D4AF37] to-[#A8862A] px-7 py-3.5 text-sm font-medium tracking-wide text-black gold-glow-hover">
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
    <footer className="relative border-t border-[#D4AF37]/15 bg-[#050505] pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-3xl md:text-4xl font-semibold text-gradient-gold">Anusha H A</div>
            <p className="mt-4 max-w-sm text-white/60">App Developer &amp; Full Stack Developer crafting cinematic digital experiences for premium brands worldwide. Based in Bangalore, Karnataka.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { icon: Globe, href: "#portfolio", label: "Portfolio" },
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
              {["About", "Services", "Skills", "Portfolio", "Contact"].map((l) => (
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
