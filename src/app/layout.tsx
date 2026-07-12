import type { Metadata, Viewport } from "next";
import { Sora, Inter, Geist } from "next/font/google";
import LenisProvider from "@/components/motion/LenisProvider";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MYHitch — Hitching the World Together, Digitally",
  description:
    "Australia's intelligent digital commerce & supply-chain ecosystem. One platform, unlimited possibilities, endless connections.",
  metadataBase: new URL("https://myhitch.com.au"),
  openGraph: {
    title: "MYHitch — Hitching the World Together, Digitally",
    description:
      "One platform. Unlimited possibilities. Endless connections. Australia's intelligent commerce & supply-chain ecosystem.",
    type: "website",
    locale: "en_AU",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      className={cn("h-full", "antialiased", sora.variable, inter.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <div className="page-ambient" aria-hidden />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
