import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
    "Simple. Fast. Affordable startup support for Namibian entrepreneurs. Business registration, startup documentation, and digital services.",
  icons: {
    icon: "/icon.png",
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
        <div className="min-h-screen flex flex-col bg-frog-black text-frog-light">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
