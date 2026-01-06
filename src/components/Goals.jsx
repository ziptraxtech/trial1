export default function Goals() {
  const goals = [
    { number: '1', title: 'NO POVERTY', color: 'from-red-500 to-red-600', icon: '👥' },
    { number: '2', title: 'ZERO HUNGER', color: 'from-yellow-500 to-yellow-600', icon: '🍲' },
    { number: '3', title: 'GOOD HEALTH', color: 'from-green-500 to-green-600', icon: '❤️' },
    { number: '4', title: 'QUALITY EDUCATION', color: 'from-red-600 to-red-700', icon: '📖' },
    { number: '5', title: 'GENDER EQUALITY', color: 'from-red-500 to-red-600', icon: '⚧️' },
    { number: '6', title: 'CLEAN WATER', color: 'from-blue-500 to-blue-600', icon: '💧' },
    { number: '7', title: 'CLEAN ENERGY', color: 'from-yellow-400 to-yellow-500', icon: '☀️' },
    { number: '8', title: 'ECONOMIC GROWTH', color: 'from-purple-600 to-purple-700', icon: '📈' },
    { number: '9', title: 'INNOVATION', color: 'from-orange-500 to-orange-600', icon: '🏗️' },
    { number: '10', title: 'SUSTAINABLE CITIES', color: 'from-orange-400 to-orange-500', icon: '🏙️' },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">SUSTAINABLE DEVELOPMENT GOALS</span>
          </h2>
          <p className="text-gray-600 text-lg">Committed to global excellence and sustainability</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {goals.map((goal, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${goal.color} rounded-2xl p-6 text-white text-center transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer group`}
            >
              <div className="text-4xl mb-3 group-hover:animate-bounce">{goal.icon}</div>
              <div className="text-sm font-bold mb-2 opacity-90">{goal.number}</div>
              <div className="text-xs font-bold leading-tight">{goal.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
