import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'images');
const DATA_FILE = path.join(process.cwd(), 'src/data/imageInfo.json');

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('image');

    if (!file) {
      return NextResponse.json({ message: 'Aucun fichier envoyé' }, { status: 400 });
    }

    const fileName = file.name; // Par exemple "prout.jpg"
    const filePath = path.join(UPLOAD_DIR, fileName);

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);

    // Mettre à jour le chemin dans le fichier JSON
    const imageInfo = { homeImage: `/images/${fileName}` };
    fs.writeFileSync(DATA_FILE, JSON.stringify(imageInfo, null, 2));

    return NextResponse.json({ message: 'Image mise à jour avec succès' });
  } catch (error) {
    return NextResponse.json({ message: 'Erreur lors de l\'upload' }, { status: 500 });
  }
}
