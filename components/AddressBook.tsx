"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { indexEntries } from "@/lib/data";
import { Masked, Reveal } from "./Reveal";

export function AddressBook() {
  // Never empty: the first address is selected from the start.
  const [selected, setSelected] = useState(0);
  const reduce = useReducedMotion();
  const current = indexEntries[selected];

  return (
    <section id="index" aria-label="The address book" className="bg-[#f6f1e8] py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <p className="eyebrow text-[#671e2e]">01 — The address book</p>
              </Reveal>
              <Masked
                as="h2"
                delay={0.1}
                className="font-display mt-5 text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.98] tracking-tight"
                lines={["Six places,", <span key="b" className="italic font-light text-[#671e2e]">known by heart.</span>]}
              />
              <Reveal delay={0.2}>
                <p className="mt-5 max-w-[38ch] text-[15px] leading-relaxed text-[#3d3430]">
                  Not a catalogue — a short list the network can walk blindfolded.
                  Follow a name into its chapter.
                </p>
              </Reveal>

              {/* Living preview — always shows the selected address (desktop) */}
              <div className="img-treatment relative mt-8 hidden h-[380px] overflow-hidden bg-[#1a1512] xl:h-[420px] lg:block">
                <AnimatePresence>
                  <motion.div
                    key={selected}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={current.image}
                      alt={`${current.name} — ${current.corridor}`}
                      fill
                      sizes="520px"
                      loading={selected === 0 ? "eager" : undefined}
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" aria-hidden />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5" aria-live="polite">
                  <div>
                    <p className="font-display text-2xl text-white">{current.name}</p>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white/70">
                      {current.corridor}
                    </p>
                  </div>
                  <p className="font-display text-sm italic text-[#d9c7a7]">
                    {current.no} / 06
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol>
              {indexEntries.map((e, i) => {
                const isActive = i === selected;
                return (
                  <Reveal key={e.no} delay={Math.min(i * 0.04, 0.2)}>
                    <li>
                      <a
                        href="#chapters"
                        onMouseEnter={() => setSelected(i)}
                        onFocus={() => setSelected(i)}
                        onClick={() => setSelected(i)}
                        aria-current={isActive ? "true" : undefined}
                        className={`group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-[#1a1512]/15 py-5 transition-colors last:border-b md:grid-cols-[56px_1fr_auto] md:gap-6 md:py-6 ${
                          isActive ? "bg-[#ede4d3]/70" : "hover:bg-[#ede4d3]/50"
                        }`}
                      >
                        <span className={`font-display text-sm italic transition-colors ${isActive ? "text-[#671e2e]" : "text-[#3d3430]/50"}`}>
                          {e.no}
                        </span>
                        <span className="min-w-0">
                          <span className={`font-display block truncate text-[clamp(1.7rem,3.6vw,2.9rem)] leading-none tracking-tight transition-all duration-300 md:whitespace-normal ${isActive ? "translate-x-2 text-[#671e2e]" : "group-hover:translate-x-2"}`}>
                            {e.name}
                          </span>
                          <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3d3430]/60 md:text-[11px]">
                            {e.corridor} · {e.developer}
                          </span>
                        </span>
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 md:h-11 md:w-11 ${
                            isActive
                              ? "border-[#671e2e] bg-[#671e2e] text-white"
                              : "border-[#1a1512]/20 group-hover:border-[#671e2e] group-hover:bg-[#671e2e] group-hover:text-white"
                          }`}
                        >
                          <ArrowRight size={17} className={`transition-transform duration-300 ${isActive ? "-rotate-45" : "group-hover:-rotate-45"}`} />
                        </span>
                        {/* Mobile / touch: image is part of the active row itself */}
                        <span
                          className={`img-treatment relative col-span-3 block overflow-hidden transition-all duration-500 md:hidden ${
                            isActive ? "h-52 opacity-100" : "h-0 opacity-0"
                          }`}
                        >
                          {isActive && (
                            <Image
                              src={e.image}
                              alt={`${e.name} — ${e.corridor}`}
                              fill
                              sizes="100vw"
                              loading="lazy"
                              className="object-cover"
                            />
                          )}
                        </span>
                      </a>
                    </li>
                  </Reveal>
              );
            })}
            </ol>
            <Reveal delay={0.05}>
              <a
                href="https://element-realestate.com/compounds"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1a1512]"
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
