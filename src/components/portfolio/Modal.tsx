import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
};

export function Modal({ open, onClose, children, maxWidth = "max-w-3xl" }: Props) {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const t = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(t);
    } else {
      setVisible(false);
      const t = setTimeout(() => setMounted(false), 350);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md transition-all duration-300 ${
        visible ? "bg-black/80 opacity-100" : "bg-black/0 opacity-0"
      }`}
    >
      <motion.div
        initial={false}
        animate={
          visible
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.92, y: 30 }
        }
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full ${maxWidth} max-h-[90vh] overflow-y-auto rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#0d0b06] via-[#0a0a0a] to-[#050505] p-8 md:p-10 shadow-[0_0_80px_-10px_rgba(212,175,55,0.4)]`}
      >
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#D4AF37]/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-[100px]" />
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-[#D4AF37]/30 bg-black/40 text-[#E8C767] transition-all hover:rotate-90 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
        >
          <X size={16} />
        </button>
        <div className="relative">{children}</div>
      </motion.div>
    </div>
  );
}
