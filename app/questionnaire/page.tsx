'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function QuestionnairePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({
    totalUsers: 1,
    phone2135: 0,
    phone2160: 0,
    phone2170: 0,
    phoneDP720: 0,
    phoneT46U: 0,
    phoneT48U: 0,
    phoneHT801: 0,
    softphoneCount: 0,
    transferredNumberCount: 0,
    newNumberCount: 0,
    microsoftTeamsIntegration: false,
    recording30DaysIncluded: false,
    longTermArchive: false,
    callCenterRequired: false,
    callCenterReports: false,
    selectedFeatures: [] as string[],
    priorities: [] as string[],
  })

  const updateAnswer = (key: string, value: any) => {
    setAnswers(prev => ({ ...prev, [key]: value }))
  }

  const steps = [
    {
      title: 'Appareils',
      description: 'Combien d\'utilisateurs et quels types d\'appareils avez-vous besoin ?',
      component: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre total d'utilisateurs
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={answers.totalUsers}
              onChange={(e) => updateAnswer('totalUsers', parseInt(e.target.value) || 1)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Téléphones physiques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { key: 'phone2135', label: 'GXP-2135' },
                { key: 'phone2160', label: 'GXP-2160' },
                { key: 'phone2170', label: 'GXP-2170' },
                { key: 'phoneDP720', label: 'DP-720 (sans-fil)' },
                { key: 'phoneT46U', label: 'T46U' },
                { key: 'phoneT48U', label: 'T48U' },
                { key: 'phoneHT801', label: 'HT801 (adaptateur analogique)' },
              ].map((phone) => (
                <div key={phone.key}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {phone.label}
                  </label>
                  <input
                    type="number"
                    min="0"
                    max={answers.totalUsers}
                    value={answers[phone.key as keyof typeof answers] as number}
                    onChange={(e) => updateAnswer(phone.key, parseInt(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Softphones
            </label>
            <input
              type="number"
              min="0"
              max={answers.totalUsers}
              value={answers.softphoneCount}
              onChange={(e) => updateAnswer('softphoneCount', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Numéros de téléphone',
      description: 'Combien de numéros avez-vous besoin ?',
      component: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Numéros transférés
            </label>
            <input
              type="number"
              min="0"
              max="50"
              value={answers.transferredNumberCount}
              onChange={(e) => updateAnswer('transferredNumberCount', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nouveaux numéros
            </label>
            <input
              type="number"
              min="0"
              max="50"
              value={answers.newNumberCount}
              onChange={(e) => updateAnswer('newNumberCount', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Intégration Microsoft Teams',
      description: 'Souhaitez-vous intégrer Microsoft Teams ?',
      component: (
        <div className="space-y-4">
          <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
            <p className="text-sm text-yellow-800">
              ⚠️ Une licence Microsoft Teams supplémentaire est requise chez Microsoft pour chaque utilisateur.
            </p>
          </div>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={answers.microsoftTeamsIntegration}
              onChange={(e) => updateAnswer('microsoftTeamsIntegration', e.target.checked)}
              className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <span className="text-gray-700">Oui, intégrer Microsoft Teams</span>
          </label>
        </div>
      ),
    },
    {
      title: 'Archivage',
      description: 'Options d\'archivage des appels',
      component: (
        <div className="space-y-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={answers.recording30DaysIncluded}
              onChange={(e) => updateAnswer('recording30DaysIncluded', e.target.checked)}
              className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <span className="text-gray-700">Archivage 30 jours inclus</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={answers.longTermArchive}
              onChange={(e) => updateAnswer('longTermArchive', e.target.checked)}
              className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <span className="text-gray-700">Archivage long terme</span>
          </label>
        </div>
      ),
    },
    {
      title: 'Centre d\'appels',
      description: 'Avez-vous besoin d\'un centre d\'appels ?',
      component: (
        <div className="space-y-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={answers.callCenterRequired}
              onChange={(e) => updateAnswer('callCenterRequired', e.target.checked)}
              className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <span className="text-gray-700">Centre d'appels requis</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={answers.callCenterReports}
              onChange={(e) => updateAnswer('callCenterReports', e.target.checked)}
              className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <span className="text-gray-700">Rapports du centre d'appels</span>
          </label>
        </div>
      ),
    },
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Soumettre le formulaire
      alert('Questionnaire soumis avec succès!')
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentStepData = steps[currentStep]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-secondary mb-4">
            Demande de soumission
          </h1>
          <p className="text-gray-600">
            Étape {currentStep + 1} sur {steps.length}
          </p>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold text-secondary mb-2">
            {currentStepData.title}
          </h2>
          <p className="text-gray-600 mb-6">
            {currentStepData.description}
          </p>

          {currentStepData.component}

          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Précédent
            </button>
            <button
              onClick={handleNext}
              className="btn-primary"
            >
              {currentStep === steps.length - 1 ? 'Soumettre' : 'Suivant'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

