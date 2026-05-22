"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const locations = [
  { name: "India", flag: "🇮🇳", description: "GlobalXperts Technology Pvt Ltd" },
  { name: "UAE", flag: "🇦🇪", description: "GlobalXperts Technology FZCO" },
  { name: "Estonia (EU)", flag: "🇪🇺", description: "GlobalXperts Technology OU" },
  { name: "USA", flag: "🇺🇸", description: "Planet Convergence, LLC" },
  { name: "UK", flag: "🇬🇧", description: "Planet Convergence Ltd" },
]

export function GlobalPresenceMap() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="relative">
      {/* World map visualization */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8 }}
        className="relative h-[400px] md:h-[500px] glass rounded-3xl overflow-hidden mb-12"
      >
        {/* Animated dots representing global coverage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-4xl h-full">
            {/* Central globe representation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-primary/20 relative"
              >
                {/* Orbit rings */}
                <div className="absolute inset-4 rounded-full border border-primary/10" />
                <div className="absolute inset-8 rounded-full border border-accent/10" />
                <div className="absolute inset-12 rounded-full border border-primary/5" />
              </motion.div>
            </div>
            
            {/* Location dots */}
            {[
              { top: "25%", left: "20%", delay: 0 },
              { top: "35%", left: "50%", delay: 0.2 },
              { top: "30%", left: "45%", delay: 0.4 },
              { top: "40%", left: "75%", delay: 0.6 },
              { top: "35%", left: "85%", delay: 0.8 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, delay: pos.delay + 0.5 }}
                className="absolute"
                style={{ top: pos.top, left: pos.left }}
              >
                <div className="relative">
                  <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping opacity-50" />
                </div>
              </motion.div>
            ))}
            
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M20 25 Q 50 10 75 40"
                stroke="url(#gradient)"
                strokeWidth="0.2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.path
                d="M45 30 Q 60 25 85 35"
                stroke="url(#gradient)"
                strokeWidth="0.2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 2, delay: 1.2 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="rgb(20, 184, 166)" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        {/* Coverage stats overlay */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">130+</span> Countries
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">5</span> Regional Offices
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">24/7</span> Support
          </div>
        </div>
      </motion.div>
      
      {/* Location cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {locations.map((location, index) => (
          <motion.div
            key={location.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="glass rounded-xl p-4 text-center cursor-pointer hover:border-primary/30 transition-all"
          >
            <span className="text-3xl mb-2 block">{location.flag}</span>
            <h4 className="font-semibold text-sm mb-1">{location.name}</h4>
            <p className="text-xs text-muted-foreground leading-tight">{location.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
