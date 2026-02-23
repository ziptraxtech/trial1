import { useState, useEffect } from 'react'

export default function Hero() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  useEffect(() => {
    const animate = (target, setter, duration) => {
      let start = 0
      const step = target / (duration / 16)
      const interval = setInterval(() => {
        start += step
        if (start >= target) { setter(target); clearInterval(interval) }
        else setter(Math.floor(start))
      }, 16)
    }
    const timeout = setTimeout(() => {
      animate(12, setCount1, 1500)
      animate(500, setCount2, 2000)
      animate(100, setCount3, 1800)
    }, 600)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div id="home" className="relative overflow-hidden">
      {/* Navy background with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"></div>
      <div className="noise-overlay absolute inset-0"></div>
      
      {/* Floating decorative circles */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-primary-600/8 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 right-[30%] w-48 h-48 bg-primary-400/5 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>

      <div className="container-custom relative z-10 pt-24 pb-8 md:pt-28 md:pb-12">
        
        {/* Main Hero Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="section-label-light mb-6">
              <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
              Since 2012 · Delhi &amp; Gurugram
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
              <span className="text-primary-300">Nidhi Sharma</span>
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{fontFamily: 'Times New Roman'}}>
              <span className="text-primary-300">&amp; Company</span>
            </h1>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="line-decoration-light"></div>
              <p className="text-primary-100 text-lg font-medium tracking-wide">Chartered Accountants</p>
            </div>
            
            <p className="text-primary-200/80 text-lg mb-3 leading-relaxed max-w-lg">
              Empowering enterprises with financial confidence through expert advisory, compliance solutions, and strategic insight.
            </p>
            <p className="text-primary-200/60 mb-8 leading-relaxed max-w-lg">
              Business plans are perfect… but it's difficult to sustain. Let's ensure your plans are profitable.
            </p>
            
            <div className="flex gap-4 flex-wrap">
              <a href="#about" className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-400 text-navy-900 px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10">About Us</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a href="#services" className="inline-flex items-center gap-2 border-2 border-primary-400/40 text-primary-200 px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-400/10 hover:border-primary-400/60 transition-all duration-400 hover:-translate-y-1">
                Our Services
              </a>
            </div>
          </div>

          {/* Right: Stats + Expertise */}
          <div className="relative animate-slide-in-right">
            <div className="space-y-5">
              {/* Top Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <div className="glass rounded-2xl p-5 text-center hover:-translate-y-2 transition-all duration-400 cursor-default">
                  <p className="text-3xl md:text-4xl font-bold text-primary-300 mb-1">{count1}+</p>
                  <p className="text-xs text-navy-900 font-medium uppercase tracking-wider">Years</p>
                </div>
                <div className="glass rounded-2xl p-5 text-center hover:-translate-y-2 transition-all duration-400 cursor-default">
                  <p className="text-3xl md:text-4xl font-bold text-primary-300 mb-1">{count2}+</p>
                  <p className="text-xs text-navy-900 font-medium uppercase tracking-wider">Clients</p>
                </div>
                <div className="glass rounded-2xl p-5 text-center hover:-translate-y-2 transition-all duration-400 cursor-default">
                  <p className="text-3xl md:text-4xl font-bold text-primary-300 mb-1">{count3}%</p>
                  <p className="text-xs text-navy-900 font-medium uppercase tracking-wider">Integrity</p>
                </div>
              </div>

              {/* Core Expertise glass card */}
              <div className="glass rounded-2xl p-6">
                <p className="text-primary-200/60 text-xs uppercase tracking-widest font-semibold mb-4">Core Expertise</p>
                <div className="grid grid-cols-2 gap-3">
                  {['Audit & Assurance', 'GST Advisory', 'Tax Planning', 'Company Formation', 'FEMA & Transfer Pricing', 'BRSR Reporting'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 group cursor-default">
                      <span className="w-1.5 h-1.5 bg-primary-400 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                      <span className="text-sm text-primary-100/80 group-hover:text-primary-100 transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust quote */}
              <div className="glass rounded-2xl p-5 border-l-4 border-primary-400/50">
                <p className="text-primary-100/80 text-sm italic leading-relaxed font-serif-display">
                  "Trusted by businesses, government entities &amp; entrepreneurs across India for financial clarity and compliance excellence."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling Trust Marquee */}
        <div className="mt-12 mb-4">
          <div className="marquee-container py-4 rounded-xl">
            <div className="marquee-track">
              {[...Array(2)].map((_, dupeIdx) => (
                <div key={dupeIdx} className="flex items-center gap-12 px-6">
                  {['Income Tax', 'GST Compliance', 'Audit & Assurance', 'Business Setup', 'FEMA Advisory', 'Transfer Pricing', 'Company Law', 'BRSR Reporting', 'Due Diligence', 'Financial Consultancy', 'Tax Planning', 'M&A Advisory'].map((item, i) => (
                    <span key={i} className="flex items-center gap-3 text-primary-200/40 text-sm font-medium whitespace-nowrap">
                      <span className="w-1.5 h-1.5 bg-primary-400/40 rounded-full flex-shrink-0"></span>
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
