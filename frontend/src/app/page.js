import Header from "./components/Header/Header";
import HeroSection from "./sections/HeroSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Section suivante */}
        <section className="p-6 text-gray-900">
          <h2 className="text-2xl font-title">Découvrez nos circuits</h2>
          <p className="mt-4 leading-28px font-title font-light">
            Explorez les trésors cachés de nos côtes grâce à nos croisières.
          </p>
        </section>
      </main>
    </>
  );
}
