"use client";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero, type SearchState } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Coast } from "@/components/Coast";
import { Practice, Journal } from "@/components/Sections";
import { CinematicBreak } from "@/components/Cinematic";
import { Inquiry } from "@/components/Inquiry";
import { SiteFooter } from "@/components/SiteFooter";

export default function Page() {
  const [search, setSearch] = useState<SearchState | null>(null);
  return (
    <>
      <a
        href="#portfolio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-[#1a1512] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to portfolio
      </a>
      <SiteHeader />
      <main>
        <Hero onSearch={setSearch} />
        <Portfolio search={search} />
        <Coast />
        <Practice />
        <CinematicBreak />
        <Journal />
        <Inquiry />
      </main>
      <SiteFooter />
    </>
  );
}
