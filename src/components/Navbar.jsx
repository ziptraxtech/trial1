import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
    { label: 'HOME', to: '/', end: true },
    { label: 'SERVICES', to: '/services' },
    { label: 'PUBLICATIONS', to: '/publications' },
    { label: 'INSIGHTS', to: '/insights' },
    { label: 'CAREER', to: '/career' },
    { label: 'CONTACT US', to: '/contact' },
  ]

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'py-0' : 'py-1'}`}>
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-navy-800/95 backdrop-blur-xl shadow-lg shadow-purple-900/20 border-b border-white/5'
            : 'bg-navy-900/95 backdrop-blur-xl shadow-lg shadow-purple-900/20 border-b border-white/10'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img src="/logo.png" alt="CA India" className={`object-contain transition-all duration-500 ${scrolled ? 'w-12 h-9' : 'w-16 h-12'}`} />
              </div>
              <div className="hidden md:block">
                <h1 className="font-bold text-primary-100 text-base leading-tight group-hover:text-primary-50 transition-colors">
                  Nidhi Sharma & Company
                </h1>
                <p className="text-[10px] text-primary-400 font-semibold uppercase tracking-widest">Chartered Accountants</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `text-primary-100/90 hover:text-white font-semibold text-xs px-3 py-2 rounded-lg hover:bg-white/8 transition-all duration-300 relative group tracking-wide ${
                      isActive ? 'text-primary-50 bg-white/10' : ''
                    }`
                  }
                >
                  {item.label}
                  <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/8 text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
            <div className="border-t border-white/10 pt-3 space-y-1">
              {menuItems.map((item, i) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.end}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-primary-100/90 hover:text-white hover:bg-white/8 font-semibold text-sm rounded-lg transition-all ${
                      isActive ? 'text-primary-50 bg-white/5' : ''
                    }`
                  }
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
