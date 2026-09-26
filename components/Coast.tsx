"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { coastStops } from "@/lib/data";
import { ImageReveal, Masked, Reveal } from "./Reveal";

export function Coast() {
  const reduce = useReducedMotion();
  const journeyRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({ target: journeyRef, offset: ["start 0.7", "end 0.6"] });

  useEffect(() => {
    if (reduce) return;
    const unsub = scrollYProgress.on("change", (v) => {
      setActive(Math.min(coastStops.length - 1, Math.floor(v * coastStops.length)));
    });
    return unsub;
  }, [scrollYProgress, reduce]);

  return (
    <section id="coast" aria-label="Drive the coast" className="bg-[#f6f1e8] py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-[#671e2e]">03 — Drive the coast</p>
            </Reveal>
            <Masked
              as="h2"
              delay={0.1}
              className="font-display mt-5 text-[clamp(2.6rem,6vw,5.6rem)] leading-[0.96] tracking-tight"
              lines={[
                "Alexandria",
                <span key="b">
                  to <span className="italic font-light text-[#671e2e]">Heneish.</span>
                </span>
              ]}
            />
          </div>
          <div className="self-end lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="max-w-[44ch] text-[15px] leading-relaxed text-[#3d3430]">
                Element&apos;s most distinctive idea: every compound pinned to its
                true bay. This is that drive — westward, kilometre by kilometre —
                with the compounds riding along.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div ref={journeyRef} className="mx-auto mt-14 grid max-w-[1600px] gap-10 px-5 md:mt-20 md:px-10 lg:grid-cols-12">
        {/* Sticky coastline */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden border border-[#1a1512]/15 bg-[#0a2627] text-[#f6f1e8]">
              <div className="flex items-center justify-between px-5 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/60">Westward</p>
                <p className="font-display text-lg italic text-[#d9c7a7]" aria-live="polite">
                  {coastStops[active].km}
                </p>
              </div>
              <CoastLine active={active} progress={scrollYProgress} />
              <div className="flex items-center justify-between px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">
                <span>Alexandria</span>
                <span>Sidi Heneish</span>
              </div>
            </div>
            <a
              href="https://element-realestate.com/coast"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em]"
            >
              <span className="link-line">Fly it live on element-realestate.com</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Stops */}
        <ol className="lg:col-span-8">
          {coastStops.map((s, i) => (
            <li key={s.km} className={`border-t border-[#1a1512]/15 py-10 md:py-14 ${i === coastStops.length - 1 ? "border-b" : ""}`}>
              <div className={`grid items-center gap-6 md:grid-cols-2 ${i % 2 === 1 ? "" : ""}`}>
                <Reveal className={i % 2 === 1 ? "md:order-2" : ""}>
                  <p className={`font-display text-[clamp(3.4rem,7vw,6rem)] italic leading-none ${active === i ? "text-[#671e2e]" : "text-[#1a1512]/20"} transition-colors duration-700`}>
                    {s.km.replace("km ", "")}
                  </p>
                  <h3 className="font-display mt-3 text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight">{s.name}</h3>
                  <p className="mt-2 max-w-[40ch] text-[15px] leading-relaxed text-[#3d3430]">{s.character}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {s.compounds.map((c) => (
                      <li
                        key={c}
                        className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
                          active === i ? "bg-[#671e2e] text-white" : "bg-[#1a1512]/8 text-[#3d3430]"
                        }`}
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <ImageReveal className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className="img-treatment relative aspect-[4/3] overflow-hidden">
                    <Image src={s.image} alt={`${s.name} coastline`} fill sizes="(max-width: 768px) 100vw, 40vw" loading="lazy" className="object-cover" />
                  </div>
                </ImageReveal>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CoastLine({ active, progress }: { active: number; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const dash = useTransform(progress, [0, 1], [640, 0]);
  const pts: [number, number][] = [
    [36, 208],
    [110, 190],
    [188, 196],
    [268, 168],
    [344, 158]
  ];
  return (
    <svg viewBox="0 0 380 260" className="h-auto w-full" role="img" aria-label="Stylised coastline from Alexandria to Sidi Heneish">
      <path d="M8 226 C 90 210, 150 218, 210 196 S 320 168, 372 172" fill="none" stroke="#f6f1e8" strokeOpacity="0.22" strokeWidth="7" />
      <motion.path
        d="M8 226 C 90 210, 150 218, 210 196 S 320 168, 372 172"
        fill="none"
        stroke="#d9c7a7"
        strokeWidth="2.5"
        strokeDasharray="640"
        style={{ strokeDashoffset: dash }}
      />
      {pts.map(([x, y], i) => (
        <g key={i}>
          <circle
            cx={x}
            cy={y}
            r={active === i ? 9 : 5}
            fill={i <= active ? "#d9c7a7" : "transparent"}
            stroke="#f6f1e8"
            strokeWidth="1.5"
            style={{ transition: "all .6s cubic-bezier(.22,1,.36,1)" }}
          />
          <text x={x - 24} y={y - 16} fill="#f6f1e8" fillOpacity={active === i ? 1 : 0.45} fontSize="10" letterSpacing="1.5">
            {["ALEX", "HACIENDA", "MARASSI", "HEKMA", "HENEISH"][i]}
          </text>
        </g>
      ))}
      <text x="12" y="248" fill="#f6f1e8" opacity="0.5" fontSize="10" letterSpacing="3">
        MEDITERRANEAN · 31.1°N
      </text>
    </svg>
  );
}
