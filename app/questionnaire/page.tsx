'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiUsers, FiPhone, FiGlobe, FiArchive, FiBuilding, FiSettings, FiTarget, FiImage } from 'react-icons/fi'
import NumberInput from '@/components/questionnaire/NumberInput'
import Switch from '@/components/questionnaire/Switch'
import ToggleGroup from '@/components/questionnaire/ToggleGroup'
import CheckboxGroup from '@/components/questionnaire/CheckboxGroup'
import Chip from '@/components/questionnaire/Chip'
import PhoneGallery from '@/components/questionnaire/PhoneGallery'

// Prix des téléphones (valeurs simplifiées - à adapter selon vos besoins)
const PHONE_2135_MONTHLY_RENTAL = 15.00
const PHONE_2160_MONTHLY_RENTAL = 20.00
const PHONE_2170_MONTHLY_RENTAL = 25.00
const PHONE_T46U_MONTHLY_RENTAL = 18.00
const PHONE_T48U_MONTHLY_RENTAL = 22.00
const PHONE_2135_PURCHASE_PRICE = 150.00
const PHONE_2160_PURCHASE_PRICE = 200.00
const PHONE_2170_PURCHASE_PRICE = 250.00
const PHONE_DP720_PURCHASE_PRICE = 180.00
const PHONE_T46U_PURCHASE_PRICE = 180.00
const PHONE_T48U_PURCHASE_PRICE = 220.00
const PHONE_HT801_PURCHASE_PRICE = 80.00

