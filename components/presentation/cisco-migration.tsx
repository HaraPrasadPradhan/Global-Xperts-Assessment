"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Phone, 
  Cloud, 
  Eye, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Clock,
  Settings
} from "lucide-react"

const migrationSteps = [
  { icon: Eye, title: "Mapping & Classification", description: "Complete visibility of current infrastructure" },
  { icon: Settings, title: "Threat Analysis", description: "Identify potential migration risks" },
  { icon: Phone, title: "UCM to Webex", description: "Cisco UCM to Webex cloud migration" },
  { icon: Cloud, title: "PBX to Cloud", description: "Legacy PBX to modern cloud solutions" }
]

const outcomes = [
  { icon: Clock, title: "Reduced Migration Time", description: "Streamlined processes for faster transitions" },
  { icon: Zap, title: "Improved Efficiency", description: "Enhanced operational workflows" },
  { icon: Eye, title: "Full Transparency", description: "Complete visibility throughout migration" },
  { icon: Settings, title: "Scalable Framework", description: "Repeatable CoE delivery model" }
]

export function CiscoMigrationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-10">
      {/* Header card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-3xl p-8 text-center"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
          <Phone className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Tuki Tool Powered</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3">
          Streamline & Modernize Cisco Collaboration
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Leverage our Tuki tool and Managed Services capabilities for seamless Cisco UCM to Webex 
          migrations, PBX to Cloud transitions, and full visibility-driven execution.
        </p>
      </motion.div>

      {/* Migration process */}
      <div className="grid md:grid-cols-4 gap-4">
        {migrationSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative glass rounded-2xl p-6 text-center group hover:border-primary/30 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-2">{step.title}</h4>
            <p className="text-sm text-muted-foreground">{step.description}</p>
            
            {index < migrationSteps.length - 1 && (
              <motion.div
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 text-primary/50" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Outcomes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="glass rounded-3xl p-8"
      >
        <h4 className="text-lg font-semibold mb-6 text-center">Migration Outcomes</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <outcome.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-medium text-sm">{outcome.title}</div>
              <div className="text-xs text-muted-foreground">{outcome.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
