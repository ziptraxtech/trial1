export default function WhoAreWe() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-primary-100 to-primary-200">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Us</span>
          </h2>
          <p className="text-navy-900 text-lg max-w-2xl mx-auto">A distinguished Chartered Accountancy firm with offices in Delhi and Gurugram</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Main About */}
          <div className="animate-fade-in-up bg-primary-100 rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-lg text-navy-900 leading-relaxed mb-6">
              Nidhi Sharma & Company is a distinguished Chartered Accountancy firm with offices in Delhi and Gurugram. Since 2012, we have been a trusted partner to businesses, government entities, and entrepreneurs, delivering solutions that combine technical expertise with practical insight.
            </p>
            <p className="text-lg text-navy-900 leading-relaxed mb-6">
              We specialize in a wide spectrum of professional services — from Accounting & Auditing and Taxation (Direct & Indirect, including GST) to Project & Financial Consultancy, Business Process Outsourcing, Corporate Law & Registrations, International Taxation & FEMA Advisory, and Mergers & Acquisitions.
            </p>
            <p className="text-lg text-navy-900 leading-relaxed mb-6">
              Our philosophy is simple yet powerful: <strong>integrity, commitment, and excellence.</strong> We believe in building long-term relationships by delivering value-driven services that empower our clients to thrive in a dynamic business environment.
            </p>
            <p className="text-lg text-navy-900 leading-relaxed">
              With a forward-looking approach, we continuously adapt to evolving industry requirements, ensuring that our clients benefit from innovative strategies and reliable professional guidance. At Nidhi Sharma & Company, we don't just provide services — <em>we craft solutions that create impact.</em>
            </p>
          </div>

          {/* Approach & Values */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-slide-in-left bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-8 md:p-10 shadow-2xl hover-lift">
              <h3 className="text-3xl font-bold text-navy-900 mb-6">Our Approach</h3>
              <div className="space-y-5 text-navy-900">
                <div>
                  <p className="font-semibold text-navy-900 mb-1">• Client-Centric Strategies</p>
                  <p className="text-sm text-neutral-brown">Tailored to align with your unique business goals.</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 mb-1">• Knowledge Integration</p>
                  <p className="text-sm text-neutral-brown">Combining legal, financial, and corporate expertise for holistic outcomes.</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 mb-1">• Future-Ready Advisory</p>
                  <p className="text-sm text-neutral-brown">Staying ahead of regulatory and industry changes to safeguard your growth.</p>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 md:p-10 shadow-2xl hover-lift">
              <h3 className="text-3xl font-bold text-navy-900 mb-6">Our Values</h3>
              <div className="space-y-5 text-navy-900">
                <div>
                  <p className="font-semibold text-navy-900 mb-1">• Honesty & Integrity</p>
                  <p className="text-sm text-neutral-brown">Upholding the highest ethical standards in every engagement.</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 mb-1">• Commitment & Dedication</p>
                  <p className="text-sm text-neutral-brown">Delivering excellence without compromise in every assignment.</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 mb-1">• Professional Aptitude</p>
                  <p className="text-sm text-neutral-brown">Ensuring sustainable, efficient, and reliable solutions.</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-900 mb-1">• Value Creation</p>
                  <p className="text-sm text-neutral-brown">Adding measurable impact for clients and society.</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Founder */}
          <div className="animate-fade-in-up bg-primary-100 rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-navy-900 mb-2 text-center">About the Founder</h3>
            <p className="text-center text-navy-900 font-semibold text-xl mb-1">CA Nidhi Sharma, FCA</p>
            <p className="text-center text-neutral-brown font-medium mb-2">Founder</p>
            <p className="text-center text-neutral-gray text-sm mb-8">B.Com (H) | FCA | DISA | GST | BRSR</p>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center md:col-span-1">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/image.png" 
                    alt="CA Nidhi Sharma" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-2 space-y-5 text-lg text-navy-900 leading-relaxed">
              <p>
                Nidhi Sharma, a Fellow Member of the Institute of Chartered Accountants of India (ICAI) since 2012, is the driving force behind Nidhi Sharma & Company. She holds specialized certifications in Information System Audit, Goods and Services Tax (GST), and Business Responsibility & Sustainability Reporting (BRSR) from ICAI, reflecting her commitment to continuous learning and excellence.
              </p>
              <p>
                With over a decade of experience, Nidhi has been advising diverse industries with her deep expertise and practical insights. Her dynamic approach allows her to quickly understand the unique business models of her clients and craft tailored solutions that deliver measurable impact.
              </p>
              <p>
                She has collaborated with professionally managed corporates in a consulting capacity and has successfully guided organizations in setting up and operating businesses in India. Her proficiency spans corporate affairs, taxation, compliance, and strategic advisory — making her a trusted partner for enterprises navigating complex regulatory and financial landscapes.
              </p>
              <p className="text-navy-900 font-medium">
                Nidhi's vision is rooted in integrity, innovation, and client success — values that continue to shape the firm's journey and reputation.
              </p>
              </div>
            </div>
          </div>

          {/* Office Facilities Gallery */}
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold text-navy-900 mb-2 text-center">Our Facilities</h3>
            <p className="text-center text-neutral-brown font-medium mb-12">State-of-the-art infrastructure designed for excellence</p>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover-lift">
                <img 
                  src="/Photo/Conference.jpg" 
                  alt="Conference Room 1" 
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">Conference Room 1</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover-lift">
                <img 
                  src="/Photo/Conference2.jpg" 
                  alt="Conference Room 2" 
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">Conference Room 2</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover-lift">
                <img 
                  src="/Photo/hall.jpg" 
                  alt="Meeting Hall" 
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">Meeting Hall</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-xl hover-lift">
                <img 
                  src="/Photo/Meeting room.jpg" 
                  alt="Meeting Room" 
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">Meeting Room</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-primary-100 to-primary-200 rounded-2xl p-8 text-center">
              <p className="text-navy-900 text-lg">
                Our Delhi and Gurugram offices are equipped with modern facilities to provide our clients with a professional and collaborative environment for consultations and strategic discussions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
