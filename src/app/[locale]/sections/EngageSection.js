import { useScopedI18n } from "./../../locales/I18nContext";

const EngageSection = () => {
const t = useScopedI18n("engage");


  return (
    <section className="flex flex-col md:flex-row justify-center md:w-[760px] lg:w-[1240px] md:mx-auto md:gap-12 px-6 md:px-2 pt-6">
    <p className="font-bold font-title text-25px md:text-35px text-green text-nowrap">{t("title")}</p>
    <p className="font-content text-15px mt-2 pb-2">{t("content")}</p>
    </section>
  );
};

export default EngageSection;
