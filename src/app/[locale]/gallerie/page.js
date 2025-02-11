"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useScopedI18n } from "./../../locales/I18nContext";

const allGalleryItems = [
  { id: 1, type: "image", src: "/images/gallery1.jpg", alt: "Paysage 1", width: 754, height: 852 },
  { id: 2, type: "image", src: "/images/gallery2.jpg", alt: "Paysage 2", width: 754, height: 852  },
  { id: 3, type: "image", src: "/images/gallery3.jpg", alt: "Paysage 3", width: 1448, height: 852  },
  { id: 4, type: "image", src: "/images/gallery4.jpg", alt: "Paysage 4", width: 704, height: 472  },
  { id: 5, type: "image", src: "/images/gallery5.jpg", alt: "Paysage 5", width: 754, height: 852 },
  { id: 6, type: "video", src: "/videos/video1.mp4", alt: "Vidéo 1" },
  { id: 7, type: "image", src: "/images/gallery6.jpg", alt: "Paysage 6", width: 372, height: 852 },
  { id: 8, type: "video", src: "/videos/video7.mp4", alt: "Vidéo 7"},
  { id: 9, type: "image", src: "/images/gallery7.jpg", alt: "Paysage 7", width: 372, height: 446 },
  { id: 10, type: "image", src: "/images/gallery1.jpg", alt: "Paysage 8", width: 372, height: 446 },
];

