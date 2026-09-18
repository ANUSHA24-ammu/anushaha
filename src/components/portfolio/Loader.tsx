import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const t = setInterval(() => {
      p += 28;
      if (p >= 100) {
        p = 100;
        clearInterval(t);
        setTimeout(() => setDone(true), 80);
      }
      setProgress(Math.min(100, p));
    }, 55);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setHidden(true), 500);
    return () => clearTimeout(t);
  }, [done]);

  if (hidden) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
      initial={{ opacity: 1, y: 0 }}
      animate={done ? { opacity: 0, y: "-100%" } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="mb-8 font-display text-4xl md:text-6xl font-semibold tracking-tight text-gradient-gold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Anusha H A
      </motion.div>
      <div className="h-[1px] w-56 md:w-80 overflow-hidden bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-[#A8862A] via-[#D4AF37] to-[#E8C767]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>
      <div className="mt-4 font-mono text-xs tracking-[0.3em] text-[#D4AF37]/70">
        {String(Math.round(progress)).padStart(3, "0")}%
      </div>
    </motion.div>
  );
}
