import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const UPLOAD_DIR = path.join(process.cwd(), "public", "images");
const DATA_FILE = path.join(process.cwd(), "src", "data", "imageInfo.json");

const ALLOWED_MIME = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_BYTES = 6 * 1024 * 1024; // 6MB

function extFromMime(mime) {
  if (mime === "image/jpeg") return "jpg";
  if (mime === "image/png") return "png";
  if (mime === "image/webp") return "webp";
  return null;
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("image");
    const imageType = formData.get("imageType");

    if (!file || !imageType) {
      return NextResponse.json({ message: "Fichier ou type d'image manquant." }, { status: 400 });
    }

    if (!ALLOWED_MIME.has(file.type)) {
      return NextResponse.json({ message: "Type d'image interdit." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.length > MAX_BYTES) {
      return NextResponse.json({ message: "Fichier trop lourd." }, { status: 413 });
    }

    fs.mkdirSync(UPLOAD_DIR, { recursive: true });

    const ext = extFromMime(file.type);
    if (!ext) {
      return NextResponse.json({ message: "Type d'image invalide." }, { status: 400 });
    }

    // Nom généré côté serveur = SAFE
    const safeName = `${crypto.randomUUID()}.${ext}`;
    const filePath = path.join(UPLOAD_DIR, safeName);
    fs.writeFileSync(filePath, buffer);

    // imageInfo.json
    if (!fs.existsSync(DATA_FILE)) {
      fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
      fs.writeFileSync(DATA_FILE, JSON.stringify({}, null, 2), "utf-8");
    }

    const imageInfo = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));

    if (imageType === "gerald") imageInfo.geraldImage = `/images/${safeName}`;
    else if (imageType === "claire") imageInfo.claireImage = `/images/${safeName}`;
    else if (imageType === "homepage") imageInfo.homeImage = `/images/${safeName}`;
    else {
      return NextResponse.json({ message: "imageType invalide" }, { status: 400 });
    }

    // Écriture atomique
    const tmp = `${DATA_FILE}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(imageInfo, null, 2), "utf-8");
    fs.renameSync(tmp, DATA_FILE);

    return NextResponse.json({ message: "Image mise à jour avec succès" }, { status: 200 });
  } catch (error) {
    console.error("upload error:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
