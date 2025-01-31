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

export default function RootLayout({ children, params }) {
  const locale = params?.locale || "en";

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content={`width=${viewport.width}, initial-scale=${viewport.initialScale}, minimum-scale=${viewport.minimumScale}, maximum-scale=${viewport.maximumScale}, user-scalable=${viewport.userScalable}`} />
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className={`${roboto.variable} ${msMadi.variable} ${sourceSans3.variable} antialiased`}>
        <I18nProvider locale={locale}>
          <Header />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
