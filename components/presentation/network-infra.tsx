"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Network, 
  CheckCircle2, 
  Building2, 
  Server, 
  Cloud, 
  Wifi
} from "lucide-react"

const networkCapabilities = [
  "Setting up new offices",
  "Expanding data centers",
  "Network upgrades",
  "Physical environments",
  "Hybrid solutions",
  "Cloud-based environments"
]

export function NetworkInfraSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-8 md:p-12"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Network className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold">End-to-End Network Services</h3>
            <p className="text-muted-foreground">Connect, scale, and operate efficiently</p>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Comprehensive network services to help businesses connect, scale, and operate efficiently - 
          whether setting up a new office, expanding a data center, or upgrading your entire network. 
          We deliver solutions that work across physical, hybrid, and cloud-based environments.
        </p>
        
        <div className="flex flex-wrap gap-3">
          {networkCapabilities.map((capability, index) => (
            <motion.span
              key={capability}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {capability}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
