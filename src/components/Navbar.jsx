import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'FOUNDER', href: '#founder' },
    { label: 'PUBLICATIONS', href: '#publications' },
    { label: 'INSIGHTS', href: '#insights' },
    { label: 'CAREER', href: '#career' },
    { label: 'CONTACT US', href: '#contact' },
  ]

  return (
    <nav className="fixed w-full top-0 z-50">
      {/* Main Navbar */}
      <div className="bg-primary-100/95 backdrop-blur-lg shadow-lg">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <img src="/logo.png" alt="CA India" className="w-16 h-12 object-contain" />
              <div className="hidden md:block">
                <h1 className="font-bold text-navy-900 text-lg">Nidhi Sharma & Company</h1>
                <p className="text-xs text-neutral-brown font-medium">Chartered Accountants</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-navy-900 hover:text-navy-700 font-semibold text-sm transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-navy-900 to-navy-700 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-navy-900 hover:text-navy-700 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden pb-4 border-t border-primary-200 animate-fade-in-up">
              <div className="flex flex-col gap-3 pt-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 text-navy-900 hover:bg-primary-200 hover:text-navy-900 font-semibold text-sm rounded-lg transition-colors"
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
