import { useState } from 'react'

const overviewServices = [
  { title: 'Cross-Border Advisory', icon: '🌐', description: 'Strategic guidance for international expansion and business setup in India.', color: 'from-navy-700 to-navy-900' },
  { title: 'Auditing', icon: '🔍', description: 'Internal and statutory audits to ensure transparency and compliance.', color: 'from-neutral-brown to-navy-900' },
  { title: 'Direct & Indirect Tax', icon: '💼', description: 'Expert support in GST, income tax, and corporate tax matters.', color: 'from-navy-800 to-navy-900' },
  { title: 'Project & Financial Consultancy', icon: '📊', description: 'Structuring projects, financial planning, and investment advisory.', color: 'from-primary-600 to-primary-800' },
  { title: 'Due Diligence & Risk Assessment', icon: '🔎', description: 'Identifying risks and enabling informed decision-making.', color: 'from-navy-700 to-navy-900' },
  { title: 'Accounting & BPO', icon: '📋', description: 'Reliable financial reporting and streamlined outsourcing solutions for efficiency.', color: 'from-primary-500 to-primary-700' },
  { title: 'Company Law & Registrations', icon: '⚖️', description: 'Assistance with incorporation, compliance, and regulatory filings.', color: 'from-navy-800 to-navy-900' },
  { title: 'International Taxation & FEMA', icon: '🌍', description: 'Specialized consultancy for cross-border transactions and foreign exchange regulations.', color: 'from-neutral-taupe to-neutral-brown' },
]

const detailedServices = [
  {
    id: 'audit',
    title: 'Audit & Assurance',
    icon: '🔍',
    tagline: 'Beyond compliance — strengthening your business foundation.',
    intro: 'Our Audit and Assurance solutions go beyond fulfilling regulatory requirements. We help clients strengthen internal controls, enhance transparency, and align financial reporting with their business objectives.',
    color: 'from-navy-800 to-navy-900',
    offerings: [
      { name: 'Internal Audit', desc: 'Evaluating processes and controls to improve efficiency and risk management.' },
      { name: 'Income Tax Audit', desc: 'Ensuring compliance with statutory tax requirements.' },
      { name: 'GST Audit', desc: 'Comprehensive review of GST records and filings for accuracy and compliance.' },
      { name: 'Stock Audit', desc: 'Independent verification of inventory to safeguard assets and optimize operations.' },
      { name: 'Systems Audit', desc: 'Assessing IT systems and controls for reliability and security.' },
      { name: 'Management Audit', desc: 'Reviewing organizational performance and strategy alignment.' },
      { name: 'Agreed Upon Procedures', desc: 'Customized procedures tailored to client-specific needs.' },
      { name: 'Certification Services', desc: 'Issuing certifications required under various laws and regulations.' },
      { name: 'Special Audits', desc: 'Targeted audits addressing unique business requirements.' },
      { name: 'Statutory Audit (Indian & International GAAP)', desc: 'Ensuring compliance with accounting standards and regulatory frameworks.' },
    ],
  },
  {
    id: 'indirect',
    title: 'Indirect Tax & GST Services',
    icon: '🧾',
    tagline: 'Navigating GST complexities with confidence.',
    intro: 'India\'s GST — designed on the principle of "One Nation, One Tax" — has transformed indirect taxation since July 2017. We provide expert advisory and litigation support to help businesses navigate these complexities.',
    color: 'from-primary-600 to-primary-800',
    offerings: [
      { name: 'Indirect Tax Advisory', desc: 'Transaction planning, opinions on complex matters, drafting replies to departmental notices, and sector-specific GST advisory.' },
      { name: 'GST Compliance & Reporting', desc: 'Filing GSTR-1, GSTR-3B, GSTR-9 and more; ITC reconciliation; registrations; advisory on CGST, SGST, and IGST transactions.' },
      { name: 'Indirect Tax Litigation', desc: 'Representation in Service Tax, Excise Duty, and GST disputes; handling matters before tax authorities and CESTAT.' },
      { name: 'Customs & International Trade', desc: 'Advisory on customs duty, import/export transactions, IGST on imports, and FEMA compliance.' },
    ],
  },
  {
    id: 'direct',
    title: 'Direct Tax Advisory',
    icon: '💼',
    tagline: 'Optimize your tax strategy. Maximize compliance.',
    intro: 'Our Direct Tax Advisory services are designed to help businesses and individuals manage tax obligations efficiently while optimizing financial strategies. We provide comprehensive consultancy across corporate, individual, and international taxation matters.',
    color: 'from-neutral-taupe to-neutral-brown',
    offerings: [
      { name: 'Corporate & Individual Taxation', desc: 'Corporate tax planning and compliance, expatriate taxation, M&A tax strategies, LLP/trust taxation, and NRI advisory.' },
      { name: 'Transfer Pricing', desc: 'Domestic and international transfer pricing studies, reports, and representation before DRP and AAR.' },
      { name: 'TDS/TCS Advisory', desc: 'TAN registration, monthly computation and deposit, certificate issuance, quarterly return filing, and TDS assessments.' },
      { name: 'Compliance & Representation', desc: 'ITR/wealth-tax return preparation and filing, tax authority representation, and NRI-specific planning for Indian assets.' },
      { name: 'Structuring & Planning', desc: 'Investment and organizational structuring for tax efficiency; advisory for trusts and non-profit organizations.' },
    ],
  },
]

