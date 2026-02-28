import Goals from '../components/Goals'

export default function PublicationsPage() {
  return (
    <div className="pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-100 to-primary-200"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-500/[0.05] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="section-label mx-auto mb-4">
              <span className="w-2 h-2 bg-navy-900 rounded-full"></span>
              Publications
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Insights and Publications</span>
            </h1>
            <p className="text-navy-900/70 text-lg max-w-3xl mx-auto">
              Our strategic priorities center on delivering measurable value to clients while contributing positively to society. This page highlights our research-led briefs, compliance updates, and sustainability reporting focus areas.
            </p>
            <div className="line-decoration mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              {
                title: 'Compliance Briefs',
                desc: 'GST, income tax, and regulatory updates that matter to your business.',
              },
              {
                title: 'Sustainability Reporting',
                desc: 'Guidance on BRSR and ESG disclosures aligned with NGRBC principles.',
              },
              {
                title: 'Cross-Border Notes',
                desc: 'FEMA, transfer pricing, and international tax perspectives.',
              },
            ].map((item, idx) => (
              <div key={idx} className="card-elegant bg-white/60 backdrop-blur-sm p-7 border border-primary-200/40">
                <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-900/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Goals />
    </div>
  )
}
