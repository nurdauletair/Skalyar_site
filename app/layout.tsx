import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKALYAR | AI Communication Automation Platform",
  description:
    "SKALYAR helps businesses automate customer communication through WhatsApp, Telegram, and future Instagram integrations.",
  metadataBase: new URL("https://skalyar.com"),
  openGraph: {
    title: "SKALYAR",
    description:
      "AI communication automation platform for modern businesses.",
    url: "https://skalyar.com",
    siteName: "SKALYAR",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
