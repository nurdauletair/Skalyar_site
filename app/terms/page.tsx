import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Use of the service",
    text: "SKALYAR provides AI communication automation tools for businesses. The service is currently offered as a software and automation platform for business communication workflows."
  },
  {
    title: "Business responsibility",
    text: "Customers are responsible for the content, accuracy, legality, and permissions related to their customer communications, automation flows, connected channels, and end-user consent."
  },
  {
    title: "Integrations",
    text: "SKALYAR may integrate with WhatsApp, Telegram, and future Instagram features. Availability of integrations may depend on third-party APIs, platform approvals, account status, and technical requirements."
  },
  {
    title: "Acceptable use",
    text: "You may not use SKALYAR to send spam, deceptive content, illegal content, malware, abusive messages, or communications that violate privacy, marketing, consumer protection, or platform policies."
  },
  {
    title: "Service changes",
    text: "We may update, improve, limit, or discontinue features as the product evolves. We aim to keep the service reliable, but we do not guarantee uninterrupted access."
  },
  {
    title: "Limitation of liability",
    text: "To the maximum extent permitted by law, SKALYAR is not liable for indirect, incidental, special, consequential, or lost-profit damages arising from use of the service."
  }
];

export const metadata = {
  title: "Terms | SKALYAR",
  description: "SKALYAR terms for business communication automation."
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-mist text-ink">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em]">
            <span className="relative h-9 w-9 overflow-hidden rounded bg-ink">
              <Image
                src="/skalyar-logo.jpeg"
                alt="SKALYAR logo"
                fill
                sizes="36px"
                className="object-cover"
              />
            </span>
            SKALYAR
          </Link>
          <Link href="/" className="text-sm font-medium text-ink/62 hover:text-ink">
            Back to home
          </Link>
        </div>
      </header>
      <article className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="border border-line bg-white p-6 shadow-soft sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-signal">
            SKALYAR
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-ink/54">Effective date: May 13, 2026</p>
          <div className="mt-8">
            {sections.map((section) => (
              <section key={section.title} className="border-b border-line py-7 last:border-b-0">
                <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
                <p className="mt-3 text-base leading-8 text-ink/64">{section.text}</p>
              </section>
            ))}
            <section className="pt-7">
              <h2 className="text-xl font-semibold text-ink">Contact</h2>
              <p className="mt-3 text-base leading-8 text-ink/64">
                Questions about these Terms can be sent to{" "}
                <a className="font-medium text-ink underline" href="mailto:nurdauletmac@gmail.com">
                  nurdauletmac@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
