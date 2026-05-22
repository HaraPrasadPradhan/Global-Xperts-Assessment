"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { 
  Users, 
  GraduationCap, 
  Search, 
  BarChart3,
  Briefcase,
  Server,
  Shield,
  Wrench,
  Clock,
  FileText,
  Zap
} from "lucide-react"

const resourceCategories = [
  {
    title: "Workforce Planning",
    icon: Users,
    description: "Strategic workforce organization and alignment"
  },
  {
    title: "Workforce Development",
    icon: GraduationCap,
    description: "Training and skill enhancement programs"
  },
  {
    title: "Talent Acquisition",
    icon: Search,
    description: "Sourcing and recruiting top talent"
  },
  {
    title: "Workforce Analytics",
    icon: BarChart3,
    description: "Data-driven workforce insights"
  }
]

const resourceTypes = [
  { icon: Briefcase, title: "Project & Program Managers", description: "PMP, Prince 2 and ITIL certified" },
  { icon: Server, title: "Infrastructure Engineers", description: "Level 1 to Level 3 remote & implementation support" },
  { icon: Wrench, title: "Consulting Engineers", description: "Network audit, plan, design & migration" },
  { icon: Shield, title: "Cyber Security Engineers", description: "Security specialists and analysts" }
]

const engagementModels = [
  {
    title: "Professional Services",
    items: [
      "Smart Resourcing (Monthly FTE)",
      "Shared Resources (Time & Material)",
      "Technology-based team engagement"
    ]
  },
  {
    title: "Managed Services",
    items: [
      "Hourly, Half day and full day",
      "SLA-based smart-hand model",
      "Project-based consolidated pricing"
    ]
  },
  {
    title: "Field Engineering",
    items: [
      "Consolidated pricing - project based",
      "Time and material (hourly pricing)",
      "Flexible engagement options"
    ]
  }
]

export function SmartResourcingSection() {
  const [activeTab, setActiveTab] = useState<"categories" | "types" | "models">("categories")
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-8">
      {/* Tab selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center gap-3"
      >
        {[
          { id: "categories", label: "Workforce Solutions" },
          { id: "types", label: "Resource Types" },
          { id: "models", label: "Engagement Models" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground"
                : "glass hover:bg-primary/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Categories view */}
      {activeTab === "categories" && (
        <motion.div
          key="categories"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {resourceCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center group hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <cat.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-semibold mb-2 text-sm">{cat.title}</h4>
              <p className="text-xs text-muted-foreground">{cat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Resource types view */}
      {activeTab === "types" && (
        <motion.div
          key="types"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-4"
        >
          {resourceTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <type.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{type.title}</h4>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Engagement models view */}
      {activeTab === "models" && (
        <motion.div
          key="models"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-3 gap-5"
        >
          {engagementModels.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h4 className="font-semibold text-primary mb-4">{model.title}</h4>
              <ul className="space-y-3">
                {model.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}
