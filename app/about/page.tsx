import { FiUsers, FiTarget, FiAward, FiTrendingUp } from 'react-icons/fi'

const values = [
  {
    icon: FiUsers,
    title: 'Service client exceptionnel',
    description: 'Notre équipe dédiée est toujours prête à vous aider.',
  },
  {
    icon: FiTarget,
    title: 'Solutions sur mesure',
    description: 'Nous adaptons nos services à vos besoins spécifiques.',
  },
  {
    icon: FiAward,
    title: 'Qualité garantie',
    description: 'Nous nous engageons à fournir des services de la plus haute qualité.',
  },
  {
    icon: FiTrendingUp,
    title: 'Innovation constante',
    description: 'Nous restons à la pointe de la technologie pour vous offrir le meilleur.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-accent-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary-light text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">
              À propos de nous
            </h1>
            <p className="text-xl text-gray-300">
              Votre partenaire de confiance pour tous vos besoins en télécommunications.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-8">
              Notre mission
            </h2>
            <div className="space-y-6 text-body">
              <p>
                Bienvenue chez bz Télécom, votre partenaire de confiance pour tous vos besoins en télécommunications.
              </p>
              <p>
                Depuis notre création, nous nous engageons à fournir des services de qualité supérieure
                qui répondent aux besoins de nos clients résidentiels et commerciaux.
              </p>
              <p>
                Notre mission est de connecter les gens et les entreprises grâce à des solutions
                technologiques innovantes et fiables. Nous croyons en un service client exceptionnel
                et en des produits qui font la différence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-accent-light">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-3xl text-primary" />
                </div>
                <h3 className="heading-3 text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-body text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-xl">Années d&apos;expérience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-xl">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-xl">Support disponible</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
