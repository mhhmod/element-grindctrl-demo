"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Loader2, Mail, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/data";
import { Masked, Reveal } from "./Reveal";

const intents = [
  { id: "Buy", title: "Buy", line: "A home, a chalet, a foothold on the Coast." },
  { id: "Sell", title: "Sell", line: "An honest number, then a plan that moves." },
  { id: "Invest", title: "Invest", line: "Cairo, Coast or Dubai — placed with intent." }
] as const;

const corridors = ["North Coast", "New Cairo", "Sheikh Zayed", "Dubai", "Ain Sokhna"];

const schema = z.object({
  intent: z.enum(["Buy", "Sell", "Invest"]),
  corridor: z.string().min(1),
  name: z.string().min(2, "Your name, so we know who to ask for"),
  phone: z.string().min(7, "A reachable phone or WhatsApp number"),
  note: z.string().max(400).optional()
});

type Values = z.infer<typeof schema>;

export function Inquiry() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { intent: "Buy", corridor: "North Coast", name: "", phone: "", note: "" }
  });

  const intent = watch("intent");
  const corridor = watch("corridor");

  return (
    <section id="consult" aria-label="Consultation" className="bg-[#1a1512] py-24 text-[#f6f1e8] md:py-36">
      <div className="mx-auto grid max-w-[1600px] gap-14 px-5 md:px-10 lg:grid-cols-12">
        {/* Personal panel */}
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-[#d9c7a7]">06 — Consultation</p>
          </Reveal>
          <Masked
            as="h2"
            delay={0.1}
            className="font-display mt-5 text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.98] tracking-tight"
            lines={["Begin with", <span key="b" className="italic font-light text-[#d9c7a7]">a conversation.</span>]}
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[42ch] text-[15px] leading-relaxed text-white/70">
              Three steps, nothing more. Or skip it all — call, or write on
              WhatsApp. {contact.callbackNote}
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 space-y-3">
              <a
                href={contact.telHref}
                className="group flex items-center justify-between bg-[#f6f1e8] px-6 py-5 text-[#1a1512] transition-colors hover:bg-[#d9c7a7]"
              >
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.24em] opacity-60">Hotline</span>
                  <span className="font-display mt-1 block text-3xl tracking-tight">Call {contact.hotline}</span>
                </span>
                <Phone size={22} className="transition-transform duration-300 group-hover:rotate-12" />
              </a>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border border-white/25 px-6 py-5 transition-colors hover:border-[#d9c7a7] hover:bg-white/5"
              >
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-white/60">
                    WhatsApp · {contact.whatsappHours}
                  </span>
                  <span className="font-display mt-1 block text-2xl tracking-tight">{contact.whatsappDisplay}</span>
                </span>
                <MessageCircle size={22} className="text-[#d9c7a7] transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 px-1 py-2 text-sm text-white/70 transition-colors hover:text-[#d9c7a7]"
              >
                <Mail size={16} /> {contact.email}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Stepped form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="bg-[#f6f1e8] p-6 text-[#1a1512] md:p-12">
              <div className="flex items-center justify-between" aria-hidden>
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#3d3430]/60">
                  Step {done ? 3 : step + 1} / 3
                </p>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className={`h-1 w-10 transition-colors duration-500 ${done || step >= i ? "bg-[#671e2e]" : "bg-[#1a1512]/15"}`}
                    />
                  ))}
                </div>
              </div>

              {done ? (
                <div className="py-12 text-center" role="status">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#671e2e] text-white">
                    <Check size={24} />
                  </span>
                  <h3 className="font-display mt-6 text-4xl tracking-tight">Noted, {watch("name").split(" ")[0] || "friend"}.</h3>
                  <p className="mx-auto mt-4 max-w-[44ch] text-[15px] leading-relaxed text-[#3d3430]">
                    {intent} · {corridor}. This is where the compound specialist
                    takes over — expect a call, or reach them first on{" "}
                    <a href={contact.telHref} className="font-semibold text-[#671e2e] underline underline-offset-4">
                      {contact.hotline}
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(async () => {
                    await new Promise((r) => setTimeout(r, 900));
                    setDone(true);
                  })}
                >
                  <AnimatePresence mode="wait">
                    {step === 0 && (
                      <motion.fieldset
                        key="s0"
                        initial={reduce ? false : { opacity: 0, x: 32 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={reduce ? undefined : { opacity: 0, x: -32 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <legend className="font-display mt-8 text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight">
                          What are you looking for?
                        </legend>
                        <div className="mt-7 space-y-3">
                          {intents.map((t) => (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => {
                                setValue("intent", t.id);
                                setStep(1);
                              }}
                              aria-pressed={intent === t.id}
                              className={`group flex w-full items-center justify-between border px-6 py-5 text-left transition-all duration-300 ${
                                intent === t.id
                                  ? "border-[#671e2e] bg-[#671e2e] text-white"
                                  : "border-[#1a1512]/20 bg-white hover:border-[#671e2e]"
                              }`}
                            >
                              <span>
                                <span className="font-display block text-2xl">{t.title}</span>
                                <span className={`mt-1 block text-sm ${intent === t.id ? "text-white/75" : "text-[#3d3430]/70"}`}>
                                  {t.line}
                                </span>
                              </span>
                              <ArrowRight size={20} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                          ))}
                        </div>
                      </motion.fieldset>
                    )}

                    {step === 1 && (
                      <motion.fieldset
                        key="s1"
                        initial={reduce ? false : { opacity: 0, x: 32 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={reduce ? undefined : { opacity: 0, x: -32 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <legend className="font-display mt-8 text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight">
                          Where should we look?
                        </legend>
                        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {corridors.map((c) => (
                            <button
                              key={c}
                              type="button"
                              onClick={() => {
                                setValue("corridor", c);
                                setStep(2);
                              }}
                              aria-pressed={corridor === c}
                              className={`border px-5 py-4 text-left font-display text-xl transition-all duration-300 ${
                                corridor === c
                                  ? "border-[#671e2e] bg-[#671e2e] text-white"
                                  : "border-[#1a1512]/20 bg-white hover:border-[#671e2e]"
                              }`}
                            >
                              {c}
                            </button>
                          ))}
                        </div>
                        <BackButton onClick={() => setStep(0)} />
                      </motion.fieldset>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="s2"
                        initial={reduce ? false : { opacity: 0, x: 32 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={reduce ? undefined : { opacity: 0, x: -32 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="font-display mt-8 text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight tracking-tight">
                          {intent} · {corridor}. Who do we call?
                        </p>
                        <div className="mt-7 grid gap-5">
                          <label className="flex flex-col gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-[0.22em]">Name</span>
                            <input
                              {...register("name")}
                              autoComplete="name"
                              placeholder="Your name"
                              className="border border-[#1a1512]/20 bg-white px-5 py-4 text-lg outline-none placeholder:text-[#3d3430]/35 focus:border-[#671e2e]"
                            />
                            {errors.name && <span className="text-sm text-[#671e2e]">{errors.name.message}</span>}
                          </label>
                          <label className="flex flex-col gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-[0.22em]">Phone / WhatsApp</span>
                            <input
                              {...register("phone")}
                              autoComplete="tel"
                              inputMode="tel"
                              placeholder="+20 …"
                              className="border border-[#1a1512]/20 bg-white px-5 py-4 text-lg outline-none placeholder:text-[#3d3430]/35 focus:border-[#671e2e]"
                            />
                            {errors.phone && <span className="text-sm text-[#671e2e]">{errors.phone.message}</span>}
                          </label>
                          <label className="flex flex-col gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-[0.22em]">
                              Anything we should know? <span className="font-normal normal-case opacity-60">(optional)</span>
                            </span>
                            <input
                              {...register("note")}
                              placeholder="Compound, budget, timing…"
                              className="border border-[#1a1512]/20 bg-white px-5 py-4 outline-none placeholder:text-[#3d3430]/35 focus:border-[#671e2e]"
                            />
                          </label>
                        </div>
                        <div className="mt-7 flex flex-wrap items-center gap-3">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex flex-1 items-center justify-center gap-2 bg-[#1a1512] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#671e2e] disabled:opacity-60"
                          >
                            {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : null}
                            {isSubmitting ? "Sending…" : "Request the call"}
                          </button>
                          <BackButton onClick={() => setStep(1)} inline />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BackButton({ onClick, inline = false }: { onClick: () => void; inline?: boolean }) {
  if (inline) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="flex items-center gap-2 px-4 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#3d3430]/70 hover:text-[#671e2e]"
      >
        <ArrowLeft size={15} /> Back
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#3d3430]/70 hover:text-[#671e2e]"
    >
      <ArrowLeft size={15} /> Back
    </button>
  );
}

// Keep tree-shaken reference so step-0 validation path stays explicit.
export type ConsultIntent = "Buy" | "Sell" | "Invest";
