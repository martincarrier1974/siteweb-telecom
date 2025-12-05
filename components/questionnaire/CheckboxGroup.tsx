'use client'

import { useState } from 'react'
import { FiHelpCircle, FiX } from 'react-icons/fi'

interface CheckboxGroupProps {
  options: Array<{ id: string; label: string; description?: string; details?: string }>
  value: string[]
  onChange: (value: string[]) => void
  className?: string
}

export default function CheckboxGroup({ 
  options, 
  value, 
  onChange, 
  className = '' 
}: CheckboxGroupProps) {
  const [openDetails, setOpenDetails] = useState<string | null>(null)

  const handleToggle = (optionId: string) => {
    const newValue = value.includes(optionId)
      ? value.filter(v => v !== optionId)
      : [...value, optionId]
    onChange(newValue)
  }

  return (
    <div className={`max-h-[600px] overflow-y-auto pr-2 space-y-3 ${className}`}>
      {options.map((option) => (
        <div key={option.id}>
          <label
            className="flex items-start space-x-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 cursor-pointer transition-colors"
          >
            <input
              type="checkbox"
              checked={value.includes(option.id)}
              onChange={() => handleToggle(option.id)}
              className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">
                  {option.label}
                </span>
                {option.details && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setOpenDetails(openDetails === option.id ? null : option.id)
                    }}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <FiHelpCircle className="w-4 h-4" />
                  </button>
                )}
              </div>
              {option.description && (
                <div className="text-sm text-gray-600 mt-1">
                  {option.description}
                </div>
              )}
            </div>
          </label>
          {openDetails === option.id && option.details && (
            <div className="ml-7 mb-2 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    Détails de la fonctionnalité
                  </h4>
                  <div className="text-sm text-blue-800 whitespace-pre-line">
                    {option.details}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenDetails(null)}
                  className="ml-2 text-blue-600 hover:text-blue-800"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

