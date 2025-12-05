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
    <section className="py-16 bg-accent-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-secondary text-center mb-12">
          Pourquoi nous choisir ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card text-center">
              <feature.icon className="text-5xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

