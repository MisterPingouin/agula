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
      return NextResponse.json({ message: "imageInfo.json introuvable" }, { status: 404 });
    }
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    const data = JSON.parse(raw);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("get-image-paths error:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
