import { redirect } from "next/navigation";

export default function HomePage() {
  // Détection de la langue depuis les headers
  const acceptLanguage = typeof window !== "undefined"
    ? navigator.language.slice(0, 2) // Pour test côté client
    : "fr"; // Langue par défaut (à personnaliser si besoin)

  const locale = ["en", "fr"].includes(acceptLanguage) ? acceptLanguage : "fr";

  // Redirige vers la locale détectée
  redirect(`/${locale}`);
}
