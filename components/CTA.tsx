import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-custom text-center">
        <h2 className="heading-2 text-white mb-4">
          Prêt à commencer ?
        </h2>
        <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
          Contactez-nous dès aujourd&apos;hui pour découvrir nos solutions 
          et obtenir une soumission personnalisée adaptée à vos besoins.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/questionnaire" className="btn-secondary bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
            Demande de soumission
          </Link>
          <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  )
}
