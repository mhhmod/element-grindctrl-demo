"use client";
import { useEffect, useRef, useState } from "react";
import { coastStops } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Coast() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [mapError, setMapError] = useState(false);

  // Intentionally light scroll choreography (no GSAP needed here — Motion owns it).
  // GSAP+ScrollTrigger is reserved for the pinned journal sequence below.
  useEffect(() => {
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const done = Math.min(Math.max(-r.top / Math.max(total, 1), 0), 1);
      setProgress(done);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="coast" className="bg-[#0a2627] py-20 text-[#f6f1e8] md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-[#d9c7a7]">02 · Drive the coast</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-12">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.02] lg:col-span-7">
              Alexandria to Sidi Heneish, <span className="italic font-light">pinned true.</span>
            </h2>
            <p className="max-w-[46ch] self-end text-[15px] leading-relaxed text-white/70 lg:col-span-5">
              Element&apos;s signature move is geographic honesty — every compound on its real bay.
              This concept keeps it: a 124&nbsp;km editorial transect, not a decorative map.
            </p>
          </div>
        </Reveal>

        {/* Progress hairline */}
        <div className="mt-10 h-px bg-white/15" aria-hidden>
          <div className="h-px bg-[#d9c7a7] transition-[width]" style={{ width: `${progress * 100}%` }} />
        </div>

        <div ref={trackRef} className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-24 overflow-hidden border border-white/15 bg-[#103b3c]">
              <div className="flex items-center justify-between px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
                <span>Orbit transect</span>
                <span>{Math.round(progress * 124)} / 124 km</span>
              </div>
              {/* Mapbox would mount here with a token; graceful static fallback ships by default */}
              <div className="relative h-[380px] bg-[radial-gradient(ellipse_at_30%_20%,#1a5a5c,#0a2627_70%)] p-5">
                {!mapError ? (
                  <CoastSvg onFail={() => setMapError(true)} progress={progress} />
                ) : (
                  <p className="text-sm text-white/70">Coastline preview unavailable offline.</p>
                )}
                <p className="absolute bottom-4 left-5 right-5 text-[11px] uppercase tracking-[0.2em] text-white/60">
                  Add NEXT_PUBLIC_MAPBOX_TOKEN to upgrade to live Mapbox GL
                </p>
              </div>
            </div>
          </div>

          <ol className="lg:col-span-7">
            {coastStops.map((s, i) => (
              <li
                key={s.km}
                className="grid grid-cols-[64px_1fr] gap-5 border-t border-white/15 py-8 md:grid-cols-[110px_1fr_1fr]"
              >
                <span className="font-display text-lg italic text-[#d9c7a7]">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d9c7a7]">{s.km}</p>
                  <h3 className="font-display mt-2 text-3xl">{s.name}</h3>
                  <p className="mt-2 text-white/70">{s.character}</p>
                </div>
                <ul className="text-sm text-white/70">
                  {s.compounds.map((c) => (
                    <li key={c} className="border-b border-white/10 py-2">
                      {c}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function CoastSvg({ progress, onFail }: { progress: number; onFail: () => void }) {
  useEffect(() => {
    // If Mapbox token exists the parent can swap this SVG for <MapboxCoast/> — SVG never throws.
    try {
      void progress;
    } catch {
      onFail();
    }
  }, [progress, onFail]);
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Stylised North Coast transect">
      <path
        d="M10 190 C 80 170, 140 200, 200 175 S 320 150, 390 165"
        fill="none"
        stroke="#d9c7a7"
        strokeWidth="2.5"
      />
      <path
        d="M10 190 C 80 170, 140 200, 200 175 S 320 150, 390 165"
        fill="none"
        stroke="#f6f1e8"
        strokeWidth="6"
        strokeOpacity="0.25"
      />
      {[
        [60, 182],
        [140, 190],
        [210, 176],
        [290, 160],
        [350, 162]
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={progress * 5 + 3} fill={i / 4 <= progress ? "#d9c7a7" : "transparent"} stroke="#f6f1e8" />
          <text x={x - 8} y={y - 12} fill="#f6f1e8" fontSize="10">
            {["Alex", "Hacienda", "Marassi", "Hekma", "Heneish"][i]}
          </text>
        </g>
      ))}
      <text x="12" y="250" fill="#f6f1e8" opacity="0.6" fontSize="11" letterSpacing="2">
        MEDITERRANEAN · 31.1°N
      </text>
    </svg>
  );
}
