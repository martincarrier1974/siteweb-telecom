interface ToggleGroupProps {
  options: Array<{ value: string; label: string; description?: string }>
  value: string[]
  onChange: (value: string[]) => void
  multiple?: boolean
  className?: string
}

export default function ToggleGroup({ 
  options, 
  value, 
  onChange, 
  multiple = true, 
  className = '' 
}: ToggleGroupProps) {
  const handleToggle = (optionValue: string) => {
    if (multiple) {
      const newValue = value.includes(optionValue)
        ? value.filter(v => v !== optionValue)
        : [...value, optionValue]
      onChange(newValue)
    } else {
      onChange([optionValue])
    }
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleToggle(option.value)}
          className={`
            p-4 rounded-xl border-2 transition-all text-left
            ${value.includes(option.value)
              ? 'border-primary bg-primary/5'
              : 'border-gray-200 hover:border-gray-300'
            }
          `}
        >
          <div className="font-medium text-gray-900">
            {option.label}
          </div>
          {option.description && (
            <div className="text-sm text-gray-600 mt-1">
              {option.description}
            </div>
          )}
        </button>
      ))}
    </div>
  )
}

