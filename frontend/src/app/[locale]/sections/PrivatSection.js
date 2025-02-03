import Image from "next/image";
import { useScopedI18n } from "./../../locales/I18nContext";
import Link from "next/link";
import useLocalLink from "./../hooks/useLocalLink";


export default function PrivatSection() {
      const t = useScopedI18n("page");
      const localLink = useLocalLink();
      
      return (
        <div>
        <section className="md:hidden">
        <div className="relative w-full h-[120px] mt-2">
        <Image
          src="/images/tracegreen.svg"
          alt="Vague décorative"
          fill
          className="object-contain"
          priority
        />
        <h2
          className="
            absolute inset-0 flex items-center justify-center
            z-10 text-green font-subtitle
            text-50px mt-4
          "
        >
          {t("title4")}
        </h2>
      </div>
      <div className="relative w-full mx-auto h-[280px]">
  <div className="absolute top-0 left-0 z-10">
    <Image
      src="/images/Privat1.jpg"
      alt="Privat1"
      width={180}
      height={220}
      className="object-cover"
    />
  </div>
  <div className="absolute top-6 right-0 z-0">
    <Image
      src="/images/privat2.jpg"
      alt="Mer"
      width={320}
      height={226}
      className="object-cover"
    />
  </div>
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <p className="text-white font-bold font-title text-27px leading-none">
      {t("subtitle10")}<br/>
      {t("subtitle11")}<br/>
      {t("subtitle12")}
    </p>
  </div>
</div>
      <p className="px-5 text-15px leading-23px font-content pt-2 pb-2">
        {t("content4")}
      </p>
      </section>
            <div className="md:hidden flex items-center justify-center mt-5">
              <Link href={localLink("#")} className="cursor-pointer">
                <button className="px-14 py-2 text-white text-20px bg-blue-3 font-content font-semibold">
                  {t("privatization_button")}
                </button>
              </Link>
            </div>
      <section className="hidden relative w-full h-[900px] md:flex items-center justify-center overflow-hidden">
      {/* SVG de fond */}
      <div className="absolute inset-0 bottom-[42%] -z-10">
        <Image
          src="/images/tracegreendesktop.svg"
          alt="Tracé bleu en fond"
          fill
          className="w-full h-full"
          priority
        />
      </div>

      {/* Contenu centré */}
      <div className="relative flex flex-col items-center justify-center space-y-8">
        {/* Titre */}
        <h1 className="absolute top-[-30px] text-green font-subtitle
            text-100px z-50">
          {t('title4')}
        </h1>

        {/* Bloc d'images */}
        <div className="flex items-start space-x-[-100px]">
          {/* Image Privat1 */}
          <div style={{ width: '443px', height: '552px' }} className="relative z-10">
            <Image
              src="/images/Privat1desktop.jpg"
              alt="Privat1"
              width={443}
              height={552}
              className="z-10 mt-8"
            />
        <div className="absolute top-[56%] left-[70%] text-white font-bold font-title text-47px leading-none z-50 w-[300px]">
              <p>{t('subtitle10')}</p>
              <p>{t('subtitle11')}</p>
              <p>{t('subtitle12')}</p>
            </div>
          </div>

          {/* Image mer */}
          <div style={{ width: '835px', height: '533px', marginTop: '20px' }} className="relative">
            <Image
              src="/images/privat2desktop.jpg"
              alt="Mer"
              width={835}
              height={533}
              className="z-0 mt-16"
            />
            <div className="absolute bottom-[60px] right-[110px] text-white  text-content text-15px space-y-4 z-50">
              <p className="w-[380px] leading-23px">{t('content4')}</p>
              <Link href={localLink("#")} className="cursor-pointer">
                <button className="px-14 py-2 text-white text-20px mt-8 bg-blue-3 font-content font-semibold">
                  {t("privatization_button")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
    );
}