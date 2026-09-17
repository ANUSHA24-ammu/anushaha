import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const t = setInterval(() => {
      p += Math.random() * 12 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(t);
        setTimeout(() => setDone(true), 500);
      }
      setProgress(Math.min(100, p));
    }, 120);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setHidden(true), 1100);
    return () => clearTimeout(t);
  }, [done]);

  if (hidden) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0B0F]"
      initial={{ opacity: 1, y: 0 }}
      animate={done ? { opacity: 0, y: "-100%" } : { opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="mb-8 font-display text-4xl md:text-6xl font-semibold tracking-tight text-gradient-accent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Anusha H A
      </motion.div>
      <div className="h-[1px] w-56 md:w-80 overflow-hidden bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#93C5FD]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>
      <div className="mt-4 font-mono text-xs tracking-[0.3em] text-[#3B82F6]/70">
        {String(Math.round(progress)).padStart(3, "0")}%
      </div>
    </motion.div>
  );
}
