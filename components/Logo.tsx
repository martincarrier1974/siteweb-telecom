export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 50"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Texte "bz" en orange, gras, grande taille, sans-serif */}
      <text
        x="0"
        y="32"
        fontFamily="Arial, sans-serif"
        fontSize="42"
        fontWeight="bold"
        fill="#FF6600"
        letterSpacing="-0.5"
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
      
      {/* Globe stylisé à droite du texte */}
      <g transform="translate(165, 12)">
        {/* Globe - cercle principal en gris foncé */}
        <circle cx="18" cy="18" r="16" fill="none" stroke="#4B5563" strokeWidth="2" />
        
        {/* Grille du globe - lignes de longitude et latitude */}
        {/* Lignes de longitude (verticales) */}
        <ellipse cx="18" cy="18" rx="16" ry="8" fill="none" stroke="#4B5563" strokeWidth="1" opacity="0.7" />
        <ellipse cx="18" cy="18" rx="8" ry="16" fill="none" stroke="#4B5563" strokeWidth="1" opacity="0.7" />
        {/* Ligne horizontale centrale (équateur) */}
        <line x1="2" y1="18" x2="34" y2="18" stroke="#4B5563" strokeWidth="1.2" />
        {/* Ligne verticale centrale (méridien) */}
        <line x1="18" y1="2" x2="18" y2="34" stroke="#4B5563" strokeWidth="1.2" />
        
        {/* Récepteur téléphonique orange intégré dans le côté droit du globe, s'enroulant autour */}
        <g transform="translate(18, 18)">
          {/* Téléphone qui s'enroule autour du côté droit du globe */}
          
          {/* Partie supérieure (écouteur) - positionnée sur le côté droit supérieur du globe */}
          <ellipse 
            cx="12" 
            cy="-6" 
            rx="5.5" 
            ry="4.5" 
            fill="#FF6600"
            transform="rotate(35 18 18)"
          />
          
          {/* Corps du téléphone - courbe qui suit le contour du globe sur le côté droit */}
          <path
            d="M 10 -3 
               Q 13 -8 16 -5 
               Q 19 -2 17 2 
               Q 15 6 12 5 
               Q 9 4 10 0 
               Z"
            fill="#FF6600"
            transform="rotate(30 18 18)"
          />
          
          {/* Partie inférieure (micro) - positionnée sur le côté droit inférieur */}
          <ellipse 
            cx="14" 
            cy="5" 
            rx="4" 
            ry="3.5" 
            fill="#FF6600"
            transform="rotate(25 18 18)"
          />
          
          {/* Détail du téléphone (trou pour l'écouteur) */}
          <circle 
            cx="12.5" 
            cy="-2" 
            r="1.8" 
            fill="#FFFFFF" 
            opacity="0.25"
            transform="rotate(30 18 18)"
          />
        </g>
      </g>
    </svg>
  )
}
