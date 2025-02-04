import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const LOCALE_FILES_DIR = path.join(process.cwd(), 'src', 'locales');

export async function POST(req) {
  try {
    const { subtitle2, content3, subtitle3, content4, locale } = await req.json();

    if (!locale || !['fr', 'en'].includes(locale)) {
      return NextResponse.json({ message: 'Locale invalide' }, { status: 400 });
    }

    const filePath = path.join(LOCALE_FILES_DIR, `${locale}.js`);

    // Charger le fichier de localisation existant
    let localeData = require(filePath);
    localeData.equipe.subtitle2 = subtitle2;
    localeData.equipe.content3 = content3;
    localeData.equipe.subtitle3 = subtitle3;
    localeData.equipe.content4 = content4;

    // Écrire les modifications dans le fichier
    fs.writeFileSync(filePath, `export default ${JSON.stringify(localeData, null, 2)};`);

    return NextResponse.json({ message: 'Contenu mis à jour avec succès' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erreur lors de la mise à jour du contenu' }, { status: 500 });
  }
}
