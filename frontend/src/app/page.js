'use client';

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
    // Utilisation de SWR pour récupérer les données
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_API_URL}/test`,
        fetcher
    );

    // Gestion des erreurs
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-red-600">Erreur</h1>
                <p className="mt-4 text-lg text-gray-700">
                    Une erreur est survenue : {error.message}
                </p>
            </div>
        );
    }

    // Gestion du chargement
    if (isLoading || !data) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-blue-600">Chargement...</h1>
            </div>
        );
    }

    // Affichage des données récupérées
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-green-600">Test réussi !</h1>
            <p className="mt-4 text-lg text-gray-700">{data.message}</p>
        </div>
    );
}