export default function QuestionnairePage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [answers, setAnswers] = useState({
    totalUsers: 1,
    phone2135: 0,
    phone2135Purchase: false,
    phone2160: 0,
    phone2160Purchase: false,
    phone2170: 0,
    phone2170Purchase: false,
    phone2170Extensions: 0,
    phoneDP720: 0,
    phoneT46U: 0,
    phoneT46UPurchase: false,
    phoneT48U: 0,
    phoneT48UPurchase: false,
    phoneHT801: 0,
    softphoneCount: 0,
    physicalPhoneCount: 0,
    appCount: 0,
    transferredNumberCount: 0,
    newNumberCount: 0,
    didCount: 0,
    microsoftTeamsIntegration: false,
    recording30DaysIncluded: false,
    longTermArchive: false,
    callCenterRequired: false,
    callCenterReports: false,
    selectedFeatures: [] as string[],
    priorities: [] as string[],
  })

  // Charger depuis localStorage
  useEffect(() => {
    const saved = localStorage.getItem('questionnaire-answers')
    if (saved) {
      try {
        setAnswers(JSON.parse(saved))
      } catch (e) {
        console.error('Error loading saved answers', e)
      }
    }
  }, [])

  // Sauvegarder dans localStorage
  useEffect(() => {
    localStorage.setItem('questionnaire-answers', JSON.stringify(answers))
  }, [answers])

  const updateAnswer = (updates: Partial<typeof answers>) => {
    setAnswers(prev => {
      const newAnswers = { ...prev, ...updates }
      
      // Calculer le total des téléphones physiques
      const totalPhysical = (newAnswers.phone2135 || 0) + 
        (newAnswers.phone2160 || 0) + 
        (newAnswers.phone2170 || 0) + 
        (newAnswers.phoneDP720 || 0) + 
        (newAnswers.phoneT46U || 0) + 
        (newAnswers.phoneT48U || 0) + 
        (newAnswers.phoneHT801 || 0)
      
      newAnswers.physicalPhoneCount = totalPhysical
      newAnswers.appCount = newAnswers.totalUsers - totalPhysical - (newAnswers.softphoneCount || 0)
      
      return newAnswers
    })
  }

  const questions = [
    {
      id: 'devices',
      icon: <FiUsers className="w-8 h-8 text-primary" />,
      title: 'Appareils',
      description: 'Combien d\'utilisateurs et quels types d\'appareils avez-vous besoin ?',
      component: (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <NumberInput
              value={answers.totalUsers}
              onChange={(value) => updateAnswer({ totalUsers: value })}
              min={1}
              max={100}
              label="Nombre total d'utilisateurs"
            />
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors"
            >
              <FiImage className="w-5 h-5" />
              <span>Voir les modèles</span>
            </button>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Téléphones physiques
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { key: 'phone2135', label: 'GXP-2135', purchase: 'phone2135Purchase', rental: PHONE_2135_MONTHLY_RENTAL, purchasePrice: PHONE_2135_PURCHASE_PRICE },
                { key: 'phone2160', label: 'GXP-2160', purchase: 'phone2160Purchase', rental: PHONE_2160_MONTHLY_RENTAL, purchasePrice: PHONE_2160_PURCHASE_PRICE },
                { key: 'phone2170', label: 'GXP-2170', purchase: 'phone2170Purchase', rental: PHONE_2170_MONTHLY_RENTAL, purchasePrice: PHONE_2170_PURCHASE_PRICE },
                { key: 'phoneDP720', label: 'DP-720 (sans-fil)', purchase: null, rental: null, purchasePrice: PHONE_DP720_PURCHASE_PRICE },
                { key: 'phoneT46U', label: 'T46U', purchase: 'phoneT46UPurchase', rental: PHONE_T46U_MONTHLY_RENTAL, purchasePrice: PHONE_T46U_PURCHASE_PRICE },
                { key: 'phoneT48U', label: 'T48U', purchase: 'phoneT48UPurchase', rental: PHONE_T48U_MONTHLY_RENTAL, purchasePrice: PHONE_T48U_PURCHASE_PRICE },
                { key: 'phoneHT801', label: 'HT801 (adaptateur analogique)', purchase: null, rental: null, purchasePrice: PHONE_HT801_PURCHASE_PRICE },
              ].map((phone) => (
                <div key={phone.key} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <NumberInput
                      value={answers[phone.key as keyof typeof answers] as number}
                      onChange={(value) => {
                        const maxAllowed = answers.totalUsers - (answers.softphoneCount || 0)
                        const otherPhones = Object.keys(answers).filter(k => k.startsWith('phone') && k !== phone.key && k !== 'phone2170Extensions' && k !== 'physicalPhoneCount')
                          .reduce((sum, k) => sum + (answers[k as keyof typeof answers] as number || 0), 0)
                        const adjustedValue = Math.min(value, maxAllowed - otherPhones)
                        updateAnswer({ [phone.key]: adjustedValue } as any)
                      }}
                      min={0}
                      max={answers.totalUsers}
                      label={phone.label}
                    />
                    <div className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                      {phone.purchase && answers[phone.purchase as keyof typeof answers]
                        ? `${phone.purchasePrice.toFixed(2)}$`
                        : phone.rental
                        ? `${phone.rental.toFixed(2)}$/mois`
                        : `${phone.purchasePrice.toFixed(2)}$`}
                    </div>
                  </div>
                  {phone.purchase && (
                    <div className="flex items-center gap-2 px-2">
                      <span className="text-sm text-gray-600">Location</span>
                      <Switch
                        checked={answers[phone.purchase as keyof typeof answers] as boolean}
                        onChange={(checked) => updateAnswer({ [phone.purchase!]: checked } as any)}
                      />
                      <span className="text-sm text-gray-600">Achat</span>
                    </div>
                  )}
                </div>
              ))}
              <NumberInput
                value={answers.phone2170Extensions}
                onChange={(value) => updateAnswer({ phone2170Extensions: value })}
                min={0}
                max={100}
                label="GXP-2170 Extensions"
              />
            </div>
          </div>

          <div>
            <NumberInput
              value={answers.softphoneCount}
              onChange={(value) => {
                const totalPhysical = (answers.phone2135 || 0) + (answers.phone2160 || 0) + (answers.phone2170 || 0) + 
                  (answers.phoneDP720 || 0) + (answers.phoneT46U || 0) + (answers.phoneT48U || 0) + (answers.phoneHT801 || 0)
                const maxAllowed = answers.totalUsers - totalPhysical
                const adjustedValue = Math.min(value, maxAllowed)
                updateAnswer({ softphoneCount: adjustedValue })
              }}
              min={0}
              max={answers.totalUsers}
              label="Softphones"
            />
          </div>
        </div>
      ),
    },
    {
      id: 'did',
      icon: <FiPhone className="w-8 h-8 text-primary" />,
      title: 'Numéros de téléphone',
      description: 'Combien de numéros avez-vous besoin ?',
      component: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NumberInput
              value={answers.transferredNumberCount}
              onChange={(value) => {
                updateAnswer({ 
                  transferredNumberCount: value,
                  didCount: value + (answers.newNumberCount || 0)
                })
              }}
              min={0}
              max={50}
              label="Numéros transférés"
            />
            <NumberInput
              value={answers.newNumberCount}
              onChange={(value) => {
                updateAnswer({ 
                  newNumberCount: value,
                  didCount: (answers.transferredNumberCount || 0) + value
                })
              }}
              min={0}
              max={50}
              label="Nouveaux numéros"
            />
          </div>
        </div>
      ),
    },
    {
      id: 'teams',
      icon: <FiGlobe className="w-8 h-8 text-primary" />,
      title: 'Intégration Microsoft Teams',
      description: 'Souhaitez-vous intégrer Microsoft Teams ?',
      component: (
        <div className="space-y-4">
          <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⚠</span>
              </div>
              <span className="font-medium text-yellow-800">
                Licence Microsoft requise
              </span>
            </div>
            <p className="text-sm text-yellow-700">
              Une licence Microsoft Teams supplémentaire est requise chez Microsoft pour chaque utilisateur.
            </p>
          </div>
          
          <ToggleGroup
            options={[
              { value: 'false', label: 'Non', description: 'Pas d\'intégration Microsoft Teams' },
              { value: 'true', label: 'Oui', description: 'Intégrer Microsoft Teams' }
            ]}
            value={[answers.microsoftTeamsIntegration ? 'true' : 'false']}
            onChange={(values) => updateAnswer({ microsoftTeamsIntegration: values[0] === 'true' })}
            multiple={false}
          />
        </div>
      ),
    },
    {
      id: 'archive',
      icon: <FiArchive className="w-8 h-8 text-primary" />,
      title: 'Archivage',
      description: 'Options d\'archivage des appels',
      component: (
        <div className="space-y-4">
          <Switch
            checked={answers.recording30DaysIncluded}
            onChange={(checked) => updateAnswer({ recording30DaysIncluded: checked })}
            label="Archivage 30 jours inclus"
            description="Enregistrement et archivage des appels pendant 30 jours"
          />
          <Switch
            checked={answers.longTermArchive}
            onChange={(checked) => {
              if (!checked && answers.selectedFeatures.includes('aiAnalysis')) {
                updateAnswer({ 
                  longTermArchive: checked,
                  selectedFeatures: answers.selectedFeatures.filter(f => f !== 'aiAnalysis')
                })
              } else {
                updateAnswer({ longTermArchive: checked })
              }
            }}
            label="Archivage long terme"
            description="Archivage des appels au-delà de 30 jours"
          />
        </div>
      ),
    },
    {
      id: 'callcenter',
      icon: <FiBuilding className="w-8 h-8 text-primary" />,
      title: 'Centre d\'appels',
      description: 'Avez-vous besoin d\'un centre d\'appels ?',
      component: (
        <div className="space-y-4">
          <Switch
            checked={answers.callCenterRequired}
            onChange={(checked) => updateAnswer({ callCenterRequired: checked })}
            label="Centre d'appels requis"
            description="Fonctionnalités de centre d'appels activées"
          />
          <Switch
            checked={answers.callCenterReports}
            onChange={(checked) => updateAnswer({ callCenterReports: checked })}
            label="Rapports du centre d'appels"
            description="Rapports détaillés et statistiques du centre d'appels"
          />
        </div>
      ),
    },
    {
      id: 'features',
      icon: <FiSettings className="w-8 h-8 text-primary" />,
      title: 'Fonctionnalités',
      description: 'Sélectionnez les fonctionnalités supplémentaires',
      component: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Options supplémentaires
            </h3>
            <CheckboxGroup
              options={[
                { 
                  id: 'aiAnalysis', 
                  label: 'Analyse des appels par IA', 
                  description: 'Analyse des appels par IA (50$/mois) - Archivage des appels requis',
                  details: 'Analyse des appels selon des paramètres définis.\n\nExemple : Analyse de l\'appel selon le ton des interlocuteurs. Cela va nous donner un score sur 10.\n\n⚠️ IMPORTANT : L\'archivage des appels (Archivage > 30 jours) est requis pour utiliser cette fonctionnalité.'
                },
                { id: 'voicemailTranscription', label: 'Transcription des messages vocaux', description: 'Transcription automatique des messages vocaux' },
                { id: 'virtualFax', label: 'Télécopieur virtuel', description: 'Service de télécopieur virtuel (24.50$/mois)' },
                { id: 'textMessagingPlatform', label: 'Plateforme de messagerie texte', description: 'Plateforme de messagerie texte (500 textos inclus, 25$/mois)' }
              ]}
              value={answers.selectedFeatures}
              onChange={(features) => {
                if (features.includes('aiAnalysis') && !answers.longTermArchive) {
                  updateAnswer({ 
                    selectedFeatures: features,
                    longTermArchive: true 
                  })
                } else {
                  updateAnswer({ selectedFeatures: features })
                }
              }}
            />
          </div>
        </div>
      ),
    },
    {
      id: 'priorities',
      icon: <FiTarget className="w-8 h-8 text-primary" />,
      title: 'Priorités',
      description: 'Quelles sont vos priorités ?',
      component: (
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { id: 'price', label: 'Prix' },
            { id: 'flexibility', label: 'Flexibilité' },
            { id: 'service', label: 'Service' },
            { id: 'features', label: 'Fonctionnalités' }
          ].map((priority) => (
            <Chip
              key={priority.id}
              selected={answers.priorities.includes(priority.id)}
              onClick={() => {
                const newPriorities = answers.priorities.includes(priority.id)
                  ? answers.priorities.filter(p => p !== priority.id)
                  : [...answers.priorities, priority.id]
                updateAnswer({ priorities: newPriorities })
              }}
            >
              {priority.label}
            </Chip>
          ))}
        </div>
      ),
    },
  ]

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Soumettre le formulaire
      alert('Questionnaire soumis avec succès! Vos réponses ont été enregistrées.')
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const currentStepData = questions[currentStep]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-secondary mb-4">
              Demande de soumission
            </h1>
            <p className="text-gray-600">
              Étape {currentStep + 1} sur {questions.length}
            </p>
          </div>

          <div className="card">
            <div className="text-center mb-8">
              {currentStepData.icon && <div className="flex justify-center mb-4">{currentStepData.icon}</div>}
              <h2 className="text-3xl font-bold text-secondary mb-4">
                {currentStepData.title}
              </h2>
              <p className="text-lg text-gray-600">
                {currentStepData.description}
              </p>
            </div>

            {currentStepData.component}

            <div className="flex justify-between pt-6 border-t mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className="btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentStep === 0 ? 'Retour' : 'Précédent'}
              </button>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">
                  {currentStep + 1} / {questions.length}
                </span>
                <button
                  onClick={handleNext}
                  className="btn-primary"
                >
                  {currentStep === questions.length - 1 ? 'Soumettre' : 'Suivant'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <PhoneGallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </div>
  )
}
