import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  Check,
  Clock3,
  MessageCircle,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-assisted conversations",
    text: "Automate repetitive customer questions while keeping escalation paths clear for your team."
  },
  {
    icon: Network,
    title: "Multi-channel messaging",
    text: "Manage WhatsApp and Telegram workflows today, with Instagram integrations planned for future releases."
  },
  {
    icon: Workflow,
    title: "Business process automation",
    text: "Route inquiries, qualify leads, trigger follow-ups, and keep communication consistent."
  },
  {
    icon: ShieldCheck,
    title: "Operational controls",
    text: "Designed for business use with clear policies, data handling pages, and accountable contact points."
  }
];

const audiences = [
  "Sales teams that need faster lead response",
  "Support teams handling repeated customer requests",
  "Service businesses coordinating bookings and updates",
  "Founders building scalable client communication"
];

const steps = [
  "Connect your business communication channels",
  "Define automation flows and escalation rules",
  "Let SKALYAR respond, route, and organize conversations",
  "Review performance and improve each workflow over time"
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-mist text-ink">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/88 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="SKALYAR home">
            <span className="relative h-10 w-10 overflow-hidden rounded border border-white/12 bg-ink">
              <Image
                src="/skalyar-logo.jpeg"
                alt="SKALYAR logo"
                fill
                priority
                sizes="40px"
                className="object-cover"
              />
            </span>
            <span className="text-sm font-semibold tracking-[0.18em]">SKALYAR</span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-white/72 md:flex">
            <a href="#what">What it does</a>
            <a href="#features">Features</a>
            <a href="#workflow">How it works</a>
            <a href="#contact">Contact</a>
          </nav>
          <a
            href="mailto:nurdauletmac@gmail.com"
            className="inline-flex h-10 items-center gap-2 rounded border border-white/18 px-4 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/8"
          >
            Contact
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="relative bg-ink pt-16 text-white">
        <div className="absolute inset-0 dark-grid opacity-35" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-white/14 bg-white/7 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/76">
              <Sparkles className="h-4 w-4 text-emerald-300" aria-hidden="true" />
              AI communication automation
            </div>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              SKALYAR
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-white/72 sm:text-2xl sm:leading-9">
              AI communication automation platform for businesses.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
              We help businesses automate customer communication through
              WhatsApp, Telegram, and future Instagram integrations.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded bg-white px-5 text-sm font-semibold text-ink transition hover:bg-white/90"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#what"
                className="inline-flex h-12 items-center justify-center rounded border border-white/16 px-5 text-sm font-semibold text-white transition hover:border-white/34 hover:bg-white/7"
              >
                See platform overview
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="border border-white/12 bg-white/8 p-3 shadow-panel backdrop-blur">
              <div className="overflow-hidden rounded bg-[#10151d]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/44">
                      Live operations
                    </p>
                    <p className="mt-1 font-medium text-white">Customer inbox automation</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    Active
                  </div>
                </div>
                <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
                  <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
                    {["WhatsApp", "Telegram", "Instagram"].map((channel, index) => (
                      <div
                        key={channel}
                        className="mb-3 flex items-center justify-between border border-white/10 bg-white/[0.04] p-4"
                      >
                        <div className="flex items-center gap-3">
                          <MessageCircle className="h-5 w-5 text-emerald-200" aria-hidden="true" />
                          <span className="text-sm font-medium text-white">{channel}</span>
                        </div>
                        <span className="text-xs text-white/48">
                          {index === 2 ? "Planned" : "Connected"}
                        </span>
                      </div>
                    ))}
                    <div className="mt-6 border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/58">Automation coverage</span>
                        <span className="font-semibold text-white">78%</span>
                      </div>
                      <div className="mt-3 h-2 bg-white/10">
                        <div className="h-2 w-[78%] bg-emerald-300" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="space-y-3">
                      {[
                        ["New lead", "Pricing question answered and routed to sales"],
                        ["Support request", "Order status shared from saved workflow"],
                        ["Follow-up", "Reminder scheduled for tomorrow morning"]
                      ].map(([label, detail]) => (
                        <div key={label} className="border border-white/10 bg-white/[0.04] p-4">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm font-semibold text-white">{label}</span>
                            <Check className="h-4 w-4 text-emerald-200" aria-hidden="true" />
                          </div>
                          <p className="text-sm leading-6 text-white/56">{detail}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <Metric value="4.8m" label="Avg response" />
                      <Metric value="24/7" label="Availability" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionLabel>What SKALYAR does</SectionLabel>
            <div>
              <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-ink sm:text-5xl">
                SKALYAR turns everyday customer messages into structured,
                automated business workflows.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/62">
                Instead of letting important conversations sit across channels,
                SKALYAR helps businesses answer faster, qualify requests, keep
                context organized, and hand off complex cases to people.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="grid-pattern border-y border-line bg-mist py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>Features</SectionLabel>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
                Built for reliable customer communication at business scale.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-ink/62">
              A clean platform foundation for message automation, channel
              expansion, and team visibility.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <article key={feature.title} className="border border-line bg-white p-6 shadow-soft">
                <feature.icon className="h-6 w-6 text-signal" aria-hidden="true" />
                <h3 className="mt-7 text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionLabel>For whom</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              For teams that cannot afford slow replies.
            </h2>
          </div>
          <div className="grid gap-3">
            {audiences.map((item) => (
              <div key={item} className="flex items-start gap-4 border-b border-line py-5">
                <Building2 className="mt-1 h-5 w-5 shrink-0 text-cobalt" aria-hidden="true" />
                <p className="text-lg font-medium text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionLabel dark>How it works</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
              Simple setup, controlled automation, measurable communication.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="border border-white/12 bg-white/[0.04] p-6">
                <div className="mb-8 flex h-10 w-10 items-center justify-center rounded bg-white text-sm font-bold text-ink">
                  {index + 1}
                </div>
                <p className="text-base font-medium leading-7 text-white/82">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 border border-line bg-mist p-6 shadow-soft sm:p-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
                Bring AI automation to your business communication.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/62">
                For product access, partnership questions, or Meta App review
                verification, contact the SKALYAR team.
              </p>
            </div>
            <div className="bg-ink p-6 text-white sm:p-8">
              <div className="grid gap-5">
                <ContactRow icon={MessageCircle} label="Email" value="nurdauletmac@gmail.com" />
                <ContactRow icon={Clock3} label="Response time" value="1-2 business days" />
                <ContactRow icon={BarChart3} label="Focus" value="B2B communication automation" />
              </div>
              <a
                href="mailto:nurdauletmac@gmail.com"
                className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded bg-white px-5 text-sm font-semibold text-ink transition hover:bg-white/90"
              >
                Email SKALYAR
                <Zap className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-ink/58 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SKALYAR. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-ink">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SectionLabel({
  children,
  dark = false
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.18em] ${
        dark ? "text-emerald-200" : "text-signal"
      }`}
    >
      {children}
    </p>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-white/10 bg-white/[0.04] p-4">
      <p className="text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/42">{label}</p>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value
}: {
  icon: typeof MessageCircle;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-emerald-200" aria-hidden="true" />
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-white/42">{label}</p>
        <p className="mt-1 text-base font-medium text-white">{value}</p>
      </div>
    </div>
  );
}
