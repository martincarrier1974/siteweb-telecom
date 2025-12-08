import Link from 'next/link'
import { FiWifi, FiCheckCircle, FiArrowLeft } from 'react-icons/fi'

const services = [
  {
    title: 'Installation fibre optique',
    description: 'Installation complète de connexions fibre optique pour entreprises et résidences.',
  },
  {
    title: 'Connexions haute vitesse',
    description: 'Vitesses allant jusqu\'à 1 Gbps pour répondre à tous vos besoins.',
  },
  {
    title: 'Maintenance et support',
    description: 'Support technique 24/7 pour garantir la continuité de service.',
  },
  {
    title: 'Solutions sur mesure',
    description: 'Forfaits adaptés à vos besoins spécifiques.',
  },
]

export default function FibrePage() {
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
                <FiWifi className="text-3xl text-primary" />
              </div>
              <h1 className="heading-1 text-white">
                Fibre optique
              </h1>
            </div>
            <p className="text-xl text-gray-300">
              Connexions fibre optique haute performance pour entreprises et résidences.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">Nos services fibre optique</h2>
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

