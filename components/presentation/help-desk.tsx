"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Headphones, 
  Monitor, 
  HardDrive, 
  Laptop,
  Package,
  RefreshCcw
} from "lucide-react"

const services = [
  { icon: Monitor, title: "Centralized Desktop Services", description: "Unified management for all desktop resources" },
  { icon: Headphones, title: "Help Desk Services", description: "24/7 technical support and assistance" },
  { icon: Laptop, title: "Remote Desktop Control", description: "Secure remote access and troubleshooting" },
  { icon: HardDrive, title: "Asset Management", description: "Complete hardware and software tracking" },
  { icon: Package, title: "Application Packaging", description: "Software deployment and packaging" },
  { icon: RefreshCcw, title: "EUC Roll Out Services", description: "End-user computing deployment" }
]

export function HelpDeskSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass rounded-2xl p-6 text-center group cursor-pointer hover:border-primary/30 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <service.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h4 className="font-semibold mb-2">{service.title}</h4>
            <p className="text-sm text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
