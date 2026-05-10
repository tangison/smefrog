import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SMEfrog — Jump Into Business",
  description:
    "Simple. Fast. Affordable startup support for Namibian entrepreneurs. We help startups register, launch, structure, and grow — without the expensive consultant fees.",
  keywords: [
    "SMEfrog",
    "Namibia",
    "business registration",
    "startup",
    "BIPA",
    "CC registration",
    "Pty Ltd",
    "entrepreneur",
  ],
  authors: [{ name: "SMEfrog" }],
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "SMEfrog — Jump Into Business",
    description:
      "Simple. Fast. Affordable startup support for Namibian entrepreneurs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${plusJakarta.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
