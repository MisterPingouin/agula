import { NextResponse } from "next/server";
import frData from "./../../../locales/fr";
import enData from "./../../../locales/en";

// Objet de mapping des localisations
const locales = {
  fr: frData,
  en: enData,
};

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const locale = searchParams.get("locale");

    if (!locale || !locales[locale]) {
      console.error("Locale invalide :", locale);
      return NextResponse.json({ message: "Locale invalide" }, { status: 400 });
    }

    // Récupérer les données de localisation
    const localeData = locales[locale];

    // On renvoie tel quel tout l’objet complet (qui inclut .equipe, .popup, etc.)
    return NextResponse.json(localeData);
  } catch (error) {
    console.error("Erreur lors de la récupération du contenu :", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