// Découpe d’un tableau en blocs
function chunkArray(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

export default function GalleriePage() {
  const t = useScopedI18n("gallery");

  const [selectedItem, setSelectedItem] = useState(null);

  const openLightbox = (item) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  // Mobile : on coupe par blocs de 7 items
  const mobileChunks = chunkArray(allGalleryItems, 7);
  // Desktop : on coupe par blocs de 10 items
  const desktopChunks = chunkArray(allGalleryItems, 10);

  /**
   * Composant d’affichage d’un item (image ou vidéo) avec largeur/hauteur fixes.
   * On ajoute la gestion du clic pour la lightbox.
   */
  const GalleryItem = ({ item, width, height }) => {
    return (
      <div
        className="relative cursor-pointer overflow-hidden"
        style={{ width: `${width}px`, height: `${height}px` }}
        onClick={() => openLightbox(item)}
      >
        {item.type === "image" ? (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <>
            <video
              src={item.src}
              muted
              autoPlay
              loop
              className="w-full h-full object-cover"
            />
            {/* Icône play pour indiquer la vidéo */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-2xl">
              ▶
            </div>
          </>
        )}
      </div>
    );
  };

  /**
   * Rendu mobile : pattern sur 7 items
   * Largeur globale : 352px => lignes centrées avec mx-auto
   */
  const renderMobileLayout = () => {
    return mobileChunks.map((chunk, chunkIndex) => (
      <div
        key={`mobile-chunk-${chunkIndex}`}
        className="w-[352px] flex flex-col mx-auto mb-4" // conteneur du bloc
      >
        {/* Ligne 1 : items[0] et [1], 171×223 chacun + gap (10px) = 352 total */}
        <div className="flex gap-[10px] mb-4">
          {chunk[0] && <GalleryItem item={chunk[0]} width={171} height={223} />}
          {chunk[1] && <GalleryItem item={chunk[1]} width={171} height={223} />}
        </div>
        {/* Ligne 2 : item[2] seul, 352×426 */}
        {chunk[2] && (
          <div className="mb-4">
            <GalleryItem item={chunk[2]} width={352} height={426} />
          </div>
        )}
        {/* Ligne 3 : item[3] seul, 352×236 */}
        {chunk[3] && (
          <div className="mb-4">
            <GalleryItem item={chunk[3]} width={352} height={236} />
          </div>
        )}
        {/* Ligne 4 : item[4] seul, 352×426 */}
        {chunk[4] && (
          <div className="mb-4">
            <GalleryItem item={chunk[4]} width={352} height={426} />
          </div>
        )}
        {/* Ligne 5 : items[5] et [6], 171×223 chacun + gap(10px)=352*/}
        <div className="flex gap-[10px]">
          {chunk[5] && <GalleryItem item={chunk[5]} width={171} height={223} />}
          {chunk[6] && <GalleryItem item={chunk[6]} width={171} height={223} />}
        </div>
      </div>
    ));
  };

  /**
   * Rendu desktop : pattern sur 10 items
   * Largeur globale : 1076px => (3×352 + 2×10) = 1076 ou (724 + 352) + 0 = 1076
   */
  const renderDesktopLayout = () => {
    return desktopChunks.map((chunk, chunkIndex) => (
      <div
        key={`desktop-chunk-${chunkIndex}`}
        className="flex flex-col mx-auto mb-4 md:w-[780px] lg:w-[1076px] "
      >
        {/* Ligne 1 : items[0], [1], [2], chacun 352×426, avec 2 gaps de 10px => total 3×352 + 2×10 = 1076 */}
        <div className="flex gap-[10px] mb-4">
          {chunk[0] && <GalleryItem item={chunk[0]} width={352} height={426} />}
          {chunk[1] && <GalleryItem item={chunk[1]} width={352} height={426} />}
          {chunk[2] && <GalleryItem item={chunk[2]} width={352} height={426} />}
        </div>
        {/* Ligne 2 : item[3] 724×426 + gap + item[4] 352×426 = 724 + 10 + 352 =1086 ?? 
            => on supprime la gap ou on la met à 0, ou on le place sans gap 
        */}
        <div className="flex gap-2 mb-4">
          {chunk[3] && <GalleryItem item={chunk[3]} width={724} height={426} />}
          {chunk[4] && <GalleryItem item={chunk[4]} width={352} height={426} />}
        </div>
        {/* Ligne 3 : items[5], [6], [7], chacun 352×426, 2 gaps => 1076 total */}
        <div className="flex gap-[10px] mb-4">
          {chunk[5] && <GalleryItem item={chunk[5]} width={352} height={426} />}
          {chunk[6] && <GalleryItem item={chunk[6]} width={352} height={426} />}
          {chunk[7] && <GalleryItem item={chunk[7]} width={352} height={426} />}
        </div>
        {/* Ligne 4 : item[8] 352×426 + item[9] 724×426 = 1076 */}
        <div className="flex gap-2">
          {chunk[8] && <GalleryItem item={chunk[8]} width={352} height={426} />}
          {chunk[9] && <GalleryItem item={chunk[9]} width={724} height={426} />}
        </div>
      </div>
    ));
  };

  return (
    <main className="flex flex-col items-center mt-[80px]">
        <h1 className="block md:hidden font-subtitle text-50px text-green-2">
          {t("title")}
        </h1>
        <h1 className="hidden md:block lg:hidden font-subtitle text-80px text-green-2">
          {t("title")}
        </h1>
        <h1 className="hidden lg:block font-subtitle text-80px text-green-2 mb-4">
          {t("title")}
        </h1>
      {/* Layout mobile */}
      <div className="block lg:hidden">{renderMobileLayout()}</div>

      {/* Layout desktop */}
      <div className="hidden lg:block">{renderDesktopLayout()}</div>

      {/* Lightbox */}
      <AnimatePresence>
  {selectedItem && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeLightbox}
    >
      <motion.div
        className="relative flex flex-col items-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermeture */}
        <button
          onClick={closeLightbox}
          className="absolute top-0 right-0 m-2 text-white text-3xl font-bold z-10"
        >
          &times;
        </button>

        {/* Affichage de l'image ou de la vidéo */}
        {selectedItem.type === "image" ? (
          <Image
            src={selectedItem.src}
            alt={selectedItem.alt}
            width={selectedItem.width}
            height={selectedItem.height}
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        ) : (
          <video
            src={selectedItem.src}
            controls
            autoPlay
            className="max-w-[90vw] max-h-[90vh]"
          />
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </main>
  );
}
