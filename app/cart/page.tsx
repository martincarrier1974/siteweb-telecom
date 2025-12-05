'use client'

import { useCart } from '@/context/CartContext'
import CartItem from '@/components/CartItem'
import Link from 'next/link'
import { FiShoppingBag } from 'react-icons/fi'

export default function CartPage() {
  const { items, total, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <FiShoppingBag className="mx-auto text-6xl text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-secondary mb-4">
            Votre panier est vide
          </h2>
          <p className="text-gray-600 mb-8">
            Découvrez nos produits et ajoutez-les à votre panier
          </p>
          <Link href="/products" className="btn-primary inline-block">
            Voir les produits
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-secondary mb-8">
        Panier d&apos;achat
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <button
            onClick={clearCart}
            className="mt-6 text-primary hover:text-primary-dark font-semibold"
          >
            Vider le panier
          </button>
        </div>
        
        <div className="lg:col-span-1">
          <div className="card sticky top-4">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Résumé de la commande
            </h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Sous-total</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Taxes</span>
                <span className="font-semibold">${(total * 0.15).toFixed(2)}</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-primary">${(total * 1.15).toFixed(2)}</span>
              </div>
            </div>
            <Link href="/checkout" className="btn-primary w-full text-center block">
              Passer la commande
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

