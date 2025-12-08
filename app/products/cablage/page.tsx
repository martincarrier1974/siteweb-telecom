import Link from 'next/link'
import { FiLink, FiCheckCircle, FiArrowLeft } from 'react-icons/fi'

const services = [
  {
    title: 'Installation de câblage réseau',
    description: 'Installation complète de câblage structuré pour vos infrastructures réseau.',
  },
  {
    title: 'Certification et test',
    description: 'Tests et certification de vos installations selon les normes en vigueur.',
  },
  {
    title: 'Maintenance préventive',
    description: 'Maintenance régulière pour assurer la performance de votre réseau.',
  },
  {
    title: 'Consultation technique',
    description: 'Conseils d\'experts pour optimiser votre infrastructure réseau.',
  },
]

export default function CablagePage() {
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
                <FiLink className="text-3xl text-primary" />
              </div>
              <h1 className="heading-1 text-white">
                Câblage structuré
              </h1>
            </div>
            <p className="text-xl text-gray-300">
              Solutions professionnelles de câblage structuré pour vos infrastructures réseau.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-8">Nos services de câblage</h2>
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

