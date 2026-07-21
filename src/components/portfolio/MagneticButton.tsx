import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "gold" | "outline" | "ghost";
  href?: string;
  className?: string;
};

export function MagneticButton({ children, onClick, variant = "gold", href, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const tx = useTransform(sx, (v) => v * 0.4);
  const ty = useTransform(sy, (v) => v * 0.4);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set(e.clientX - (r.left + r.width / 2));
    y.set(e.clientY - (r.top + r.height / 2));
  };
  const reset = () => { x.set(0); y.set(0); };

  const base = "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors";
  const styles = {
    gold: "bg-gradient-to-r from-[#E8C767] via-[#D4AF37] to-[#A8862A] text-black gold-glow-hover",
    outline: "border border-[#D4AF37]/40 text-[#E8C767] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]",
    ghost: "text-white/80 hover:text-[#E8C767]",
  }[variant];

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      style={{ x: tx, y: ty }}
      className={`${base} ${styles} ${className} cursor-pointer select-none`}
    >
      <motion.span style={{ x: useTransform(sx, (v) => v * 0.2), y: useTransform(sy, (v) => v * 0.2) }}>
        {children}
      </motion.span>
    </motion.div>
  );

  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}
