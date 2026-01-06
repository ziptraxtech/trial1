export default function Services() {
  const services = [
    {
      title: 'Audit & Assurance',
      icon: '🔍',
      items: ['Income Tax Audit', 'Internal Audits', 'Stock Audit'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Income Tax Advisory',
      icon: '💼',
      items: ['Corporate Tax Matters', 'Foreign Company Taxation', 'M&A Taxation'],
      color: 'from-gray-600 to-gray-800'
    },
    {
      title: 'BRSR',
      icon: '📊',
      items: ['Employee Responsibility', 'Business Responsibility', 'Environmental Care'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Indirect Tax',
      icon: '📋',
      items: ['Indirect Taxes', 'GST Advisory', 'Tax Litigation'],
      color: 'from-gray-700 to-gray-900'
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-gray-600 text-lg">Comprehensive solutions tailored to your needs</p>
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
                <ul className="space-y-2 text-sm mb-6 text-gray-100">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-lg mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
