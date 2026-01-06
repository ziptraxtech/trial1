export default function Hero() {
  return (
    <div className="pt-40 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Business Setup</span>
              <br />
              <span className="text-gray-900">Advisory</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Foreign nationals can incorporate companies in India and hold foreign equity up to 100%, depending on the sector and subject to Reserve Bank of India approval.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="btn-primary shadow-lg hover:shadow-xl">
                Learn More
              </button>
              <button className="btn-secondary">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="relative animate-slide-in-right">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-12 shadow-2xl">
              <div className="w-full h-64 md:h-72 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-6xl shadow-inner">
                📊
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-100 rounded-xl shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
