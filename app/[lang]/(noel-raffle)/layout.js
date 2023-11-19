import { i18n } from "@/i18n.config";

import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/reset.css";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Noel Raffle",
  description: "Noel raffle website",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <Navbar lang={params.lang} isGiftRaffle={false} />
        <main>{children}</main>
      </body>
    </html>
  );
}
