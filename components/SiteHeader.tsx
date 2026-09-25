"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Phone, X } from "lucide-react";

const links = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Coast", href: "#coast" },
  { label: "Practice", href: "#practice" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#inquiry" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10">
        <a
          href="#top"
          className="flex items-baseline gap-2 bg-[#f6f1e8]/85 py-2 pl-4 pr-5 backdrop-blur-md"
          aria-label="Element concept home"
        >
          <span className="font-display text-[22px] font-semibold tracking-tight text-[#1a1512]">
            Element
          </span>
          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-[#671e2e] sm:inline">
            Find your element
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 bg-[#1a1512]/85 px-6 py-3 text-[#f6f1e8] backdrop-blur-md lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[12px] font-semibold uppercase tracking-[0.18em]"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#d9c7a7] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="tel:17488"
            className="flex items-center gap-2 bg-[#671e2e] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#471322]"
          >
            <Phone size={14} strokeWidth={2.2} /> 17488
          </a>
        </nav>

        <button
          className="bg-[#1a1512] p-3 text-[#f6f1e8] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
            className="mx-5 bg-[#1a1512] p-6 text-[#f6f1e8] lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 pb-3 font-display text-2xl"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:17488"
                className="mt-2 flex items-center justify-center gap-2 bg-[#671e2e] px-4 py-3 text-sm font-bold uppercase tracking-[0.18em]"
              >
                <Phone size={16} /> Call 17488
              </a>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                New Cairo · Sheikh Zayed · Dubai
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
