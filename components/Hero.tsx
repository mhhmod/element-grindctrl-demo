"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { contact, heroSlides } from "@/lib/data";

export function Hero() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: rootRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const typeY = useTransform(scrollYProgress, [0, 1], ["0%", "-32%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, [reduce, paused]);

  const go = useCallback((i: number) => {
    setActive(((i % heroSlides.length) + heroSlides.length) % heroSlides.length);
  }, []);

  const slide = heroSlides[active];

  return (
    <section
      id="top"
      ref={rootRef}
      aria-label="Element — opening"
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-[#1a1512] text-[#f6f1e8]"
      onMouseEnter={() => setPaused(false)}
    >
      {/* Film */}
      <motion.div style={reduce ? undefined : { y: imgY }} className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={slide.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 1.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={active === 0}
              sizes="100vw"
              className={reduce ? "object-cover" : "kenburns object-cover"}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1512] via-[#1a1512]/25 to-[#1a1512]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1512]/55 via-transparent to-transparent" />
      </motion.div>

      {/* Vertical coordinate */}
      <p
        aria-hidden
        className="vertical-rl absolute right-4 top-1/2 hidden -translate-y-1/2 text-[10px] font-semibold uppercase tracking-[0.34em] text-white/60 md:block lg:right-8"
      >
        Mediterranean · 31.1° N — {slide.coord}
      </p>

      {/* Composition */}
      <motion.div style={reduce ? undefined : { y: typeY, opacity: fade }} className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-5 pb-10 pt-32 md:px-10 md:pb-14">
        <p className="mask-line">
          <motion.span
            initial={{ y: "112%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d9c7a7]"
          >
            Element Real Estate — Egypt &amp; the Gulf
          </motion.span>
        </p>

        <h1 className="font-display mt-5 tracking-[-0.03em]">
          <span className="mask-line">
            <motion.span
              initial={{ y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[clamp(3.2rem,11vw,10rem)] font-medium leading-[0.92]"
            >
              Find your
            </motion.span>
          </span>
          <span className="mask-line">
            <motion.span
              initial={{ y: "112%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="block text-[clamp(3.2rem,11vw,10rem)] font-light italic leading-[0.95] text-[#f6f1e8]"
            >
              Element<span className="not-italic text-[#d9c7a7]">.</span>
            </motion.span>
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="max-w-[46ch] text-[15px] leading-relaxed text-white/80"
          >
            Coast to Cairo to Dubai — through the consultant who knows your
            compound by phase, wind and resale depth.{" "}
            <span className="text-[#f6f1e8]">We listen. We deliver. You move.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.82 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#index"
              className="group flex items-center gap-3 bg-[#f6f1e8] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1a1512] transition-colors hover:bg-[#d9c7a7]"
            >
              Begin the search
              <ArrowDown size={15} className="transition-transform duration-300 group-hover:translate-y-1" />
            </a>
            <a
              href={contact.telHref}
              className="flex items-center gap-3 border border-white/30 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10"
            >
              {contact.hotline}
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>

        {/* Location sequencer */}
        <div className="mt-10 flex items-end justify-between gap-6 border-t border-white/20 pt-5">
          <div className="min-h-[52px]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
              >
                <p className="font-display text-2xl italic md:text-3xl">{slide.place}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">
                  {slide.coord}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-2" role="tablist" aria-label="Opening scenes">
            {heroSlides.map((s, i) => (
              <button
                key={s.place}
                role="tab"
                aria-selected={i === active}
                aria-label={`Scene ${i + 1}: ${s.place}`}
                onClick={() => go(i)}
                className="group flex items-center gap-2 py-2"
              >
                <span
                  className={`block h-[3px] transition-all duration-500 ${
                    i === active ? "w-12 bg-[#d9c7a7]" : "w-6 bg-white/30 group-hover:bg-white/60"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
