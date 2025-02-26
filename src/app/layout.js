import Header from "./[locale]/components/Header/Header";
import Footer from "./[locale]/components/Footer/Footer";
import Signature from "./[locale]/components/Signature";
import { roboto, msMadi, sourceSans3 } from "./[locale]/fonts";
import "./globals.css";
import { I18nProvider } from "./locales/I18nContext";

export const metadata = {
  title: "L'Agula Marina - Croisières",
  description: "Embarquez pour une aventure inoubliable avec l’Agula Marina Croisières, à bord du Sacha, un semi rigide de 12 places pour une balade en toute intimité et explorez les plus beaux sites de la région. Laissez-vous émerveiller par des eaux cristallines et les paysages côtiers spectaculaires. Vous aurez l'occasion de visiter les Calanques de Piana, la réserve naturelle de Scandola ainsi que le village de Girolata uniquement accessible à pied ou en bateau, tout en profitant d’un confort exceptionnel à bord avec notre skipper ! Que ce soit pour un moment de détente en admirant le coucher du soleil, ou pour une plongée dans les fonds marins le temps de notre pause baignade, cette sortie en bateau vous promet une expérience inédite !",
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
