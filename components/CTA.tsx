import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Prêt à commencer ?
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Contactez-nous dès aujourd'hui pour découvrir nos solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="btn-secondary bg-white text-primary hover:bg-gray-100">
            Voir nos produits
          </Link>
          <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  )
}

