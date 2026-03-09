import { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (options = { threshold: 0.1, rootMargin: '0px' }) => {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        // Optional: Stop observing after element is visible
        observer.unobserve(entry.target)
      }
    }, {
      threshold: options.threshold,
      rootMargin: options.rootMargin || '0px'
    })

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [options.threshold, options.rootMargin])

  return [elementRef, isVisible]
}
