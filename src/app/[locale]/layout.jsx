import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jhosbel Vargas",
  description: "Bienvenido a mi Portafolio",
};

// eslint-disable-next-line react-hooks/rules-of-hooks
export default function RootLayout({ children, locale }) {
  const messages = useMessages()
  return (
    <html lang={locale} className="scroll-smooth">
      <NextIntlClientProvider messages={messages}>
        <body className={inter.className}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
