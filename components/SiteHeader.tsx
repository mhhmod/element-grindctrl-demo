"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Phone } from "lucide-react";
import { contact } from "@/lib/data";

const chapters = [
  { no: "01", label: "The Address Book", href: "#index" },
  { no: "02", label: "Three Addresses", href: "#chapters" },
  { no: "03", label: "Drive the Coast", href: "#coast" },
  { no: "04", label: "The Desk", href: "#desk" },
  { no: "05", label: "Journal", href: "#journal" },
  { no: "06", label: "Consultation", href: "#consult" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`mx-auto flex max-w-[1600px] items-center justify-between px-5 transition-all duration-500 md:px-10 ${
            scrolled && !open ? "py-3" : "py-5"
          }`}
        >
          <a href="#top" aria-label="Element — back to top" className="group flex items-baseline gap-3">
            <span
              className={`font-display text-[24px] font-semibold tracking-tight transition-colors duration-500 ${
                scrolled && !open ? "text-[#f6f1e8]" : "text-[#f6f1e8]"
              } drop-shadow-[0_1px_12px_rgba(0,0,0,0.45)]`}
            >
              Element
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f6f1e8]/80 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] sm:inline">
              Find your element
            </span>
          </a>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={contact.telHref}
              aria-label={`Call Element on ${contact.hotline}`}
              className={`hidden items-center gap-2 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur-md transition-colors sm:flex ${
                scrolled
                  ? "bg-[#f6f1e8]/10 text-[#f6f1e8] hover:bg-[#f6f1e8]/20"
                  : "bg-black/25 text-[#f6f1e8] hover:bg-black/40"
              }`}
            >
              <Phone size={13} strokeWidth={2.4} /> {contact.hotline}
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className={`group flex items-center gap-3 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.24em] backdrop-blur-md transition-colors ${
                scrolled ? "bg-[#f6f1e8] text-[#1a1512]" : "bg-[#f6f1e8]/90 text-[#1a1512]"
              }`}
            >
              <span className="flex flex-col gap-[5px]" aria-hidden>
                <span className="block h-[1.5px] w-6 bg-current transition-transform duration-300 group-hover:translate-x-1" />
                <span className="block h-[1.5px] w-6 bg-current transition-transform duration-300 group-hover:-translate-x-1" />
              </span>
              Index
            </button>
          </div>
        </div>
        {/* scroll hairline */}
        <div className={`mx-5 h-px bg-[#f6f1e8]/25 transition-opacity duration-500 md:mx-10 ${scrolled ? "opacity-100" : "opacity-0"}`} aria-hidden>
          <ScrollProgress />
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site index"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#1a1512] text-[#f6f1e8]"
          >
            <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-5 md:px-10">
              <span className="font-display text-[24px] font-semibold">Element</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                autoFocus
                className="bg-[#f6f1e8] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#1a1512] transition-colors hover:bg-[#d9c7a7]"
              >
                Close
              </button>
            </div>
            <nav aria-label="Index" className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-5 md:px-10">
              {chapters.map((c, i) => (
                <a
                  key={c.href}
                  href={c.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-5 overflow-hidden border-b border-white/10 py-3 md:py-4"
                >
                  <motion.span
                    initial={reduce ? false : { y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.7, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="flex w-full items-baseline gap-5"
                  >
                    <span className="font-display text-sm italic text-[#d9c7a7]">{c.no}</span>
                    <span className="font-display text-[clamp(1.9rem,6vw,4.2rem)] leading-none tracking-tight transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#d9c7a7]">
                      {c.label}
                    </span>
                    <ArrowUpRight
                      size={26}
                      className="ml-auto shrink-0 opacity-0 transition-all duration-300 group-hover:opacity-100"
                    />
                  </motion.span>
                </a>
              ))}
            </nav>
            <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center gap-x-8 gap-y-2 px-5 pb-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60 md:px-10">
              <a href={contact.telHref} className="flex items-center gap-2 text-[#f6f1e8] hover:text-[#d9c7a7]">
                <Phone size={13} /> {contact.hotline}
              </a>
              <a href={contact.whatsappHref} className="hover:text-[#d9c7a7]">
                WhatsApp
              </a>
              <span className="ml-auto hidden md:inline">New Cairo · Sheikh Zayed · Dubai</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setP(total > 0 ? Math.min(window.scrollY / total, 1) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="h-px bg-[#d9c7a7]" style={{ width: `${p * 100}%` }} />;
}
