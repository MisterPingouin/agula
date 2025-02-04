import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src/data/imageInfo.json');

export async function GET() {
  try {
    const imageInfo = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    return NextResponse.json(imageInfo);
  } catch (error) {
    return NextResponse.json({ message: 'Erreur lors de la récupération de l\'image' }, { status: 500 });
  }
}
