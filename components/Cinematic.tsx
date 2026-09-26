"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/Reveal";

export function CinematicBreak() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cinematic-line",
        { yPercent: 60, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%", end: "bottom 60%", scrub: 0.6 }
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section aria-label="The Element way" className="bg-[#ede4d3] py-24 md:py-36">
      <div ref={ref} className="mx-auto max-w-[1100px] px-5 text-center md:px-10">
        <Reveal>
          <p className="eyebrow text-[#671e2e]">The Element way</p>
        </Reveal>
        <h2 className="font-display mt-8 text-[clamp(2.6rem,7vw,5.6rem)] leading-[1.0] tracking-tight">
          <span className="cinematic-line block">We listen. We deliver.</span>
          <span className="cinematic-line block italic font-light text-[#671e2e]">You move.</span>
        </h2>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-[48ch] text-[15px] leading-relaxed text-[#3d3430]">
            One consultant who knows the compound — from first call to keys.
            Egypt and the Gulf, one network.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
