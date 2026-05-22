"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Plane, 
  Ship, 
  FileCheck, 
  Globe,
  Package,
  MapPin,
  Clock,
  CheckCircle2
} from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    description: "Fast, reliable, and secure transportation for time-sensitive goods."
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective solutions for bulk and containerized cargo."
  },
  {
    icon: FileCheck,
    title: "Import & Export",
    description: "Efficient handling of cross-border IT equipment shipments with customs compliance."
  },
  {
    icon: Globe,
    title: "3rd Country Shipments",
    description: "Flexible logistics for shipments originating from or destined to third countries."
  }
]

const benefits = [
  "Access to vast global logistics network through alliance partnership",
  "Customized freight solutions tailored to IT business needs",
  "Expertise in managing complex supply chains with real-time tracking",
  "Commitment to reliable, timely, and cost-effective transportation"
]

export function LogisticsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
          <Package className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Global Logistics Alliance Partner</span>
        </div>
      </motion.div>

      {/* Services grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="glass rounded-2xl p-6 text-center group cursor-pointer hover:border-primary/30 transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <service.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h4 className="font-semibold mb-2">{service.title}</h4>
            <p className="text-xs text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="glass rounded-3xl p-8"
      >
        <h4 className="text-lg font-semibold mb-6 text-center">Why Choose Our Logistics?</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
