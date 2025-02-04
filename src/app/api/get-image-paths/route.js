import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src/data/imageInfo.json');

export async function GET() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json({ message: 'Fichier imageInfo.json introuvable' }, { status: 404 });
    }

    const imageInfo = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    return NextResponse.json(imageInfo);
  } catch (error) {
    console.error('Erreur lors de la récupération des images', error);
    return NextResponse.json({ message: 'Erreur serveur' }, { status: 500 });
  }
}
