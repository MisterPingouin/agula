import { useScopedI18n } from "../../locales/I18nContext";
import { useRef, useState } from "react";

const VideoLagula = () => {
  const t = useScopedI18n("video");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="flex flex-col items-center justify-center lg:gap-10 py-6 px-4 md:px-8">
      {/* Ton titre + texte */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:w-[780px] lg:w-[1240px] md:mx-auto md:gap-12 px-6 md:px-2 pt-6">
        <p className="font-bold font-title text-25px md:text-35px text-green text-nowrap">
          {t("title")}
        </p>
        <p className="font-content text-15px mt-2 pb-2 text-center md:text-left">
          {t("content")}
        </p>
      </div>

      {/* Vidéo + bouton Play superposé */}
      <div className="relative max-w-[1240px] w-full mt-4">
        <video
          ref={videoRef}
          className="w-full h-auto shadow-lg"
          controls
        >
          <source src="/videos/videolagula.mp4" type="video/mp4" />
          {t("noVideoSupport")}
        </video>

        {/* Overlay avec bouton Play (affiché tant que la vidéo n'a pas démarré) */}
        {!isPlaying && (
          <div
            className="hidden md:flex absolute inset-0  items-center justify-center cursor-pointer"
            onClick={handlePlay}
          >
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoLagula;
