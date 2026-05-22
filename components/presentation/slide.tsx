"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface SlideProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Slide({ children, className = "", id }: SlideProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ opacity, y }}
      className={`min-h-screen flex items-center justify-center relative px-6 py-20 ${className}`}
    >
      {children}
    </motion.section>
  )
}

export function SlideContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-7xl mx-auto w-full ${className}`}>
      {children}
    </div>
  )
}
