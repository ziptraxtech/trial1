import { Link, useParams } from 'react-router-dom'
import { detailedServices } from '../data/servicesData'
import NotFoundPage from './NotFoundPage'

const SetupAdvisoryContent = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">Types of Business Entities</h3>
      <p className="text-navy-900/70 mb-4">Broadly, there are the following ways of setting up business in India which are as follows:</p>
      <ul className="space-y-3 text-navy-900/70">
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 mt-2 bg-navy-900 rounded-full flex-shrink-0"></span>
          <span>India Company as (i) Private Limited or (ii) Public Limited Company under the provisions of Companies Act, 2013</span>
        </li>
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 mt-2 bg-navy-900 rounded-full flex-shrink-0"></span>
          <span>Joint Venture, Wholly Owned Subsidiary</span>
        </li>
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 mt-2 bg-navy-900 rounded-full flex-shrink-0"></span>
          <span>Foreign Company as per RBI guidelines and provisions of Companies Act, 2013</span>
        </li>
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 mt-2 bg-navy-900 rounded-full flex-shrink-0"></span>
          <span>Liaison Office: To represent the parent company in India</span>
        </li>
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 mt-2 bg-navy-900 rounded-full flex-shrink-0"></span>
          <span>Branch Office: To undertake activities such as Export, Import, research, consultancy etc.</span>
        </li>
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 mt-2 bg-navy-900 rounded-full flex-shrink-0"></span>
          <span>Project office: Activities as per contract to execute project</span>
        </li>
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 mt-2 bg-navy-900 rounded-full flex-shrink-0"></span>
          <span>Limited Liability Partnership under the provisions of Limited Liability Partnership Act, 2008</span>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">Key Requirements & Considerations</h3>
      <div className="space-y-3 text-navy-900/70">
        <div className="bg-navy-900/5 p-4 rounded-lg">
          <p className="font-semibold text-navy-900 mb-2">Resident Director</p>
          <p className="text-sm">Sec 149(3) - Every company should have at least one director who has stayed in India for a total period of not less than 182 days in the financial year. He/She can be foreign National.</p>
        </div>
        <div className="bg-navy-900/5 p-4 rounded-lg">
          <p className="font-semibold text-navy-900 mb-2">Foreign Nationals & Equity</p>
          <p className="text-sm">Foreign nationals can incorporate company in India and hold foreign equity to the extent of 100%, which is dependent upon sector in which company will operate and is subject to approval from either Reserve Bank of India (RBI) or Foreign Investment Promotion Board (FIPB)</p>
        </div>
        <div className="bg-navy-900/5 p-4 rounded-lg">
          <p className="font-semibold text-navy-900 mb-2">Board Composition</p>
          <p className="text-sm">Company may appoint more than fifteen directors after passing a special resolution, further provided that such class or classes of companies as may be prescribed, shall have at least one woman director (Rule 3 of The Companies (Appointment and Qualification of Directors) Rules, 2014)</p>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">Liaison Office in India</h3>
      <p className="text-navy-900/70 text-sm leading-relaxed">Setting up a liaison or representative office ("LO") is a common practice for foreign companies seeking to enter the Indian market. The role of such offices is limited to collecting information about the possible market and to providing information about the company and its products to prospective Indian customers. It cannot undertake any commercial activities and must only use remittances received from its parent foreign company to maintain itself.</p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">Branch Office in India</h3>
      <p className="text-navy-900/70 text-sm leading-relaxed">As a Branch Office ("BO") in India, foreign companies can conduct full-fledged business in India. BO can carry the same or substantially the same trading activities as carried out by their parent or group companies. However, BO is not allowed to directly carry out manufacturing activities though it is permitted to sub-contract these services to an Indian manufacturer.</p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">Eligibility Criteria</h3>
      <div className="space-y-3 text-navy-900/70 text-sm">
        <div className="bg-navy-900/5 p-4 rounded-lg">
          <p className="font-semibold text-navy-900 mb-1">Profit Making Track Record</p>
          <p><strong>Branch Office:</strong> Immediately preceding 5 financial years</p>
          <p><strong>Liaison Office:</strong> Immediately preceding 3 financial years</p>
        </div>
        <div className="bg-navy-900/5 p-4 rounded-lg">
          <p className="font-semibold text-navy-900 mb-1">Net Worth</p>
          <p><strong>Branch Office:</strong> &gt; USD 100,000 or equivalent</p>
          <p><strong>Liaison Office:</strong> &gt; USD 50,000 or equivalent</p>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">Time Period & Validity</h3>
      <ul className="space-y-2 text-navy-900/70 text-sm">
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 mt-1.5 bg-navy-900 rounded-full flex-shrink-0"></span>
          <span>It generally takes 45 days to register an LO / BO.</span>
        </li>
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 mt-1.5 bg-navy-900 rounded-full flex-shrink-0"></span>
          <span>Validity for setting up of Liaison Office for companies in the business of construction & development and Non-Banking Finance Companies (NBFCs) has been set for two years. The validity of setting up of LO in rest all of the cases is for 3 years. Renewal is required after 3 years.</span>
        </li>
        <li className="flex gap-3">
          <span className="w-1.5 h-1.5 mt-1.5 bg-navy-900 rounded-full flex-shrink-0"></span>
          <span>In case of BO, renewal of registration is generally not required but in some cases RBI gives approval for 2-3 years and renewal is required post that.</span>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">Validity of Approval & Office Setup</h3>
      <p className="text-navy-900/70 text-sm leading-relaxed mb-3">After the approval, LO/BO shall establish the office within six months. The approval shall elapse, in case the office is not set up in six months. Companies looking for any further extension of time shall require prior approval of RBI.</p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">Shifting of Office</h3>
      <p className="text-navy-900/70 text-sm leading-relaxed mb-3">AD banks are now authorized to grant approval to shift office to another city in India. In case the office change is within the same city, no such approval shall be required. Only filing of an intimation of the new address with the AD bank would be required.</p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">Name Change</h3>
      <p className="text-navy-900/70 text-sm leading-relaxed">AD bank may permit change in name of LO/BO if there is no change in the ownership of foreign company. However if the change in name is due to merger/acquisition/change in ownership of the parent company, then the closing of existing LO/BO shall be required. Also, fresh approval would be required for the same.</p>
    </div>
  </div>
)

