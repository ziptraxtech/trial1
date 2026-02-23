import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'py-0' : 'py-1'}`}>
      <div className={`transition-all duration-500 ${scrolled ? 'bg-primary-100/98 backdrop-blur-xl shadow-lg shadow-navy-900/5' : 'bg-primary-100/80 backdrop-blur-md'}`}>
        <div className="container-custom">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative">
                <img src="/logo.png" alt="CA India" className={`object-contain transition-all duration-500 ${scrolled ? 'w-12 h-9' : 'w-16 h-12'}`} />
              </div>
              <div className="hidden md:block">
                <h1 className="font-bold text-navy-900 text-base leading-tight group-hover:text-navy-800 transition-colors">Nidhi Sharma & Company</h1>
                <p className="text-[10px] text-neutral-brown font-semibold uppercase tracking-widest">Chartered Accountants</p>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-navy-900/80 hover:text-navy-900 font-semibold text-xs px-3 py-2 rounded-lg hover:bg-navy-900/5 transition-all duration-300 relative group tracking-wide"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-navy-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-navy-900/5 text-navy-900 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
            <div className="border-t border-navy-900/10 pt-3 space-y-1">
              {menuItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-navy-900/80 hover:text-navy-900 hover:bg-navy-900/5 font-semibold text-sm rounded-lg transition-all"
                  style={{animationDelay: `${i * 0.05}s`}}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
