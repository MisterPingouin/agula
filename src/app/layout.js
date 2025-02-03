import Header from "./[locale]/components/Header/Header";
import Footer from "./[locale]/components/Footer/Footer";
import { roboto, msMadi, sourceSans3 } from "./[locale]/fonts";
import "./globals.css";
import { I18nProvider } from "./locales/I18nContext";

export const metadata = {
  title: "L'Agula Marina - Croisières",
  description: "Explorez les plus beaux sites avec L'Agula Marina Croisières."
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children, params }) {
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
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