const BRSRContent = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">Background & Framework</h3>
      <p className="text-navy-900/70 text-sm leading-relaxed mb-4">The Indian Government in 2007 laid down the economic, environmental and social responsibilities of the business, and the expected practices of good governance system as a ten-point charter that covered all elements related to employees, customers, environment, society, equality, corruption, skill development, and innovation. These ten points were the foundation on which the policy development in the country was spearheaded resulting in the National Voluntary Guidelines.</p>
    </div>

    <div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">Ten-Point Charter Principles</h3>
      <ol className="space-y-2 text-navy-900/70 text-sm">
        <li className="flex gap-3">
          <span className="font-semibold text-navy-900 flex-shrink-0">1.</span>
          <span><strong>Responsibility toward employees</strong> — Have a healthy respect for your workers and invest in their welfare</span>
        </li>
        <li className="flex gap-3">
          <span className="font-semibold text-navy-900 flex-shrink-0">2.</span>
          <span><strong>Responsibility toward businesses</strong> — Corporate social responsibility must not be defined by tax planning strategies alone; it has to extend towards fulfilling their obligations to environment</span>
        </li>
        <li className="flex gap-3">
          <span className="font-semibold text-navy-900 flex-shrink-0">3.</span>
          <span><strong>Responsibility as an equal opportunity employer</strong> — Industry must be proactive in offering employment to the less privileged, at all levels of the job ladder</span>
        </li>
        <li className="flex gap-3">
          <span className="font-semibold text-navy-900 flex-shrink-0">4.</span>
          <span><strong>Responsibility as an economic equalizer</strong> — Resist excessive remuneration to promoters and senior executives, and discourage conspicuous consumption</span>
        </li>
        <li className="flex gap-3">
          <span className="font-semibold text-navy-900 flex-shrink-0">5.</span>
          <span><strong>Responsibility toward skill development</strong> — Invest in people and in their skills</span>
        </li>
        <li className="flex gap-3">
          <span className="font-semibold text-navy-900 flex-shrink-0">6.</span>
          <span><strong>Responsibility as a 'fair-competition' player</strong> — Desist from non-competitive behaviour</span>
        </li>
        <li className="flex gap-3">
          <span className="font-semibold text-navy-900 flex-shrink-0">7.</span>
          <span><strong>Responsibility toward the environment</strong> — Invest in environment-friendly technologies</span>
        </li>
        <li className="flex gap-3">
          <span className="font-semibold text-navy-900 flex-shrink-0">8.</span>
          <span><strong>Responsibility toward social and market innovation</strong> — Promote enterprise and innovation, within your firms and outside</span>
        </li>
        <li className="flex gap-3">
          <span className="font-semibold text-navy-900 flex-shrink-0">9.</span>
          <span><strong>Responsibility toward anti-corruption agenda</strong> — Fight corruption at all levels</span>
        </li>
        <li className="flex gap-3">
          <span className="font-semibold text-navy-900 flex-shrink-0">10.</span>
          <span><strong>Responsibility toward consumers</strong> — Promote socially responsible media and finance socially responsible advertising</span>
        </li>
      </ol>
    </div>

    <div>
      <h3 className="text-xl font-bold text-navy-900 mb-3">NGRBC Principles (9 ESG Principles)</h3>
      <p className="text-navy-900/70 text-sm leading-relaxed mb-4">The nine principles in NGRBC are categorized into the ESG components of Environment, Society and Governance:</p>
      <div className="space-y-2">
        <div className="bg-navy-900/5 p-3 rounded-lg">
          <p className="font-semibold text-navy-900">PRINCIPLE 1 — ETHICS, TRANSPARENCY AND ACCOUNTABILITY</p>
        </div>
        <div className="bg-navy-900/5 p-3 rounded-lg">
          <p className="font-semibold text-navy-900">PRINCIPLE 2 — SAFE AND SUSTAINABLE GOODS AND SERVICES</p>
        </div>
        <div className="bg-navy-900/5 p-3 rounded-lg">
          <p className="font-semibold text-navy-900">PRINCIPLE 3 — PROMOTE WELL-BEING OF ALL EMPLOYEES INCLUDING THOSE IN THE VALUE CHAINS</p>
        </div>
        <div className="bg-navy-900/5 p-3 rounded-lg">
          <p className="font-semibold text-navy-900">PRINCIPLE 4 — RESPECT FOR STAKEHOLDERS INTERESTS AND RESPONSIVENESS</p>
        </div>
        <div className="bg-navy-900/5 p-3 rounded-lg">
          <p className="font-semibold text-navy-900">PRINCIPLE 5 — HUMAN RIGHTS</p>
        </div>
        <div className="bg-navy-900/5 p-3 rounded-lg">
          <p className="font-semibold text-navy-900">PRINCIPLE 6 — ENVIRONMENT PROTECTION</p>
        </div>
        <div className="bg-navy-900/5 p-3 rounded-lg">
          <p className="font-semibold text-navy-900">PRINCIPLE 7 — PUBLIC POLICY</p>
        </div>
        <div className="bg-navy-900/5 p-3 rounded-lg">
          <p className="font-semibold text-navy-900">PRINCIPLE 8 — INCLUSIVE GROWTH</p>
        </div>
        <div className="bg-navy-900/5 p-3 rounded-lg">
          <p className="font-semibold text-navy-900">PRINCIPLE 9 — CONSUMER VALUE</p>
        </div>
      </div>
    </div>

    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
      <p className="text-sm text-blue-900"><strong>Note:</strong> At Nidhi Sharma & Company, we are certified in Business Responsibility and Sustainability Reporting (BRSR) and help organizations achieve their ESG goals through comprehensive advisory and compliance services aligned with NGRBC principles.</p>
    </div>
  </div>
)

