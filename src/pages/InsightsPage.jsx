export default function InsightsPage() {
  return (
    <div className="pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-100 to-primary-200"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/[0.05] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-14 animate-fade-in-up">
            <div className="section-label mx-auto mb-4">
              <span className="w-2 h-2 bg-navy-900 rounded-full"></span>
              Insights
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Setup Advisory</span>
            </h1>
            <p className="text-navy-900/70 text-lg max-w-3xl mx-auto">
              Practical guidance for establishing and scaling business operations in India with clarity, compliance, and confidence.
            </p>
            <div className="line-decoration mt-6"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-10">
            <div className="card-elegant bg-white/60 backdrop-blur-sm p-8 md:p-10 border border-primary-200/40">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Types of Business Entities in India</h2>
              <ul className="space-y-3 text-navy-900/70">
                <li>Private Limited or Public Limited Company under the Companies Act, 2013.</li>
                <li>Joint Venture or Wholly Owned Subsidiary structures.</li>
                <li>Foreign Company registered under RBI guidelines and the Companies Act, 2013.</li>
                <li>Liaison Office to represent the parent company in India.</li>
                <li>Branch Office for trading, export, import, research, and consultancy activities.</li>
                <li>Project Office to execute project-specific contracts.</li>
                <li>Limited Liability Partnership under the LLP Act, 2008.</li>
              </ul>
            </div>

            <div className="card-elegant bg-white/60 backdrop-blur-sm p-8 md:p-10 border border-primary-200/40">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Key Requirements and Considerations</h2>
              <ul className="space-y-3 text-navy-900/70">
                <li>Resident Director: Every company must have at least one director who has stayed in India for 182 days or more in a financial year. A foreign national can serve in this role.</li>
                <li>Foreign ownership can be up to 100 percent depending on the sector and subject to RBI or FIPB approvals.</li>
                <li>Companies may appoint more than fifteen directors after passing a special resolution. Certain classes of companies must appoint at least one woman director under Rule 3 of the Companies Rules, 2014.</li>
              </ul>
            </div>

            <div className="card-elegant bg-white/60 backdrop-blur-sm p-8 md:p-10 border border-primary-200/40">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Liaison Office and Branch Office Overview</h2>
              <div className="space-y-6 text-navy-900/70">
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">Liaison Office in India</h3>
                  <p>
                    A liaison office represents the parent company in India. It may collect market information and share company or product details with potential customers. It cannot undertake commercial activities and must rely on remittances from the parent entity.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">Branch Office in India</h3>
                  <p>
                    A branch office can conduct full business activities similar to the parent company. It cannot manufacture directly but may subcontract manufacturing to an Indian entity.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-elegant bg-white/60 backdrop-blur-sm p-8 md:p-10 border border-primary-200/40">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Eligibility, Timelines, and Validity</h2>
              <ul className="space-y-3 text-navy-900/70">
                <li>Net worth is calculated as paid-up capital plus free reserves minus intangible assets, based on the latest audited statements.</li>
                <li>Typical registration timeline for a Liaison or Branch Office is about 45 days.</li>
                <li>Validity for Liaison Offices in construction, development, and NBFCs is two years. Other cases are typically three years with renewal required.</li>
                <li>Branch Office approvals are usually not time-bound, but RBI may grant approvals for two to three years with renewal requirements.</li>
                <li>After approval, the office must be established within six months unless RBI grants an extension.</li>
                <li>Shifting offices to another city requires AD bank approval. Within the same city, only an intimation is required.</li>
                <li>Name changes are allowed if ownership remains unchanged. Mergers or ownership changes require closure and fresh approval.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
