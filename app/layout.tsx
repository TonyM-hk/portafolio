import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import { LanguageProvider } from "@/context/language-context";
import { personal } from "@/data/content";
import LoadingScreen from "@/components/loading-screen";
import ScrollProgress from "@/components/ui/scroll-progress";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import BackToTop from "@/components/ui/back-to-top";

const siteUrl = "https://tonym-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} — ${personal.role.es} / ${personal.role.en}`,
    template: `%s — ${personal.name}`,
  },
  description: personal.tagline.es,
  keywords: [
    "desarrolladora de software",
    "software developer",
    "full stack developer",
    "React",
    "Next.js",
    "TypeScript",
    "portafolio",
    "portfolio",
  ],
  authors: [{ name: personal.name, url: siteUrl }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: "en_US",
    url: siteUrl,
    title: `${personal.name} — ${personal.role.es}`,
    description: personal.tagline.es,
    siteName: personal.name,
    images: [{ url: "/images/og-cover.svg", width: 1200, height: 630, alt: personal.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.role.es}`,
    description: personal.tagline.es,
    images: ["/images/og-cover.svg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0D12" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Prevents a flash of the wrong theme before hydration.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('portfolio-theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.role.en,
  email: personal.email,
  url: siteUrl,
  sameAs: [personal.github, personal.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <LanguageProvider>
            <LoadingScreen />
            <ScrollProgress />
            <a
              href="#main-content"
              className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0"
            >
              Saltar al contenido / Skip to content
            </a>
            {children}
            <WhatsAppButton />
            <BackToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
