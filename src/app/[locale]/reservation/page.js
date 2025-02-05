import dynamic from "next/dynamic";

const ReservationPageClient = dynamic(() => import("./../components/ReservationPageClient"));

export default function ReservationPage({ params }) {
  const { locale } = params; // Récupération directe des paramètres

  return (
    <div className="w-full mt-[80px]">
      {/* Chargement du composant client */}
      <ReservationPageClient locale={locale} />
    </div>
  );
}
