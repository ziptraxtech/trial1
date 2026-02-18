export default function WhoAreWe() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Us</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">A distinguished Chartered Accountancy firm with offices in Delhi and Gurugram</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Main About */}
          <div className="animate-fade-in-up bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nidhi Sharma & Company is a distinguished Chartered Accountancy firm with offices in Delhi and Gurugram. Since 2012, we have been a trusted partner to businesses, government entities, and entrepreneurs, delivering solutions that combine technical expertise with practical insight.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We specialize in a wide spectrum of professional services — from Accounting & Auditing and Taxation (Direct & Indirect, including GST) to Project & Financial Consultancy, Business Process Outsourcing, Corporate Law & Registrations, International Taxation & FEMA Advisory, and Mergers & Acquisitions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our philosophy is simple yet powerful: <strong>integrity, commitment, and excellence.</strong> We believe in building long-term relationships by delivering value-driven services that empower our clients to thrive in a dynamic business environment.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a forward-looking approach, we continuously adapt to evolving industry requirements, ensuring that our clients benefit from innovative strategies and reliable professional guidance. At Nidhi Sharma & Company, we don't just provide services — <em>we craft solutions that create impact.</em>
            </p>
          </div>

          {/* Approach & Values */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-slide-in-left bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-10 shadow-2xl hover-lift">
              <h3 className="text-3xl font-bold text-white mb-6">Our Approach</h3>
              <div className="space-y-5 text-gray-100">
                <div>
                  <p className="font-semibold text-white mb-1">• Client-Centric Strategies</p>
                  <p className="text-sm">Tailored to align with your unique business goals.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">• Knowledge Integration</p>
                  <p className="text-sm">Combining legal, financial, and corporate expertise for holistic outcomes.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">• Future-Ready Advisory</p>
                  <p className="text-sm">Staying ahead of regulatory and industry changes to safeguard your growth.</p>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-8 md:p-10 shadow-2xl hover-lift">
              <h3 className="text-3xl font-bold text-white mb-6">Our Values</h3>
              <div className="space-y-5 text-gray-100">
                <div>
                  <p className="font-semibold text-white mb-1">• Honesty & Integrity</p>
                  <p className="text-sm">Upholding the highest ethical standards in every engagement.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">• Commitment & Dedication</p>
                  <p className="text-sm">Delivering excellence without compromise in every assignment.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">• Professional Aptitude</p>
                  <p className="text-sm">Ensuring sustainable, efficient, and reliable solutions.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">• Value Creation</p>
                  <p className="text-sm">Adding measurable impact for clients and society.</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Founder */}
          <div className="animate-fade-in-up bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">About the Founder</h3>
            <p className="text-center text-blue-600 font-semibold mb-8">Nidhi Sharma, FCA</p>
            <div className="max-w-4xl mx-auto space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                Nidhi Sharma, a Fellow Member of the Institute of Chartered Accountants of India (ICAI) since 2012, is the driving force behind Nidhi Sharma & Company. She holds specialized certifications in Information System Audit, Goods and Services Tax (GST), and Business Responsibility & Sustainability Reporting (BRSR) from ICAI, reflecting her commitment to continuous learning and excellence.
              </p>
              <p>
                With over a decade of experience, Nidhi has been advising diverse industries with her deep expertise and practical insights. Her dynamic approach allows her to quickly understand the unique business models of her clients and craft tailored solutions that deliver measurable impact.
              </p>
              <p>
                She has collaborated with professionally managed corporates in a consulting capacity and has successfully guided organizations in setting up and operating businesses in India. Her proficiency spans corporate affairs, taxation, compliance, and strategic advisory — making her a trusted partner for enterprises navigating complex regulatory and financial landscapes.
              </p>
              <p className="text-blue-700 font-medium">
                Nidhi's vision is rooted in integrity, innovation, and client success — values that continue to shape the firm's journey and reputation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
