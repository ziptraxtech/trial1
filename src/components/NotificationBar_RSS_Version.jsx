import { useState, useEffect } from 'react'
import { X, Bell, ExternalLink } from 'lucide-react'

export default function NotificationBar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  // Fallback hardcoded updates
  const fallbackUpdates = [
    { text: "📢 GST Update: New compliance requirements for FY 2025-26 - File GSTR-1 by 11th of every month", url: "https://www.gst.gov.in/" },
    { text: "💼 Income Tax: Extended deadline for ITR filing with late fees - Last date 31st January 2026", url: "https://www.incometax.gov.in/" },
    { text: "🔔 Important: CBDT notifies new TDS rates effective from April 2026", url: "https://www.incometax.gov.in/iec/foportal" },
    { text: "📊 GST Notice: E-invoicing mandatory for businesses with turnover above ₹5 Crore", url: "https://einvoice.gst.gov.in/" },
    { text: "⚖️ Tax Advisory: Budget 2026 announcements - New tax slabs and exemptions", url: "https://www.indiabudget.gov.in/" },
    { text: "📝 Compliance Alert: Annual GST Return GSTR-9 filing deadline approaching", url: "https://www.gst.gov.in/" },
    { text: "💡 Update: New provisions under Section 194R for business or profession benefits", url: "https://www.incometax.gov.in/" },
    { text: "🌐 International Tax: Updated DTAA guidelines for cross-border transactions", url: "https://www.incometax.gov.in/iec/foportal" }
  ]

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      // Using RSS2JSON service to fetch and parse RSS feeds from official sources
      // This is completely free and doesn't require an API key
      
      const rssFeeds = [
        'https://pib.gov.in/rssfeed/gst.xml',
        'https://pib.gov.in/rssfeed/finance.xml'
      ]
      
      const randomFeed = rssFeeds[Math.floor(Math.random() * rssFeeds.length)]
      
      // Using rss2json.com free service to convert RSS to JSON
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(randomFeed)}&count=8`
      )
      
      if (response.ok) {
        const data = await response.json()
        if (data.items && data.items.length > 0) {
          const formattedNews = data.items
            .filter(item => {
              // Filter for tax/GST related news
              const title = item.title.toLowerCase()
              return title.includes('tax') || 
                     title.includes('gst') || 
                     title.includes('income') || 
                     title.includes('cbdt') ||
                     title.includes('compliance') ||
                     title.includes('revenue')
            })
            .slice(0, 8)
            .map(item => ({
              text: `📰 ${item.title}`,
              url: item.link,
              source: 'PIB India',
              publishedAt: new Date(item.pubDate).toLocaleDateString()
            }))
          
          if (formattedNews.length > 0) {
            setNews(formattedNews)
          } else {
            setNews(fallbackUpdates)
          }
        } else {
          setNews(fallbackUpdates)
        }
      } else {
        setNews(fallbackUpdates)
      }
    } catch (error) {
      console.error('Error fetching news:', error)
      setNews(fallbackUpdates)
    } finally {
      setLoading(false)
    }
  }

  const updates = news.length > 0 ? news : fallbackUpdates

  return (
    <div className="fixed bottom-8 right-6 z-[60] flex flex-col items-end gap-3">
      {/* Expanded panel */}
      {isExpanded && (
        <div className="w-[92vw] max-w-[420px] rounded-2xl bg-gradient-to-br from-blue-700 via-violet-700 to-purple-700 text-white shadow-2xl shadow-purple-900/40 overflow-hidden animate-fade-in-up border border-purple-400/20">
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
            {loading ? (
              <li className="px-4 py-3 text-sm font-medium text-center">
                Loading latest updates...
              </li>
            ) : (
              updates.map((update, idx) => {
                const displayText = typeof update === 'string' ? update : update.text
                const url = typeof update === 'object' ? update.url : null

                return (
                  <li key={idx} className="group">
                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start justify-between gap-3 px-4 py-3 text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        <span className="flex-1">{displayText}</span>
                        <ExternalLink size={14} className="flex-shrink-0 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <div className="px-4 py-3 text-sm font-medium">
                        {displayText}
                      </div>
                    )}
                  </li>
                )
              })
            )}
          </ul>
          <div className="px-4 py-2 text-xs text-white/60 border-t border-white/10 text-center">
            Updates from official sources • Click to read more
          </div>
        </div>
      )}

      {/* Floating trigger button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-5 py-3 rounded-full shadow-lg shadow-purple-900/40 transition-all duration-300 font-semibold text-sm border border-purple-400/20"
        aria-label="Toggle notifications"
      >
        <Bell size={18} className={isExpanded ? 'animate-none' : 'animate-bounce'} />
        <span>Updates</span>
        {/* Notification dot */}
        {!isExpanded && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-purple-300 rounded-full border-2 border-navy-900 animate-neon-pulse" />
        )}
      </button>
    </div>
  )
}
