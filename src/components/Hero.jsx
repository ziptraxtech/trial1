export default function Hero() {
  return (
    <div id="home" className="pt-28 pb-20 md:pt-32 md:pb-32 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 -z-10 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <p className="text-primary-200 font-semibold text-sm uppercase tracking-widest mb-3 transition-colors duration-500">Since 2012 · Delhi & Gurugram</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-navy-900 bg-clip-text transform transition-transform duration-700 hover:scale-105 inline-block">Nidhi Sharma</span>
              <br />
              <span className="text-navy-900 transition-colors duration-500">& Company</span>
            </h1>
            <p className="text-xl text-primary-200 font-semibold mb-4 transition-colors duration-500">Chartered Accountants</p>
            <p className="text-lg text-primary-100 mb-4 leading-relaxed transition-colors duration-500">
              Empowering enterprises with financial confidence.
            </p>
            <p className="text-primary-50 mb-8 leading-relaxed transition-colors duration-500">
              Business plans are perfect… but it's difficult to sustain. Let's ensure your plans are profitable.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#about" className="bg-gradient-to-r from-primary-600 to-primary-500 text-navy-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
                About Us
              </a>
              <a href="#services" className="border-2 border-primary-500 text-primary-200 px-8 py-3 rounded-lg font-semibold hover:bg-primary-500 hover:text-navy-900 transition-all duration-300 hover:scale-105 transform">
                Our Services
              </a>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="relative animate-slide-in-right">
            <div className="space-y-6">
              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-primary-600 to-primary-500 rounded-xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer">
                  <p className="text-3xl font-bold mb-2 transition-transform duration-300 text-navy-900">12+</p>
                  <p className="text-sm text-navy-900 font-semibold">Years of Excellence</p>
                </div>
                <div className="bg-gradient-to-br from-navy-800 to-navy-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer border border-primary-500/30">
                  <p className="text-3xl font-bold mb-2 transition-transform duration-300 text-primary-300">500+</p>
                  <p className="text-sm text-primary-200 font-semibold">Happy Clients</p>
                </div>
                <div className="bg-gradient-to-br from-primary-500 to-primary-400 rounded-xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer">
                  <p className="text-3xl font-bold mb-2 transition-transform duration-300 text-navy-900">100%</p>
                  <p className="text-sm text-navy-900 font-semibold">Professional Integrity</p>
                </div>
                <div className="bg-gradient-to-br from-navy-700 to-navy-600 rounded-xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer border border-primary-500/30">
                  <p className="text-3xl font-bold mb-2 transition-transform duration-300 text-primary-300">24/7</p>
                  <p className="text-sm text-primary-200 font-semibold">Support Available</p>
                </div>
              </div>
              
              {/* Trust Quote */}
              <div className="bg-gradient-to-r from-navy-800 to-navy-700 border-l-4 border-primary-500 rounded-lg p-6 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:translate-x-2">
                <p className="text-primary-100 font-semibold italic transition-colors duration-300">
                  "Our clients trust us to navigate complex financial landscapes with expertise, integrity, and unwavering commitment to their success."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
