import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-secondary text-white section-padding overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 text-white mb-6">
            Solutions Télécom
            <span className="text-primary block mt-2">Moderne & Fiable</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Découvrez nos services de télécommunication de pointe pour votre entreprise et votre domicile. 
            Des solutions adaptées à vos besoins avec un support technique exceptionnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/questionnaire" className="btn-primary text-lg px-8 py-4">
              Demande de soumission
            </Link>
            <Link href="/products" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary">
              Voir nos produits
            </Link>
            <Link href="/contact" className="btn-gray text-lg px-8 py-4 bg-white/10 text-white hover:bg-white/20 border border-white/20">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
