"use client";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { AddressBook } from "@/components/AddressBook";
import { Chapters } from "@/components/Chapters";
import { Coast } from "@/components/Coast";
import { ValuationDesk, Journal } from "@/components/Sections";
import { CinematicBreak } from "@/components/Cinematic";
import { Inquiry } from "@/components/Inquiry";
import { SiteFooter } from "@/components/SiteFooter";

export default function Page() {
  return (
    <>
      <a
        href="#index"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-[#1a1512] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to the address book
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <AddressBook />
        <Chapters />
        <Coast />
        <ValuationDesk />
        <Journal />
        <CinematicBreak />
        <Inquiry />
      </main>
      <SiteFooter />
    </>
  );
}
