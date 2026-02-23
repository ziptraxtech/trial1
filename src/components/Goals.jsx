export default function Goals() {
  const principles = [
    { number: '1', title: 'ETHICS, TRANSPARENCY & ACCOUNTABILITY', color: 'from-navy-800 to-navy-900', icon: '⚖️' },
    { number: '2', title: 'SAFE & SUSTAINABLE GOODS', color: 'from-primary-600 to-primary-700', icon: '🌱' },
    { number: '3', title: 'EMPLOYEE WELL-BEING', color: 'from-navy-700 to-navy-800', icon: '👥' },
    { number: '4', title: 'STAKEHOLDER INTERESTS', color: 'from-primary-700 to-primary-800', icon: '🤝' },
    { number: '5', title: 'HUMAN RIGHTS', color: 'from-navy-800 to-navy-900', icon: '✊' },
    { number: '6', title: 'ENVIRONMENT PROTECTION', color: 'from-primary-600 to-primary-700', icon: '🌍' },
    { number: '7', title: 'PUBLIC POLICY', color: 'from-navy-900 to-navy-800', icon: '📜' },
    { number: '8', title: 'INCLUSIVE GROWTH', color: 'from-primary-500 to-primary-600', icon: '📈' },
    { number: '9', title: 'CONSUMER VALUE', color: 'from-navy-700 to-navy-800', icon: '💎' },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-primary-100 to-primary-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-0 w-96 h-96 bg-navy-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Business Responsibility & Sustainability Reporting</span>
          </h2>
          <p className="text-navy-900 text-lg mb-8">Nine NGRBC Principles for ESG Compliance</p>
          <p className="text-navy-900 max-w-4xl mx-auto">
            The Indian Government laid down the economic, environmental and social responsibilities of business, and expected practices of good governance. These nine principles are categorized into ESG components of Environment, Society and Governance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((principle, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${principle.color} rounded-2xl p-8 text-navy-900 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl cursor-pointer group card-hover-effect animate-stagger-${Math.min(idx % 4, 3) + 1}`}
              style={{
                animationFillMode: 'both',
                animationDelay: `${idx * 0.08}s`
              }}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300 text-center inline-block w-full">{principle.icon}</div>
              <div className="text-xl font-bold mb-3 opacity-90 text-center text-navy-900">{principle.number}</div>
              <div className="text-sm font-bold leading-tight text-center text-navy-900 hover:text-navy-700 transition-colors duration-300">{principle.title}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-primary-100 rounded-2xl p-8 md:p-12 card-hover-effect shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center hover:text-primary-600 transition-colors duration-300">Our Commitment to Sustainability</h3>
          <p className="text-navy-900 text-center leading-relaxed transition-colors duration-300">
            At Nidhi Sharma & Company, we are certified in Business Responsibility and Sustainability Reporting (BRSR) and help organizations achieve their ESG goals through comprehensive advisory and compliance services.
          </p>
        </div>
      </div>
    </section>
  )
}
