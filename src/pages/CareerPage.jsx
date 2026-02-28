export default function CareerPage() {
  return (
    <div className="pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-100 to-primary-200"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/[0.05] rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="section-label mx-auto mb-4">
              <span className="w-2 h-2 bg-navy-900 rounded-full"></span>
              Career
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Build Your Career With Us</span>
            </h1>
            <p className="text-navy-900/70 text-lg">
              Join a team that values integrity, commitment, and professional excellence.
            </p>
            <div className="line-decoration mt-6"></div>
          </div>

          <div className="card-elegant bg-gradient-to-br from-sky-50/80 to-blue-50/70 backdrop-blur-sm p-8 md:p-10 border border-primary-200/40 space-y-6">
            <p className="text-navy-900/70 leading-relaxed">
              We are always looking for talented professionals in audit, taxation, compliance, accounting, and advisory services. If you are passionate about creating impact for clients and want to grow with a forward-looking firm, we would love to hear from you.
            </p>
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <a
                href="mailto:nidhi@nsc.ind.in"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-purple-900/30 hover:shadow-purple-600/40 hover:shadow-2xl transition-all duration-400 hover:-translate-y-1"
              >
                Apply via Email
              </a>
              <span className="text-sm text-navy-900/60">Send your resume and a brief note about your area of interest.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
