'use client'

import { FiX, FiPhone } from 'react-icons/fi'

interface PhoneModel {
  id: string
  name: string
  image?: string
  description?: string
}

interface PhoneCategory {
  name: string
  models: PhoneModel[]
}

const PHONE_CATEGORIES: PhoneCategory[] = [
  {
    name: 'Grandstream',
    models: [
      {
        id: 'gxp-2135',
        name: 'GXP-2135',
        description: 'Téléphone IP professionnel avec extensions'
      },
      {
        id: 'gxp-2160',
        name: 'GXP-2160',
        description: 'Téléphone IP professionnel avec extensions'
      },
      {
        id: 'gxp-2170',
        name: 'GXP-2170',
        description: 'Téléphone IP professionnel avec extensions'
      },
      {
        id: 'dp-720',
        name: 'DP-720',
        description: 'Téléphone sans fil DECT'
      },
      {
        id: 'ht801',
        name: 'HT801',
        description: 'Adaptateur analogique'
      }
    ]
  },
  {
    name: 'Yealink',
    models: [
      {
        id: 't46u',
        name: 'T46U',
        description: 'Téléphone IP professionnel couleur'
      },
      {
        id: 't48u',
        name: 'T48U',
        description: 'Téléphone IP professionnel couleur'
      }
    ]
  }
]

interface PhoneGalleryProps {
  isOpen: boolean
  onClose: () => void
}

export default function PhoneGallery({ isOpen, onClose }: PhoneGalleryProps) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
            <FiPhone className="w-6 h-6 text-primary" />
            <span>Galerie des modèles de téléphones</span>
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Fermer"
          >
            <FiX className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {PHONE_CATEGORIES.map((category) => (
            <div key={category.name} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.models.map((model) => (
                  <div
                    key={model.id}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-primary transition-colors"
                  >
                    <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-3 flex items-center justify-center border-2 border-gray-200 overflow-hidden p-4">
                      <FiPhone className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {model.name}
                      </h4>
                      {model.description && (
                        <p className="text-sm text-gray-600">
                          {model.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

