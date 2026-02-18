import { useState } from 'react'
import { X, Bell } from 'lucide-react'

export default function NotificationBar() {
  const [isExpanded, setIsExpanded] = useState(false)

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

  return (
    <div className="fixed bottom-8 right-6 z-[60] flex flex-col items-end gap-3">
      {/* Expanded panel */}
      {isExpanded && (
        <div className="w-[92vw] max-w-[420px] rounded-2xl bg-gradient-to-br from-red-600 via-orange-600 to-red-700 text-white shadow-2xl overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/20">
            <span className="text-sm font-bold tracking-wide">LATEST UPDATES</span>
            <button
              onClick={() => setIsExpanded(false)}
              className="hover:bg-white/20 p-1.5 rounded-full transition-colors"
              aria-label="Close notifications"
            >
              <X size={15} />
            </button>
          </div>
          {/* Updates list */}
          <ul className="divide-y divide-white/10 max-h-72 overflow-y-auto">
            {updates.map((update, idx) => (
              <li key={idx} className="px-4 py-3 text-sm font-medium hover:bg-white/10 transition-colors">
                {update}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Floating trigger button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 font-semibold text-sm"
        aria-label="Toggle notifications"
      >
        <Bell size={18} className={isExpanded ? 'animate-none' : 'animate-bounce'} />
        <span>Updates</span>
        {/* Notification dot */}
        {!isExpanded && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white" />
        )}
      </button>
    </div>
  )
}
