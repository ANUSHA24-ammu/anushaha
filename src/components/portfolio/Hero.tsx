import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, Suspense, lazy, useState } from "react";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroScene = lazy(() => import("./HeroScene").then((m) => ({ default: m.HeroScene })));

const particleSeed = Array.from({ length: 24 }, (_, i) => {
  const x = (i * 37 + 11) % 100;
  const y = (i * 53 + 17) % 100;
  return {
    size: 1 + ((i * 19) % 30) / 10,
    left: x,
    top: y,
    duration: 6 + ((i * 7) % 80) / 10,
    delay: ((i * 13) % 40) / 10,
  };
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen overflow-hidden bg-[#050505] pt-20">
      {/* Visual backdrop: full 3D on larger screens, lightweight gold glow on phones */}
      <div className="absolute inset-0">
        {isMobile ? (
          <LightBackdrop />
        ) : (
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        )}
      </div>

      {/* Radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,5,5,0.85)_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* Floating particles */}
      <Particles count={isMobile ? 8 : 24} />

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-4 py-1.5 backdrop-blur-xl"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-gold-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#E8C767]">Anusha H A · Bangalore · 4+ Years</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[8rem]"
        >
          <span className="text-gradient-gold italic font-normal">App Developer</span>
          <br />
          &amp; Full Stack Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mx-auto mt-8 max-w-2xl font-sans text-base leading-relaxed text-white/65 md:text-lg"
        >
          Anusha H A — building premium Android &amp; iOS apps, Shopify storefronts, WordPress sites and web platforms for ambitious international brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton href="#contact">
            Hire Me <ArrowUpRight size={16} />
          </MagneticButton>
          <MagneticButton variant="outline" href="#portfolio">
            View Projects
          </MagneticButton>
          <MagneticButton variant="ghost" href="mailto:aanushaha1998@gmail.com">
            <Mail size={14} /> Contact Me
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-[#D4AF37]/60">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
              <ArrowDown size={14} />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Particles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particleSeed.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay }}
        />
      ))}
    </div>
  );
}
