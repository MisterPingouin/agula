import dynamic from "next/dynamic";

const ReservationPageClient = dynamic(() => import("./../components/Reservation/ReservationPageClient"));

export default async function ReservationPage({ params }) {
  const { locale } = await params; 

  return (
    <div className="w-full mt-[80px]">
      {/* Chargement du composant client */}
      <ReservationPageClient locale={locale} />
    </div>
  );
}
