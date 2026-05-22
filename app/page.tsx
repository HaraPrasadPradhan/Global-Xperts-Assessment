"use client"

import { motion } from "framer-motion"
import { Slide, SlideContent } from "@/components/presentation/slide"
import { AnimatedHeading, FadeIn, StaggerContainer, StaggerItem } from "@/components/presentation/animated-text"
import { StatCard } from "@/components/presentation/animated-counter"
import { ParallaxBackground } from "@/components/presentation/parallax-background"
import { ServicesGrid } from "@/components/presentation/services-grid"
import { GlobalPresenceMap } from "@/components/presentation/global-presence"
import { AIProductsShowcase } from "@/components/presentation/ai-products"
import { CertificationsSection } from "@/components/presentation/certifications"
import { CoESection } from "@/components/presentation/coe-section"
import { ManagedServicesSection, SecuritySection } from "@/components/presentation/managed-services"
import { SlideNavigation, ScrollIndicator, Header } from "@/components/presentation/navigation"
import { ITProfessionalServicesSection } from "@/components/presentation/it-professional-services"
import { FieldEngineeringSection } from "@/components/presentation/field-engineering"
import { HelpDeskSection } from "@/components/presentation/help-desk"
import { CloudServicesSection } from "@/components/presentation/cloud-services"
import { CiscoMigrationSection } from "@/components/presentation/cisco-migration"
import { TechnologiesSection } from "@/components/presentation/technologies"
import { SmartResourcingSection } from "@/components/presentation/smart-resourcing"
import { LogisticsSection } from "@/components/presentation/logistics"
import { CablingSection } from "@/components/presentation/cabling"
import { ValueProposition } from "@/components/presentation/value-proposition"
import { NetworkInfraSection } from "@/components/presentation/network-infra"
import { Mail, Globe, ArrowRight, Sparkles } from "lucide-react"

