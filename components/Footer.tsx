import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin, FiMessageCircle, FiUsers, FiHeadphones } from 'react-icons/fi'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white mt-24">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 mb-4">
              Votre partenaire de confiance pour tous vos besoins en télécommunications.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <FiMessageCircle className="text-primary" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Navigation</h4>
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
              <li>
                <Link href="/questionnaire" className="hover:text-primary transition-colors">
                  Demande de soumission
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
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
              <li>
                <Link href="/support" className="hover:text-primary transition-colors flex items-center space-x-2">
                  <FiHeadphones className="text-sm" />
                  <span>Support technique</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact & Ressources</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <FiPhone className="text-primary flex-shrink-0" />
                <span>1-800-TELECOM</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMail className="text-primary flex-shrink-0" />
                <span>info@telecom.ca</span>
              </li>
              <li className="flex items-start space-x-2">
                <FiMapPin className="text-primary mt-1 flex-shrink-0" />
                <span>123 Rue Principale<br />Montréal, QC H1A 1A1</span>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors flex items-center space-x-2">
                  <FiUsers className="text-primary text-sm" />
                  <span>Rejoindre l&apos;équipe</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} bz Télécom. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/about" className="hover:text-primary transition-colors">
                À propos
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
              <Link href="/support" className="hover:text-primary transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
