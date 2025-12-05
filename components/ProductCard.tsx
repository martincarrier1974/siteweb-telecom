'use client'

import { useCart } from '@/context/CartContext'
import { FiShoppingCart } from 'react-icons/fi'

interface Product {
  id: string
  name: string
  price: number
  description: string
  image?: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
    })
  }

  return (
    <div className="card group">
      <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="text-gray-400 text-4xl">📡</div>
        )}
      </div>
      <h3 className="text-xl font-bold text-secondary mb-2">
        {product.name}
      </h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </span>
        <button
          onClick={handleAddToCart}
          className="btn-primary flex items-center space-x-2"
        >
          <FiShoppingCart />
          <span>Ajouter</span>
        </button>
      </div>
    </div>
  )
}

