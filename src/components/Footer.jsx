export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 via-blue-800 to-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="CA India" className="w-20 h-14 object-contain bg-white/20 backdrop-blur-sm rounded-xl p-2" />
              <div>
                <h2 className="text-2xl font-bold">Nidhi Sharma</h2>
                <p className="text-blue-100 text-sm">& Company</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Chartered Accountants serving clients for over a decade with professional excellence and integrity.
            </p>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-transparent rounded"></span>
              Our Services
            </h3>
            <ul className="space-y-3 text-blue-100 text-sm">
              {['Business Setup Advisory', 'Audit & Assurance', 'Tax Advisory', 'GST Services', 'Accounting'].map((item, i) => (
                <li key={i} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-transparent rounded"></span>
              Contact
            </h3>
            <div className="space-y-4 text-blue-100 text-sm">
              <div className="hover:text-white transition-colors cursor-pointer">
                <p className="font-semibold text-white mb-1">📍 Registered Office</p>
                <p>287, 4th Floor, Sector-27</p>
                <p>Near Golf Course Road</p>
                <p>Gurugram, Haryana-122002</p>
              </div>
              <div className="hover:text-white transition-colors cursor-pointer">
                <p className="font-semibold text-white mb-1">📧 Email</p>
                <p>info@nsc.ind.in</p>
              </div>
              <div className="hover:text-white transition-colors cursor-pointer">
                <p className="font-semibold text-white mb-1">📞 Phone</p>
                <p>8586981072</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-blue-100 text-sm">
          <p>&copy; 2024 Nidhi Sharma & Company. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
