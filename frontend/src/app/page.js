import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function HomePage() {
  // Obtenir les headers correctement avec await
  const requestHeaders = await headers();
  const acceptLanguage = requestHeaders.get("accept-language") || "fr";

  // Extraction de la langue préférée
  const preferredLanguage = acceptLanguage.split(",")[0].slice(0, 2);
  const locale = ["en", "fr"].includes(preferredLanguage) ? preferredLanguage : "fr";

  // Redirection vers la locale détectée
  redirect(`/${locale}`);
}
