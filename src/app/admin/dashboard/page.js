'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ImageUploader from './../../[locale]/components/ImageUploader';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [locale, setLocale] = useState('fr'); // Locale active
  const [subtitle2, setSubtitle2] = useState('');
  const [content3, setContent3] = useState('');
  const [subtitle3, setSubtitle3] = useState('');
  const [content4, setContent4] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  // Charger le contenu actuel en fonction de la langue sélectionnée
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/admin/get-content?locale=${locale}`);
        if (response.ok) {
          const data = await response.json();
          setSubtitle2(data.equipe.subtitle2 || '');
          setContent3(data.equipe.content3 || '');
          setSubtitle3(data.equipe.subtitle3 || '');
          setContent4(data.equipe.content4 || '');
        } else {
          console.error('Erreur lors de la récupération du contenu');
        }
      } catch (error) {
        console.error('Erreur de connexion', error);
      }
    };

    fetchContent();
  }, [locale]);

  if (status === 'loading') return <p>Chargement...</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/admin/update-content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subtitle2,
        content3,
        subtitle3,
        content4,
        locale,
      }),
    });

    if (response.ok) {
      alert('Contenu mis à jour avec succès');
      router.refresh();
    } else {
      alert('Erreur lors de la mise à jour');
    }
  };

  return (
    <div className="p-20 mt-[99px]">
      <h1 className="text-xl font-bold">Bienvenue, {session?.user?.name}</h1>
      <button
        onClick={() => signOut({ callbackUrl: '/admin/login' })}
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

      {/* Formulaire de modification des contenus */}
      <div className="mt-10">
        <h1 className="text-xl font-bold">Modifier le contenu de l'équipe</h1>

        {/* Sélecteur de langue */}
        <div className="mb-4">
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

        <form onSubmit={handleSubmit} className="space-y-4">
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

          <button type="submit" className="bg-blue-500 text-white py-2 px-2 rounded">
            Mettre à jour
          </button>
        </form>
      </div>
    </div>
  );
}
