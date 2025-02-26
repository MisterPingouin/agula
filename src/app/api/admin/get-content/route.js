import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Empêche le cache et force le runtime Node
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const locale = searchParams.get("locale");

    if (!locale) {
      return NextResponse.json({ message: "Locale invalide" }, { status: 400 });
    }

    // Chemin du fichier .js
    const localeFilePath = path.join(
      process.cwd(),
      "src",
      "app",
      "locales",
      `${locale}.js` // ex: fr.js ou en.js
    );

    // Lit le contenu brut
    let localeDataContent = fs.readFileSync(localeFilePath, "utf-8");
    localeDataContent = localeDataContent.replace(/export\s+default\s+\w+;/, "").trim();

    let localeData;
    try {
      // Transforme le code JS en objet
      localeData = new Function(`
        "use strict";
        ${localeDataContent}
        return ${locale};
      `)();
    } catch (error) {
      console.error("Erreur lors de la lecture de la locale :", error);
      return NextResponse.json({ message: "Erreur lecture locale" }, { status: 500 });
    }

    return NextResponse.json(localeData);
  } catch (error) {
    console.error("Erreur lors de la récupération du contenu :", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
