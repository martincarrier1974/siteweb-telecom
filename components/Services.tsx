import Link from 'next/link'
import { FiWifi, FiPhone, FiShield, FiHeadphones, FiCloud, FiServer } from 'react-icons/fi'

const services = [
  {
    icon: FiWifi,
    title: 'Internet haute vitesse',
    description: 'Connexions ultra-rapides et fiables pour tous vos besoins professionnels et résidentiels.',
    link: '/products',
  },
  {
    icon: FiPhone,
    title: 'Téléphonie professionnelle',
    description: 'Solutions de communication complètes avec fonctionnalités avancées pour votre entreprise.',
    link: '/products',
  },
  {
    icon: FiShield,
    title: 'Sécurité réseau',
    description: 'Protection avancée de vos données et de votre infrastructure réseau.',
    link: '/products',
  },
  {
    icon: FiHeadphones,
    title: 'Support technique 24/7',
    description: 'Assistance technique disponible en tout temps pour garantir votre continuité d\'affaires.',
    link: '/support',
  },
  {
    icon: FiCloud,
    title: 'Solutions cloud',
    description: 'Infrastructure cloud sécurisée et scalable pour votre entreprise.',
    link: '/products',
  },
  {
    icon: FiServer,
    title: 'Services d\'entreprise',
    description: 'Solutions sur mesure adaptées aux besoins spécifiques de votre organisation.',
    link: '/products',
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-accent-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-center">
            Nos Services
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Des solutions télécom complètes pour répondre à tous vos besoins, 
            de l&apos;internet résidentiel aux infrastructures d&apos;entreprise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.link} className="card group hover:border-primary transition-all">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                    <service.icon className="text-2xl text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="heading-3 text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-body text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

