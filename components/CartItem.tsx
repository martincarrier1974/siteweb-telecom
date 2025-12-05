'use client'

import { useCart } from '@/context/CartContext'
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi'
import { CartItem as CartItemType } from '@/context/CartContext'

interface CartItemProps {
  item: CartItemType
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="card flex items-center justify-between">
      <div className="flex items-center space-x-4 flex-1">
        <div className="bg-gray-200 w-20 h-20 rounded-lg flex items-center justify-center">
          {item.image ? (
            <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
          ) : (
            <span className="text-2xl">📡</span>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-secondary">{item.name}</h3>
          <p className="text-primary font-semibold">${item.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FiMinus />
          </button>
          <span className="w-12 text-center font-semibold">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FiPlus />
          </button>
        </div>
        <div className="text-right min-w-[100px]">
          <p className="text-lg font-bold text-secondary">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
        <button
          onClick={() => removeItem(item.id)}
          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  )
}

