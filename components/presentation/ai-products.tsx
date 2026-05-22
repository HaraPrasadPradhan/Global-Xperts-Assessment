"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Check, ChevronRight, Sparkles, Users, Cpu, BarChart3, Clock, Zap } from "lucide-react"

const aiProducts = [
  {
    id: "dvar",
    name: "DVAR",
    tagline: "AI-Powered Talent Platform",
    description: "One-stop AI-enabled Talent Onboarding and Analysis Tool",
    features: [
      "AI-Powered Candidate Evaluation",
      "Automated Interview Scheduling",
      "Real-time Analytics Dashboard",
      "Simple & User-Friendly UI",
      "Streamlined Workflow"
    ],
    icon: Users,
    gradient: "from-primary to-accent"
  },
  {
    id: "field-ai",
    name: "FIELD AI",
    tagline: "Field Engineering App",
    description: "One-stop AI-enabled Field Engineering Management App",
    features: [
      "Role-based access for Admin, Manager, Engineer, Client",
      "Real-time dashboards & progress tracking",
      "AI-supported task prioritization",
      "Live engineer location tracking",
      "Voice notes, image capture & expense reports"
    ],
    icon: Cpu,
    gradient: "from-accent to-primary"
  },
  {
    id: "productivity",
    name: "Productivity Tracker",
    tagline: "AI-Enabled Timesheet Portal",
    description: "Real-time productivity tracking with AI-driven insights",
    features: [
      "Automatic productivity calculation",
      "Location & image verification",
      "AI-driven performance analytics",
      "Admin/HR/Auditor dashboards",
      "Automatic reminders & alerts"
    ],
    icon: BarChart3,
    gradient: "from-primary via-accent to-primary"
  }
]

export function AIProductsShowcase() {
  const [activeProduct, setActiveProduct] = useState(aiProducts[0])
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="space-y-12">
      {/* Product selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {aiProducts.map((product) => (
          <motion.button
            key={product.id}
            onClick={() => setActiveProduct(product)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeProduct.id === product.id
                ? "bg-primary text-primary-foreground"
                : "glass hover:bg-primary/10"
            }`}
          >
            {product.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Product showcase */}
      <motion.div
        key={activeProduct.id}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        {/* Product info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeProduct.gradient} p-0.5`}>
              <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                <activeProduct.icon className="w-7 h-7 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gradient">{activeProduct.name}</h3>
              <p className="text-muted-foreground text-sm">{activeProduct.tagline}</p>
            </div>
          </div>
          
          <p className="text-lg text-foreground/80">
            {activeProduct.description}
          </p>

          <ul className="space-y-3">
            {activeProduct.features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground/80">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center gap-2 text-primary font-medium group"
          >
            Learn more about {activeProduct.name}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Product visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className={`glass rounded-3xl p-8 relative overflow-hidden`}>
            {/* Animated background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${activeProduct.gradient} opacity-10`} />
            
            {/* Mock interface */}
            <div className="relative space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <span className="font-semibold">{activeProduct.name} Dashboard</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Active", value: "24", icon: Users },
                  { label: "Tasks", value: "156", icon: Zap },
                  { label: "Hours", value: "2.4k", icon: Clock },
                ].map((stat) => (
                  <div key={stat.label} className="bg-background/50 rounded-xl p-3 text-center">
                    <stat.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                    <div className="text-lg font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Activity bars */}
              <div className="space-y-2">
                {[85, 72, 90, 65].map((value, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Task {i + 1}</span>
                      <span>{value}%</span>
                    </div>
                    <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={`h-full bg-gradient-to-r ${activeProduct.gradient} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-4 -right-4 w-16 h-16 glass rounded-2xl flex items-center justify-center"
          >
            <Sparkles className="w-8 h-8 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
