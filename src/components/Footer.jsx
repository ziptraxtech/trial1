export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 text-navy-900 pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="CA India" className="w-20 h-14 object-contain bg-primary-100/20 backdrop-blur-sm rounded-xl p-2" />
              <div>
                <h2 className="text-2xl font-bold text-navy-900">Nidhi Sharma</h2>
                <p className="text-neutral-brown text-sm">& Company</p>
              </div>
            </div>
            <p className="text-neutral-brown text-sm leading-relaxed">
              Chartered Accountants serving clients for over a decade with professional excellence and integrity.
            </p>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-navy-900">
              <span className="w-1 h-6 bg-gradient-to-b from-primary-200 to-transparent rounded"></span>
              Our Services
            </h3>
            <ul className="space-y-3 text-navy-900 text-sm">
              {['Business Setup Advisory', 'Audit & Assurance', 'Tax Advisory', 'GST Services', 'Accounting'].map((item, i) => (
                <li key={i} className="hover:text-navy-800 transition-colors cursor-pointer flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-navy-900 rounded-full group-hover:scale-150 transition-transform"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-navy-900">
              <span className="w-1 h-6 bg-gradient-to-b from-navy-900 to-transparent rounded"></span>
              Contact
            </h3>
            <div className="space-y-4 text-navy-900 text-sm">
              <div className="hover:text-navy-800 transition-colors cursor-pointer">
                <p className="font-semibold text-navy-900 mb-1">📍 Registered Office</p>
                <p className="text-neutral-brown">284, 4th Floor, Sector-27</p>
                <p className="text-neutral-brown">Gurugram, Haryana - 122002</p>
              </div>
              <div className="hover:text-navy-800 transition-colors cursor-pointer">
                <p className="font-semibold text-navy-900 mb-1">📧 Email</p>
                <p className="text-neutral-brown">nidhi@nsc.ind.in</p>
              </div>
              <div className="hover:text-navy-800 transition-colors cursor-pointer">
                <p className="font-semibold text-navy-900 mb-1">📞 Phone</p>
                <p className="text-neutral-brown">+91-9999130871</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-navy-900 text-sm">
          <p>&copy; 2024 Nidhi Sharma & Company. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-700 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-700 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
