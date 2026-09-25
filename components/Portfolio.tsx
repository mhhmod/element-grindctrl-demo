"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, BedDouble, Bath, Ruler } from "lucide-react";
import { properties } from "@/lib/data";
import type { SearchState } from "./Hero";
import { Reveal } from "./Reveal";

export function Portfolio({ search }: { search: SearchState | null }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [, setTick] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const on = () => setTick((t) => t + 1);
    emblaApi.on("select", on);
    return () => {
      emblaApi.off("select", on);
    };
  }, [emblaApi]);

  const filtered = properties.filter((p) => {
    if (!search) return true;
    if (search.area !== p.area && !(search.area === "North Coast" && p.area === "North Coast"))
      return search.area === p.area ? true : false;
    return true;
  });

  // Soft-match: exact area first, then rest — never an empty dead-end
  const sorted = [...properties].sort((a, b) => {
    if (!search) return 0;
    const aScore =
      (a.area === search.area ? 2 : 0) + (a.type === search.type ? 1 : 0) + (a.priceBand === search.band ? 1 : 0);
    const bScore =
      (b.area === search.area ? 2 : 0) + (b.type === search.type ? 1 : 0) + (b.priceBand === search.band ? 1 : 0);
    return bScore - aScore;
  });

  void filtered;

  return (
    <section id="portfolio" className="bg-[#f6f1e8] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[640px]">
              <p className="eyebrow text-[#671e2e]">01 · Portfolio</p>
              <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.02]">
                Compounds clients are <span className="italic font-light">reserving fastest</span>
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous properties"
                className="border border-[#1a1512]/20 p-3 transition-colors hover:bg-[#1a1512] hover:text-[#f6f1e8]"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next properties"
                className="border border-[#1a1512]/20 p-3 transition-colors hover:bg-[#1a1512] hover:text-[#f6f1e8]"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          {search && (
            <p className="mt-4 inline-block bg-[#1a1512] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f6f1e8]">
              Tuned to: {search.type} · {search.area} · {search.beds} beds · {search.band}
            </p>
          )}
        </Reveal>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {sorted.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: Math.min(i * 0.06, 0.3) }}
                className={`group min-w-[82vw] shrink-0 bg-white sm:min-w-[420px] lg:min-w-[440px] ${
                  i % 2 === 1 ? "lg:mt-12" : ""
                }`}
              >
                <div className="img-treatment relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={`${p.compound} — ${p.type}`}
                    fill
                    sizes="(max-width: 640px) 82vw, 440px"
                    loading={i < 2 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 bg-[#f6f1e8]/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                    {p.compound}
                  </span>
                  <span className="absolute bottom-4 right-4 bg-[#671e2e] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    {p.priceBand}
                  </span>
                </div>
                <div className="border border-t-0 border-[#1a1512]/12 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#671e2e]">
                    {p.area} · {p.developer}
                  </p>
                  <h3 className="font-display mt-2 text-2xl leading-tight">{p.name}</h3>
                  <p className="mt-1 text-sm text-[#3d3430]/80">{p.note}</p>
                  <dl className="mt-5 flex items-center gap-5 border-t border-[#1a1512]/10 pt-4 text-[13px] font-medium">
                    <span className="flex items-center gap-1.5">
                      <BedDouble size={16} /> {p.beds} beds
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bath size={16} /> {p.baths} baths
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Ruler size={16} /> {p.sizeSqm} m²
                    </span>
                  </dl>
                  <a
                    href="#inquiry"
                    className="mt-5 flex items-center justify-between border-t border-[#1a1512]/10 pt-4 text-[12px] font-bold uppercase tracking-[0.18em] transition-colors hover:text-[#671e2e]"
                  >
                    Ask the {p.compound} specialist <ArrowRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <p className="mt-6 max-w-[70ch] text-xs leading-relaxed text-[#3d3430]/70">
          Concept imagery for layout demonstration. Names, corridors and developers reflect public
          listings on element-realestate.com; figures shown are filter bands, not live unit prices or
          availability.
        </p>
      </div>
    </section>
  );
}
