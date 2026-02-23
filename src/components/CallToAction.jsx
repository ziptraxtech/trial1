export default function CallToAction() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"></div>
      <div className="noise-overlay absolute inset-0"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-500/8 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-label-light mx-auto mb-6">
            <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
            Get Started
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-200 mb-4">
            Ready to Transform Your{' '}
            <span className="font-bold text-primary-200">Financial Strategy?</span>
          </h2>
          <p className="text-primary-200/60 text-lg mb-8 leading-relaxed">
            Partner with a firm that understands the complexities of modern business. 
            Let's discuss how we can add value to your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:nidhi@nsc.ind.in" 
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-400 text-navy-900 px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-1"
            >
              Schedule a Consultation
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a 
              href="tel:+919999130871" 
              className="inline-flex items-center gap-2 border-2 border-primary-400/30 text-primary-200 px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-400/10 hover:border-primary-400/50 transition-all duration-400 hover:-translate-y-1"
            >
              📞 +91-9999130871
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
