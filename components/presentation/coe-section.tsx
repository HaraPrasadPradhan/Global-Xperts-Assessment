"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  CheckCircle2, 
  HeadphonesIcon, 
  Shield, 
  Users, 
  FileCheck, 
  Clock,
  Target,
  Lightbulb,
  TrendingUp,
  Heart
} from "lucide-react"

const coeOutcomes = [
  {
    title: "Lab & Simulation Environment",
    items: [
      "Simulation of various service scenarios",
      "Technical trials to refine troubleshooting",
      "Tools for advanced testing and validating"
    ]
  },
  {
    title: "Operational Efficiency Gains",
    items: [
      "Shortened troubleshooting times",
      "Faster and more accurate issue resolution",
      "Streamlined support processes"
    ]
  },
  {
    title: "Elevating Customer Satisfaction",
    items: [
      "Consistently high-quality, proactive service",
      "Engineers equipped for complex issues",
      "Continuous improvements fostering trust"
    ]
  }
]

const valueAdds = [
  { icon: Target, text: "From Planning to Execution all under one roof" },
  { icon: Users, text: "Dedicated Account Manager as SPOC" },
  { icon: Shield, text: "Secure Communication Channel" },
  { icon: Clock, text: "Multiple SLAs: 4Hrs/NBD/SBD" },
  { icon: CheckCircle2, text: "Verified, Badged and Certified Engineers" },
  { icon: HeadphonesIcon, text: "24x7 Helpdesk for Business Continuity" },
  { icon: FileCheck, text: "Accurate site visit records and Reports" },
  { icon: Heart, text: "Engineer Safety Compliances" }
]

export function CoESection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-16">
      {/* COE Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-lg text-muted-foreground leading-relaxed">
          Our dedicated Center of Excellence supports professional services, smart hand services, 
          warranty and part replacement support for leading OEMs in the technology sector.
        </p>
      </motion.div>

      {/* Core Objectives */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { icon: Lightbulb, label: "Streamlined Processes" },
          { icon: Target, label: "Tailored Solutions" },
          { icon: TrendingUp, label: "Latest Advancements" },
          { icon: Clock, label: "Efficient Service Delivery" }
        ].map((objective, index) => (
          <motion.div
            key={objective.label}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 text-center group hover:border-primary/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <objective.icon className="w-6 h-6 text-primary" />
            </div>
            <span className="font-medium">{objective.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Outcomes */}
      <div className="grid md:grid-cols-3 gap-6">
        {coeOutcomes.map((outcome, index) => (
          <motion.div
            key={outcome.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <h4 className="text-lg font-semibold mb-4 text-primary">{outcome.title}</h4>
            <ul className="space-y-3">
              {outcome.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Value Adds */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="space-y-8"
      >
        <h3 className="text-2xl font-semibold text-center">Adding Value to Our Customers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {valueAdds.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-4 text-center cursor-pointer hover:border-primary/30 transition-all"
            >
              <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-xs text-muted-foreground leading-tight">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
