'use client';

import { useState } from 'react';

export default function ImageUploader() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    if (!file) {
      setMessage('Veuillez sélectionner un fichier.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage('Image mise à jour avec succès.');
        // Envoi de l'événement de mise à jour d'image
        window.dispatchEvent(new Event('imageUpdated'));
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
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="bg-green-500 text-white py-2 rounded mt-2">
        Mettre à jour l'image
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
}
