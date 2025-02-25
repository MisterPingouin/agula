import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Importation statique des données locales
import frData from "./../../../locales/fr";
import enData from "./../../../locales/en";

// Objet de mapping des localisations
const locales = {
  fr: { data: frData, fileName: "fr.js", variableName: "fr" },
  en: { data: enData, fileName: "en.js", variableName: "en" },
};

export async function POST(req) {
  try {
    const {
      // Champs équipe
      subtitle2,
      content3,
      subtitle3,
      content4,
      // Champs pop-up
      popupEnabled,
      popupTitle,
      popupLine1,
      popupLine2,
      popupLine3,
      popupValidity,
      // Langue
      locale,
    } = await req.json();

    if (!locale || !locales[locale]) {
      return NextResponse.json({ message: "Locale invalide" }, { status: 400 });
    }

    const localeFilePath = path.join(
      process.cwd(),
      "src",
      "app",
      "locales",
      locales[locale].fileName
    );

    console.log("Chemin du fichier de localisation :", localeFilePath);

    // Lire le contenu du fichier
    let localeDataContent = fs.readFileSync(localeFilePath, "utf-8");

    // Retirer l'export default avant exécution
    localeDataContent = localeDataContent.replace(/export\s+default\s+\w+;/, "").trim();

    // Exécuter le code pour récupérer les données
    let localeData;
    try {
      localeData = new Function(`
        "use strict";
        ${localeDataContent}
        return ${locales[locale].variableName};
      `)();
    } catch (error) {
      console.error("Erreur lors du chargement des données de localisation :", error);
      return NextResponse.json(
        { message: "Erreur de lecture du fichier de localisation" },
        { status: 500 }
      );
    }

    // === Mise à jour des données existantes ===
    // Mise à jour de l'équipe
    localeData.equipe.subtitle2 = subtitle2;
    localeData.equipe.content3 = content3;
    localeData.equipe.subtitle3 = subtitle3;
    localeData.equipe.content4 = content4;

    // === Mise à jour de la pop-up ===
    // S’assurer que l’objet popup existe
    if (!localeData.popup) {
      localeData.popup = {};
    }

    localeData.popup.enabled = popupEnabled || false;
    localeData.popup.title = popupTitle;
    localeData.popup.line1 = popupLine1;
    localeData.popup.line2 = popupLine2;
    localeData.popup.line3 = popupLine3;
    localeData.popup.validity = popupValidity;

    // Générer le contenu mis à jour (en JSON formaté manuellement)
    const updatedContent = `
const ${locales[locale].variableName} = ${JSON.stringify(localeData, null, 2)};

export default ${locales[locale].variableName};
`;

    // Écrire les modifications dans le fichier
    fs.writeFileSync(localeFilePath, updatedContent, "utf-8");

    console.log("Fichier mis à jour avec succès");

    return NextResponse.json({ message: "Contenu mis à jour avec succès" });
  } catch (error) {
    console.error("Erreur lors de la mise à jour du contenu :", error);
    return NextResponse.json({ message: "Erreur serveur", error: error.message }, { status: 500 });
  }
}
