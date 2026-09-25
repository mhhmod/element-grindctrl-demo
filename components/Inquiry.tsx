"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2, Phone } from "lucide-react";
import { contact } from "@/lib/data";
import { Reveal } from "./Reveal";

const schema = z.object({
  intent: z.enum(["Buy", "Sell", "Consult"]),
  name: z.string().min(2, "Please add your name"),
  phone: z.string().min(7, "Add a reachable phone or WhatsApp"),
  area: z.string().min(1),
  message: z.string().min(10, "Tell us the compound or budget in a line or two")
});

type Values = z.infer<typeof schema>;

export function Inquiry() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { intent: "Buy", name: "", phone: "", area: "North Coast", message: "" }
  });
  const intent = watch("intent");

  return (
    <section id="inquiry" className="bg-[#1a1512] py-20 text-[#f6f1e8] md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-[#d9c7a7]">05 · Inquiry</p>
            <h2 className="font-display mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1]">
              Looking for expert <span className="italic font-light">guidance?</span>
            </h2>
            <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-white/70">
              {contact.promise} Or skip the form — pick the channel you&apos;d actually use.
            </p>
            <dl className="mt-8 space-y-4 border-t border-white/15 pt-8">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">Hotline</dt>
                <dd>
                  <a href={contact.telHref} className="font-display text-3xl hover:text-[#d9c7a7]">
                    {contact.hotline}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">WhatsApp</dt>
                <dd>
                  <a href={contact.whatsappHref} className="underline underline-offset-4 hover:text-[#d9c7a7]">
                    {contact.whatsapp}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">Email</dt>
                <dd>
                  <a href={`mailto:${contact.email}`} className="underline underline-offset-4 hover:text-[#d9c7a7]">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/60">Hubs</dt>
                <dd className="text-sm text-white/80">{contact.hubs.join(" · ")}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="bg-[#f6f1e8] p-6 text-[#1a1512] md:p-10">
              <div role="tablist" aria-label="Inquiry intent" className="grid grid-cols-3 gap-px bg-[#1a1512]/15">
                {(["Buy", "Sell", "Consult"] as const).map((t) => (
                  <button
                    key={t}
                    role="tab"
                    aria-selected={intent === t}
                    onClick={() => setValue("intent", t)}
                    className={`px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                      intent === t ? "bg-[#671e2e] text-white" : "bg-[#f6f1e8] hover:bg-[#ede4d3]"
                    }`}
                  >
                    {t === "Buy" ? "Buy / Reserve" : t === "Sell" ? "Sell / Value" : "Consult"}
                  </button>
                ))}
              </div>

              {sent ? (
                <div className="py-14 text-center" role="status">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white">
                    <Check size={22} />
                  </span>
                  <h3 className="font-display mt-5 text-3xl">Received.</h3>
                  <p className="mx-auto mt-3 max-w-[44ch] text-sm text-[#3d3430]">
                    Demo form — nothing was sent. In production this routes to the {watch("area")}{" "}
                    specialist within two hours, and also pings {contact.hotline}.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 border border-[#1a1512]/20 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#1a1512] hover:text-white"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form
                  className="mt-8 grid gap-5"
                  onSubmit={handleSubmit(async () => {
                    await new Promise((r) => setTimeout(r, 900));
                    setSent(true);
                  })}
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Name</span>
                      <input
                        {...register("name")}
                        autoComplete="name"
                        placeholder="Laila Hassan"
                        className="border border-[#1a1512]/20 bg-white px-4 py-3 outline-none placeholder:text-[#3d3430]/40 focus:border-[#671e2e]"
                      />
                      {errors.name && <span className="text-xs text-[#671e2e]">{errors.name.message}</span>}
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Phone / WhatsApp</span>
                      <input
                        {...register("phone")}
                        autoComplete="tel"
                        placeholder="+20 …"
                        className="border border-[#1a1512]/20 bg-white px-4 py-3 outline-none placeholder:text-[#3d3430]/40 focus:border-[#671e2e]"
                      />
                      {errors.phone && <span className="text-xs text-[#671e2e]">{errors.phone.message}</span>}
                    </label>
                  </div>
                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Corridor</span>
                    <select
                      {...register("area")}
                      className="border border-[#1a1512]/20 bg-white px-4 py-3 outline-none focus:border-[#671e2e]"
                    >
                      {["North Coast", "New Cairo", "Sheikh Zayed", "Dubai", "Ain Sokhna"].map((a) => (
                        <option key={a}>{a}</option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em]">
                      {intent === "Sell" ? "Your unit + expectation" : "Compound, budget, timing"}
                    </span>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder={
                        intent === "Sell"
                          ? "Marassi chalet, 3 beds, looking to understand resale vs hold…"
                          : "Soul or Marassi, 3 beds, 20–30M, ready in 18 months…"
                      }
                      className="resize-y border border-[#1a1512]/20 bg-white px-4 py-3 outline-none placeholder:text-[#3d3430]/40 focus:border-[#671e2e]"
                    />
                    {errors.message && <span className="text-xs text-[#671e2e]">{errors.message.message}</span>}
                  </label>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 bg-[#1a1512] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#671e2e] disabled:opacity-60"
                  >
                    {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Phone size={15} />}
                    {isSubmitting ? "Routing…" : `Request ${intent} callback`}
                  </button>
                  <p className="text-xs text-[#3d3430]/60">
                    Outreach demo — validated with React Hook Form + Zod, no backend wired.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
