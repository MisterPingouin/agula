import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const DATA_FILE = path.join(process.cwd(), "src", "data", "imageInfo.json");

export async function GET() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return NextResponse.json(
        { message: "Fichier imageInfo.json introuvable" },
        { status: 404 }
      );
    }

    const imageInfo = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));

    return NextResponse.json(imageInfo, {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des images", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}