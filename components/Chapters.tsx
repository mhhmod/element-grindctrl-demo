"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { chapters, type Chapter } from "@/lib/data";
import { ImageReveal, Masked, Reveal } from "./Reveal";

export function Chapters() {
  return (
    <section id="chapters" aria-label="Three addresses" className="bg-[#1a1512] py-24 text-[#f6f1e8] md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-[#d9c7a7]">02 — Three addresses</p>
        </Reveal>
        <Masked
          as="h2"
          delay={0.1}
          className="font-display mt-5 max-w-[16ch] text-[clamp(2.4rem,5.5vw,5rem)] leading-[0.98] tracking-tight"
          lines={["Fewer places.", <span key="b" className="italic font-light text-[#d9c7a7]">Shown properly.</span>]}
        />
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-white/65">
            Three chapters the network opens first — each one image-led, each one
            ending at the same place: a conversation with the specialist.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 space-y-24 md:mt-24 md:space-y-36">
        {chapters.map((c, i) => (
          <ChapterBlock key={c.no} chapter={c} flip={i % 2 === 1} dark={i === 1} />
        ))}
      </div>
    </section>
  );
}

function ChapterBlock({ chapter: c, flip, dark }: { chapter: Chapter; flip: boolean; dark: boolean }) {
  return (
    <article aria-label={c.name} className={dark ? "bg-[#0a2627]" : undefined}>
      <div className="mx-auto max-w-[1600px] px-5 py-10 md:px-10 md:py-14">
        <div className={`grid items-end gap-8 lg:grid-cols-12 ${flip ? "" : ""}`}>
          {/* Numeral + name */}
          <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
            <Reveal>
              <p className="font-display text-[clamp(4rem,9vw,8.5rem)] italic leading-none text-[#d9c7a7]/90">
                {c.no}
              </p>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.26em] text-[#d9c7a7]">
                {c.developer}
              </p>
              <h3 className="font-display mt-2 text-[clamp(2.6rem,6vw,5.5rem)] leading-[0.95] tracking-tight">
                {c.name}
              </h3>
              <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.24em] text-white/55">
                {c.location}
              </p>
              <p className="font-display mt-6 max-w-[30ch] text-2xl italic leading-snug text-white/90 md:text-[28px]">
                “{c.statement}”
              </p>
            </Reveal>
          </div>

          {/* Gallery */}
          <div className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
            <ImageReveal>
              <ChapterGallery chapter={c} />
            </ImageReveal>
            <dl className="mt-6 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-3">
              {c.facts.map((f) => (
                <div key={f.label} className={`${dark ? "bg-[#0a2627]" : "bg-[#1a1512]"} px-5 py-4`}>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9c7a7]">{f.label}</dt>
                  <dd className="mt-1.5 text-sm text-white/85">{f.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href="#consult"
              className="group mt-6 inline-flex items-center gap-3 bg-[#671e2e] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#f6f1e8] hover:text-[#1a1512]"
            >
              Ask the {c.name} specialist
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function ChapterGallery({ chapter }: { chapter: Chapter }) {
  const reduce = useReducedMotion();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="group/gal relative">
      <div className="img-treatment overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {chapter.frames.map((f, i) => (
            <div key={f.src} className="relative aspect-[16/10] min-w-0 shrink-0 grow-0 basis-full">
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                loading={i === 0 ? "eager" : "lazy"}
                className="object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-10">
        <p className="font-display text-sm italic text-white/90" aria-live="polite">
          {String(index + 1).padStart(2, "0")} / {String(chapter.frames.length).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label={`Previous frame of ${chapter.name}`}
            className="border border-white/30 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={next}
            aria-label={`Next frame of ${chapter.name}`}
            className="border border-white/30 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
      {!reduce && (
        <motion.div
          key={index}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="h-[2px] origin-left bg-[#d9c7a7]"
          style={{ width: `${((index + 1) / chapter.frames.length) * 100}%` }}
          aria-hidden
        />
      )}
    </div>
  );
}
