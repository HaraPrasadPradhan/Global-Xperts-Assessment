"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Network, 
  Server, 
  Shield, 
  Phone, 
  Monitor, 
  Cloud,
  Cpu,
  Laptop
} from "lucide-react"

const technologies = [
  { icon: Phone, name: "UC/Collaboration", vendors: "Cisco, Polycom, etc." },
  { icon: Cloud, name: "Cloud", vendors: "Azure, AWS, GCP" },
  { icon: Monitor, name: "End User Computing", vendors: "Microsoft, Apple, Linux" },
  { icon: Network, name: "SD-WAN", vendors: "Cisco IWAN, Silver Peak, etc." },
  { icon: Shield, name: "Network Security", vendors: "Palo Alto, Cisco, Fortinet" },
  { icon: Server, name: "Data Center", vendors: "HPE, Dell, Cisco, Arista" }
]

const oemPartners = [
  "Cisco", "Microsoft", "HPE", "Dell", "Palo Alto", "Fortinet",
  "VMware", "AWS", "Azure", "Google Cloud", "Arista", "Polycom",
  "Juniper", "F5", "Aruba", "Meraki"
]

export function TechnologiesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-10">
      {/* Technologies */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="glass rounded-2xl p-6 group hover:border-primary/30 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <tech.icon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-1">{tech.name}</h4>
            <p className="text-sm text-muted-foreground">{tech.vendors}</p>
          </motion.div>
        ))}
      </div>

      {/* OEM Partners */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="glass rounded-3xl p-8"
      >
        <h4 className="text-lg font-semibold mb-6 text-center">OEM Coverage</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {oemPartners.map((partner, index) => (
            <motion.span
              key={partner}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium cursor-pointer hover:bg-primary/20 transition-colors"
            >
              {partner}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
