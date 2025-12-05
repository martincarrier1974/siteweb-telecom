import React from 'react'

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  description?: string
  className?: string
}

export default function Switch({ 
  checked, 
  onChange, 
  label,
  description,
  className = '' 
}: SwitchProps) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-xl border border-gray-200 ${className}`}>
      <div className="flex-1">
        {label && (
          <div className="font-medium text-gray-900 mb-1">
            {label}
          </div>
        )}
        {description && (
          <div className="text-sm text-gray-600">
            {description}
          </div>
        )}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors
          ${checked ? 'bg-primary' : 'bg-gray-300'}
        `}
      >
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform
            ${checked ? 'translate-x-6' : 'translate-x-1'}
          `}
        />
      </button>
    </div>
  )
}

