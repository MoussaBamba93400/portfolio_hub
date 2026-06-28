import type { Metadata } from "next";
import { body, display } from "./fonts";
import { PROFILE } from "./data";
import "./globals.css";

export const metadata: Metadata = {
  title: `${PROFILE.fullName} — ${PROFILE.title}`,
  description: PROFILE.tagline,
  openGraph: {
    title: `${PROFILE.fullName} — ${PROFILE.title}`,
    description: PROFILE.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
