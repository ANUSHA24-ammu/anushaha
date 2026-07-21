import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({ children, delay = 0, className = "", as: As = "div" }: { children: ReactNode; delay?: number; className?: string; as?: keyof React.JSX.IntrinsicElements }) {
  const Comp = motion[As as "div"];
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      variants={variants}
    >
      {children}
    </Comp>
  );
}
