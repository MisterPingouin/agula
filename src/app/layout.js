import Header from "./[locale]/components/Header/Header";
import Footer from "./[locale]/components/Footer/Footer";
import Signature from "./[locale]/components/Signature";
import { roboto, msMadi, sourceSans3 } from "./[locale]/fonts";
import "./globals.css";
import { I18nProvider } from "./locales/I18nContext";

export const metadata = {
  title: "L'Agula Marina - Croisières",
  description: "Explorez les plus beaux sites avec L'Agula Marina Croisières.",
  keywords: "Sortie en mer, balade en mer,bateau,Calaques de Piana,Réserve Naturelle de Scandola,pivratisation,sunset,promenades en mer, coucher de soleil,bateau avec skipper",
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
        </head>
      <body className={`${roboto.variable} ${msMadi.variable} ${sourceSans3.variable} antialiased`}>
        <I18nProvider locale={finalLocale}>
          <Header />
          {children}
          <Footer />
          <Signature />
        </I18nProvider>
      </body>
    </html>
  );
}
