"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

const MenuButton = ({ isOpen, toggleMenu }) => {
  // Déterminer l'état du menu (ouvert ou fermé)
  const variant = isOpen ? "opened" : "closed";

  // Animation des lignes du bouton
  const variants = useMemo(
    () => ({
      top: {
        closed: { rotate: 0, translateY: 0 },
        opened: { rotate: 45, translateY: 10 },
      },
      center: {
        closed: { opacity: 1 },
        opened: { opacity: 0 },
      },
      bottom: {
        closed: { rotate: 0, translateY: 0 },
        opened: { rotate: -45, translateY: -10 },
      },
    }),
    []
  );

  // Propriétés de base des lignes du bouton
  const lineProps = useMemo(() => ({
    stroke: "#000", // Couleur de la ligne
    strokeWidth: 2, // Épaisseur de la ligne
    vectorEffect: "non-scaling-stroke",
    transition: { duration: 0.3 },
  }), []);

  // Dimensions du bouton
  const unitHeight = 30;
  const unitWidth = 24;

  return (
    <button
      onClick={toggleMenu}
      className="pt-3 lg:pt-6 focus:outline-none z-50 relative"
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
    >
      <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={24}
        height={24}
        className="lg:w-14 lg:h-14"
      >
        {/* Ligne du haut */}
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="2"
          y2="2"
          variants={variants.top}
          initial="closed"
          animate={variant}
          {...lineProps}
        />

        {/* Ligne du centre */}
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="12"
          y2="12"
          variants={variants.center}
          initial="closed"
          animate={variant}
          {...lineProps}
        />

        {/* Ligne du bas */}
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="22"
          y2="22"
          variants={variants.bottom}
          initial="closed"
          animate={variant}
          {...lineProps}
        />
      </motion.svg>
    </button>
  );
};

export default MenuButton
