"use client"

import { useState } from "react"
import { PhoneIcon } from "lucide-react"
import Image from "next/image"

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const phoneNumber = "919876543210" // Replace with your actual WhatsApp number

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative">
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-lg p-3 w-48 text-sm">
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/images/dreamgo-logo-circle.png"
                alt="Dream Go India"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="font-medium">Dream Go India</span>
            </div>
            <p>Chat with us on WhatsApp for quick assistance!</p>
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45"></div>
          </div>
        )}
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <PhoneIcon className="h-6 w-6 text-white" />
        </a>
      </div>
    </div>
  )
}
