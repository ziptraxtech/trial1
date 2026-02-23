export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Navy background with texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900"></div>
      <div className="noise-overlay absolute inset-0"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="CA India" className="w-16 h-12 object-contain bg-white/10 backdrop-blur-sm rounded-xl p-1.5" />
              <div>
                <h2 className="text-xl font-bold text-primary-200">Nidhi Sharma</h2>
                <p className="text-primary-200/50 text-xs font-semibold uppercase tracking-widest">&amp; Company</p>
              </div>
            </div>
            <p className="text-primary-200/50 text-sm leading-relaxed">
              Chartered Accountants serving clients for over a decade with professional excellence and integrity.
            </p>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-sm font-bold mb-6 text-primary-200/40 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-[1px] bg-primary-400/40"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {['Business Setup Advisory', 'Audit & Assurance', 'Tax Advisory', 'GST Services', 'Accounting & BPO'].map((item, i) => (
                <li key={i} className="text-primary-100/60 hover:text-primary-100 text-sm cursor-pointer flex items-center gap-2 group transition-colors duration-300">
                  <span className="w-1 h-1 bg-primary-400/40 rounded-full group-hover:bg-primary-400 group-hover:scale-150 transition-all duration-300"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-sm font-bold mb-6 text-primary-200/40 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-[1px] bg-primary-400/40"></span>
              Contact
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-primary-100/80 text-sm mb-1">📍 Registered Office</p>
                <p className="text-primary-200/50 text-sm">284, 4th Floor, Sector-27</p>
                <p className="text-primary-200/50 text-sm">Gurugram, Haryana - 122002</p>
              </div>
              <div>
                <p className="font-semibold text-primary-100/80 text-sm mb-1">📧 Email</p>
                <a href="mailto:nidhi@nsc.ind.in" className="text-primary-200/50 text-sm hover:text-primary-200 transition-colors">nidhi@nsc.ind.in</a>
              </div>
              <div>
                <p className="font-semibold text-primary-100/80 text-sm mb-1">📞 Phone</p>
                <a href="tel:+919999130871" className="text-primary-200/50 text-sm hover:text-primary-200 transition-colors">+91-9999130871</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary-200/10 to-transparent my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-200/40 text-sm">
          <p>&copy; 2024 Nidhi Sharma & Company. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-200/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-200/70 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-primary-200/70 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
