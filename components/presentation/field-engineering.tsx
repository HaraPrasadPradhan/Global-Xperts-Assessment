"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Award, 
  Shield, 
  Globe, 
  CheckCircle2, 
  Clock, 
  BadgeCheck,
  Wrench,
  Users
} from "lucide-react"

const features = [
  {
    title: "Range of Services & SLAs",
    icon: Wrench,
    items: [
      "Survey, Stage, Install, Floor walk",
      "MACD, 24x7 Support, NBD",
      "1,000+ Engineering activities per annum",
      "99.5% SLA Achievement"
    ]
  },
  {
    title: "Quality Assurance",
    icon: Award,
    items: [
      "18+ years of Experience",
      "Dedicated Partner Management",
      "Retainer fees for quality & SLA",
      "Proven track record"
    ]
  },
  {
    title: "Technology Competencies",
    icon: Shield,
    items: [
      "Accreditations: Network, Servers, Security, UC, Video, Workplace",
      "Multivendor Support",
      "Level 1, 2, 3 equivalent engineers",
      "1500+ certified Engineers"
    ]
  },
  {
    title: "Geographical Availability",
    icon: Globe,
    items: [
      "Network covering 130+ Countries",
      "Country, Region, Metro areas",
      "Security clearance / PES",
      "Rapid global deployment"
    ]
  }
]

const stats = [
  { value: "99.5%", label: "SLA Achievement" },
  { value: "1000+", label: "Activities/Year" },
  { value: "1500+", label: "Certified Engineers" },
  { value: "130+", label: "Countries" }
]

export function FieldEngineeringSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-10">
      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-6"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Feature cards */}
      <div className="grid md:grid-cols-2 gap-5">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
            </div>
            <ul className="space-y-2">
              {feature.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
