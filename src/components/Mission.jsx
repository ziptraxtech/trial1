export default function Mission() {
  return (
    <section className="section-padding bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 md:p-16 border border-white/20 shadow-2xl hover-lift">
            <div className="flex justify-center mb-8">
              <div className="text-6xl animate-float">♀</div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
              OUR MISSION
            </h2>
            <p className="text-gray-100 text-center text-lg leading-relaxed font-light">
              "Allow thoughts to change into development". Our central goal is to offer complete proficient types of assistance which clients allude to their partners, representatives brag upon, contenders recognize and set as principles for themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
