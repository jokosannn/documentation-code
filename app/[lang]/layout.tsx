import "@/app/global.css";
import { Translations } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import type { ReactNode } from "react";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// translations
// const cn: Partial<Translations> = {
//   search: "Translated Content",
// };
const translations: Record<string, Partial<Translations>> = {
  id: {
    search: "Cari...",
  },
  en: {
    search: "Search...",
  },
};

// available languages that will be displayed on UI
// make sure `locale` is consistent with your i18n config
const locales = [
  {
    name: "English",
    locale: "en",
  },
  {
    name: "Indonesia",
    locale: "id",
  },
];

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang;

  return (
    <html lang={lang} className={`${geist.className} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          i18n={{
            locale: lang,
            locales,
            translations: translations[lang],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
