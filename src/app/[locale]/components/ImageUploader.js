'use client';

import { useState } from 'react';

export default function ImageUploader({ title, imageType }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    if (!file) {
      setMessage('Veuillez sélectionner un fichier.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    formData.append('imageType', imageType); // Envoi du type d'image

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage('Image mise à jour avec succès.');
        window.dispatchEvent(new Event('imageUpdated')); // Actualisation de l'image
      } else {
        const errorData = await response.json();
        setMessage(`Erreur : ${errorData.message}`);
      }
    } catch (error) {
      setMessage('Erreur lors de l\'upload.');
    }
  };

  return (
    <div className="mt-4">
      <h3 className="font-bold">{title}</h3>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} className="mt-2" />
      <button onClick={handleUpload} className="bg-green-500 text-white py-2 px-2 rounded mt-2">
        Mettre à jour l'image
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
}
