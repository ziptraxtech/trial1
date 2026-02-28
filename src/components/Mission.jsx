export default function Mission() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Navy background with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"></div>
      <div className="noise-overlay absolute inset-0"></div>
      <div className="absolute top-0 right-[20%] w-96 h-96 bg-blue-600/12 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-[10%] w-80 h-80 bg-purple-600/12 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-violet-500/8 rounded-full blur-2xl -translate-x-1/2"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-14 animate-fade-in-up">
          <div className="section-label-light mx-auto mb-4">
            <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
            Our Purpose
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-200 mb-4">Vision &amp; Mission</h2>
          <p className="text-primary-200/60 text-lg">The foundation that guides everything we do</p>
          <div className="line-decoration-light mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Vision */}
          <div className="glass rounded-2xl p-10 hover:-translate-y-2 transition-all duration-500 animate-slide-in-left">
            <div className="text-4xl mb-5">🔭</div>
            <h3 className="text-xl font-bold text-primary-200 mb-4">Our Vision</h3>
            <p className="text-primary-100/80 leading-relaxed mb-3">
              To empower businesses with accurate accounting and insightful reporting, enabling smarter decisions and sustainable growth.
            </p>
            <p className="text-primary-200/50 text-sm leading-relaxed">
              We aim to be trusted partners by delivering expert outsourced solutions that bring clarity, efficiency, and confidence to every client.
            </p>
          </div>

          {/* Mission */}
          <div className="glass rounded-2xl p-10 hover:-translate-y-2 transition-all duration-500 animate-slide-in-right">
            <div className="text-4xl mb-5">🎯</div>
            <h3 className="text-xl font-bold text-primary-200 mb-4">Our Mission</h3>
            <p className="text-primary-100/80 leading-relaxed">
              To transform ideas into sustainable growth by delivering comprehensive professional services that clients trust, employees take pride in, and competitors respect.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
