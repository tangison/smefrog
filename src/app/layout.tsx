import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
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

// Brand spec: Space Grotesk is the sole font for both heading and body
const spaceGroteskBody = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smefrog.tangison.com"),
  title: {
    default: "SMEfrog — Jump Into Business",
    template: "%s | SMEfrog",
  },
  description:
    "Namibia's premium remote business registration service. BIPA filing, startup support, and digital services — 100% remote, 2X cheaper.",
  icons: { icon: "/upload/Icon.png" },
  openGraph: {
    title: "SMEfrog — Jump Into Business",
    description: "Namibia's premium remote business registration service. Fast BIPA filing without the markup.",
    type: "website",
    siteName: "SMEfrog",
    images: ["/upload/Brand ID SMEfrog.png"],
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

      <body
        className={`${spaceGrotesk.variable} ${spaceGroteskBody.variable} antialiased noise-layer`}
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
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
