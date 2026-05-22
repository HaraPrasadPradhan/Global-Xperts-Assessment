"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Server, 
  Code, 
  Layout, 
  GitMerge,
  Cloud,
  Bot,
  Container,
  Search
} from "lucide-react"

const cloudServices = [
  {
    id: "iaas",
    title: "IaaS",
    subtitle: "Host",
    icon: Server,
    description: "Infrastructure as a Service - Scalable computing resources",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "paas",
    title: "PaaS",
    subtitle: "Build",
    icon: Code,
    description: "Platform as a Service - Development and deployment platform",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "saas",
    title: "SaaS",
    subtitle: "Consume",
    icon: Layout,
    description: "Software as a Service - Ready-to-use applications",
    color: "from-orange-500 to-red-500"
  },
  {
    id: "hybrid",
    title: "Hybrid",
    subtitle: "Host",
    icon: GitMerge,
    description: "Hybrid Cloud - Best of both private and public clouds",
    color: "from-green-500 to-teal-500"
  }
]

const additionalServices = [
  { icon: Search, title: "Assessment", description: "Cloud readiness evaluation" },
  { icon: Container, title: "Containers", description: "Container orchestration" },
  { icon: Bot, title: "AI ChatBot", description: "Intelligent automation" }
]

export function CloudServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-8">
      {/* Main cloud services */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cloudServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setActiveService(service.id)}
            onHoverEnd={() => setActiveService(null)}
            className="relative glass rounded-2xl p-6 text-center cursor-pointer overflow-hidden group"
          >
            {/* Gradient overlay on hover */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />
            
            <div className="relative z-10">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mx-auto mb-4`}>
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">({service.subtitle})</p>
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={activeService === service.id ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                className="text-xs text-foreground/70 overflow-hidden"
              >
                {service.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {additionalServices.map((service) => (
          <div
            key={service.title}
            className="flex items-center gap-3 glass rounded-full px-5 py-3"
          >
            <service.icon className="w-5 h-5 text-primary" />
            <div>
              <div className="font-medium text-sm">{service.title}</div>
              <div className="text-xs text-muted-foreground">{service.description}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
