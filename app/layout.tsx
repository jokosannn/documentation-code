import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Geist, Geist_Mono, Inter } from "next/font/google";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.className} ${mono.variable}`} suppressHydrationWarning>
      <body className="relative flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
