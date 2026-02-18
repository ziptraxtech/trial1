export default function FounderNote() {
  return (
    <section id="founder" className="section-padding bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Founder's Note</span>
          </h2>
          <p className="text-gray-500 text-lg">A message from our founding partner</p>
        </div>

        <div className="animate-fade-in-up bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Quote bar */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-8 py-4 flex items-center gap-3">
            <span className="text-white/60 text-5xl leading-none font-serif">"</span>
            <p className="text-white/90 text-sm font-medium uppercase tracking-widest">Message from Nidhi Sharma, FCA</p>
          </div>

          <div className="px-8 md:px-14 py-10 space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              At Nidhi Sharma & Company, our mission has always been to deliver more than just compliance — we strive to be <strong>partners in progress.</strong> Since the beginning of my journey as a Chartered Accountant, I have believed that every business deserves solutions tailored to its unique challenges.
            </p>
            <p>
              Integrity, dedication, and innovation are the values that guide me and my team every day. Whether it's helping a startup establish its presence in India or supporting established corporates with complex taxation and regulatory matters, our focus remains on <strong>creating clarity and confidence for our clients.</strong>
            </p>
            <p>
              I take pride in building long-term relationships based on trust and results, and I look forward to continuing this journey of empowering businesses to grow sustainably and responsibly.
            </p>
          </div>

          {/* Signature block */}
          <div className="px-8 md:px-14 pb-10 flex items-center gap-5 border-t border-gray-100 pt-6">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
              NS
            </div>
            <div>
              <p className="font-bold text-gray-900 text-lg">Nidhi Sharma</p>
              <p className="text-blue-600 font-semibold text-sm">Fellow Chartered Accountant (FCA) · ICAI</p>
              <p className="text-gray-500 text-xs mt-1">Founding Partner, Nidhi Sharma & Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
