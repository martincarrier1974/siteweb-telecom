'use client'

import ProductCard from './ProductCard'

const products = [
  {
    id: '1',
    name: 'Internet Fibre Optique 1 Gbps',
    price: 89.99,
    description: 'Connexion ultra-rapide pour votre domicile',
    image: '/api/placeholder/400/300',
  },
  {
    id: '2',
    name: 'Forfait Téléphonie Entreprise',
    price: 49.99,
    description: 'Solutions complètes pour votre entreprise',
    image: '/api/placeholder/400/300',
  },
  {
    id: '3',
    name: 'Internet Résidentiel 100 Mbps',
    price: 59.99,
    description: 'Idéal pour la navigation et le streaming',
    image: '/api/placeholder/400/300',
  },
  {
    id: '4',
    name: 'Bundle Internet + Téléphonie',
    price: 99.99,
    description: 'Économisez avec notre forfait combiné',
    image: '/api/placeholder/400/300',
  },
  {
    id: '5',
    name: 'Internet Fibre Optique 500 Mbps',
    price: 69.99,
    description: 'Performance optimale pour toute la famille',
    image: '/api/placeholder/400/300',
  },
  {
    id: '6',
    name: 'Solution Cloud Entreprise',
    price: 149.99,
    description: 'Infrastructure cloud sécurisée',
    image: '/api/placeholder/400/300',
  },
]

export default function ProductGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2">
            Nos Produits
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Découvrez notre gamme complète de solutions télécom adaptées à vos besoins.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
