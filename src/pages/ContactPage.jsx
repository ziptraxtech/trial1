export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-100 to-primary-200"></div>
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-violet-500/[0.05] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-blue-500/[0.04] rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="section-label mx-auto mb-4">
              <span className="w-2 h-2 bg-navy-900 rounded-full"></span>
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Let us start a conversation</span>
            </h1>
            <p className="text-navy-900/70 text-lg">
              Reach out for advisory, compliance support, or a strategic consultation.
            </p>
            <div className="line-decoration mt-6"></div>
          </div>

          <div className="card-elegant bg-gradient-to-br from-sky-50/80 to-blue-50/70 backdrop-blur-sm p-8 md:p-10 border border-primary-200/40 space-y-6">
            <div>
              <p className="font-semibold text-navy-900 mb-1">Registered Office</p>
              <p className="text-navy-900/60">284, 4th Floor, Sector-27</p>
              <p className="text-navy-900/60">Gurugram, Haryana - 122002</p>
            </div>
            <div>
              <p className="font-semibold text-navy-900 mb-1">Email</p>
              <a href="mailto:nidhi@nsc.ind.in" className="text-navy-900/60 hover:text-navy-900 transition-colors">
                nidhi@nsc.ind.in
              </a>
            </div>
            <div>
              <p className="font-semibold text-navy-900 mb-1">Phone</p>
              <a href="tel:+919999130871" className="text-navy-900/60 hover:text-navy-900 transition-colors">
                +91-9999130871
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
