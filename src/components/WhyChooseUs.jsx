export default function WhyChooseUs() {
  const highlights = [
    {
      title: 'Proactive Record Management',
      desc: 'A modern and proactive approach to accounting, documentation, and compliance planning.',
    },
    {
      title: 'Personalized Support',
      desc: 'Responsive, cordial, and individualized service that feels like an extension of your team.',
    },
    {
      title: 'Creative Solutions',
      desc: 'Practical, innovative answers to unique and evolving business requirements.',
    },
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-100 to-primary-200"></div>
      <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-violet-500/[0.05] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-blue-500/[0.04] rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="section-label mx-auto mb-4">
            <span className="w-2 h-2 bg-navy-900 rounded-full"></span>
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Expertise That Enhances Your Business</span>
          </h2>
          <p className="text-navy-900/70 text-lg max-w-3xl mx-auto">
            We are a group of experienced experts committed to helping clients anticipate change and act with confidence.
          </p>
          <div className="line-decoration mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {highlights.map((item, idx) => (
            <div key={idx} className="card-elegant bg-white/60 backdrop-blur-sm p-7 border border-primary-200/40">
              <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
              <p className="text-sm text-navy-900/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
