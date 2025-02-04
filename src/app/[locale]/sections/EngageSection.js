import { useScopedI18n } from "./../../locales/I18nContext";

const EngageSection = () => {
const t = useScopedI18n("engage");


  return (
    <section className="flex flex-col md:flex-row justify-center md:w-[1240px] md:mx-auto md:gap-10 px-6 pt-6">
    <p className="font-bold font-title text-25px text-green text-nowrap">{t("title")}</p>
    <p className="font-content text-15px mt-2 pb-2">{t("content")}</p>
    </section>
  );
};

export default EngageSection;
