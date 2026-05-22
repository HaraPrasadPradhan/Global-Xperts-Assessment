"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Server, 
  Database, 
  Monitor, 
  Shield, 
  Wifi, 
  HardDrive,
  CheckCircle2 
} from "lucide-react"

const managedServices = [
  { icon: Server, name: "Network Management", description: "Proactive monitoring and incident management" },
  { icon: Database, name: "Server Management", description: "Problem, change and configuration management" },
  { icon: Monitor, name: "Web Management", description: "Asset and patch management" },
  { icon: HardDrive, name: "Database Management", description: "Maximize availability with process consulting" },
  { icon: Shield, name: "Security Management", description: "Integrated NOC and SOC oversight" },
  { icon: Wifi, name: "IPT & Collaboration", description: "Communication intelligence solutions" }
]

const networkServices = [
  "Setting up new offices",
  "Expanding data centers",
  "Network upgrades",
  "Physical environments",
  "Hybrid solutions",
  "Cloud-based environments"
]

const securityServices = [
  {
    category: "Data Protection & Privacy",
    items: ["Mapping & Classification", "Threat Analysis", "Health Check"]
  },
  {
    category: "Cyber & Infra Security",
    items: ["SOC", "Network Security", "Identity & Access"]
  },
  {
    category: "Governance, Risk & Compliance",
    items: ["Audit", "Governance", "Education"]
  },
  {
    category: "Cloud Security",
    items: ["Network", "Application", "Identity & Access"]
  }
]

export function ManagedServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-8">
      {/* 99.99% SLA Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-8"
      >
        <div className="glass rounded-full px-8 py-4 inline-flex items-center gap-4">
          <span className="text-4xl font-bold text-gradient">99.99%</span>
          <span className="text-muted-foreground">SLA Achievement</span>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {managedServices.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="glass rounded-xl p-5 text-center group cursor-pointer hover:border-primary/30 transition-all"
          >
            <service.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-sm mb-1">{service.name}</h4>
            <p className="text-xs text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

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
        <p className="text-lg text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          End-to-end network services to help businesses connect, scale, and operate 
          efficiently across physical, hybrid, and cloud-based environments.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {networkServices.map((service, index) => (
            <motion.span
              key={service}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {service}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export function SecuritySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {securityServices.map((section, index) => (
        <motion.div
          key={section.category}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass rounded-2xl p-6"
        >
          <h4 className="font-semibold text-primary mb-4 text-sm">{section.category}</h4>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
