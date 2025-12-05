import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-secondary to-secondary-light text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Solutions Télécom
            <span className="text-primary block">Moderne & Fiable</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Découvrez nos services de télécommunication de pointe pour votre entreprise et votre domicile
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary text-lg px-8 py-4">
              Voir nos produits
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

