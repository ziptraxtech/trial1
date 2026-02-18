export default function Mission() {
  return (
    <section className="section-padding bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Purpose</h2>
          <p className="text-gray-300 text-lg">The foundation that guides everything we do</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl hover-lift animate-fade-in-up">
            <div className="text-5xl mb-6 text-center">🔭</div>
            <h3 className="text-2xl font-bold text-white text-center mb-5">Our Vision</h3>
            <p className="text-gray-100 text-center leading-relaxed">
              To empower businesses with accurate accounting and insightful reporting, enabling smarter decisions and sustainable growth.
            </p>
            <p className="text-gray-300 text-center text-sm mt-4 leading-relaxed">
              We aim to be trusted partners by delivering expert outsourced solutions that bring clarity, efficiency, and confidence to every client.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl hover-lift animate-fade-in-up">
            <div className="text-5xl mb-6 text-center">🎯</div>
            <h3 className="text-2xl font-bold text-white text-center mb-5">Our Mission</h3>
            <p className="text-gray-100 text-center leading-relaxed">
              To transform ideas into sustainable growth by delivering comprehensive professional services that clients trust, employees take pride in, and competitors respect.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
