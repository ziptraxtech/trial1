export default function WhoAreWe() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">Who Are We?</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are a team of experts from different domains. We have been serving our clients for 10+ years with satisfactory feasibility. We provide a multitude of professional services including:
            </p>
            <ul className="space-y-3 mb-8">
              {['Accounting Services', 'Outsourcing', 'Goods and Services Tax', 'Income Tax', 'International Tax'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card */}
          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 md:p-12 shadow-2xl hover-lift">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl backdrop-blur-sm">
                  ℨ
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white text-center mb-6">OUR VISION</h3>
              <p className="text-gray-100 text-center leading-relaxed mb-6">
                Accounting and booking are the keys to creating various reports like tax reports, profitability reports, and cash flows.
              </p>
              <p className="text-gray-100 text-center leading-relaxed mb-8">
                Our job is to enable our clients to run their business better with expert personnel by outsourcing their accounting to us.
              </p>
              <div className="pt-8 border-t border-white/20">
                <p className="text-center font-bold text-white text-sm md:text-base">
                  PEOPLE • PLANET • PEACE<br />PROSPERITY • PARTNERSHIP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