export default function GXTPresentation() {
  return (
    <main className="relative">
      <ParallaxBackground />
      <Header />
      <SlideNavigation />

      {/* HERO SLIDE */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm">A Planet Convergence Company</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gradient">GlobalXperts</span>
            <br />
            <span className="text-foreground/90">Technology</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Customized Network Services
            <br className="hidden md:block" />
            Scalable, Simplified IT Solutions
            <br className="hidden md:block" />
            Business-Centric Technology Enablement
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#services"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium inline-flex items-center gap-2 hover:bg-primary/90 transition-all"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass rounded-full font-medium hover:bg-primary/10 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Floating stats preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { value: "2017", label: "Established" },
              { value: "130+", label: "Countries" },
              { value: "1000+", label: "Resources" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <ScrollIndicator />
      </section>

      {/* ABOUT SLIDE */}
      <Slide id="about">
        <SlideContent>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <AnimatedHeading className="text-4xl md:text-5xl font-bold" gradient>
                Empowering Global IT Excellence
              </AnimatedHeading>
              
              <FadeIn delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Since 2017, GlobalXperts Technology has been delivering customized network services 
                  and scalable IT solutions to businesses worldwide. With offices across India, UAE, 
                  EU, USA, and UK, we bring localized expertise with global reach.
                </p>
              </FadeIn>

              <StaggerContainer delay={0.4} className="space-y-4">
                {[
                  "ISO 27001, GDPR & ITIL Compliant",
                  "Dedicated NOC & Service Delivery Centres",
                  "200+ In-house Experts | 1000+ Global Resources",
                  "24/7 Support Across 130+ Countries"
                ].map((item) => (
                  <StaggerItem key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatCard value={200} suffix="+" label="In-house Experts" delay={0.2} />
              <StatCard value={1000} suffix="+" label="Global Resources" delay={0.3} />
              <StatCard value={130} suffix="+" label="Countries Covered" delay={0.4} />
              <StatCard value={1500} suffix="+" label="Certified Engineers" delay={0.5} />
            </div>
          </div>
        </SlideContent>
      </Slide>

      {/* GLOBAL PRESENCE SLIDE */}
      <Slide id="global">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Global Presence
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Operating across strategic regions with localized expertise and a skilled global team
              </p>
            </FadeIn>
          </div>
          <GlobalPresenceMap />
        </SlideContent>
      </Slide>

      {/* SERVICES OVERVIEW SLIDE */}
      <Slide id="services">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Services & Solutions
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive IT solutions tailored to your business needs
              </p>
            </FadeIn>
          </div>
          <ServicesGrid />
        </SlideContent>
      </Slide>

      {/* IT PROFESSIONAL SERVICES SLIDE */}
      <Slide id="it-pro">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              IT Professional Services
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Remote and onsite services covering cloud, datacenter, collaboration, and enterprise productivity
              </p>
            </FadeIn>
          </div>
          <ITProfessionalServicesSection />
        </SlideContent>
      </Slide>

      {/* GLOBAL FIELD ENGINEERING SLIDE */}
      <Slide id="field">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Global Field Engineering
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                1500+ certified engineers across 130+ countries delivering 99.5% SLA achievement
              </p>
            </FadeIn>
          </div>
          <FieldEngineeringSection />
        </SlideContent>
      </Slide>

      {/* MANAGED SERVICES SLIDE */}
      <Slide id="managed">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Managed IT Infrastructure
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Holistic IT management with integrated NOC and SOC for end-to-end protection
              </p>
            </FadeIn>
          </div>
          <ManagedServicesSection />
        </SlideContent>
      </Slide>

      {/* HELP DESK SLIDE */}
      <Slide id="helpdesk">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Help Desk Services for EUC
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Centralized desktop services, remote support, and end-user computing solutions
              </p>
            </FadeIn>
          </div>
          <HelpDeskSection />
        </SlideContent>
      </Slide>

      {/* NETWORK INFRASTRUCTURE SLIDE */}
      <Slide id="network">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Network Infrastructure Services
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                End-to-end network services for physical, hybrid, and cloud-based environments
              </p>
            </FadeIn>
          </div>
          <NetworkInfraSection />
        </SlideContent>
      </Slide>

      {/* SECURITY SLIDE */}
      <Slide id="security">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Enterprise Cyber Security
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive security from data protection to cloud security
              </p>
            </FadeIn>
          </div>
          <SecuritySection />
        </SlideContent>
      </Slide>

      {/* CLOUD INTEGRATION SLIDE */}
      <Slide id="cloud">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Cloud Integration Services
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                IaaS, PaaS, SaaS, and Hybrid cloud solutions with assessment and container services
              </p>
            </FadeIn>
          </div>
          <CloudServicesSection />
        </SlideContent>
      </Slide>

      {/* CISCO MIGRATION SLIDE */}
      <Slide id="cisco">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Cisco Collaboration Migration
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Streamline and modernize Cisco Collaboration environments with our Tuki tool
              </p>
            </FadeIn>
          </div>
          <CiscoMigrationSection />
        </SlideContent>
      </Slide>

      {/* TECHNOLOGIES SLIDE */}
      <Slide id="technologies">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Technologies & OEM Coverage
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Multivendor support across UC, Cloud, Security, Data Center, and more
              </p>
            </FadeIn>
          </div>
          <TechnologiesSection />
        </SlideContent>
      </Slide>

      {/* SMART RESOURCING SLIDE */}
      <Slide id="resourcing">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Smart Resourcing
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                AI-Driven talent management, workforce planning, and flexible engagement models
              </p>
            </FadeIn>
          </div>
          <SmartResourcingSection />
        </SlideContent>
      </Slide>

      {/* AI SOLUTIONS SLIDE */}
      <Slide id="ai">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              AI-Powered Solutions
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Intelligent automation and analytics for modern enterprises - DVAR, FIELD AI, Productivity Tracker
              </p>
            </FadeIn>
          </div>
          <AIProductsShowcase />
        </SlideContent>
      </Slide>

      {/* COE SLIDE */}
      <Slide id="coe">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Dedicated Center of Excellence
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Elevating service quality through specialized expertise and continuous improvement
              </p>
            </FadeIn>
          </div>
          <CoESection />
        </SlideContent>
      </Slide>

      {/* LOGISTICS SLIDE */}
      <Slide id="logistics">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Transportation & Logistics
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Seamless logistics solutions for global IT equipment through our logistics alliance partnership
              </p>
            </FadeIn>
          </div>
          <LogisticsSection />
        </SlideContent>
      </Slide>

      {/* CABLING SLIDE */}
      <Slide id="cabling">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Cabling Solutions
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Complete structured cabling solutions - CAT cables, fiber optics, patch panels, and more
              </p>
            </FadeIn>
          </div>
          <CablingSection />
        </SlideContent>
      </Slide>

      {/* CERTIFICATIONS SLIDE */}
      <Slide id="certifications">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Certifications & Partners
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                ISO 27001 certified, GDPR compliant, ITIL standards - strategic technology partnerships
              </p>
            </FadeIn>
          </div>
          <CertificationsSection />
        </SlideContent>
      </Slide>

      {/* VALUE PROPOSITION SLIDE */}
      <Slide id="value">
        <SlideContent>
          <div className="text-center mb-12">
            <AnimatedHeading className="text-4xl md:text-5xl font-bold mb-4" gradient>
              Adding Value to Our Customers
            </AnimatedHeading>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From planning to execution, all under one roof with dedicated account management
              </p>
            </FadeIn>
          </div>
          <ValueProposition />
        </SlideContent>
      </Slide>

      {/* CONTACT SLIDE */}
      <section id="contact" className="min-h-screen flex items-center justify-center relative px-6 py-20">
        <SlideContent>
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient">{"Let's Build"}</span>
                <br />
                <span className="text-foreground">Together</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Ready to transform your IT infrastructure? Connect with our team of experts today.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <a
                  href="mailto:gxt.sales@globalxperts.org"
                  className="group glass rounded-2xl p-6 flex items-center gap-4 hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Email us</div>
                    <div className="font-semibold">gxt.sales@globalxperts.org</div>
                  </div>
                </a>

                <a
                  href="https://www.globalxperts.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass rounded-2xl p-6 flex items-center gap-4 hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">Visit website</div>
                    <div className="font-semibold">www.globalxperts.org</div>
                  </div>
                </a>
              </div>
            </FadeIn>

            {/* Group Companies */}
            <FadeIn delay={0.5}>
              <div className="glass rounded-2xl p-6 mb-8">
                <h4 className="font-semibold mb-4 text-primary">Group Companies</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                  <div>GlobalXperts Technology Pvt Ltd - India</div>
                  <div>GlobalXperts Technology OU - Estonia</div>
                  <div>GlobalXperts Technology FZCO - UAE</div>
                  <div>Planet Convergence, LLC - USA</div>
                  <div>Planet Convergence Ltd - UK</div>
                </div>
              </div>
            </FadeIn>

            {/* Footer */}
            <FadeIn delay={0.6}>
              <div className="pt-8 border-t border-border">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-background font-bold">GX</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold">GlobalXperts Technology</div>
                    <div className="text-xs text-muted-foreground">A Planet Convergence Company</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  India | UAE | EU | USA | UK
                </p>
              </div>
            </FadeIn>
          </div>
        </SlideContent>
      </section>
    </main>
  )
}
