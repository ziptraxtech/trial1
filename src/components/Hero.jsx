export default function Hero() {
  return (
    <div id="home" className="pt-28 pb-20 md:pt-32 md:pb-32 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Since 2012 · Delhi & Gurugram</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Nidhi Sharma</span>
              <br />
              <span className="text-gray-900">& Company</span>
            </h1>
            <p className="text-xl text-blue-800 font-semibold mb-4">Chartered Accountants</p>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Empowering enterprises with financial confidence.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Business plans are perfect… but it's difficult to sustain. Let's ensure your plans are profitable.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#about" className="btn-primary shadow-lg hover:shadow-xl">
                About Us
              </a>
              <a href="#services" className="btn-secondary">
                Our Services
              </a>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="relative animate-slide-in-right">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-12 shadow-2xl">
              <div className="w-full h-64 md:h-72 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex flex-col items-center justify-center text-white shadow-inner gap-4 px-8">
                <div className="text-5xl">📊</div>
                <p className="text-center text-lg font-semibold leading-snug">Trusted by businesses, government entities & entrepreneurs across India</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-100 rounded-xl shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
