import Image from "next/image";
import { useScopedI18n } from "./../../locales/I18nContext";
import Link from "next/link";
import useLocalLink from "./../hooks/useLocalLink";


export default function MeetSection() {
      const t = useScopedI18n("page");
      const localLink = useLocalLink();
      
      return (
        <div className="md:hidden lg:block">
        <section className="md:hidden">
        <div className="relative w-full h-[120px] mt-2">
        <Image
          src="/images/traceorange.svg"
          alt="Vague décorative"
          fill
          className="object-contain"
          priority
        />
        <h2
          className="
            absolute inset-0 flex items-center justify-center
            z-10 text-orange font-subtitle
            text-50px mt-4
          "
        >
          {t("title3")}
        </h2>
      </div>
      <div className="relative w-full mx-auto h-[280px]">
  <div className="absolute top-0 left-0 z-10">
    <Image
      src="/images/shirt.webp"
      alt="T-shirt lagula"
      width={189}
      height={235}
      className="object-cover"
    />
  </div>
  <div className="absolute top-6 right-0 z-0">
    <Image
      src="/images/sand.webp"
      alt="Sable"
      width={321}
      height={227}
      className="object-cover"
    />
  </div>
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <p className="text-white font-bold font-title text-27px leading-none">
      {t("subtitle7")}<br/>
      {t("subtitle8")}<br/>
      {t("subtitle9")}
    </p>
  </div>
</div>
      <p className="px-5 text-15px leading-23px font-content pt-2 pb-2">
        {t("content3")}
      </p>
      </section>
            <div className="md:hidden flex items-center justify-center mt-5">
              <Link href={localLink("/equipe")} className="cursor-pointer">
                <button className="px-14 py-2 text-white text-20px bg-blue-3 font-content font-semibold">
                  {t("team_button")}
                </button>
              </Link>
            </div>
      <section className="hidden relative w-full h-[900px] md:flex items-center justify-center overflow-hidden">
      {/* SVG de fond */}
      <div className="absolute inset-0 bottom-[42%] -z-10">
        <Image
          src="/images/traceorangedesktop.svg"
          alt="Tracé bleu en fond"
          fill
          className="w-full h-full"
          priority
        />
      </div>

      {/* Contenu centré */}
      <div className="relative flex flex-col items-center justify-center space-y-8">
        {/* Titre */}
        <h1 className="absolute top-[-30px] text-orange font-subtitle
            text-100px z-40">
          {t('title3')}
        </h1>

        {/* Bloc d'images */}
        <div className="flex items-start space-x-[-100px]">
          {/* Image shirt */}
          <div style={{ width: '443px', height: '552px' }} className="relative z-10">
            <Image
              src="/images/shirtdesktop.webp"
              alt="T-shirt lagula"
              width={443}
              height={552}
              className="z-10 mt-8"
            />
        <div className="absolute top-[56%] left-[70%] text-white font-bold font-title text-47px leading-none z-40 w-[300px]">
              <p>{t('subtitle7')}</p>
              <p>{t('subtitle8')}</p>
              <p>{t('subtitle9')}</p>
            </div>
          </div>

          {/* Image Sable */}
          <div style={{ width: '835px', height: '533px', marginTop: '20px' }} className="relative">
            <Image
              src="/images/sanddesktop.webp"
              alt="Sable"
              width={835}
              height={533}
              className="z-0 mt-16"
            />
            <div className="absolute bottom-[60px] right-[110px] text-white  text-content text-15px space-y-4 z-40">
              <p className="w-[380px] leading-23px">{t('content3')}</p>
              <Link href={localLink("/equipe")} className="cursor-pointer">
                <button className="px-14 py-2 text-white text-20px mt-8 bg-blue-3 font-content font-semibold">
                  {t("team_button")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Paragraphe final */}
    <div className="flex flex-col items-center justify-center mx-auto">
          <p className="block md:hidden font-title text-center text-25px leading-29px px-10 mb-6">
            {t("content5")}
          </p>
          <p className="hidden md:block lg:hidden font-title text-center text-30px leading-40px w-[500px] px-10 mb-4">
            {t("content5")}
          </p>
          <p className="hidden lg:block font-title text-center text-35px leading-[43px] w-[1100px] px-10 mb-4">
            {t("content5")}
          </p>
          <p className="block md:hidden font-content text-center text-15px leading-[23px] px-10 mb-8">
            {t("content6")}
          </p>
          <p className="hidden md:block lg:hidden font-content text-center text-15px leading-[23px] w-[500px] px-10 mb-12">
            {t("content6")}
          </p>
          <p className="hidden lg:block font-content text-center text-15px leading-[23px] w-[1100px] px-10 mb-12">
            {t("content6")}
          </p>
          <div className="flex justify-center items-center md:gap-2 lg:gap-4 mb-12">
          <Image
            src="/images/chance1.jpg"
            alt="fish"
            width={356}
            height={454}
            className="hidden md:block object-cover h-auto"
            priority
          />      <Image
          src="/images/chance2.jpg"
          alt="fish"
          width={356}
          height={454}
          className="hidden md:block object-cover h-auto"
          priority
        />      <Image
        src="/images/chance3.jpg"
        alt="fish"
        width={356}
        height={454}
        className="object-cover h-auto"
        priority
      />
          </div>
          </div>
</div>
    );
}