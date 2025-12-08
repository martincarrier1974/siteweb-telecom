'use client'

import { useState } from 'react'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (message.trim()) {
      // Ici vous intégreriez votre système de clavardage
      alert(`Message envoyé: ${message}`)
      setMessage('')
    }
  }

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all z-50 flex items-center justify-center"
        aria-label="Ouvrir le clavardage"
      >
        {isOpen ? (
          <FiX className="text-2xl" />
        ) : (
          <FiMessageCircle className="text-2xl" />
        )}
      </button>

      {/* Widget de clavardage */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-xl shadow-2xl z-50 flex flex-col border border-gray-200">
          <div className="bg-primary text-white p-4 rounded-t-xl flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Clavardage</h3>
              <p className="text-sm text-white/90">Support en direct</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <FiX />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="bg-white rounded-lg p-3 shadow-sm max-w-[80%]">
                  <p className="text-sm text-gray-700">
                    Bonjour ! Comment puis-je vous aider aujourd&apos;hui ?
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tapez votre message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSend}
                className="btn-primary p-2"
              >
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

