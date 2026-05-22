"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Cloud, 
  Server, 
  Phone, 
  Video, 
  Search, 
  Settings, 
  Wrench, 
  CheckCircle2,
  MonitorSmartphone,
  Network,
  Shield,
  Laptop
} from "lucide-react"

const serviceCategories = [
  {
    id: "remote",
    title: "Remote Services",
    icon: Cloud,
    services: [
      { name: "Hardware Configuration", desc: "Discovery, SW Configuration" },
      { name: "Deployment Planning", desc: "Design Training" },
      { name: "EUC & Enterprise Productivity", desc: "Deployment, Configuration, lifecycle management" },
      { name: "M365 & Google Workspace", desc: "Full suite integration" },
      { name: "End Point Security", desc: "DLP, Policy enforcement" }
    ]
  },
  {
    id: "cloud",
    title: "Cloud, Datacenter & Virtualization",
    icon: Server,
    services: [
      { name: "Unified Computing", desc: "Enterprise computing solutions" },
      { name: "Storage Networking", desc: "High-performance storage" },
      { name: "Datacenter Switches", desc: "Enterprise-grade switching" },
      { name: "Virtual Desktops", desc: "VDI & Cloud solutions" }
    ]
  },
  {
    id: "collaboration",
    title: "Collaboration",
    icon: Phone,
    services: [
      { name: "Unified Communications", desc: "Complete UC solutions" },
      { name: "IP Telephony", desc: "Enterprise voice systems" },
      { name: "Unified Contact Centers", desc: "Customer engagement" },
      { name: "Telepresence", desc: "Video conferencing" }
    ]
  },
  {
    id: "onsite",
    title: "Onsite Services",
    icon: Wrench,
    services: [
      { name: "Site Survey", desc: "Comprehensive assessment" },
      { name: "Hardware & SW Installation", desc: "Full deployment" },
      { name: "Cutover Support & Training", desc: "Smooth transitions" },
      { name: "Break Fix", desc: "4Hrs Response SLA" }
    ]
  },
  {
    id: "network",
    title: "Borderless Networks",
    icon: Network,
    services: [
      { name: "Routing & Switching", desc: "Core infrastructure" },
      { name: "Wireless LANs", desc: "Enterprise WiFi" },
      { name: "SD-WAN", desc: "Software-defined WAN" },
      { name: "Security Surveillance", desc: "Network monitoring" }
    ]
  }
]

export function ITProfessionalServicesSection() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0])
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-8">
      {/* Category tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {serviceCategories.map((cat) => (
          <motion.button
            key={cat.id}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeCategory.id === cat.id
                ? "bg-primary text-primary-foreground"
                : "glass hover:bg-primary/10"
            }`}
          >
            <cat.icon className="w-4 h-4" />
            <span className="hidden md:inline">{cat.title}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Active category content */}
      <motion.div
        key={activeCategory.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-3xl p-8 md:p-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <activeCategory.icon className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{activeCategory.title}</h3>
            <p className="text-muted-foreground">Comprehensive IT solutions</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {activeCategory.services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 p-4 rounded-xl bg-background/30 hover:bg-background/50 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">{service.name}</div>
                <div className="text-sm text-muted-foreground">{service.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
