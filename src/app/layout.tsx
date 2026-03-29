import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { BootSequence } from "@/components/boot-sequence";
import CursorGlow from "@/components/cursor-glow";
import Konami from "@/components/konami";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.vercel.app'),
  title: {
    default: "Nivesh Dandyan | AI Agent Architect",
    template: "%s | Nivesh Dandyan",
  },
  description:
    "AI Agent Architect. Building self-evolving AI systems for complex workflows. Shipped to 50K+ users. 25M+ organic views.",
  keywords: [
    "Nivesh Dandyan",
    "AI agent architect",
    "multi-agent systems",
    "self-evolving AI",
    "computer-use agent",
    "HappyCapy",
    "portfolio",
  ],
  authors: [{ name: "Nivesh Dandyan" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Nivesh Dandyan",
    title: "Nivesh Dandyan | AI Agent Architect",
    description:
      "Building self-evolving AI systems for complex workflows. Shipped to 50K+ users.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nivesh Dandyan | AI Agent Architect",
    description:
      "Building self-evolving AI systems for complex workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `(function(){var m=localStorage.getItem('theme-mode')||'dark';var a=localStorage.getItem('theme-accent')||'orange';document.documentElement.setAttribute('data-theme',m);document.documentElement.setAttribute('data-accent',a);})()`;

const localeScript = `(function(){var l=localStorage.getItem('locale')||'en';document.documentElement.setAttribute('lang',l==='zh-TW'?'zh-TW':'en');})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: localeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <I18nProvider>
            <BootSequence />
            <Nav />
            <main className="flex-1">{children}</main>
            <Footer />
            <CursorGlow />
            <Konami />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
