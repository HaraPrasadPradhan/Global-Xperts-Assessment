"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Cable, 
  Wifi, 
  Volume2, 
  Layers,
  CircleDot,
  Square,
  LayoutGrid,
  Signal
} from "lucide-react"

const cablingProducts = [
  { icon: Cable, name: "CAT 5E, CAT 6 & CAT 6A", description: "High-performance solid cables for structured network cabling" },
  { icon: Wifi, name: "Patch Cord", description: "Reliable ethernet cables for network devices and patch panels" },
  { icon: CircleDot, name: "Keystone", description: "Modular connectors for clean network terminations" },
  { icon: Square, name: "Surface Mount Box", description: "Compact enclosures for mounting without in-wall installation" },
  { icon: LayoutGrid, name: "Patch Panel", description: "Centralized panels for organizing cable connections" },
  { icon: Layers, name: "Face Plates", description: "Wall-mounted plates for keystone jacks" },
  { icon: Volume2, name: "Speaker Cables", description: "High-quality cables for clear audio transmission" },
  { icon: Signal, name: "Fiber Optic", description: "Single mode fiber cables, patch cords & LIU units" }
]

export function CablingSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cablingProducts.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="glass rounded-xl p-5 text-center group cursor-pointer hover:border-primary/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
              <product.icon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-sm mb-1">{product.name}</h4>
            <p className="text-xs text-muted-foreground">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
