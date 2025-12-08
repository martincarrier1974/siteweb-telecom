import Link from 'next/link'
import { FiHeadphones, FiMessageCircle, FiMail, FiPhone, FiClock, FiHelpCircle } from 'react-icons/fi'

const supportOptions = [
  {
    icon: FiMessageCircle,
    title: 'Clavardage en direct',
    description: 'Chattez avec notre équipe de support en temps réel',
    action: 'Démarrer le clavardage',
    available: true,
  },
  {
    icon: FiPhone,
    title: 'Support téléphonique',
    description: 'Appelez-nous pour une assistance immédiate',
    action: '1-800-TELECOM',
    available: true,
  },
  {
    icon: FiMail,
    title: 'Support par email',
    description: 'Envoyez-nous un message et nous vous répondrons rapidement',
    action: 'Envoyer un email',
    available: true,
  },
  {
    icon: FiHelpCircle,
    title: 'Centre d\'aide',
    description: 'Consultez notre base de connaissances et FAQ',
    action: 'Consulter l\'aide',
    available: true,
  },
]

const hours = [
  { day: 'Lundi - Vendredi', time: '8h00 - 18h00' },
  { day: 'Samedi', time: '9h00 - 17h00' },
  { day: 'Dimanche', time: 'Fermé' },
  { day: 'Support 24/7', time: 'Urgences techniques uniquement' },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-accent-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary-light text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">
              Support technique
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Notre équipe est là pour vous aider. Choisissez le mode de contact qui vous convient le mieux.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">
            Options de support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="card hover:border-primary transition-all">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                      <option.icon className="text-2xl text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 text-xl mb-2">
                      {option.title}
                    </h3>
                    <p className="text-body text-sm mb-4">
                      {option.description}
                    </p>
                    {option.available ? (
                      <button className="btn-outline text-sm">
                        {option.action}
                      </button>
                    ) : (
                      <span className="text-gray text-sm">Bientôt disponible</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="section-padding bg-accent-light">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <div className="flex items-center space-x-3 mb-6">
                <FiClock className="text-3xl text-primary" />
                <h2 className="heading-2 text-2xl">
                  Heures d&apos;ouverture
                </h2>
              </div>
              <div className="space-y-4">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                    <span className="font-medium text-secondary">{schedule.day}</span>
                    <span className="text-gray">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">
            Liens rapides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/questionnaire" className="card text-center hover:border-primary transition-all">
              <h3 className="font-semibold text-secondary mb-2">Demande de soumission</h3>
              <p className="text-sm text-gray">Obtenez une soumission personnalisée</p>
            </Link>
            <Link href="/products" className="card text-center hover:border-primary transition-all">
              <h3 className="font-semibold text-secondary mb-2">Nos produits</h3>
              <p className="text-sm text-gray">Découvrez nos solutions</p>
            </Link>
            <Link href="/contact" className="card text-center hover:border-primary transition-all">
              <h3 className="font-semibold text-secondary mb-2">Nous contacter</h3>
              <p className="text-sm text-gray">Posez-nous vos questions</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

