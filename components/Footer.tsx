import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-secondary border-t border-accent-blue mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-accent-blue mb-4">Ace Immigration</h3>
            <p className="text-gray-400 text-sm">
              Expert Australian immigration consultation services. Your trusted partner in your immigration journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-accent-blue transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/visa-calculator" className="text-gray-400 hover:text-accent-blue transition">
                  Visa Calculator
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-accent-blue transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-accent-blue transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-accent-blue transition">
                  Visa Assessment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-accent-blue transition">
                  Application Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-accent-blue transition">
                  Document Preparation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-accent-blue transition">
                  Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@aceimmigration.com</li>
              <li>Phone: +61 (0) 2 XXXX XXXX</li>
              <li>Address: Australia</li>
              <li>
                <Link href="/contact" className="text-accent-blue hover:underline">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Ace Immigration. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-accent-blue transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent-blue transition">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-accent-blue transition">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}