'use client';

import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import ImageUploader from './../../[locale]/components/ImageUploader';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  if (status === 'loading') return <p>Chargement...</p>;

  return (
    <div className="p-4 mt-[99px]">
      <h1 className="text-xl font-bold">Bienvenue, {session?.user?.name}</h1>
      <button
        onClick={() => signOut({ callbackUrl: '/admin/login' })}
        className="bg-red-500 text-white py-2 rounded mt-4"
      >
        Déconnexion
      </button>

      {/* Utilisation du composant ImageUploader */}
      <ImageUploader />
    </div>
  );
}
