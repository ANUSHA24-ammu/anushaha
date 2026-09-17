import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 100], ["rgba(5,5,5,0)", "rgba(5,5,5,0.7)"]);
  const border = useTransform(scrollY, [0, 100], ["rgba(59,130,246,0)", "rgba(59,130,246,0.15)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ backgroundColor: bg, borderColor: border }}
      className="fixed top-0 z-50 w-full border-b backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        <a href="#top" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[#3B82F6]/40 bg-[#3B82F6]/5 font-display text-sm font-semibold text-[#3B82F6]">A</span>
          <span className="font-display text-sm font-medium tracking-widest text-white/90">ANUSHA<span className="text-[#3B82F6]">.</span></span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="group relative font-sans text-xs tracking-[0.2em] uppercase text-white/70 transition-colors hover:text-[#93C5FD]">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#3B82F6] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/40 px-4 py-2 text-xs uppercase tracking-widest text-[#93C5FD] transition-all hover:bg-[#3B82F6] hover:text-white">
          Let's Talk
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-[#3B82F6]/10 bg-[#0A0B0F]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-white/5 py-3 text-sm tracking-wider text-white/80 hover:text-[#93C5FD]">
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
