import Link from 'next/link'
import { FiWifi, FiPhone, FiShield, FiHeadphones } from 'react-icons/fi'

const features = [
  {
    icon: FiWifi,
    title: 'Internet haute vitesse',
    description: 'Connexions ultra-rapides pour tous vos besoins',
  },
  {
    icon: FiPhone,
    title: 'Téléphonie professionnelle',
    description: 'Solutions de communication complètes pour entreprises',
  },
  {
    icon: FiShield,
    title: 'Sécurité garantie',
    description: 'Protection de vos données et de votre réseau',
  },
  {
    icon: FiHeadphones,
    title: 'Support 24/7',
    description: 'Assistance technique disponible en tout temps',
  },
]

export default function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Des solutions fiables, un service exceptionnel et un support technique dédié à votre réussite.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-4xl text-primary" />
              </div>
              <h3 className="heading-3 text-xl mb-3">
                {feature.title}
              </h3>
              <p className="text-body text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/questionnaire" className="btn-primary text-lg px-8 py-4">
            Demande de soumission
          </Link>
        </div>
      </div>
    </section>
  )
}
