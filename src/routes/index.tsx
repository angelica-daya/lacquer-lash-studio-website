import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircleHeart, CalendarClock, MailCheck, Menu, X, MapPin, Phone, Clock, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { openChat } from "@/lib/open-chat";
import heroImg from "@/assets/hero-nails.jpg";
import lashImg from "@/assets/lashes.jpg";
import nailArtImg from "@/assets/nail-art.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lacquer & Lash Co. | Nails & Lashes in Old Town Scottsdale" },
      { name: "description", content: "Gel-X, acrylics, mani-pedis and lash extensions in Old Town Scottsdale. Chat with Coco, our AI assistant, to book in under a minute." },
      { property: "og:title", content: "Lacquer & Lash Co. | Scottsdale Nail & Lash Studio" },
      { property: "og:description", content: "Polished nails, lifted lashes, zero fuss. Chat with Coco to book." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const links = [
  ["Nails", "#nails"],
  ["Lashes", "#lashes"],
  ["Team", "#team"],
  ["Policies", "#policies"],
  ["Visit", "#visit"],
] as const;

const nails = [
  ["Classic Manicure", "$35", "30 min"],
  ["Gel Manicure", "$50", "45 min"],
  ["Gel-X Full Set", "from $75", "90 min"],
  ["Acrylic Full Set", "from $65", "75 min"],
  ["Acrylic Fill", "$50", "60 min"],
  ["Gel Removal", "$15", "15 min"],
  ["Nail Art add-on", "from $10", "+15 min"],
  ["Classic Pedicure", "$45", "45 min"],
  ["Gel Pedicure", "$60", "60 min"],
] as const;

const lashSets = [
  ["Classic Full Set", "$140", "2 hrs", "One extension per lash. Your mascara, but better."],
  ["Hybrid Full Set", "$165", "2 hrs", "A mix of classic and volume. Fuller but still soft."],
  ["Volume Full Set", "$190", "2.5 hrs", "Fluffy fans for a full, glam look."],
] as const;
const lashExtras = [
  ["Lash Fill (within 3 weeks)", "from $65", "60–75 min"],
  ["Lash Lift & Tint", "$85", "60 min"],
  ["Lash Removal", "$25", "30 min"],
] as const;

const team = [
  ["Dani", "Owner & Lash Artist", "bg-lavender-soft"],
  ["Priya", "Lash & Brow Artist", "bg-lavender-soft"],
  ["Kim", "Nail Tech & Nail Art Specialist", "bg-blush"],
  ["Rosa", "Nail Tech, Gel-X & Acrylics", "bg-blush"],
] as const;

const policies = [
  ["Deposits", "Lash full sets need a $25 deposit, which comes off your total. We text you a secure payment link after booking."],
  ["Cancellations", "Please give 24 hours' notice. Late cancellations and no-shows lose the deposit."],
  ["Running late", "We have a 10-minute grace period. After that your service may need to be shortened or rescheduled."],
  ["Walk-ins", "We're appointment only, but ask Coco about same-day openings."],
  ["Prep", "Come with clean lashes and no mascara. If you have gel or acrylic from another salon, let us know so we can allow time for removal."],
] as const;

const hours = [
  ["Tue–Fri", "10am–7pm"],
  ["Sat", "9am–5pm"],
  ["Sun", "11am–4pm"],
  ["Mon", "Closed"],
] as const;

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`font-serif text-2xl font-semibold tracking-tight ${light ? "text-cream" : "text-mauve"}`}>
      Lacquer <span className="italic text-rose">&amp;</span> Lash Co.
    </a>
  );
}

