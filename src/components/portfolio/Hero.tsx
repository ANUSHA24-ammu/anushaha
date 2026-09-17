import { motion, useScroll, useTransform } from "framer-motion";
import { Suspense, lazy, useRef } from "react";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";

const HeroScene = lazy(() => import("./HeroScene").then((m) => ({ default: m.HeroScene })));

const stack = ["React", "React Native", "Next.js", "Shopify", "WordPress", "Node.js"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0B0F] px-5 pt-28 pb-24 sm:px-6 md:pt-32"
    >
      {/* Ambient 3D backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-[10%] -right-[10%] h-[600px] w-[600px] rounded-full bg-[#3B82F6]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-[#93C5FD]/5 blur-[100px]" />

      {/* Subtle grid */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0A0B0F] to-transparent" />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#3B82F6]/20 bg-[#141821]/80 px-4 py-2 backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3B82F6] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3B82F6]" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#93C5FD] sm:text-xs">
            Anusha H A · Bangalore · 4+ Years
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl"
        >
          App Developer &amp;
          <br />
          <span className="text-gradient-accent">Full Stack Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mx-auto mt-7 max-w-2xl text-base font-medium leading-relaxed text-[#93C5FD]/70 md:mt-8 md:text-xl"
        >
          Anusha H A — building premium Android &amp; iOS apps, Shopify storefronts, WordPress sites
          and web platforms for ambitious international brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#3B82F6] px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
          >
            Hire Me <ArrowUpRight size={16} />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-[#141821] px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#1E2330]"
          >
            View Projects
          </a>
          <a
            href="mailto:aanushaha1998@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-semibold text-[#93C5FD] transition-colors hover:text-white"
          >
            <Mail size={15} /> Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/5 pt-8"
        >
          {stack.map((s) => (
            <span key={s} className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35">
              {s}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ArrowDown size={14} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
