import Link from 'next/link'
import { FiUsers, FiBriefcase, FiTrendingUp, FiHeart } from 'react-icons/fi'

const positions = [
  {
    title: 'Représentant des ventes',
    department: 'Ventes',
    type: 'Temps plein',
    location: 'Montréal, QC',
  },
  {
    title: 'Technicien support',
    department: 'Support technique',
    type: 'Temps plein',
    location: 'Montréal, QC',
  },
  {
    title: 'Développeur web',
    department: 'Technologie',
    type: 'Temps plein',
    location: 'Télétravail',
  },
]

const benefits = [
  { icon: FiHeart, title: 'Assurance santé complète' },
  { icon: FiTrendingUp, title: 'Plan de développement professionnel' },
  { icon: FiBriefcase, title: 'Environnement de travail flexible' },
  { icon: FiUsers, title: 'Équipe dynamique et collaborative' },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-accent-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary-light text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">
              Rejoignez notre équipe
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Faites partie d&apos;une équipe passionnée qui transforme l&apos;industrie des télécommunications.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">
            Avantages de travailler avec nous
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <benefit.icon className="text-4xl text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-secondary mb-2">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-accent-light">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">
            Postes disponibles
          </h2>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div key={index} className="card hover:border-primary transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="heading-3 text-xl mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                    </div>
                  </div>
                  <Link href={`/careers/${index + 1}`} className="btn-outline mt-4 md:mt-0">
                    Postuler
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">
            Vous ne trouvez pas le poste idéal ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Envoyez-nous votre candidature spontanée
          </p>
          <Link href="/contact" className="btn-secondary bg-white text-primary hover:bg-gray-100">
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  )
}

