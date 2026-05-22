"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Home, 
  User, 
  MessageSquare, 
  Clock,
  BadgeCheck,
  Activity,
  Shield,
  FileText,
  Headphones
} from "lucide-react"

const valueProps = [
  { icon: Home, title: "Planning to Execution", description: "All under one roof" },
  { icon: User, title: "Dedicated Account Manager", description: "Single point of contact" },
  { icon: MessageSquare, title: "Secure Communication", description: "For clients, engineers & customers" },
  { icon: Clock, title: "Multiple SLAs", description: "4Hrs / NBD / SBD options" },
  { icon: BadgeCheck, title: "Verified Engineers", description: "Badged and certified professionals" },
  { icon: Activity, title: "Activity Control", description: "Centralized Service Delivery Centre" },
  { icon: Shield, title: "Safety Compliance", description: "Engineer safety measures" },
  { icon: FileText, title: "Accurate Reports", description: "Detailed site visit records" },
  { icon: Headphones, title: "24x7 Helpdesk", description: "Multiple cities for business continuity" }
]

export function ValueProposition() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref}>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
        {valueProps.map((prop, index) => (
          <motion.div
            key={prop.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.03, y: -3 }}
            className="glass rounded-xl p-5 text-center group cursor-pointer hover:border-primary/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
              <prop.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h4 className="font-semibold text-sm mb-1">{prop.title}</h4>
            <p className="text-xs text-muted-foreground">{prop.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
