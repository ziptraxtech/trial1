export default function Mission() {
  return (
    <section className="section-padding bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Our Purpose</h2>
          <p className="text-neutral-brown text-lg">The foundation that guides everything we do</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision */}
          <div className="bg-primary-100/20 backdrop-blur-md rounded-3xl p-10 border border-primary-100/20 shadow-2xl hover-lift animate-fade-in-up">
            <div className="text-5xl mb-6 text-center">🔭</div>
            <h3 className="text-2xl font-bold text-navy-900 text-center mb-5">Our Vision</h3>
            <p className="text-navy-900 text-center leading-relaxed">
              To empower businesses with accurate accounting and insightful reporting, enabling smarter decisions and sustainable growth.
            </p>
            <p className="text-neutral-brown text-center text-sm mt-4 leading-relaxed">
              We aim to be trusted partners by delivering expert outsourced solutions that bring clarity, efficiency, and confidence to every client.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-primary-100/20 backdrop-blur-md rounded-3xl p-10 border border-primary-100/20 shadow-2xl hover-lift animate-fade-in-up">
            <div className="text-5xl mb-6 text-center">🎯</div>
            <h3 className="text-2xl font-bold text-navy-900 text-center mb-5">Our Mission</h3>
            <p className="text-navy-900 text-center leading-relaxed">
              To transform ideas into sustainable growth by delivering comprehensive professional services that clients trust, employees take pride in, and competitors respect.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
