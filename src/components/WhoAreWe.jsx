export default function WhoAreWe() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">About Us</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Main About Section */}
          <div className="animate-fade-in-up bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nidhi Sharma & Company is one of the leading firms of Chartered Accountants, Gurugram, India. We are known for providing satisfied services to various business houses including government companies since 2012. We are providing comprehensive professional services in the areas of Cross border advisory, Accounting & Auditing Services, Direct and Indirect Tax compliance and consultancy, Project & Financial Consultancy, Due diligence, risk assessment, business process outsourcing services, company law matters and assistance in registration under various laws, International Taxation Consultancy, FEMA matters, etc. We bring together an international network of professionals from diverse fields—legal, accounting, and corporate advisory—to deliver holistic solutions that empower brands to thrive across borders.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Firm's constant endeavor is to craft a premier focused professional practice providing high quality services and integrating value added knowledge, for its clients and society. Keeping pace with changing requirements of business and industry, the firm is well geared to take up assignments in diversified areas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Honesty, Commitment, dedication and integrity combined with the highest professional and personal standards form the cornerstone of all activities of the firm. Our strategic priorities are focused on delivering value to its clients through the achievement of sustainable, efficient and reliable professional aptitude.
            </p>
          </div>

          {/* Our Approach & Values Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Our Approach */}
            <div className="animate-slide-in-left bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-10 shadow-2xl hover-lift">
              <h3 className="text-3xl font-bold text-white mb-6">Our Approach</h3>
              <div className="space-y-4 text-gray-100">
                <div>
                  <p className="font-semibold text-white mb-2">• Client-Centric Solutions</p>
                  <p className="text-sm">Tailored strategies that align with your business goals.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">• Knowledge Integration</p>
                  <p className="text-sm">Combining legal, financial, and corporate expertise for holistic outcomes.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">• Future-Ready Advisory</p>
                  <p className="text-sm">Staying ahead of regulatory and industry changes to safeguard your growth.</p>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="animate-slide-in-right bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-8 md:p-10 shadow-2xl hover-lift">
              <h3 className="text-3xl font-bold text-white mb-6">Our Values</h3>
              <div className="space-y-4 text-gray-100">
                <div>
                  <p className="font-semibold text-white mb-2">• Honesty & Integrity</p>
                  <p className="text-sm">Upholding the highest ethical standards.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">• Commitment & Dedication</p>
                  <p className="text-sm">Delivering excellence in every assignment.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">• Professional Aptitude</p>
                  <p className="text-sm">Ensuring sustainable, efficient, and reliable solutions.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">• Value Creation</p>
                  <p className="text-sm">Adding measurable impact for clients and society.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="animate-fade-in-up bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Leadership</h3>
            <div className="max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-blue-600 mb-4">About Founder - Nidhi Sharma, FCA</h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Nidhi Sharma is a fellow member of the Institute of Chartered Accountants of India (ICAI) since 2012. She is also certified Information System Audit, Goods and Service Tax (GST) and Business Responsibility and Sustainability Reporting (BRSR) expert from ICAI. She is advising varied industries with her expert knowledge since the first day of her qualification. She is dynamic in understanding business model of her clients and providing them unique solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                She has worked with professionally managed corporates in capacity as a consultant. She has experience of handling corporate affairs in different areas. She has helped many organizations to set up business in India and operating it smoothly.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="animate-fade-in-up bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Choose Us</h3>
            <p className="text-lg text-gray-700 text-center mb-8">
              We are group of experienced experts who enhance their business.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <p className="text-gray-700">A new and proactive way to deal with their records and duty arranging</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">🤝</div>
                <p className="text-gray-700">A cordial and individual assistance</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">💡</div>
                <p className="text-gray-700">Creative answers for prerequisites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
