import Link from 'next/link'
import { FiPhone, FiCheckCircle, FiArrowLeft } from 'react-icons/fi'

const services = [
  {
    title: 'Téléphonie IP hébergée',
    description: 'Solutions de téléphonie IP hébergée dans le cloud pour votre entreprise.',
  },
  {
    title: 'Fonctionnalités avancées',
    description: 'Transfert d\'appels, conférences, messagerie vocale, et bien plus encore.',
  },
  {
    title: 'Support 24/7',
    description: 'Assistance technique disponible en tout temps pour garantir votre continuité d\'affaires.',
  },
  {
    title: 'Intégration Microsoft Teams',
    description: 'Intégration complète avec Microsoft Teams pour une communication unifiée.',
  },
  {
    title: 'Centre d\'appels',
    description: 'Solutions de centre d\'appels avec rapports détaillés et statistiques.',
  },
  {
    title: 'Archivage des appels',
    description: 'Enregistrement et archivage des appels pour conformité et analyse.',
  },
]

export default function TelephoniePage() {
  return (
    <div className="min-h-screen bg-accent-light">
      <section className="bg-gradient-to-r from-secondary to-secondary-light text-white py-20">
        <div className="container-custom">
          <Link href="/products" className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6">
            <FiArrowLeft />
            <span>Retour aux produits</span>
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                <FiPhone className="text-3xl text-primary" />
              </div>
              <h1 className="heading-1 text-white">
                Téléphonie Hébergée
              </h1>
            </div>
            <p className="text-xl text-gray-300">
              Solutions de téléphonie hébergée dans le cloud pour votre entreprise.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">Nos services de téléphonie hébergée</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {services.map((service, index) => (
                <div key={index} className="card">
                  <div className="flex items-start space-x-4">
                    <FiCheckCircle className="text-2xl text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-secondary mb-2">{service.title}</h3>
                      <p className="text-body text-sm">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/questionnaire" className="btn-primary text-lg px-8 py-4">
                Demander une soumission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

