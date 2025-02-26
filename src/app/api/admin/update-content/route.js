import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Empêche le cache et force le runtime Node
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Configuration pour savoir quel fichier correspond à chaque locale
const localesConfig = {
  fr: { fileName: "fr.js", variableName: "fr" },
  en: { fileName: "en.js", variableName: "en" },
};

export async function POST(req) {
  try {
    // Récupère le body JSON
    const {
      subtitle2,
      content3,
      subtitle3,
      content4,
      popupEnabled,
      popupTitle,
      popupLine1,
      popupLine2,
      popupLine3,
      popupValidity,
      locale,
    } = await req.json();

    // Vérifie que la locale demandée est valide
    if (!locale || !localesConfig[locale]) {
      return NextResponse.json({ message: "Locale invalide" }, { status: 400 });
    }

    // Détermine le chemin absolu du fichier .js à modifier
    const localeFilePath = path.join(
      process.cwd(),
      "src",
      "app",
      "locales",
      localesConfig[locale].fileName
    );

    console.log("Chemin du fichier de localisation :", localeFilePath);

    // Lit le contenu brut du fichier
    let localeDataContent = fs.readFileSync(localeFilePath, "utf-8");

    // Supprime la ligne "export default fr/en;"
    localeDataContent = localeDataContent.replace(/export\s+default\s+\w+;/, "").trim();

    // Convertit le code JS en un objet
    let localeData;
    try {
      localeData = new Function(`
        "use strict";
        ${localeDataContent}
        return ${localesConfig[locale].variableName};
      `)();
    } catch (error) {
      console.error("Erreur lors du chargement des données de localisation :", error);
      return NextResponse.json(
        { message: "Erreur de lecture du fichier de localisation" },
        { status: 500 }
      );
    }

    // === Mise à jour du contenu (exemple : équipe) ===
    localeData.equipe.subtitle2 = subtitle2;
    localeData.equipe.content3 = content3;
    localeData.equipe.subtitle3 = subtitle3;
    localeData.equipe.content4 = content4;

    // === Mise à jour de la pop-up ===
    if (!localeData.popup) {
      localeData.popup = {};
    }
    localeData.popup.enabled = popupEnabled || false;
    localeData.popup.title = popupTitle || "";
    localeData.popup.line1 = popupLine1 || "";
    localeData.popup.line2 = popupLine2 || "";
    localeData.popup.line3 = popupLine3 || "";
    localeData.popup.validity = popupValidity || "";

    // Reconstruit le fichier en y remettant un export default
    const updatedContent = `
const ${localesConfig[locale].variableName} = ${JSON.stringify(localeData, null, 2)};

export default ${localesConfig[locale].variableName};
`;

    // Ecrit sur le disque
    fs.writeFileSync(localeFilePath, updatedContent, "utf-8");
    console.log("Fichier mis à jour avec succès");

    return NextResponse.json({ message: "Contenu mis à jour avec succès" });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du contenu :", error);
    return NextResponse.json({ message: "Erreur serveur", error: error.message }, { status: 500 });
  }
}