function SectionTitle({ eyebrow, title, accent = "gold" }: { eyebrow: string; title: string; accent?: "gold" | "lavender" }) {
  return (
    <div className="mb-10 text-center">
      <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${accent === "lavender" ? "text-lavender" : "text-rose"}`}>{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold md:text-5xl">{title}</h2>
      <div className={`gold-rule mx-auto mt-5 ${accent === "lavender" ? "bg-lavender" : ""}`} />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm font-medium text-mauve/80 transition-colors hover:text-rose">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="pill" size="sm" className="hidden px-4 sm:inline-flex" onClick={openChat}>Chat with Coco</Button>
          <button aria-label="Menu" className="p-2 text-mauve md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 px-5 py-3 md:hidden">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 font-medium text-mauve">{l}</a>
          ))}
          <Button variant="pill" className="mt-2" onClick={() => { setOpen(false); openChat(); }}>Chat with Coco</Button>
        </nav>
      )}
    </header>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-cream">
      <Nav />

      {/* Hero */}
      <section className="bg-blush">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose">Old Town Scottsdale</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              Polished nails, <em className="text-rose">lifted lashes,</em> zero fuss.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Old Town Scottsdale's nail and lash studio. Gel-X, acrylics, mani-pedis and lash extensions by artists who care about the details.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="pill" size="xl" onClick={openChat}><MessageCircleHeart /> Chat with Coco to book</Button>
              <Button variant="pillOutline" size="xl" asChild><a href="#nails">See the menu</a></Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Coco replies instantly, 24/7 💅</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -z-0 rotate-2 rounded-[2rem] border border-gold/50" />
            <img src={heroImg} alt="Manicured hands with glossy blush gel nails on cream silk" width={1280} height={1440} className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft" />
          </div>
        </div>
      </section>

      {/* Meet Coco */}
      <section className="bg-mauve text-cream">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center">
          <h2 className="text-4xl font-semibold text-cream">Book in under a minute</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              [MessageCircleHeart, "Tell Coco what you're after"],
              [CalendarClock, "Pick a time that suits you"],
              [MailCheck, "Get your confirmation by text and email"],
            ].map(([Icon, t], i) => {
              const I = Icon as typeof MessageCircleHeart;
              return (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="flex size-14 items-center justify-center rounded-full bg-cream/10 ring-1 ring-gold/60">
                    <I className="size-6 text-blush" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-gold">Step {i + 1}</p>
                  <p className="max-w-[14rem] font-medium">{t as string}</p>
                </div>
              );
            })}
          </div>
          <Button variant="pill" size="xl" className="mt-10" onClick={openChat}>Start a chat</Button>
        </div>
      </section>

      {/* Nails */}
      <section id="nails" className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionTitle eyebrow="The nail menu" title="Nails" />
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <img src={nailArtImg} alt="Rose pink almond nails with gold lines and pearls" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-[1.5rem] object-cover shadow-soft lg:aspect-auto lg:h-full" />
            <div className="card-soft p-6 md:p-8">
              <ul className="divide-y divide-border">
                {nails.map(([s, p, t]) => (
                  <li key={s} className="flex items-baseline justify-between gap-4 py-3.5">
                    <div>
                      <p className="font-serif text-xl font-semibold text-mauve">{s}</p>
                      <p className="text-sm text-muted-foreground">{t}</p>
                    </div>
                    <p className="whitespace-nowrap font-semibold text-rose">{p}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm italic text-muted-foreground">"From" prices depend on length, shape and design, confirmed in the studio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lashes */}
      <section id="lashes" className="bg-blush">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionTitle eyebrow="The lash menu" title="Lashes" accent="lavender" />
          <img src={lashImg} alt="Close-up of soft, fluffy lash extensions" loading="lazy" width={1280} height={960} className="mb-10 aspect-[16/7] w-full rounded-[1.5rem] object-cover shadow-soft" />
          <div className="grid gap-5 md:grid-cols-3">
            {lashSets.map(([n, p, t, d]) => (
              <div key={n} className="card-soft border-t-4 border-lavender p-7">
                <h3 className="text-2xl font-semibold">{n}</h3>
                <p className="mt-2 text-sm text-muted-foreground"><span className="text-lg font-semibold text-rose">{p}</span> · {t}</p>
                <p className="mt-4 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ul className="card-soft divide-y divide-border p-6">
              {lashExtras.map(([s, p, t]) => (
                <li key={s} className="flex items-baseline justify-between gap-4 py-3">
                  <div>
                    <p className="font-serif text-lg font-semibold text-mauve">{s}</p>
                    <p className="text-sm text-muted-foreground">{t}</p>
                  </div>
                  <p className="whitespace-nowrap font-semibold text-rose">{p}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-col justify-center rounded-[1.25rem] border border-lavender bg-lavender-soft p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lavender">New to lashes with us?</p>
              <p className="mt-3 text-mauve">
                You'll need a free 15-minute patch test at least 48 hours before your first full set or lift. Coco can book both for you.
              </p>
              <Button variant="pill" className="mt-5 self-start" onClick={openChat}>Chat with Coco</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionTitle eyebrow="The artists" title="Meet the team" />
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {team.map(([n, r, bg]) => (
              <div key={n} className="card-soft flex flex-col items-center p-6 text-center">
                <div className={`flex size-20 items-center justify-center rounded-full ${bg} ring-2 ring-gold/50`}>
                  <span className="font-serif text-3xl italic text-mauve">{n[0]}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold">{n}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section id="policies" className="bg-blush">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <SectionTitle eyebrow="Good to know" title="Policies" />
          <Accordion type="single" collapsible className="card-soft px-6">
            {policies.map(([t, d]) => (
              <AccordionItem key={t} value={t}>
                <AccordionTrigger className="font-serif text-xl text-mauve hover:no-underline">{t}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">{d}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionTitle eyebrow="Find us" title="Visit the studio" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-soft space-y-5 p-7">
              <Info icon={MapPin} title="Address">4120 N Marshall Way, Scottsdale, AZ 85251</Info>
              <Info icon={Phone} title="Phone"><a href="tel:+14805550142" className="hover:text-rose">(480) 555-0142</a></Info>
              <Info icon={Clock} title="Hours">
                <ul>{hours.map(([d, h]) => <li key={d} className="flex justify-between gap-6"><span>{d}</span><span>{h}</span></li>)}</ul>
              </Info>
              <Info icon={Car} title="Parking">Free street parking and a public garage on 2nd Street</Info>
              <Button variant="pill" size="xl" className="w-full" onClick={openChat}>Chat with Coco</Button>
            </div>
            <MapArt />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blush">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <div className="gold-rule mx-auto mb-6" />
          <h2 className="text-4xl font-semibold md:text-5xl">Your next set is one chat away.</h2>
          <Button variant="pill" size="xl" className="mt-8" onClick={openChat}><MessageCircleHeart /> Chat with Coco to book</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mauve pb-24 text-cream/80 md:pb-10">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
          <div>
            <Logo light />
            <p className="mt-3 text-sm">4120 N Marshall Way, Scottsdale, AZ 85251</p>
          </div>
          <nav className="flex flex-col gap-2 text-sm">
            <p className="mb-1 text-xs uppercase tracking-widest text-gold">Quick links</p>
            {links.map(([l, h]) => <a key={h} href={h} className="hover:text-cream">{l}</a>)}
          </nav>
          <div className="text-sm">
            <p className="mb-3 text-xs uppercase tracking-widest text-gold">Hours</p>
            {hours.map(([d, h]) => <p key={d}>{d}: {h}</p>)}
          </div>
        </div>
        <div className="mx-auto max-w-6xl border-t border-cream/15 px-5 pt-6 text-xs text-cream/60">
          Lacquer &amp; Lash Co. is a fictional business. Demo website and AI chat agent built by{" "}
          <a href="https://angelicadfernandez.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-cream">Angelica Fernandez</a>.
        </div>
      </footer>
    </div>
  );
}

function Info({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blush"><Icon className="size-4 text-rose" /></div>
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-mauve">{title}</p>
        <div className="mt-1 text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

function MapArt() {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[1.25rem] bg-blush shadow-soft" aria-label="Map of Old Town Scottsdale">
      <svg viewBox="0 0 400 400" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice">
        <g stroke="var(--cream)" strokeWidth="14" fill="none">
          <path d="M0 120 H400" /><path d="M0 260 H400" /><path d="M120 0 V400" /><path d="M290 0 V400" />
        </g>
        <path d="M0 330 C120 300 260 360 400 320" stroke="var(--lavender)" strokeOpacity="0.5" strokeWidth="10" fill="none" />
        <rect x="140" y="140" width="130" height="100" rx="12" fill="var(--cream)" fillOpacity="0.6" />
        <g fill="var(--mauve)" fontFamily="DM Sans, sans-serif" fontSize="11" opacity="0.7">
          <text x="300" y="112">2nd St</text><text x="126" y="20" transform="rotate(90 126 20)">Marshall Way</text>
          <text x="20" y="252">Main St</text>
        </g>
        <rect x="300" y="140" width="60" height="40" rx="6" fill="var(--gold)" fillOpacity="0.4" />
        <text x="306" y="164" fontFamily="DM Sans, sans-serif" fontSize="10" fill="var(--mauve)">Garage</text>
      </svg>
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center">
        <div className="rounded-full bg-mauve px-3 py-1 text-xs font-semibold text-cream shadow-soft">Lacquer &amp; Lash Co.</div>
        <MapPin className="mt-1 size-8 fill-rose text-cream" />
      </div>
    </div>
  );
}
