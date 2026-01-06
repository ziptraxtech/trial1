export default function Services() {
  const services = [
    {
      title: 'Cross-Border Advisory',
      icon: '🌐',
      description: 'Helping companies expand internationally with compliance and strategic guidance, set up business in India',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Auditing',
      icon: '🔍',
      description: 'Internal and statutory audits, Income Tax Audit, GST Audit, Stock Audit, Systems Audit, Management Audit',
      color: 'from-gray-600 to-gray-800'
    },
    {
      title: 'Direct & Indirect Tax Consultancy',
      icon: '💼',
      description: 'Expert support in GST, income tax, and corporate tax compliance',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Project & Financial Consultancy',
      icon: '📊',
      description: 'Structuring projects, financial planning, and investment advisory',
      color: 'from-gray-700 to-gray-900'
    },
    {
      title: 'Due Diligence & Risk Assessment',
      icon: '🔎',
      description: 'Identifying risks and ensuring informed decision-making',
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: 'Accounting & BPO',
      icon: '📋',
      description: 'Transparent, reliable financial reporting, Streamlined outsourcing solutions for efficiency and cost-effectiveness',
      color: 'from-gray-600 to-gray-900'
    },
    {
      title: 'Company Law & Registrations',
      icon: '⚖️',
      description: 'Assistance with incorporation, compliance, and regulatory filings',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'International Taxation & FEMA',
      icon: '🌍',
      description: 'Specialized advisory for cross-border transactions and foreign exchange regulations',
      color: 'from-gray-700 to-gray-900'
    },
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-gray-600 text-lg">Comprehensive suite of professional services designed to meet the evolving needs of businesses in India and abroad</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 text-white hover-lift shadow-lg hover:shadow-2xl group overflow-hidden relative`}
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-300"></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-sm text-gray-100 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
