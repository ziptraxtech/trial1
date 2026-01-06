import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function NotificationBar() {
  const [isVisible, setIsVisible] = useState(true)

  const updates = [
    "📢 GST Update: New compliance requirements for FY 2025-26 - File GSTR-1 by 11th of every month",
    "💼 Income Tax: Extended deadline for ITR filing with late fees - Last date 31st January 2026",
    "🔔 Important: CBDT notifies new TDS rates effective from April 2026",
    "📊 GST Notice: E-invoicing mandatory for businesses with turnover above ₹5 Crore",
    "⚖️ Tax Advisory: Budget 2026 announcements - New tax slabs and exemptions",
    "📝 Compliance Alert: Annual GST Return GSTR-9 filing deadline approaching",
    "💡 Update: New provisions under Section 194R for business or profession benefits",
    "🌐 International Tax: Updated DTAA guidelines for cross-border transactions"
  ]

  if (!isVisible) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white py-3 shadow-md overflow-hidden">
      <div className="container-custom relative">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
            LATEST UPDATES
          </div>
          
          <div className="flex-1 overflow-hidden relative">
            <div className="animate-scroll whitespace-nowrap">
              {updates.map((update, idx) => (
                <span key={idx} className="inline-block mx-8 text-base font-semibold">
                  {update}
                </span>
              ))}
              {/* Duplicate for seamless loop */}
              {updates.map((update, idx) => (
                <span key={`dup-${idx}`} className="inline-block mx-8 text-base font-semibold">
                  {update}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 hover:bg-white/20 p-1.5 rounded-full transition-colors"
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
