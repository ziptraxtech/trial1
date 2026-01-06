import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PUBLICATIONS', href: '#publications' },
    { label: 'INSIGHTS', href: '#insights' },
    { label: 'CAREER', href: '#career' },
    { label: 'CONTACT US', href: '#contact' },
  ]

  return (
    <nav className="fixed w-full top-12 z-50">
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-4 py-2 flex justify-between items-center text-xs md:text-sm font-medium">
        <div className="flex gap-4 md:gap-8">
          <span className="hidden md:inline">📞 Phone: 8586981072</span>
          <span className="hidden md:inline">📧 Email: info@nsc.ind.in</span>
        </div>
        <div className="md:hidden text-xs">Contact Us</div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/95 backdrop-blur-lg shadow-lg">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="CA India" className="w-16 h-12 object-contain" />
              <div className="hidden md:block">
                <h1 className="font-bold text-blue-900 text-lg">Nidhi Sharma & Company</h1>
                <p className="text-xs text-gray-600 font-medium">Chartered Accountants</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-semibold text-sm transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-200 animate-fade-in-up">
              <div className="flex flex-col gap-3 pt-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold text-sm rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
