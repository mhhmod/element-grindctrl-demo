"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { indexEntries } from "@/lib/data";
import { Masked, Reveal } from "./Reveal";

export function AddressBook() {
  const [hovered, setHovered] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="index" aria-label="The address book" className="bg-[#f6f1e8] py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow text-[#671e2e]">01 — The address book</p>
              </Reveal>
              <Masked
                as="h2"
                delay={0.1}
                className="font-display mt-5 text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.98] tracking-tight"
                lines={["Six places,", <span key="b" className="italic font-light text-[#671e2e]">known by heart.</span>]}
              />
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-[38ch] text-[15px] leading-relaxed text-[#3d3430]">
                  Not a catalogue — a short list the network can walk blindfolded.
                  Follow a name into its chapter.
                </p>
              </Reveal>
              {/* Floating preview (desktop) */}
              <div className="relative mt-8 hidden h-[300px] lg:block" aria-hidden>
                <AnimatePresence mode="popLayout">
                  {hovered !== null && (
                    <motion.div
                      key={hovered}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="img-treatment absolute inset-0 overflow-hidden"
                    >
                      <Image
                        src={indexEntries[hovered].image}
                        alt=""
                        fill
                        sizes="400px"
                        loading="lazy"
                        className="object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                {hovered === null && (
                  <div className="absolute inset-0 flex items-center justify-center border border-[#1a1512]/15 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3d3430]/50">
                    Hover a name
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ol>
              {indexEntries.map((e, i) => (
                <Reveal key={e.no} delay={Math.min(i * 0.04, 0.2)}>
                  <li>
                    <a
                      href="#chapters"
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                      onFocus={() => setHovered(i)}
                      onBlur={() => setHovered(null)}
                      className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-t border-[#1a1512]/15 py-6 transition-colors last:border-b hover:bg-[#ede4d3]/60 md:grid-cols-[64px_1fr_1fr_auto] md:gap-6 md:py-8"
                    >
                      <span className="font-display text-sm italic text-[#671e2e]">{e.no}</span>
                      <span>
                        <span className="font-display block text-[clamp(1.9rem,4vw,3.4rem)] leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                          {e.name}
                        </span>
                        <span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d3430]/60">
                          {e.corridor}
                        </span>
                      </span>
                      <span className="hidden max-w-[30ch] text-sm leading-relaxed text-[#3d3430]/80 md:block">
                        {e.line}
                        <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#671e2e]">
                          {e.developer}
                        </span>
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-[#1a1512]/20 transition-all duration-300 group-hover:border-[#671e2e] group-hover:bg-[#671e2e] group-hover:text-white">
                        <ArrowRight size={17} className="transition-transform duration-300 group-hover:-rotate-45" />
                      </span>
                      {/* Mobile thumb */}
                      <span className="img-treatment relative col-span-3 block h-44 overflow-hidden md:hidden">
                        <Image src={e.image} alt={`${e.name} — ${e.corridor}`} fill sizes="100vw" loading="lazy" className="object-cover" />
                      </span>
                    </a>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.1}>
              <a
                href="https://element-realestate.com/compounds"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1a1512]"
              >
                <span className="link-line">Full compound list on element-realestate.com</span>
                <ArrowUpRight size={15} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
