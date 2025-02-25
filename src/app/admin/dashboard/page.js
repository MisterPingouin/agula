"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ImageUploader from "./../../[locale]/components/ImageUploader";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Locale active pour choisir FR ou EN
  const [locale, setLocale] = useState("fr");

  // État pour l’équipe (déjà existant)
  const [subtitle2, setSubtitle2] = useState("");
  const [content3, setContent3] = useState("");
  const [subtitle3, setSubtitle3] = useState("");
  const [content4, setContent4] = useState("");

  // == NOUVEAU : états pour la pop-up ==
  const [popupEnabled, setPopupEnabled] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupLine1, setPopupLine1] = useState("");
  const [popupLine2, setPopupLine2] = useState("");
  const [popupLine3, setPopupLine3] = useState("");
  const [popupValidity, setPopupValidity] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  // Charger le contenu actuel en fonction de la langue sélectionnée
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/admin/get-content?locale=${locale}`);
        if (response.ok) {
          const data = await response.json();

          // Remplir les champs de l'équipe (existant)
          setSubtitle2(data.equipe.subtitle2 || "");
          setContent3(data.equipe.content3 || "");
          setSubtitle3(data.equipe.subtitle3 || "");
          setContent4(data.equipe.content4 || "");

          // Remplir les champs de la pop-up (nouveau)
          // On sécurise l’accès à data.popup
          const popupData = data.popup || {};
          setPopupEnabled(popupData.enabled || false);
          setPopupTitle(popupData.title || "");
          setPopupLine1(popupData.line1 || "");
          setPopupLine2(popupData.line2 || "");
          setPopupLine3(popupData.line3 || "");
          setPopupValidity(popupData.validity || "");
        } else {
          console.error("Erreur lors de la récupération du contenu");
        }
      } catch (error) {
        console.error("Erreur de connexion", error);
      }
    };

    fetchContent();
  }, [locale]);

  if (status === "loading") return <p>Chargement...</p>;

  // Gestion du formulaire de mise à jour
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/admin/update-content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // Champs équipe
        subtitle2,
        content3,
        subtitle3,
        content4,
        // Champs pop-up
        popupEnabled,
        popupTitle,
        popupLine1,
        popupLine2,
        popupLine3,
        popupValidity,
        // Langue
        locale,
      }),
    });

    if (response.ok) {
      alert("Contenu mis à jour avec succès");
      router.refresh();
    } else {
      alert("Erreur lors de la mise à jour");
    }
  };

  return (
    <div className="p-20 mt-[99px]">
      <h1 className="text-xl font-bold">Bienvenue, {session?.user?.name}</h1>
      <button
        onClick={() => signOut({ callbackUrl: "/admin/login" })}
        className="bg-red-500 text-white py-2 px-2 rounded mt-4"
      >
        Déconnexion
      </button>

      {/* Gestion des images */}
      <h2 className="text-xl font-bold mt-8">Changer les images</h2>
      <div className="space-y-6">
        <ImageUploader title="Image de la page d'accueil" imageType="homepage" />
        <ImageUploader title="Image du membre de l'équipe 1" imageType="gerald" />
        <ImageUploader title="Image du membre de l'équipe 2" imageType="claire" />
      </div>

        {/* Sélecteur de langue */}
        <div className="my-4">
          <label className="block font-bold mb-2">Langue</label>
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="fr">Français</option>
            <option value="en">Anglais</option>
          </select>
        </div>

      {/* Formulaire de modification des contenus */}
      <div className="mt-10">
        <h1 className="text-xl font-bold mb-2">Modifier le contenu de l'équipe</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Champs de l'équipe */}
          <label className="block">
            <span>Nom membre équipe 1</span>
            <input
              type="text"
              value={subtitle2}
              onChange={(e) => setSubtitle2(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </label>

          <label className="block">
            <span>Description membre équipe 1</span>
            <textarea
              value={content3}
              onChange={(e) => setContent3(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </label>

          <label className="block">
            <span>Nom membre équipe 2</span>
            <input
              type="text"
              value={subtitle3}
              onChange={(e) => setSubtitle3(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </label>

          <label className="block">
            <span>Description membre équipe 2</span>
            <textarea
              value={content4}
              onChange={(e) => setContent4(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </label>

          <hr className="my-8" />

          {/* Nouveau : configuration de la pop-up */}
          <h2 className="text-xl font-bold">Configuration de la pop-up</h2>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={popupEnabled}
              onChange={(e) => setPopupEnabled(e.target.checked)}
            />
            <span>Afficher la pop-up</span>
          </label>

          <label className="block">
            <span>Titre de la pop-up</span>
            <input
              type="text"
              value={popupTitle}
              onChange={(e) => setPopupTitle(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </label>

          <label className="block">
            <span>Ligne 1</span>
            <textarea
              value={popupLine1}
              onChange={(e) => setPopupLine1(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </label>

          <label className="block">
            <span>Ligne 2</span>
            <textarea
              value={popupLine2}
              onChange={(e) => setPopupLine2(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </label>

          <label className="block">
            <span>Ligne 3</span>
            <textarea
              value={popupLine3}
              onChange={(e) => setPopupLine3(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </label>

          <label className="block">
            <span>Validité (ex: "Valable jusqu'au 31/07/2024")</span>
            <input
              type="text"
              value={popupValidity}
              onChange={(e) => setPopupValidity(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </label>

          <button type="submit" className="bg-blue-500 text-white py-2 px-2 rounded">
            Mettre à jour
          </button>
        </form>
      </div>
    </div>
  );
}
