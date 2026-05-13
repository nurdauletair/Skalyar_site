import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Information we process",
    text: "SKALYAR may process business contact information, account details, communication metadata, and message content that a business user connects to the platform for automation purposes."
  },
  {
    title: "How we use information",
    text: "We use information to provide communication automation, route customer requests, improve workflow reliability, maintain platform security, respond to support inquiries, and comply with applicable legal obligations."
  },
  {
    title: "Messaging channels",
    text: "SKALYAR helps businesses automate communication through WhatsApp, Telegram, and future Instagram integrations. Use of each channel may also be governed by the policies and terms of that channel provider."
  },
  {
    title: "Data sharing",
    text: "We do not sell personal data. We may share data with service providers that help operate the platform, with integrated channel providers when required to deliver the service, or when required by law."
  },
  {
  title: "Data deletion",
  text: "Business users and end users may request deletion of their data by contacting us at nurdauletmac@gmail.com. We will review and process deletion requests within a reasonable time, unless retention is required for legal, security, or operational reasons."
  },
  {
    title: "Security and retention",
    text: "We apply reasonable technical and organizational measures to protect information. We retain information only as long as needed to provide the service, meet legal requirements, resolve disputes, and maintain business records."
  },
  {
    title: "User choices",
    text: "Businesses may request access, correction, deletion, or export of relevant information by contacting us. Some data may need to be retained where required for security, legal, or operational reasons."
  }
];

export const metadata = {
  title: "Privacy Policy | SKALYAR",
  description: "SKALYAR privacy policy for business communication automation."
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" subtitle="Effective date: May 13, 2026">
      {sections.map((section) => (
        <section key={section.title} className="border-b border-line py-7 last:border-b-0">
          <h2 className="text-xl font-semibold text-ink">{section.title}</h2>
          <p className="mt-3 text-base leading-8 text-ink/64">{section.text}</p>
        </section>
      ))}
      <section className="pt-7">
        <h2 className="text-xl font-semibold text-ink">Contact</h2>
        <p className="mt-3 text-base leading-8 text-ink/64">
          If you have questions about this Privacy Policy or data processing by
          SKALYAR, contact us at{" "}
          <a className="font-medium text-ink underline" href="mailto:nurdauletmac@gmail.com">
            nurdauletmac@gmail.com
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}

function LegalPage({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
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
          <h1 className="mt-4 text-4xl font-semibold tracking-normal sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-ink/54">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </div>
      </article>
    </main>
  );
}
