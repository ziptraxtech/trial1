export default function Goals() {
  const principles = [
    { number: '1', title: 'ETHICS, TRANSPARENCY & ACCOUNTABILITY', color: 'from-blue-600 to-blue-700', icon: '⚖️' },
    { number: '2', title: 'SAFE & SUSTAINABLE GOODS', color: 'from-green-600 to-green-700', icon: '🌱' },
    { number: '3', title: 'EMPLOYEE WELL-BEING', color: 'from-purple-600 to-purple-700', icon: '👥' },
    { number: '4', title: 'STAKEHOLDER INTERESTS', color: 'from-orange-600 to-orange-700', icon: '🤝' },
    { number: '5', title: 'HUMAN RIGHTS', color: 'from-red-600 to-red-700', icon: '✊' },
    { number: '6', title: 'ENVIRONMENT PROTECTION', color: 'from-green-700 to-green-800', icon: '🌍' },
    { number: '7', title: 'PUBLIC POLICY', color: 'from-blue-700 to-blue-800', icon: '📜' },
    { number: '8', title: 'INCLUSIVE GROWTH', color: 'from-indigo-600 to-indigo-700', icon: '📈' },
    { number: '9', title: 'CONSUMER VALUE', color: 'from-pink-600 to-pink-700', icon: '💎' },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Business Responsibility & Sustainability Reporting</span>
          </h2>
          <p className="text-gray-600 text-lg mb-8">Nine NGRBC Principles for ESG Compliance</p>
          <p className="text-gray-600 max-w-4xl mx-auto">
            The Indian Government laid down the economic, environmental and social responsibilities of business, and expected practices of good governance. These nine principles are categorized into ESG components of Environment, Society and Governance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((principle, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${principle.color} rounded-2xl p-8 text-white transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer group`}
            >
              <div className="text-5xl mb-4 group-hover:animate-bounce text-center">{principle.icon}</div>
              <div className="text-xl font-bold mb-3 opacity-90 text-center">PRINCIPLE {principle.number}</div>
              <div className="text-sm font-bold leading-tight text-center">{principle.title}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-blue-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Commitment to Sustainability</h3>
          <p className="text-gray-700 text-center leading-relaxed">
            At Nidhi Sharma & Company, we are certified in Business Responsibility and Sustainability Reporting (BRSR) and help organizations achieve their ESG goals through comprehensive advisory and compliance services.
          </p>
        </div>
      </div>
    </section>
  )
}
