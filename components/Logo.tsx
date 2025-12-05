export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 50"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Texte "bz" en orange, gras, grande taille */}
      <text
        x="0"
        y="32"
        fontFamily="Arial, sans-serif"
        fontSize="38"
        fontWeight="bold"
        fill="#FF6600"
        letterSpacing="-1"
      >
        bz
      </text>
      
      {/* Texte "Télécom" en gris foncé, plus petit, en dessous */}
      <text
        x="0"
        y="46"
        fontFamily="Arial, sans-serif"
        fontSize="13"
        fontWeight="500"
        fill="#4B5563"
      >
        Télécom
      </text>
      
      {/* Globe avec grille à droite */}
      <g transform="translate(150, 8)">
        {/* Globe - cercle principal en gris foncé */}
        <circle cx="22" cy="22" r="16" fill="none" stroke="#4B5563" strokeWidth="1.8" />
        
        {/* Grille du globe - lignes de longitude et latitude */}
        {/* Lignes verticales (longitude) */}
        <ellipse cx="22" cy="22" rx="16" ry="8" fill="none" stroke="#4B5563" strokeWidth="1" opacity="0.7" />
        <ellipse cx="22" cy="22" rx="8" ry="16" fill="none" stroke="#4B5563" strokeWidth="1" opacity="0.7" />
        {/* Ligne horizontale centrale */}
        <line x1="6" y1="22" x2="38" y2="22" stroke="#4B5563" strokeWidth="1.2" />
        {/* Ligne verticale centrale */}
        <line x1="22" y1="6" x2="22" y2="38" stroke="#4B5563" strokeWidth="1.2" />
        
        {/* Récepteur téléphonique orange intégré dans le globe */}
        <g transform="translate(22, 22) rotate(-15)">
          {/* Partie supérieure du téléphone (écouteur) */}
          <ellipse cx="0" cy="-8" rx="5" ry="4" fill="#FF6600" />
          {/* Corps du téléphone */}
          <path
            d="M -4 -4 L -4 4 Q -4 6 -2 6 L 2 6 Q 4 6 4 4 L 4 -4 Q 4 -6 2 -6 L -2 -6 Q -4 -6 -4 -4 Z"
            fill="#FF6600"
          />
          {/* Partie inférieure du téléphone (micro) */}
          <ellipse cx="0" cy="6" rx="3" ry="2.5" fill="#FF6600" />
          {/* Détails du téléphone */}
          <circle cx="0" cy="-2" r="1.5" fill="#FFFFFF" opacity="0.3" />
        </g>
      </g>
    </svg>
  )
}

