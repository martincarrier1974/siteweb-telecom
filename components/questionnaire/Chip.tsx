import React from 'react'

interface ChipProps {
  children: React.ReactNode
  selected?: boolean
  onClick?: () => void
  className?: string
}

export default function Chip({ 
  children, 
  selected = false, 
  onClick, 
  className = '' 
}: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition-colors
        ${selected
          ? 'bg-primary text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }
        ${className}
      `}
    >
      {children}
    </button>
  )
}

