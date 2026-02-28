export default function Goals() {
  const principles = [
    { number: '1', title: 'ETHICS, TRANSPARENCY & ACCOUNTABILITY', icon: '⚖️' },
    { number: '2', title: 'SAFE & SUSTAINABLE GOODS', icon: '🌱' },
    { number: '3', title: 'EMPLOYEE WELL-BEING', icon: '👥' },
    { number: '4', title: 'STAKEHOLDER INTERESTS', icon: '🤝' },
    { number: '5', title: 'HUMAN RIGHTS', icon: '✊' },
    { number: '6', title: 'ENVIRONMENT PROTECTION', icon: '🌍' },
    { number: '7', title: 'PUBLIC POLICY', icon: '📜' },
    { number: '8', title: 'INCLUSIVE GROWTH', icon: '📈' },
    { number: '9', title: 'CONSUMER VALUE', icon: '💎' },
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-100 to-primary-200"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-violet-500/[0.04] rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="section-label mx-auto mb-4">
            <span className="w-2 h-2 bg-navy-900 rounded-full"></span>
            ESG Compliance
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">BRSR Reporting</span>
          </h2>
          <p className="text-navy-900/70 text-lg mb-4">Nine NGRBC Principles for ESG Compliance</p>
          <div className="line-decoration mb-6"></div>
          <p className="text-navy-900/60 max-w-3xl mx-auto">
            The Indian Government laid down the economic, environmental and social responsibilities of business. These nine principles are categorized into ESG components of Environment, Society and Governance.
          </p>
        </div>
        
        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {principles.map((principle, idx) => (
            <div
              key={idx}
              className={`card-elegant group cursor-default p-7 ${idx % 2 === 0 ? 'bg-gradient-to-br from-navy-900 to-navy-800 border-0' : 'bg-white/60 backdrop-blur-sm border border-primary-200/40'}`}
            >
              <div className="relative z-10 text-center">
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300 inline-block">{principle.icon}</div>
                <div className={`text-sm font-bold mb-2 ${idx % 2 === 0 ? 'text-primary-400/60' : 'text-navy-900/30'}`}>Principle {principle.number}</div>
                <div className={`text-sm font-bold leading-tight ${idx % 2 === 0 ? 'text-primary-100' : 'text-navy-900'}`}>{principle.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment box */}
        <div className="mt-14 max-w-4xl mx-auto card-elegant bg-gradient-to-br from-sky-50/70 to-blue-50/60 backdrop-blur-sm p-8 md:p-10 border border-primary-200/40 animate-fade-in-up">
          <div className="relative z-10 text-center">
            <h3 className="text-xl font-bold text-navy-900 mb-4">Our Commitment to Sustainability</h3>
            <p className="text-navy-900/60 leading-relaxed">
              At Nidhi Sharma & Company, we are certified in Business Responsibility and Sustainability Reporting (BRSR) and help organizations achieve their ESG goals through comprehensive advisory and compliance services.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
