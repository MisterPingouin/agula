import { NextResponse } from "next/server";
import { readLocaleData } from "@/lib/localesFileStore";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const locale = searchParams.get("locale") || "fr";

    const data = readLocaleData(locale);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("api/get-content error:", error);
    return NextResponse.json(
      { message: "Erreur serveur", error: String(error?.message || error) },
      { status: 500 }
    );
  }
}