export default function FounderNote() {
  return (
    <section id="founder" className="section-padding bg-gradient-to-b from-primary-100 to-primary-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-navy-900 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Founder's Note</span>
          </h2>
          <p className="text-neutral-brown text-lg">A message from our founding partner</p>
        </div>

        <div className="animate-fade-in-up bg-primary-100 rounded-3xl shadow-xl hover:shadow-2xl card-hover-effect overflow-hidden transition-all duration-500">
          {/* Quote bar */}
          <div className="bg-gradient-to-r from-navy-800 to-navy-900 px-8 py-4 flex items-center gap-3 hover:from-navy-700 hover:to-navy-800 transition-all duration-300">
            <span className="text-primary-100/60 text-5xl leading-none font-serif animate-bounce">❝</span>
            <p className="text-primary-100/90 text-sm font-medium uppercase tracking-widest">Message from Nidhi Sharma, FCA</p>
          </div>

          <div className="px-8 md:px-14 py-10 space-y-6 text-navy-900 text-lg leading-relaxed hover:text-navy-800 transition-colors duration-300">
            <p className="hover:translate-x-2 transition-transform duration-300">
              At Nidhi Sharma & Company, our mission has always been to deliver more than just compliance — we strive to be <strong>partners in progress.</strong> Since the beginning of my journey as a Chartered Accountant, I have believed that every business deserves solutions tailored to its unique challenges.
            </p>
            <p className="hover:translate-x-2 transition-transform duration-300">
              Integrity, dedication, and innovation are the values that guide me and my team every day. Whether it's helping a startup establish its presence in India or supporting established corporates with complex taxation and regulatory matters, our focus remains on <strong>creating clarity and confidence for our clients.</strong>
            </p>
            <p className="hover:translate-x-2 transition-transform duration-300">
              I take pride in building long-term relationships based on trust and results, and I look forward to continuing this journey of empowering businesses to grow sustainably and responsibly.
            </p>
          </div>

          {/* Signature block */}
          <div className="px-8 md:px-14 pb-10 flex items-center gap-5 border-t border-primary-200 pt-6 hover:bg-primary-50 transition-colors duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center text-white text-xl font-bold flex-shrink-0 hover:scale-110 transition-transform duration-300">
              NS
            </div>
            <div>
              <p className="font-bold text-navy-900 text-lg hover:text-primary-600 transition-colors duration-300">Nidhi Sharma</p>
              <p className="text-navy-800 font-semibold text-sm">Fellow Chartered Accountant (FCA) - ICAI</p>
              <p className="text-neutral-gray text-xs mt-1">Founding Partner, Nidhi Sharma & Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
