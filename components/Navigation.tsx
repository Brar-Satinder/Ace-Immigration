'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-dark-secondary border-b border-accent-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-accent-blue">
              Ace Immigration
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-accent-blue transition">
              Home
            </Link>
            <Link href="/visa-calculator" className="text-white hover:text-accent-blue transition">
              Visa Calculator
            </Link>
            <Link href="/services" className="text-white hover:text-accent-blue transition">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-accent-blue transition">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-accent-blue transition">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-accent-blue"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-white hover:text-accent-blue transition">
              Home
            </Link>
            <Link href="/visa-calculator" className="block text-white hover:text-accent-blue transition">
              Visa Calculator
            </Link>
            <Link href="/services" className="block text-white hover:text-accent-blue transition">
              Services
            </Link>
            <Link href="/about" className="block text-white hover:text-accent-blue transition">
              About
            </Link>
            <Link href="/contact" className="block text-white hover:text-accent-blue transition">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}