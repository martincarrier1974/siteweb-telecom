const testimonials = [
  {
    name: 'Jean Dupont',
    role: 'Directeur TI, Entreprise ABC',
    content: 'Service exceptionnel et support technique réactif. Nos communications n\'ont jamais été aussi fiables.',
    rating: 5,
  },
  {
    name: 'Marie Tremblay',
    role: 'Propriétaire, Commerce XYZ',
    content: 'Installation rapide et professionnelle. Le service client est toujours disponible quand on en a besoin.',
    rating: 5,
  },
  {
    name: 'Pierre Martin',
    role: 'CEO, Startup Tech',
    content: 'Les solutions cloud proposées ont transformé notre façon de travailler. Très satisfait du service.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2">
            Ce que nos clients disent
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-body mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div>
                <p className="font-semibold text-secondary">{testimonial.name}</p>
                <p className="text-sm text-gray">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

