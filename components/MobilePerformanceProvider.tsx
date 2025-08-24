"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useMobilePerformance, useMobileOptimization } from '@/lib/hooks/useMobilePerformance'

interface MobilePerformanceContextType {
  isMobile: boolean
  isLowEndDevice: boolean
  shouldReduceMotion: boolean
  shouldReduceAnimations: boolean
  optimizeForMobile: boolean
}

const MobilePerformanceContext = createContext<MobilePerformanceContextType>({
  isMobile: false,
  isLowEndDevice: false,
  shouldReduceMotion: false,
  shouldReduceAnimations: false,
  optimizeForMobile: false,
})

export const useMobilePerformanceContext = () => useContext(MobilePerformanceContext)

interface MobilePerformanceProviderProps {
  children: React.ReactNode
}

export function MobilePerformanceProvider({ children }: MobilePerformanceProviderProps) {
  const { isMobile, isLowEndDevice } = useMobilePerformance()
  const { shouldReduceMotion, shouldReduceAnimations } = useMobileOptimization()
  const [optimizeForMobile, setOptimizeForMobile] = useState(false)

  useEffect(() => {
    // Apply mobile optimizations
    if (isMobile || isLowEndDevice) {
      setOptimizeForMobile(true)
      
      // Add mobile-specific classes to body
      document.body.classList.add('mobile-optimized')
      
      if (shouldReduceMotion) {
        document.body.classList.add('reduce-motion')
      }
      
      if (shouldReduceAnimations) {
        document.body.classList.add('reduce-animations')
      }
    }

    return () => {
      // Cleanup classes
      document.body.classList.remove('mobile-optimized', 'reduce-motion', 'reduce-animations')
    }
  }, [isMobile, isLowEndDevice, shouldReduceMotion, shouldReduceAnimations])

  // Apply mobile performance optimizations
  useEffect(() => {
    if (optimizeForMobile) {
      // Reduce layout thrashing
      const style = document.createElement('style')
      style.textContent = `
        .mobile-optimized * {
          contain: layout style;
        }
        .reduce-motion * {
          transition: none !important;
          animation: none !important;
        }
        .reduce-animations * {
          transform: none !important;
          filter: none !important;
        }
      `
      document.head.appendChild(style)

      return () => {
        document.head.removeChild(style)
      }
    }
  }, [optimizeForMobile])

  const value: MobilePerformanceContextType = {
    isMobile,
    isLowEndDevice,
    shouldReduceMotion,
    shouldReduceAnimations,
    optimizeForMobile,
  }

  return (
    <MobilePerformanceContext.Provider value={value}>
      {children}
    </MobilePerformanceContext.Provider>
  )
}
