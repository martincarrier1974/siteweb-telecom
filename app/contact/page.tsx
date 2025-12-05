'use client'

import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message envoyé avec succès! (Mode démo)')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-secondary mb-8 text-center">
        Contactez-nous
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-6">
            Informations de contact
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FiPhone className="text-primary text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-secondary mb-1">Téléphone</h3>
                <p className="text-gray-600">1-800-TELECOM</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FiMail className="text-primary text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-secondary mb-1">Email</h3>
                <p className="text-gray-600">info@telecom.ca</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FiMapPin className="text-primary text-2xl mt-1" />
              <div>
                <h3 className="font-semibold text-secondary mb-1">Adresse</h3>
                <p className="text-gray-600">
                  123 Rue Principale<br />
                  Montréal, QC H1A 1A1
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-bold text-secondary mb-6">
            Envoyez-nous un message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="btn-primary w-full">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

