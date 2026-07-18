import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGroteskBody = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sme.tangison.com"),
  title: {
    default: "SMEfrog: Jump Into Business",
    template: "%s | SMEfrog",
  },
  description:
    "Namibia's compliance partner. Business registration, compliance services, and business documents. 100% remote, 2X cheaper.",
  icons: { icon: "/upload/Icon.png" },
  alternates: {
    canonical: "https://sme.tangison.com",
  },
  openGraph: {
    title: "SMEfrog: Jump Into Business",
    description: "Namibia's compliance partner. Business registration, compliance services, and business documents. 100% remote, 2X cheaper.",
    type: "website",
    siteName: "SMEfrog",
    url: "https://sme.tangison.com",
    images: ["/upload/Brand ID SMEfrog.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMEfrog: Jump Into Business",
    description: "Namibia's compliance partner. Business registration, compliance services, and business documents. 100% remote, 2X cheaper.",
  },
  keywords: ["SMEfrog", "Namibia", "BIPA", "business registration", "CC registration", "PTY LTD", "compliance", "remote"],
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
        {children}
      </body>
    </html>
  )
}
