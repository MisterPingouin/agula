import Header from "./components/Header/Header";
import { roboto, msMadi, sourceSans3 } from "./fonts";
import "./globals.css";
import { I18nProvider } from "../locales/I18nContext";

export const metadata = {
  title: "L'Agula Marina - Croisières",
  description: "Explorez les plus beaux sites avec L'Agula Marina Croisières."
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children, params }) {
  // `params` est potentiellement asynchrone en Next.js 15 (segmentation dynamique)
  const { locale } = await params;
  const finalLocale = ["en", "fr"].includes(locale) ? locale : "fr";

  return (
    <html lang={finalLocale}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className={`${roboto.variable} ${msMadi.variable} ${sourceSans3.variable} antialiased`}>
        <I18nProvider locale={finalLocale}>
          <Header />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
