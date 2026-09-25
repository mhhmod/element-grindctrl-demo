"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { developments, services, editorial } from "@/lib/data";
import { Reveal, ImageReveal } from "./Reveal";

export function Practice() {
  return (
    <section id="practice" className="bg-[#ede4d3] py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-[#671e2e]">03 · The practice</p>
          <h2 className="font-display mt-4 max-w-[18ch] text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.02]">
            One network. The consultant who <span className="italic font-light">knows the compound.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-[#1a1512]/15 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i * 0.06, 0.2)} className="bg-[#f6f1e8]">
              <div className="flex h-full flex-col p-8 md:p-10">
                <span className="font-display text-sm italic text-[#671e2e]">0{i + 1}</span>
                <h3 className="font-display mt-3 text-2xl md:text-[28px]">{s.title}</h3>
                <p className="mt-3 max-w-[48ch] text-[15px] leading-relaxed text-[#3d3430]">{s.body}</p>
                <p className="mt-auto pt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#3d3430]/60">
                  {s.meta}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {developments.map((d, i) => (
            <Reveal
              key={d.id}
              className={i < 2 ? "lg:col-span-6" : "lg:col-span-6"}
            >
              <ImageReveal>
                <article className="group relative overflow-hidden bg-[#1a1512] text-[#f6f1e8]">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={d.image}
                      alt={d.name}
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      loading="lazy"
                      className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-wrap items-end justify-between gap-4 p-6 md:p-8">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d9c7a7]">
                        {d.corridor}
                      </p>
                      <h3 className="font-display mt-2 text-3xl">{d.name}</h3>
                      <p className="mt-2 max-w-[52ch] text-sm text-white/70">{d.character}</p>
                    </div>
                    <a
                      href="#inquiry"
                      className="flex items-center gap-2 border border-white/25 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-[#f6f1e8] hover:text-[#1a1512]"
                    >
                      Ask {d.developer} <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              </ImageReveal>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Journal() {
  return (
    <section id="journal" className="bg-[#f6f1e8] py-20 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow text-[#671e2e]">04 · Journal</p>
              <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3.4rem)] leading-[1.02]">
                What the ground <span className="italic font-light">is saying.</span>
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#3d3430]">
                Launches, market shifts and allocation notes — the same beats Element publishes,
                tightened into an editorial rail.
              </p>
              <a
                href="https://element-realestate.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-[#1a1512] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f6f1e8] hover:bg-[#671e2e]"
              >
                Read the live site <ArrowUpRight size={15} />
              </a>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-8">
          {editorial.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.04}>
              <article className="grid gap-3 border-t border-[#1a1512]/15 py-8 md:grid-cols-[140px_1fr_auto] md:items-baseline">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#671e2e]">
                  {e.tag} · {e.date}
                </p>
                <div>
                  <h3 className="font-display text-2xl leading-snug md:text-[28px]">{e.title}</h3>
                  <p className="mt-2 max-w-[60ch] text-sm text-[#3d3430]/80">{e.excerpt}</p>
                </div>
                <span className="font-display text-sm italic text-[#3d3430]/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
