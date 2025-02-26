"use client";

import { useEffect } from "react";

const Calanque = ({ locale }) => {
  useEffect(() => {
    const widgetConfig = {
      fr: {
        dataLangue: "fr",
        apiUrl: "https://lagulamarinacroisieres.resactivite.com/resaApi",
        scriptUrl: "https://webservice.lagenza.fr/assets/widgets/calendrier/index.js",
        couleurPrincipale: "#013049",
        couleurComplementaire: "#ffffff",
        partenaireId: "2",
        produitId: "2",
      },
      en: {
        dataLangue: "en",
        apiUrl: "https://lagulamarinacroisieres.resactivite.com//resaApi",
        scriptUrl: "https://webservice.lagenza.fr/assets/widgets/calendrier/index.js",
        couleurPrincipale: "#013049",
        couleurComplementaire: "#ffffff",
        partenaireId: "2",
        produitId: "2",
      },
    };

    const config = widgetConfig[locale] || widgetConfig["fr"];

    // Création et insertion du widget
    const widgetDiv = document.createElement("div");
    widgetDiv.className = "resamare-widget-calendar";
    widgetDiv.setAttribute("data-api", config.apiUrl);
    widgetDiv.setAttribute("data-couleur-principale", config.couleurPrincipale);
    widgetDiv.setAttribute("data-partenaire-id", config.partenaireId);
    widgetDiv.setAttribute("data-produit-id", config.produitId);
    widgetDiv.setAttribute("data-calendrier-ouvrir", "");
    widgetDiv.setAttribute("data-langue", config.dataLangue);
    widgetDiv.setAttribute("data-couleur-complementaire", config.couleurComplementaire);

    const container = document.getElementById("widget-container");
    if (container) {
      container.appendChild(widgetDiv);
    }

    // Insertion du script
    const script = document.createElement("script");
    script.src = config.scriptUrl;
    script.async = true;

    document.body.appendChild(script);

    // Nettoyage lors du démontage du composant
    return () => {
      if (container) {
        container.innerHTML = "";
      }
      document.body.removeChild(script);
    };
  }, [locale]);

  return <div id="widget-container" className="mt-4"></div>;
};

export default Calanque;