export default function ServiceDetailPage() {
  const { serviceSlug } = useParams()
  const service = detailedServices.find((item) => item.slug === serviceSlug)

  if (!service) {
    return <NotFoundPage />
  }

  return (
    <div className="pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-100 to-primary-200"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-500/[0.05] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="section-label mx-auto mb-4">
              <span className="w-2 h-2 bg-navy-900 rounded-full"></span>
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="gradient-text">{service.title}</span>
            </h1>
            <p className="text-navy-900/70 text-lg">{service.tagline}</p>
            <div className="line-decoration mt-6"></div>
          </div>

          <div className="card-elegant bg-white/60 backdrop-blur-sm p-8 md:p-10 border border-primary-200/40 space-y-6">
            <p className="text-navy-900/70 leading-relaxed">{service.intro}</p>

            {service.slug === 'setup-advisory' ? (
              <SetupAdvisoryContent />
            ) : service.slug === 'brsr-sustainability' ? (
              <BRSRContent />
            ) : (
              <div>
                <p className="font-bold text-navy-900 mb-4 text-sm uppercase tracking-wider">Our Offerings</p>
                <ul className="space-y-3">
                  {service.offerings.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-navy-900 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-navy-900">{item.name}</span>
                        {item.desc && <span className="text-navy-900/60"> — {item.desc}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border-2 border-navy-900/20 text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-navy-900/5 transition-all duration-300"
              >
                Back to Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-purple-900/30 hover:shadow-purple-600/40 hover:shadow-2xl transition-all duration-400 hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
