'use client'

import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { FiShoppingCart, FiMenu, FiX, FiMessageCircle, FiUsers, FiHeadphones } from 'react-icons/fi'
import { useState } from 'react'
import Logo from './Logo'

export default function Header() {
  const { itemCount } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center pt-6 relative z-10">
            <Logo className="h-12 w-auto" />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-secondary hover:text-primary transition-colors font-medium">
              Accueil
            </Link>
            <Link href="/products" className="text-secondary hover:text-primary transition-colors font-medium">
              Produits
            </Link>
            <Link href="/about" className="text-secondary hover:text-primary transition-colors font-medium">
              À propos
            </Link>
            <Link href="/contact" className="text-secondary hover:text-primary transition-colors font-medium">
              Contact
            </Link>
            <Link href="/questionnaire" className="text-secondary hover:text-primary transition-colors font-medium">
              Demande de soumission
            </Link>
          </nav>

          {/* Actions - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Clavardage */}
            <button className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors font-medium">
              <FiMessageCircle className="text-xl" />
              <span>Clavardage</span>
            </button>
            
            {/* Rejoindre l'équipe */}
            <Link href="/careers" className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors font-medium">
              <FiUsers className="text-xl" />
              <span>Rejoindre l&apos;équipe</span>
            </Link>
            
            {/* Support technique */}
            <Link href="/support" className="flex items-center space-x-2 text-secondary hover:text-primary transition-colors font-medium">
              <FiHeadphones className="text-xl" />
              <span>Support</span>
            </Link>

            {/* Panier */}
            <Link
              href="/cart"
              className="relative flex items-center space-x-2 text-secondary hover:text-primary transition-colors"
            >
              <FiShoppingCart className="text-2xl" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
              <span className="font-medium">Panier</span>
            </Link>
          </div>

          {/* Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-secondary"
          >
            {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/products"
              className="block py-2 text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Produits
            </Link>
            <Link
              href="/about"
              className="block py-2 text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/questionnaire"
              className="block py-2 text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demande de soumission
            </Link>
            <button
              className="block py-2 text-secondary hover:text-primary transition-colors w-full text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              Clavardage
            </button>
            <Link
              href="/careers"
              className="block py-2 text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rejoindre l&apos;équipe
            </Link>
            <Link
              href="/support"
              className="block py-2 text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support technique
            </Link>
            <Link
              href="/cart"
              className="block py-2 text-secondary hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Panier ({itemCount})
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
