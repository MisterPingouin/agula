"use client";

import { useEffect } from "react";

const ReservationPageClient = ({ locale }) => {
  useEffect(() => {
    const widgetConfig = {
      fr: {
        dataLangue: "fr",
        apiUrl: "https://www.lagulamarinacroisieres.fr/resaApi",
        scriptUrl: "https://webservice.lagenza.fr/assets/widgets/recherche/index.js",
        couleurPrincipale: "#013049",
        couleurComplementaire: "#ffffff",
        partenaireId: "2",
      },
      en: {
        dataLangue: "en",
        apiUrl: "https://www.lagulamarinacroisieres.fr/resaApi",
        scriptUrl: "https://webservice.lagenza.fr/assets/widgets/recherche/index.js",
        couleurPrincipale: "#013049",
        couleurComplementaire: "#ffffff",
        partenaireId: "2",
      },
    };

    const config = widgetConfig[locale] || widgetConfig["fr"];

    // Création et insertion du widget
    const widgetDiv = document.createElement("div");
    widgetDiv.className = "resamare-widget-recherche";
    widgetDiv.setAttribute("data-api", config.apiUrl);
    widgetDiv.setAttribute("data-couleur-principale", config.couleurPrincipale);
    widgetDiv.setAttribute("data-partenaire-id", config.partenaireId);
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

export default ReservationPageClient;
