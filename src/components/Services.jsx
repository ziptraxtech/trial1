import { Link } from 'react-router-dom'
import { overviewServices } from '../data/servicesData'

const ngrbcPrinciples = [
  { number: 1, title: 'Ethics, Transparency and Accountability' },
  { number: 2, title: 'Safe and Sustainable Goods and Services' },
  { number: 3, title: 'Promote Well-Being of All Employees Including Those in the Value Chains' },
  { number: 4, title: 'Respect for Stakeholders Interests and Responsiveness' },
  { number: 5, title: 'Human Rights' },
  { number: 6, title: 'Environment Protection' },
  { number: 7, title: 'Public Policy' },
  { number: 8, title: 'Inclusive Growth' },
  { number: 9, title: 'Consumer Value' },
]

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-100 to-primary-200"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-500/[0.05] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="section-label mx-auto mb-4">
            <span className="w-2 h-2 bg-navy-900 rounded-full"></span>
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-navy-900/70 text-lg max-w-3xl mx-auto">
            A comprehensive suite of professional services designed to meet the evolving needs of businesses in India and abroad.
          </p>
          <div className="line-decoration mt-6"></div>
        </div>

        {/* Overview grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {overviewServices.map((service, idx) => {
            const animationClass = idx < 6 ? `animate-stagger-${idx + 1}` : 'animate-scale-in'

            return (
              <div
                key={idx}
                className={`card-elegant bg-gradient-to-br from-white/80 to-primary-100/60 p-7 group border border-primary-200/50 ${animationClass}`}
              >
              {service.link ? (
                <Link to={service.link} className="block h-full">
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400 shadow-lg shadow-purple-900/30">
                      {service.icon}
                    </div>
                    <h3 className="text-base font-bold mb-2 text-navy-900">{service.title}</h3>
                    <p className="text-sm text-navy-900/60 leading-relaxed">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-navy-900 mt-4">
                      Explore
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400 shadow-lg shadow-purple-900/30">
                    {service.icon}
                  </div>
                  <h3 className="text-base font-bold mb-2 text-navy-900">{service.title}</h3>
                  <p className="text-sm text-navy-900/60 leading-relaxed">{service.description}</p>
                </div>
              )}
            </div>
            )
          })}
        </div>

        {/* NGRBC Principles */}
        <div className="mt-4">
          <div className="text-center mb-10">
            <div className="section-label mx-auto mb-4">
              <span className="w-2 h-2 bg-navy-900 rounded-full"></span>
              ESG Framework
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-2">NGRBC Principles <span className="text-navy-900/50 font-normal text-lg">(9 ESG Principles)</span></h3>
            <p className="text-navy-900/60 text-base max-w-2xl mx-auto">
              The nine principles in NGRBC are categorized into the ESG components of Environment, Society and Governance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {ngrbcPrinciples.map((p) => (
              <div key={p.number} className="flex items-start gap-4 bg-gradient-to-br from-sky-50/90 to-blue-50/80 border border-primary-200/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow shadow-purple-900/30">
                  {p.number}
                </div>
                <p className="text-sm font-semibold text-navy-900 leading-snug pt-1">Principle {p.number} — {p.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
