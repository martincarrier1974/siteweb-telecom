import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-24">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="text-gray-400">
              Votre partenaire de confiance pour tous vos besoins en télécommunications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Produits
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Internet haute vitesse
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Téléphonie
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-primary transition-colors">
                  Solutions d&apos;entreprise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <FiPhone className="text-primary" />
                <span>1-800-TELECOM</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMail className="text-primary" />
                <span>info@telecom.ca</span>
              </li>
              <li className="flex items-start space-x-2">
                <FiMapPin className="text-primary mt-1" />
                <span>123 Rue Principale<br />Montréal, QC H1A 1A1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Telecom. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

