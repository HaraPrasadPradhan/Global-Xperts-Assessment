"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const certifications = [
  {
    name: "ISO 27001",
    description: "Information Security Management",
    detail: "Ensures stringent data security and operational excellence"
  },
  {
    name: "GDPR",
    description: "Data Protection Compliance",
    detail: "Adhering to data protection and privacy regulations worldwide"
  },
  {
    name: "ITIL",
    description: "IT Service Management",
    detail: "Streamlined IT service management for reliable operations"
  }
]

const partners = [
  { name: "Cisco", category: "Network & UC" },
  { name: "Microsoft", category: "Cloud & Productivity" },
  { name: "AWS", category: "Cloud Services" },
  { name: "Azure", category: "Cloud Platform" },
  { name: "GCP", category: "Cloud Platform" },
  { name: "HPE", category: "Data Center" },
  { name: "Dell", category: "Infrastructure" },
  { name: "Palo Alto", category: "Security" },
  { name: "Fortinet", category: "Security" },
  { name: "Arista", category: "Network" },
  { name: "Polycom", category: "Collaboration" },
  { name: "VMware", category: "Virtualization" }
]

export function CertificationsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-16">
      {/* Certifications */}
      <div className="grid md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass rounded-2xl p-8 text-center relative overflow-hidden group"
          >
            {/* Badge */}
            <div className="w-20 h-20 mx-auto mb-6 relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              />
              <div className="absolute inset-2 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">{cert.name.split(" ")[0]}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
            <p className="text-primary text-sm mb-3">{cert.description}</p>
            <p className="text-muted-foreground text-sm">{cert.detail}</p>
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Technology Partners */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-8"
      >
        <h3 className="text-2xl font-semibold text-center">Technology Partners & OEM Coverage</h3>
        
        <div className="relative overflow-hidden py-8">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling logos */}
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-8"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 glass rounded-xl px-8 py-4 min-w-[180px] text-center"
              >
                <div className="font-semibold text-foreground">{partner.name}</div>
                <div className="text-xs text-muted-foreground">{partner.category}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
