import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKALYAR | AI Communication Automation Platform",
  description:
    "SKALYAR helps businesses automate customer communication through WhatsApp, Telegram, and future Instagram integrations.",
  metadataBase: new URL("https://skalyar.com"),
  icons: {
    icon: "/skalyar-logo.jpeg",
    shortcut: "/skalyar-logo.jpeg",
    apple: "/skalyar-logo.jpeg"
  },
  openGraph: {
    title: "SKALYAR",
    description:
      "AI communication automation platform for modern businesses.",
    url: "https://skalyar.com",
    siteName: "SKALYAR",
    images: [
      {
        url: "/skalyar-logo.jpeg",
        width: 1024,
        height: 1024,
        alt: "SKALYAR logo"
      }
    ],
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
