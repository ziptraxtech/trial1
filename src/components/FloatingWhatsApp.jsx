export default function FloatingWhatsApp() {
  const phoneNumber = '919999130871' // WhatsApp number from footer
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%20Nidhi%20Sharma%20%26%20Company%2C%20I%20would%20like%20to%20discuss%20our%20requirements.`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-32 right-6 z-40 flex items-center justify-center transition-transform duration-300 hover:scale-110 group"
      title="Contact us on WhatsApp"
    >
      <img
        src="/whatsapp-logo.png"
        alt="WhatsApp"
        className="w-14 h-14 object-contain rounded-2xl"
      />
      <span className="absolute -top-12 right-0 bg-navy-800 border border-purple-500/20 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg shadow-purple-900/20">
        WhatsApp us!
      </span>
    </a>
  )
}
