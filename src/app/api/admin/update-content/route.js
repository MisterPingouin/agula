import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { readLocaleData, writeLocaleData } from "@/lib/localesFileStore";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

function safeBool(v) {
  return v === true;
}

export async function POST(req) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const locale = body?.locale;

    if (!locale) {
      return NextResponse.json({ message: "Locale invalide" }, { status: 400 });
    }

    const data = readLocaleData(locale);

    // Équipe
    data.equipe = data.equipe || {};
    data.equipe.subtitle2 = body.subtitle2 ?? "";
    data.equipe.content3 = body.content3 ?? "";
    data.equipe.subtitle3 = body.subtitle3 ?? "";
    data.equipe.content4 = body.content4 ?? "";

    // Pop-up
    data.popup = data.popup || {};
    data.popup.enabled = safeBool(body.popupEnabled);
    data.popup.title = body.popupTitle ?? "";
    data.popup.line1 = body.popupLine1 ?? "";
    data.popup.line2 = body.popupLine2 ?? "";
    data.popup.line3 = body.popupLine3 ?? "";
    data.popup.validity = body.popupValidity ?? "";

    writeLocaleData(locale, data);

    return NextResponse.json({ message: "Contenu mis à jour avec succès" }, { status: 200 });
  } catch (error) {
    console.error("update-content error:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}