function DetailedServiceCard({ service }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-500 card-hover-effect ${open ? 'ring-2 ring-primary-600 shadow-2xl' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full bg-gradient-to-r ${service.color} text-navy-900 px-8 py-6 flex items-center justify-between gap-4 text-left transition-all duration-300 hover:shadow-lg`}
        style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}}
      >
        <div className="flex items-center gap-4">
          <span className="text-4xl transition-transform duration-300 group-hover:scale-110">{service.icon}</span>
          <div>
            <p className="text-xl font-bold text-navy-900">{service.title}</p>
            <p className="text-sm text-neutral-brown mt-1">{service.tagline}</p>
          </div>
        </div>
        <span className={`text-2xl transition-all duration-500 transform ${open ? 'rotate-180' : ''}`}>⌄</span>
      </button>
      {open && (
        <div className="bg-primary-100 px-8 py-7 animate-fadeInUp">
          <p className="text-navy-900 mb-6 leading-relaxed">{service.intro}</p>
          <h4 className="font-bold text-navy-900 mb-4 text-lg">Our Offerings</h4>
          <ul className="space-y-4">
            {service.offerings.map((o, i) => (
              <li key={i} className="flex gap-3 animate-stagger-1" style={{animationDelay: `${i * 0.05}s`, animationFillMode: 'both'}}>
                <span className="mt-1 w-2 h-2 rounded-full bg-navy-900 flex-shrink-0 transition-transform duration-300"></span>
                <div>
                  <span className="font-semibold text-navy-900 hover:text-primary-600 transition-colors duration-300">{o.name}</span>
                  {o.desc && <span className="text-neutral-gray"> — {o.desc}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-primary-100 to-primary-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-navy-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-navy-900 text-lg max-w-3xl mx-auto">
            A comprehensive suite of professional services designed to meet the evolving needs of businesses in India and abroad.
          </p>
        </div>

        {/* Overview grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {overviewServices.map((service, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 text-navy-900 hover-lift shadow-lg hover:shadow-2xl group overflow-hidden relative card-hover-effect animate-stagger-${Math.min(idx % 4, 3) + 1}`}
              style={{
                animationFillMode: 'both',
                animationDelay: `${idx * 0.1}s`
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{service.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-navy-900 text-left">{service.title}</h3>
                <p className="text-sm text-neutral-gray leading-relaxed text-left">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed expandable service sections */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h3 className="text-3xl font-bold text-navy-900 mb-2">Service Deep Dive</h3>
          <p className="text-neutral-gray">Click any service below to explore our detailed offerings</p>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
          {detailedServices.map((service) => (
            <DetailedServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
