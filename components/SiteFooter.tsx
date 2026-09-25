import { contact } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="bg-[#f6f1e8] pb-10 pt-16">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-10 border-t-2 border-[#1a1512] pt-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-4xl tracking-tight">Element</p>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#671e2e]">
              Find your element
            </p>
            <p className="mt-5 max-w-[44ch] text-sm leading-relaxed text-[#3d3430]">
              Egypt and the Gulf&apos;s consultant network. From the Mediterranean coast to Downtown
              Dubai — routed to the consultant who knows the project.
            </p>
            <p className="mt-4 text-sm font-semibold">We Listen. We Deliver. You Move.</p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-sm md:col-span-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#3d3430]/60">Find</p>
              <ul className="mt-3 space-y-2">
                {["All units", "All compounds", "Drive the Coast", "North Coast", "New Cairo", "Dubai"].map((l) => (
                  <li key={l}>
                    <a href="#portfolio" className="hover:text-[#671e2e] hover:underline underline-offset-4">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#3d3430]/60">Element</p>
              <ul className="mt-3 space-y-2">
                {["Sell your unit", "ROI thinking", "Expos & open houses", "Join the network"].map((l) => (
                  <li key={l}>
                    <a href="#practice" className="hover:text-[#671e2e] hover:underline underline-offset-4">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="md:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#3d3430]/60">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={contact.telHref} className="font-display text-2xl">
                  📞 {contact.hotline}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="underline underline-offset-4">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.whatsappHref} className="underline underline-offset-4">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* GrindCTRL demo disclosure — same pattern as ctrl.grindctrl.cloud */}
        <div className="mt-12 border border-[#671e2e]/25 bg-[#ede4d3] px-5 py-5 text-[13px] leading-relaxed text-[#3d3430]">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#671e2e]">
            Demo · Independent concept by GrindCTRL
          </p>
          <p className="mt-2">
            Independent review concept — not the official site of this business. Place, developer and
            corridor names reflect public pages on element-realestate.com; imagery is illustrative and
            no live prices or availability are claimed. © 2026 ·{" "}
            <a href="https://grindctrl.cloud" className="font-semibold underline underline-offset-4">
              Built by GrindCTRL
            </a>{" "}
            · Intended host: element.grindctrl.cloud
          </p>
        </div>
      </div>
    </footer>
  );
}
