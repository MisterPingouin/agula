import Header from "./components/Header/Header";
import { Roboto, Ms_Madi, Source_Sans_3, Sen } from "next/font/google";
import "./globals.css";

// Import et configuration des polices
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300","400","700"],
});

const msMadi = Ms_Madi({
  variable: "--font-ms-madi",
  subsets: ["latin"],
  weight: ["400"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
  weight: ["400", "600"],
});
// Configuration des métadonnées pour le site
export const metadata = {
  title: "L'Agula Marina - Croisières",
  description: "Explorez les plus beaux sites avec L'Agula Marina Croisières.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body
        className={`${roboto.variable} ${msMadi.variable} ${sourceSans3.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
