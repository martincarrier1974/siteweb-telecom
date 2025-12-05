export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 50"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Texte "bz" en orange, gras, grande taille */}
      <text
        x="0"
        y="32"
        fontFamily="Arial, sans-serif"
        fontSize="40"
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
      
      {/* Globe stylisé à droite du texte */}
      <g transform="translate(160, 10)">
        {/* Globe - cercle principal en gris foncé */}
        <circle cx="20" cy="20" r="17" fill="none" stroke="#4B5563" strokeWidth="2" />
        
        {/* Grille du globe - lignes de longitude et latitude */}
        {/* Lignes de longitude (verticales) */}
        <ellipse cx="20" cy="20" rx="17" ry="8.5" fill="none" stroke="#4B5563" strokeWidth="1" opacity="0.8" />
        <ellipse cx="20" cy="20" rx="8.5" ry="17" fill="none" stroke="#4B5563" strokeWidth="1" opacity="0.8" />
        {/* Ligne horizontale centrale (équateur) */}
        <line x1="3" y1="20" x2="37" y2="20" stroke="#4B5563" strokeWidth="1.5" />
        {/* Ligne verticale centrale (méridien) */}
        <line x1="20" y1="3" x2="20" y2="37" stroke="#4B5563" strokeWidth="1.5" />
        
        {/* Récepteur téléphonique orange intégré dans le côté droit du globe, s'enroulant autour */}
        <g transform="translate(20, 20)">
          {/* Téléphone qui s'enroule autour du côté droit du globe */}
          {/* Partie supérieure (écouteur) - sur le côté droit supérieur */}
          <ellipse 
            cx="14" 
            cy="-5" 
            rx="5" 
            ry="4" 
            fill="#FF6600"
            transform="rotate(30 20 20)"
          />
          
          {/* Corps du téléphone - courbe qui suit le contour du globe */}
          <path
            d="M 10 -3 
               Q 14 -7 17 -4 
               Q 20 -1 18 3 
               Q 16 7 12 5 
               Q 8 3 10 -1 
               Z"
            fill="#FF6600"
            transform="rotate(25 20 20)"
          />
          
          {/* Partie inférieure (micro) - sur le côté droit inférieur */}
          <ellipse 
            cx="15" 
            cy="5" 
            rx="3.5" 
            ry="3" 
            fill="#FF6600"
            transform="rotate(20 20 20)"
          />
          
          {/* Détail du téléphone (trou pour l'écouteur) */}
          <circle 
            cx="13" 
            cy="-2" 
            r="1.5" 
            fill="#FFFFFF" 
            opacity="0.3"
            transform="rotate(25 20 20)"
          />
        </g>
      </g>
    </svg>
  )
}
