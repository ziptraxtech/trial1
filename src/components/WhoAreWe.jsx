export default function WhoAreWe() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-100 to-primary-200"></div>
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-blue-500/[0.05] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/[0.04] rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="section-label mx-auto mb-4">
            <span className="w-2 h-2 bg-navy-900 rounded-full"></span>
            Who We Are
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Us</span>
          </h2>
          <p className="text-navy-900/70 text-lg max-w-2xl mx-auto">A distinguished Chartered Accountancy firm with offices in Delhi and Gurugram</p>
          <div className="line-decoration mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Main About */}
          <div className="animate-fade-in-up card-elegant bg-white/50 backdrop-blur-sm p-8 md:p-12 border border-primary-200/40">
            <div className="relative z-10 space-y-5 text-lg text-navy-900/80 leading-relaxed">
              <p>
                <span className="font-serif-display text-2xl text-navy-900 font-semibold">Nidhi Sharma & Company</span> is a distinguished Chartered Accountancy firm with offices in Delhi and Gurugram. Since 2012, we have been a trusted partner to businesses, government entities, and entrepreneurs, delivering solutions that combine technical expertise with practical insight.
              </p>
              <p>
                We specialize in a wide spectrum of professional services — from Accounting & Auditing and Taxation (Direct & Indirect, including GST) to Project & Financial Consultancy, Business Process Outsourcing, Corporate Law & Registrations, International Taxation & FEMA Advisory, and Mergers & Acquisitions.
              </p>
              <p>
                Our philosophy is simple yet powerful: <strong className="text-navy-900">integrity, commitment, and excellence.</strong> We believe in building long-term relationships by delivering value-driven services that empower our clients to thrive in a dynamic business environment.
              </p>
              <p>
                With a forward-looking approach, we continuously adapt to evolving industry requirements. At Nidhi Sharma & Company, we don't just provide services — <em className="font-serif-display text-navy-900">we craft solutions that create impact.</em>
              </p>
            </div>
          </div>

          {/* Approach & Values */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="animate-slide-in-left card-elegant bg-gradient-to-br from-navy-800 via-navy-700 to-navy-800 p-8 md:p-10 border border-blue-400/30">
              <div className="relative z-10">
                <div className="section-label-light mb-5">
                  <span className="w-2 h-2 bg-primary-50 rounded-full"></span>
                  How We Work
                </div>
                <h3 className="text-2xl font-bold text-primary-50 mb-6">Our Approach</h3>
                <div className="space-y-5">
                  {[
                    { title: 'Client-Centric Strategies', desc: 'Tailored to align with your unique business goals.' },
                    { title: 'Knowledge Integration', desc: 'Combining legal, financial, and corporate expertise for holistic outcomes.' },
                    { title: 'Future-Ready Advisory', desc: 'Staying ahead of regulatory and industry changes to safeguard your growth.' },
                  ].map((item, i) => (
                    <div key={i} className="group flex gap-3 hover:translate-x-1 transition-transform duration-300">
                      <span className="w-1.5 h-1.5 mt-2 bg-primary-400 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                      <div>
                        <p className="font-semibold text-primary-50 text-sm">{item.title}</p>
                        <p className="text-primary-100/80 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right card-elegant bg-white/60 backdrop-blur-sm p-8 md:p-10 border border-primary-200/40">
              <div className="relative z-10">
                <div className="section-label mb-5">
                  <span className="w-2 h-2 bg-navy-900 rounded-full"></span>
                  What Drives Us
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Our Values</h3>
                <div className="space-y-5">
                  {[
                    { title: 'Honesty & Integrity', desc: 'Upholding the highest ethical standards in every engagement.' },
                    { title: 'Commitment & Dedication', desc: 'Delivering excellence without compromise in every assignment.' },
                    { title: 'Professional Aptitude', desc: 'Ensuring sustainable, efficient, and reliable solutions.' },
                    { title: 'Value Creation', desc: 'Adding measurable impact for clients and society.' },
                  ].map((item, i) => (
                    <div key={i} className="group flex gap-3 hover:translate-x-1 transition-transform duration-300">
                      <span className="w-1.5 h-1.5 mt-2 bg-navy-900 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform"></span>
                      <div>
                        <p className="font-semibold text-navy-900 text-sm">{item.title}</p>
                        <p className="text-navy-900/50 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* About Founder */}
          <div className="animate-fade-in-up card-elegant bg-white/50 backdrop-blur-sm p-8 md:p-12 border border-primary-200/40">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="section-label mx-auto mb-3">
                  <span className="w-2 h-2 bg-navy-900 rounded-full"></span>
                  Leadership
                </div>
                <h3 className="text-3xl font-bold text-navy-900 mb-1">About the Founder</h3>
                <p className="text-navy-900 font-semibold text-xl font-serif-display">CA Nidhi Sharma, FCA</p>
                <p className="text-navy-900/40 text-sm font-medium mt-1">B.Com (H) · FCA · DISA · GST · BRSR</p>
              </div>
              <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-start">
                <div className="flex justify-center md:col-span-1">
                  <div className="rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary-200/50">
                    <img 
                      src="/image.png" 
                      alt="CA Nidhi Sharma" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4 text-navy-900/75 leading-relaxed">
                  <p>
                    Nidhi Sharma, a Fellow Member of the Institute of Chartered Accountants of India (ICAI) since 2012, is the driving force behind Nidhi Sharma & Company. She holds specialized certifications in Information System Audit, Goods and Services Tax (GST), and Business Responsibility & Sustainability Reporting (BRSR) from ICAI.
                  </p>
                  <p>
                    With over a decade of experience, Nidhi has been advising diverse industries with her deep expertise and practical insights. Her dynamic approach allows her to quickly understand unique business models and craft tailored solutions that deliver measurable impact.
                  </p>
                  <p>
                    She has collaborated with professionally managed corporates in a consulting capacity and has successfully guided organizations in setting up and operating businesses in India.
                  </p>
                  <p className="text-navy-900 font-medium italic font-serif-display">
                    "Nidhi's vision is rooted in integrity, innovation, and client success — values that continue to shape the firm's journey and reputation."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Facilities Gallery */}
          <div className="animate-fade-in-up">
            <div className="text-center mb-10">
              <div className="section-label mx-auto mb-3">
                <span className="w-2 h-2 bg-navy-900 rounded-full"></span>
                Our Spaces
              </div>
              <h3 className="text-3xl font-bold text-navy-900 mb-2">Our Facilities</h3>
              <p className="text-navy-900/50 font-medium">State-of-the-art infrastructure designed for excellence</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
              {[
                { src: '/Conference.jpg', label: 'Conference Room 1' },
                { src: '/Conference2.jpg', label: 'Conference Room 2' },
                { src: '/hall.jpg', label: 'Meeting Hall' },
                { src: '/Meeting%20room.jpg', label: 'Meeting Room' },
              ].map((img, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={img.src} 
                    alt={img.label} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                    <p className="text-white font-semibold">{img.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
