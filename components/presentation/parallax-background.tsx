"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])

  return (
    <div ref={ref} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px]"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px]"
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Floating geometric shapes */}
      <motion.div
        style={{ rotate }}
        className="absolute top-1/4 right-1/4 w-32 h-32 border border-primary/20 rounded-3xl opacity-20"
      />
      <motion.div
        style={{ rotate, y: y2 }}
        className="absolute bottom-1/4 left-1/5 w-20 h-20 border border-accent/20 rounded-2xl opacity-20"
      />
    </div>
  )
}

export function GlowOrb({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute rounded-full animate-pulse-glow ${className}`} />
  )
}
