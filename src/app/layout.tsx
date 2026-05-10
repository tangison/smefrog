import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SearchOverlay } from "@/components/search-overlay";
import { FrogAIChat } from "@/components/frogai-chat";

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
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "SMEfrog — Jump Into Business",
    template: "%s | SMEfrog",
  },
  description:
    "Namibia's premium remote business registration service. BIPA filing, startup support, and digital services — 100% remote, 2X cheaper.",
  icons: { icon: "/frog-icon.png" },
  openGraph: {
    title: "SMEfrog — Jump Into Business",
    description: "Namibia's premium remote business registration service. Fast BIPA filing without the markup.",
    type: "website",
    siteName: "SMEfrog",
    images: ["/brand-id-full.png"],
  },
  keywords: ["SMEfrog", "Namibia", "BIPA", "business registration", "CC registration", "PTY LTD", "startup", "remote"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${plusJakarta.variable} antialiased noise-layer`}
        style={{ fontFamily: "'Satoshi', 'Plus Jakarta Sans', system-ui, sans-serif" }}
      >
        <div className="min-h-screen flex flex-col bg-frog-black text-frog-light">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <SearchOverlay />
        <FrogAIChat />
      </body>
    </html>
  )
}
