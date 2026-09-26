import { contact } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="bg-[#f6f1e8] pb-8 pt-14">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-10 border-t-2 border-[#1a1512] pt-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-none tracking-tight">Element</p>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#671e2e]">
              Find your element
            </p>
            <p className="mt-5 max-w-[44ch] text-sm leading-relaxed text-[#3d3430]">
              Egypt and the Gulf&apos;s consultant network — from the Mediterranean
              coast to Downtown Dubai, routed to the consultant who knows the project.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-sm lg:col-span-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#3d3430]/55">Explore</p>
              <ul className="mt-4 space-y-2.5">
                {[
                  { label: "The address book", href: "#index" },
                  { label: "Three addresses", href: "#chapters" },
                  { label: "Drive the coast", href: "#coast" },
                  { label: "Journal", href: "#journal" }
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="hover:text-[#671e2e]">
                      <span className="link-line">{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#3d3430]/55">Element</p>
              <ul className="mt-4 space-y-2.5">
                {[
                  { label: "Value my unit", href: "https://element-realestate.com/sell" },
                  { label: "All compounds", href: "https://element-realestate.com/compounds" },
                  { label: "Events", href: "https://element-realestate.com/events" },
                  { label: "Consultation", href: "#consult" }
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                      className="hover:text-[#671e2e]"
                    >
                      <span className="link-line">{l.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="lg:col-span-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#3d3430]/55">Direct</p>
            <a href={contact.telHref} className="font-display mt-4 block text-4xl tracking-tight hover:text-[#671e2e]">
              {contact.hotline}
            </a>
            <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="mt-2 block text-sm hover:text-[#671e2e]">
              <span className="link-line">WhatsApp · {contact.whatsappDisplay}</span>
            </a>
            <a href={`mailto:${contact.email}`} className="mt-1.5 block text-sm hover:text-[#671e2e]">
              <span className="link-line">{contact.email}</span>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-[#1a1512]/12 pt-6 text-xs text-[#3d3430]/65">
          <p>© 2026 Element Real Estate · We Listen. We Deliver. You Move.</p>
          <p className="text-[11px] uppercase tracking-[0.18em]">
            Independent digital concept by{" "}
            <a href="https://grindctrl.cloud" className="font-semibold text-[#671e2e] underline underline-offset-4">
              GrindCTRL
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
