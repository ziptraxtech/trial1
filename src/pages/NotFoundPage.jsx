import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Page not found</h1>
          <p className="text-navy-900/60 mb-8">
            The page you are looking for does not exist. Please return to the homepage.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-purple-900/30 hover:shadow-purple-600/40 hover:shadow-2xl transition-all duration-400 hover:-translate-y-1"
          >
            Go to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
