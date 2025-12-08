'use client'

import Link from 'next/link'
import { FiLink, FiWifi, FiServer, FiPhone } from 'react-icons/fi'

const productCategories = [
  {
    id: 'cablage',
    icon: FiLink,
    title: 'Câblage structuré',
    description: 'Solutions de câblage structuré pour vos infrastructures réseau. Installation professionnelle et certification garantie.',
    image: '/api/placeholder/400/300',
    link: '/products/cablage',
  },
  {
    id: 'fibre',
    icon: FiWifi,
    title: 'Fibre optique',
    description: 'Connexions fibre optique haute performance pour entreprises et résidences. Vitesses ultra-rapides et fiabilité maximale.',
    image: '/api/placeholder/400/300',
    link: '/products/fibre',
  },
  {
    id: 'telephonie',
    icon: FiPhone,
    title: 'Téléphonie Hébergée',
    description: 'Solutions de téléphonie hébergée dans le cloud pour votre entreprise. Fonctionnalités avancées et support 24/7.',
    image: '/api/placeholder/400/300',
    link: '/products/telephonie',
  },
  {
    id: 'informatique',
    icon: FiServer,
    title: 'Service informatique',
    description: 'Solutions informatiques complètes pour votre entreprise. Support technique, maintenance et services cloud.',
    image: '/api/placeholder/400/300',
    link: 'https://www.bzinc.ca',
    external: true,
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-accent-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary-light text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6">
              Nos Produits
            </h1>
            <p className="text-xl text-gray-300">
              Découvrez notre gamme complète de solutions télécom et informatiques pour votre entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category) => {
              const CardContent = (
                <div className="card group hover:border-primary transition-all h-full flex flex-col">
                  <div className="bg-gray-200 h-48 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                        <category.icon className="text-5xl text-primary" />
                      </div>
                    )}
                  </div>
                  <h3 className="heading-3 text-2xl mb-4">
                    {category.title}
                  </h3>
                  <p className="text-body mb-6 flex-grow">
                    {category.description}
                  </p>
                  <div className="mt-auto">
                    <span className="btn-primary inline-block w-full text-center">
                      En savoir plus
                    </span>
                  </div>
                </div>
              )

              if (category.external) {
                return (
                  <a
                    key={category.id}
                    href={category.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {CardContent}
                  </a>
                )
              }

              return (
                <Link key={category.id} href={category.link}>
                  {CardContent}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
