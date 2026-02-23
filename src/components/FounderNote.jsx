export default function FounderNote() {
  return (
    <section id="founder" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-200 to-primary-100"></div>
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-navy-900/[0.02] rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="section-label mx-auto mb-4">
            <span className="w-2 h-2 bg-navy-900 rounded-full"></span>
            From the Founder
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Founder's Note</span>
          </h2>
          <div className="line-decoration mt-4"></div>
        </div>

        <div className="animate-fade-in-up card-elegant bg-white/50 backdrop-blur-sm overflow-hidden border border-primary-200/40">
          {/* Navy accent bar */}
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 px-8 py-4 flex items-center gap-3">
            <span className="text-primary-200/40 text-4xl leading-none font-serif-display">❝</span>
            <p className="text-primary-200/60 text-xs font-semibold uppercase tracking-widest">Message from Nidhi Sharma, FCA</p>
          </div>

          <div className="relative z-10 px-8 md:px-14 py-10 space-y-5 text-navy-900/75 text-lg leading-relaxed">
            <p>
              At Nidhi Sharma & Company, our mission has always been to deliver more than just compliance — we strive to be <strong className="text-navy-900">partners in progress.</strong> Since the beginning of my journey as a Chartered Accountant, I have believed that every business deserves solutions tailored to its unique challenges.
            </p>
            <p>
              Integrity, dedication, and innovation are the values that guide me and my team every day. Whether it's helping a startup establish its presence in India or supporting established corporates with complex taxation and regulatory matters, our focus remains on <strong className="text-navy-900">creating clarity and confidence for our clients.</strong>
            </p>
            <p>
              I take pride in building long-term relationships based on trust and results, and I look forward to continuing this journey of empowering businesses to grow sustainably and responsibly.
            </p>
          </div>

          {/* Signature */}
          <div className="relative z-10 px-8 md:px-14 pb-10 flex items-center gap-4 border-t border-primary-200/30 pt-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              NS
            </div>
            <div>
              <p className="font-bold text-navy-900">Nidhi Sharma</p>
              <p className="text-navy-900/50 text-sm">Fellow Chartered Accountant (FCA) · ICAI</p>
              <p className="text-navy-900/30 text-xs mt-0.5">Founding Partner, Nidhi Sharma & Company</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
