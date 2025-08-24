import { useEffect, useState, useCallback, useRef } from 'react'

// Hook for mobile performance optimization
export function useMobilePerformance() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLowEndDevice, setIsLowEndDevice] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobileDevice = /mobile|android|iphone|ipad|phone/i.test(userAgent)
      
      // Check for low-end devices
      const memory = (navigator as any).deviceMemory || 4
      const cores = (navigator as any).hardwareConcurrency || 4
      const isLowEnd = memory < 4 || cores < 4
      
      setIsMobile(isMobileDevice)
      setIsLowEndDevice(isLowEnd)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return { isMobile, isLowEndDevice }
}

// Hook for lazy loading components
export function useLazyLoad<T extends HTMLElement>(
  threshold: number = 0.1,
  rootMargin: string = '50px'
) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<T>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { ref, isVisible }
}

// Hook for mobile optimization
export function useMobileOptimization() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)
  const [shouldReduceAnimations, setShouldReduceAnimations] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setShouldReduceMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    
    // Check for low-end device and reduce animations
    const memory = (navigator as any).deviceMemory || 4
    const cores = (navigator as any).hardwareConcurrency || 4
    setShouldReduceAnimations(memory < 4 || cores < 4)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return { shouldReduceMotion, shouldReduceAnimations }
}

// Hook for performance monitoring
export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
  })

  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fcp = entries[entries.length - 1]
        setMetrics(prev => ({ ...prev, fcp: fcp.startTime }))
      })
      fcpObserver.observe({ entryTypes: ['paint'] })

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lcp = entries[entries.length - 1]
        setMetrics(prev => ({ ...prev, lcp: lcp.startTime }))
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fid = entries[entries.length - 1] as any
        if (fid.processingStart) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }))
        }
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let cls = 0
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as any
          if (!layoutShiftEntry.hadRecentInput) {
            cls += layoutShiftEntry.value || 0
          }
        }
        setMetrics(prev => ({ ...prev, cls }))
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      return () => {
        fcpObserver.disconnect()
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  return metrics
}

// Hook for image optimization
export function useImageOptimization() {
  const [imageLoadStatus, setImageLoadStatus] = useState<Record<string, boolean>>({})

  const preloadImage = useCallback((src: string) => {
    if (imageLoadStatus[src]) return

    const img = new Image()
    img.onload = () => setImageLoadStatus(prev => ({ ...prev, [src]: true }))
    img.onerror = () => setImageLoadStatus(prev => ({ ...prev, [src]: false }))
    img.src = src
  }, [imageLoadStatus])

  const getOptimizedImageSrc = useCallback((src: string, width: number) => {
    // Add width parameter for responsive images
    if (src.includes('?')) {
      return `${src}&w=${width}`
    }
    return `${src}?w=${width}`
  }, [])

  return { imageLoadStatus, preloadImage, getOptimizedImageSrc }
}
