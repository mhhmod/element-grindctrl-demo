"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

export type SearchState = {
  area: string;
  type: string;
  beds: string;
  band: string;
};

const areas = ["North Coast", "New Cairo", "Sheikh Zayed", "Dubai"];
const types = ["Chalet", "Villa", "Apartment", "Twin House", "Penthouse"];
const bands = ["Under 10M EGP", "10–20M EGP", "20–40M EGP", "40M+ EGP", "POA Dubai"];

export function Hero({ onSearch }: { onSearch: (s: SearchState) => void }) {
  const reduce = useReducedMotion();
  const [state, setState] = useState<SearchState>({
    area: "North Coast",
    type: "Chalet",
    beds: "3",
    band: "20–40M EGP"
  });

  const summary = useMemo(
    () => `${state.type} · ${state.area} · ${state.beds} beds · ${state.band}`,
    [state]
  );

  return (
    <section id="top" className="relative overflow-hidden bg-[#f6f1e8] pt-[92px]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-12">
        {/* Image — deliberately oversized, off-grid */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 min-h-[52vh] overflow-hidden lg:order-1 lg:col-span-7 lg:min-h-[88vh]"
        >
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=70"
            alt="White Mediterranean bay, Ras El Hekma — North Coast"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1512]/45 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3 text-[#f6f1e8]">
            <p className="max-w-[300px] font-display text-lg italic leading-snug">
              Marassi → Soul → Ras El Hekma. The water does the selling.
            </p>
            <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em]">
              <MapPin size={14} /> km 129 · Sidi Abdelrahman
            </p>
          </div>
        </motion.div>

        {/* Editorial panel */}
        <div className="order-1 flex flex-col justify-center px-5 pb-10 pt-10 md:px-10 lg:order-2 lg:col-span-5 lg:bg-[#1a1512] lg:text-[#f6f1e8] lg:px-12 lg:py-16">
          <p className="eyebrow text-[#671e2e] lg:text-[#d9c7a7]">Element Real Estate · Concept 01</p>
          <h1 className="font-display mt-5 text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.95] tracking-tight">
            Find your
            <br />
            <span className="italic font-light">Element</span>
            <span className="text-[#671e2e] lg:text-[#d9c7a7]">.</span>
          </h1>
          <p className="mt-6 max-w-[42ch] text-[15px] leading-relaxed text-[#3d3430] lg:text-white/75">
            Coast to Cairo to Dubai — through one consultant who knows your compound by
            phase, wind and resale depth.{" "}
            <strong className="font-semibold text-inherit">We listen. We deliver. You move.</strong>
          </p>

          {/* Search — real filter, not decoration */}
          <form
            className="mt-8 border border-current/20"
            onSubmit={(e) => {
              e.preventDefault();
              onSearch(state);
              document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="grid grid-cols-2 divide-x divide-y divide-current/15">
              {(
                [
                  { k: "area", label: "Where", opts: areas },
                  { k: "type", label: "What", opts: types },
                  { k: "beds", label: "Beds", opts: ["1", "2", "3", "4", "5+"] },
                  { k: "band", label: "Band", opts: bands }
                ] as const
              ).map((f) => (
                <label key={f.k} className="flex flex-col gap-2 p-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] opacity-60">
                    {f.label}
                  </span>
                  <select
                    value={state[f.k]}
                    onChange={(e) => setState((s) => ({ ...s, [f.k]: e.target.value }))}
                    className="bg-transparent font-display text-lg outline-none"
                  >
                    {f.opts.map((o) => (
                      <option key={o} value={o} className="text-black">
                        {o}
                      </option>
                    ))}
                  </select>
                </label>
              ))}
            </div>
            <button
              type="submit"
              className="group flex w-full items-center justify-between bg-[#671e2e] px-5 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#471322]"
            >
              <span>{summary}</span>
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>

          <div className="mt-6 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.2em] opacity-70">
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" /> Replies in ~2 hours
            </span>
            <span aria-hidden>·</span>
            <span>Hotline 17488</span>
            <a href="#coast" className="ml-auto hidden items-center gap-1 underline underline-offset-4 sm:flex">
              Fly the coast <ArrowDown size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Ticker — restraint: single hairline strip */}
      <div className="border-y border-[#1a1512]/15 bg-[#ede4d3]">
        <div className="mx-auto flex max-w-[1440px] flex-wrap gap-x-8 gap-y-1 overflow-hidden px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#3d3430] md:px-10">
          {["Marassi", "Soul", "Hacienda Bay", "Ras El Hekma", "New Cairo", "Sheikh Zayed", "Dubai"].map(
            (t) => (
              <span key={t} className="whitespace-nowrap">
                {t} <span className="ml-6 text-[#671e2e]">·</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
