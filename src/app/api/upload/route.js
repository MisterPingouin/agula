import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'images');
const DATA_FILE = path.join(process.cwd(), 'src/data/imageInfo.json');

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('image');
    const imageType = formData.get('imageType');

    if (!file || !imageType) {
      return NextResponse.json({ message: 'Fichier ou type d\'image manquant.' }, { status: 400 });
    }

    const fileName = file.name;
    const filePath = path.join(UPLOAD_DIR, fileName);

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    // Mise à jour des données selon le type d'image
    const imageInfo = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    if (imageType === 'gerald') {
      imageInfo.geraldImage = `/images/${fileName}`;
    } else if (imageType === 'claire') {
      imageInfo.claireImage = `/images/${fileName}`;
    } else if (imageType === 'homepage') {
      imageInfo.homeImage = `/images/${fileName}`;
    }

    fs.writeFileSync(DATA_FILE, JSON.stringify(imageInfo, null, 2));

    return NextResponse.json({ message: 'Image mise à jour avec succès' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erreur lors de l\'upload' }, { status: 500 });
  }
}
