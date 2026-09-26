"use client";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { calendar, deskStats, sellPoints, stories } from "@/lib/data";
import { ImageReveal, Masked, Reveal } from "./Reveal";

export function ValuationDesk() {
  return (
    <section id="desk" aria-label="The desk" className="bg-[#471322] py-24 text-[#f6f1e8] md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-[#d9c7a7]">04 — The desk</p>
            </Reveal>
            <Masked
              as="h2"
              delay={0.1}
              className="font-display mt-5 text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.98] tracking-tight"
              lines={[
                "What is it",
                <span key="b" className="italic font-light text-[#d9c7a7]">actually worth?</span>
              ]}
            />
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-[46ch] text-[15px] leading-relaxed text-white/70">
                Element&apos;s valuation desk prices from thousands of live
                comparable listings — never guesses, never inflated. Selling
                starts with an honest number.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <a
                href="https://element-realestate.com/sell"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 bg-[#f6f1e8] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1a1512] transition-colors hover:bg-[#d9c7a7]"
              >
                Value my unit
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <dl className="grid grid-cols-3 gap-px bg-white/15">
              {deskStats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08} className="bg-[#471322]">
                  <div className="px-4 py-8 md:px-8 md:py-10">
                    <dd className="font-display text-[clamp(1.9rem,4vw,3.4rem)] leading-none text-[#d9c7a7]">
                      {s.value}
                    </dd>
                    <dt className="mt-3 text-[10px] font-bold uppercase leading-relaxed tracking-[0.2em] text-white/60">
                      {s.label}
                    </dt>
                  </div>
                </Reveal>
              ))}
            </dl>
            <ul className="mt-px grid gap-px bg-white/15 sm:grid-cols-2">
              {sellPoints.map((p, i) => (
                <Reveal key={p} delay={i * 0.06} className="bg-[#3d1020]">
                  <li className="flex items-start gap-3 px-5 py-5 text-sm text-white/85">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#d9c7a7]" />
                    {p}
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.15}>
              <p className="mt-5 text-xs leading-relaxed text-white/45">
                Figures as published on element-realestate.com/sell — live listings
                priced, compounds tracked, refreshed weekly.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Journal() {
  const [lead, ...rest] = stories;
  return (
    <section id="journal" aria-label="Journal" className="bg-[#f6f1e8] py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow text-[#671e2e]">05 — Journal</p>
            </Reveal>
            <Masked
              as="h2"
              delay={0.1}
              className="font-display mt-5 text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.98] tracking-tight"
              lines={["Notes from", <span key="b" className="italic font-light text-[#671e2e]">the ground.</span>]}
            />
          </div>
          <Reveal delay={0.2}>
            <a
              href="https://element-realestate.com/news"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em]"
            >
              <span className="link-line">All stories on element-realestate.com</span>
              <ArrowUpRight size={15} />
            </a>
          </Reveal>
        </div>

        {/* Lead story — type over image */}
        <ImageReveal className="mt-12">
          <article className="img-treatment relative overflow-hidden bg-[#1a1512] text-[#f6f1e8]">
            <div className="relative min-h-[62vh] md:min-h-[72vh]">
              <Image
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2000&q=70"
                alt="North Coast shoreline from above"
                fill
                sizes="100vw"
                loading="lazy"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1512] via-[#1a1512]/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#d9c7a7]">
                {lead.tag} · {lead.date}
              </p>
              <h3 className="font-display mt-4 max-w-[20ch] text-[clamp(1.9rem,4.5vw,3.6rem)] leading-[1.02] tracking-tight">
                {lead.title}
              </h3>
              <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-white/75">{lead.excerpt}</p>
            </div>
          </article>
        </ImageReveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {rest.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <article className="group grid gap-2 border-t border-[#1a1512]/15 py-7 transition-colors last:border-b hover:bg-[#ede4d3]/50 md:grid-cols-[120px_1fr_auto] md:items-baseline md:gap-6 md:px-2">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#671e2e]">
                    {s.tag} · {s.date}
                  </p>
                  <div>
                    <h3 className="font-display text-xl leading-snug transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 max-w-[62ch] text-sm text-[#3d3430]/75">{s.excerpt}</p>
                  </div>
                  <span className="font-display hidden text-sm italic text-[#3d3430]/50 md:block">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
          <aside className="lg:col-span-4" aria-label="On the calendar">
            <Reveal>
              <div className="bg-[#1a1512] p-7 text-[#f6f1e8] md:p-8 lg:sticky lg:top-28">
                <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#d9c7a7]">On the calendar</p>
                <ul className="mt-6 space-y-6">
                  {calendar.map((e) => (
                    <li key={e.title} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                      <p className="font-display text-lg italic text-[#d9c7a7]">{e.date}</p>
                      <p className="font-display mt-1.5 text-xl leading-snug">{e.title}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">{e.place}</p>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://element-realestate.com/events"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white hover:text-[#d9c7a7]"
                >
                  <span className="link-line">All gatherings</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}
