"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Globe, 
  Server, 
  Shield, 
  Cloud, 
  Headphones, 
  Network, 
  Users, 
  Cpu, 
  MonitorSmartphone,
  Truck,
  Brain,
  Wrench
} from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "IT Professional Services",
    description: "Remote & onsite services covering cloud, datacenter, virtualization, unified communications, and enterprise productivity."
  },
  {
    icon: Globe,
    title: "Global Field Engineering",
    description: "1500+ certified engineers across 130+ countries with 99.5% SLA achievement and 24/7 support."
  },
  {
    icon: Server,
    title: "Managed Support Services",
    description: "Holistic IT management covering servers, networks, databases with integrated NOC and SOC oversight."
  },
  {
    icon: Headphones,
    title: "Help Desk Services",
    description: "Centralized desktop services, remote support, asset management, and EUC rollout services."
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description: "End-to-end network services for physical, hybrid, and cloud-based environments."
  },
  {
    icon: Shield,
    title: "Cyber & Network Security",
    description: "Data protection, SOC, network security, identity & access management, and compliance audits."
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "IaaS, PaaS, SaaS, and Hybrid cloud solutions with assessment and container services."
  },
  {
    icon: MonitorSmartphone,
    title: "Collaboration & Migration",
    description: "Cisco UCM to Webex migrations, PBX to Cloud transitions with Tuki tool capabilities."
  },
  {
    icon: Users,
    title: "Smart Resourcing",
    description: "Workforce planning, talent acquisition, development training, and detailed analytics."
  },
  {
    icon: Brain,
    title: "AI-Based Solutions",
    description: "Custom AI solutions for workflow automation, chatbots, predictive analytics, and business insights."
  },
  {
    icon: Truck,
    title: "IT Logistics",
    description: "Global freight forwarding, import/export services, and 3rd country shipments for IT equipment."
  },
  {
    icon: Cpu,
    title: "Cabling Solutions",
    description: "CAT 5E/6/6A cables, fiber optics, patch panels, and complete structured cabling solutions."
  }
]

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: typeof Globe
  title: string
  description: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass rounded-2xl p-6 group cursor-pointer transition-all duration-300 hover:border-primary/30"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {services.map((service, index) => (
        <ServiceCard key={service.title} {...service} index={index} />
      ))}
    </div>
  )
}

export { services }
