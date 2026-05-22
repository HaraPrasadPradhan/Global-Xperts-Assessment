"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronDown, Mail, ExternalLink } from "lucide-react"

const slides = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "global", label: "Global" },
  { id: "services", label: "Services" },
  { id: "it-pro", label: "IT Pro" },
  { id: "field", label: "Field Eng" },
  { id: "managed", label: "Managed IT" },
  { id: "helpdesk", label: "Help Desk" },
  { id: "network", label: "Network" },
  { id: "security", label: "Security" },
  { id: "cloud", label: "Cloud" },
  { id: "cisco", label: "Cisco" },
  { id: "technologies", label: "Tech" },
  { id: "resourcing", label: "Resourcing" },
  { id: "ai", label: "AI Solutions" },
  { id: "coe", label: "CoE" },
  { id: "logistics", label: "Logistics" },
  { id: "cabling", label: "Cabling" },
  { id: "certifications", label: "Certs" },
  { id: "value", label: "Value" },
  { id: "contact", label: "Contact" },
]

export function SlideNavigation() {
  const [activeSlide, setActiveSlide] = useState("hero")
  const { scrollYProgress } = useScroll()
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = slides.map(s => document.getElementById(s.id))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSlide(slides[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSlide = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block max-h-[90vh] overflow-y-auto scrollbar-hide"
    >
      <div className="relative py-2">
        {/* Progress line */}
        <div className="absolute left-1.5 top-2 bottom-2 w-0.5 bg-border">
          <motion.div
            style={{ height: progressHeight }}
            className="w-full bg-primary"
          />
        </div>

        {/* Dots */}
        <div className="flex flex-col gap-2 relative">
          {slides.map((slide) => (
            <button
              key={slide.id}
              onClick={() => scrollToSlide(slide.id)}
              className="group flex items-center gap-2 relative"
            >
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeSlide === slide.id
                    ? "bg-primary scale-125"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
              <span
                className={`text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${
                  activeSlide === slide.id ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {slide.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll to explore</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-5 h-5 text-primary" />
      </motion.div>
    </motion.div>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-background font-bold text-lg">GX</span>
          </div>
          <div>
            <div className="font-bold text-lg leading-none">GlobalXperts</div>
            <div className="text-xs text-muted-foreground">A Planet Convergence Company</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:gxt.sales@globalxperts.org"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden lg:inline">gxt.sales@globalxperts.org</span>
          </a>
          <a
            href="https://www.globalxperts.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Visit Website
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.header>
  )
}
