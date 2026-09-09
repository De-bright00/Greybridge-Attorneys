"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  Landmark,
  Building2,
  Scale,
  Cpu,
  ShieldCheck,
  BookOpen,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MessageCircle,
  Clock,
  Sparkles,
  Pause,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export interface LegalChallenge {
  id: string
  shortLabel: string
  title: string
  category: string
  icon: React.ComponentType<{ className?: string }>
  summary: string
  deliverables: string[]
  metrics: { label: string; value: string }[]
  contactServiceParam: string
  whatsappPrefill: string
}

export const LEGAL_CHALLENGES: LegalChallenge[] = [
  {
    id: "land-acquisition",
    shortLabel: "🏡 Land Acquisition, Sale & Lease",
    title: "Land Acquisition, Sale & Lease",
    category: "Real Estate & Property Law",
    icon: Landmark,
    summary:
      "Navigating land title searches at AGIS, deeds of assignment, developer agreements, Governor's consent, and seamless contract closing to protect your capital against land scams and double-allocations.",
    deliverables: [
      "AGIS Title Search & Boundary Verification",
      "Deed of Assignment & Contract of Sale Drafting",
      "Governor's Consent & Perfection of Title",
      "Commercial Lease Agreements & Tenancy Advisory",
    ],
    metrics: [
      { label: "Jurisdiction", value: "Abuja (FCT) & Nationwide" },
      { label: "Due Diligence", value: "Comprehensive Search" },
      { label: "Escrow & Closing", value: "Secure Structuring" },
    ],
    contactServiceParam: "Real Estate & Property",
    whatsappPrefill: "Hello Greybridge Attorneys, I require legal counsel regarding Land Acquisition, Sale or Lease in Abuja.",
  },
  {
    id: "company-formation",
    shortLabel: "🏢 Company Formation/ Contracts",
    title: "Company Formation/ Contracts",
    category: "Corporate & Commercial Law",
    icon: Building2,
    summary:
      "End-to-end CAC company incorporation, bespoke shareholders' agreements, commercial SLAs, executive employment contracts, and regulatory filings that safeguard your corporate enterprise from day one.",
    deliverables: [
      "CAC Incorporation (Ltd, PLC, NGOs, Joint Ventures)",
      "Founders & Shareholders' Agreement Drafting",
      "Vendor SLAs & Commercial Contract Reviews",
      "Statutory Post-Incorporation Compliance",
    ],
    metrics: [
      { label: "Entity Types", value: "Startups & Conglomerates" },
      { label: "Regulatory Body", value: "CAC, FIRS & SEC" },
      { label: "Turnaround", value: "Expedited Processing" },
    ],
    contactServiceParam: "Corporate & Commercial Law",
    whatsappPrefill: "Hello Greybridge Attorneys, I would like legal advisory on Company Formation and Commercial Contracts.",
  },
  {
    id: "adr-court-representation",
    shortLabel: "⚖️ ADR or Court Representation",
    title: "ADR or Court Representation",
    category: "Litigation & Dispute Resolution",
    icon: Scale,
    summary:
      "Formidable trial and appellate representation across High Courts, the Court of Appeal, and the Supreme Court, paired with commercial arbitration and mediation for prompt, cost-efficient resolution.",
    deliverables: [
      "Superior Court Litigation & Trial Advocacy",
      "Commercial Arbitration & Structured Mediation (ADR)",
      "Debt Recovery & Contractual Enforcement",
      "Injunctions & Emergency Judicial Relief",
    ],
    metrics: [
      { label: "Court Levels", value: "High Court to Supreme Court" },
      { label: "Approach", value: "Strategic & Assertive" },
      { label: "ADR Alternatives", value: "Arbitration & Mediation" },
    ],
    contactServiceParam: "Litigation & Disputes",
    whatsappPrefill: "Hello Greybridge Attorneys, I require legal representation for a court brief or ADR proceeding.",
  },
  {
    id: "tech-ai-law",
    shortLabel: "🤖 AI, Data Privacy & Tech IP",
    title: "AI, Data Privacy & Tech IP",
    category: "Technology & Emerging Governance",
    icon: Cpu,
    summary:
      "Pioneering advisory for tech startups, FinTech platforms, and AI creators navigating NDPR compliance, algorithm governance, cross-border SaaS agreements, and intellectual property monetization.",
    deliverables: [
      "Nigeria Data Protection Act (NDPR) Compliance",
      "AI Governance, Bias & Ethics Advisory",
      "Software IP Licensing & Terms of Service",
      "FinTech Regulatory & Licensing Filings",
    ],
    metrics: [
      { label: "Sector Focus", value: "AI, FinTech & SaaS" },
      { label: "Compliance", value: "NDPC Framework" },
      { label: "Protection", value: "Source Code & IP" },
    ],
    contactServiceParam: "Tech & AI Law",
    whatsappPrefill: "Hello Greybridge Attorneys, I am reaching out regarding AI governance, Data Privacy, and Tech legal counsel.",
  },
  {
    id: "trademark-ip",
    shortLabel: "🛡️ Trademark / Brand Protection",
    title: "Trademark / Brand Protection",
    category: "Intellectual Property Advisory",
    icon: ShieldCheck,
    summary:
      "Safeguarding your distinctive corporate identity, inventions, and creative assets through trademark registration, patent filings, trade secret safeguards, and robust anti-infringement enforcement.",
    deliverables: [
      "Trademark Registry Search & Registration",
      "Copyright Safeguards & Patent Advisory",
      "Cease-and-Desist & Infringement Litigation",
      "IP Commercialization & Licensing Deals",
    ],
    metrics: [
      { label: "Registry", value: "Federal Ministry of Trade" },
      { label: "Scope", value: "National & Regional" },
      { label: "Enforcement", value: "Zero Tolerance for Piracy" },
    ],
    contactServiceParam: "Intellectual Property",
    whatsappPrefill: "Hello Greybridge Attorneys, I want to secure trademark and brand protection for my business.",
  },
  {
    id: "family-estates",
    shortLabel: "📜 Wills, Estates & Family Matters",
    title: "Wills, Estates & Family Matters",
    category: "Private Advisory & Succession",
    icon: BookOpen,
    summary:
      "Discreet, empathetic, and ironclad estate administration, succession planning, living trusts, statutory probate grants, and matrimonial property settlement advisory.",
    deliverables: [
      "Testamentary Wills & Living Trusts Drafting",
      "Probate Grants & Letters of Administration",
      "Matrimonial Settlements & Child Custody",
      "High-Net-Worth Family Estate Governance",
    ],
    metrics: [
      { label: "Confidentiality", value: "Absolute Discretion" },
      { label: "Probate Court", value: "High Court Registry" },
      { label: "Asset Protection", value: "Multi-Generational" },
    ],
    contactServiceParam: "Family Law",
    whatsappPrefill: "Hello Greybridge Attorneys, I would like private counsel on wills, estates, or family legal matters.",
  },
]

export function LegalChallengeSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const activeChallenge = LEGAL_CHALLENGES[currentIndex]

  // Auto-advance timer (5.5 seconds)
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LEGAL_CHALLENGES.length)
    }, 5500)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, currentIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const prefersReducedMotion = useReducedMotion()

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % LEGAL_CHALLENGES.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + LEGAL_CHALLENGES.length) % LEGAL_CHALLENGES.length)
  }

  const ActiveIcon = activeChallenge.icon

  return (
    <section className="py-14 sm:py-20 bg-[#050914] text-white relative overflow-hidden border-y border-[#D4A017]/20">
      {/* Subtle luxury background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4A017]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/30 text-[#F4C542] text-xs font-semibold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>Instant Inquiry Dispatch</span>
            <span className="w-1 h-1 rounded-full bg-[#F4C542]" />
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Motion Showcase</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance">
            What legal challenge can we solve for you?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4A017] to-transparent mx-auto" />
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto text-pretty">
            Select an area of interest or explore the live legal briefs below to schedule direct counsel with our partners.
          </p>
        </div>

        {/* Quick Selection Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
          {LEGAL_CHALLENGES.map((challenge, idx) => {
            const isSelected = currentIndex === idx
            return (
              <button
                key={challenge.id}
                onClick={() => goToSlide(idx)}
                className={`group relative px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 border ${
                  isSelected
                    ? "bg-[#D4A017] text-slate-950 border-[#F4C542] shadow-lg shadow-[#D4A017]/25 font-semibold scale-105"
                    : "bg-white/[0.04] text-gray-300 border-white/10 hover:border-[#D4A017]/40 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                <span>{challenge.shortLabel}</span>
              </button>
            )
          })}
        </div>

        {/* Main Interactive Slide Showcase Card */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative rounded-2xl bg-gradient-to-br from-[#0c1424] via-[#080d19] to-[#04070e] border border-[#D4A017]/30 shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden backdrop-blur-xl">
            {/* Top decorative badge + pagination indicator */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F4C542] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#F4C542] animate-pulse" />
                <span>{activeChallenge.category}</span>
              </div>

              <div className="flex items-center gap-4">
                {/* Auto-slide pause/play indicator */}
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  title={isPaused ? "Resume slideshow" : "Pause slideshow"}
                  aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
                >
                  {isPaused ? <Play className="w-3.5 h-3.5 text-[#F4C542]" /> : <Pause className="w-3.5 h-3.5" />}
                </button>

                {/* Counter */}
                <div className="font-serif text-sm font-bold text-gray-400">
                  <span className="text-[#F4C542] text-base">0{currentIndex + 1}</span>
                  <span className="mx-1 text-white/30">/</span>
                  <span>0{LEGAL_CHALLENGES.length}</span>
                </div>
              </div>
            </div>

            {/* Slide Motion Content */}
            <div className="relative min-h-[380px] sm:min-h-[320px]">
              <motion.div
                key={activeChallenge.id}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-12 gap-8 items-center"
              >
                  {/* Left Column: Core Description & Actions */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A017]/20 to-[#D4A017]/5 border border-[#D4A017]/40 flex items-center justify-center text-[#F4C542] shadow-inner">
                        <ActiveIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          {activeChallenge.title}
                        </h3>
                        <p className="text-xs text-gray-400 font-medium tracking-wide mt-0.5">
                          Direct Briefing & Case Assignment
                        </p>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {activeChallenge.summary}
                    </p>

                    {/* Key Capabilities / Deliverables */}
                    <div className="space-y-2 pt-1">
                      <h4 className="text-xs font-semibold text-[#F4C542] uppercase tracking-wider">
                        Key Legal Protection & Execution:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {activeChallenge.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#F4C542] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-3 w-full">
                      <Button
                        asChild
                        className="w-full sm:w-auto bg-gradient-to-r from-[#D4A017] to-[#F4C542] text-slate-950 hover:opacity-95 font-bold px-5 py-3 rounded-xl shadow-lg shadow-[#D4A017]/20 text-xs sm:text-sm justify-center text-center"
                      >
                        <Link href={`/contact?service=${encodeURIComponent(activeChallenge.contactServiceParam)}`}>
                          <span>Schedule Consultation for this Matter</span>
                          <ArrowRight className="w-4 h-4 ml-1.5" />
                        </Link>
                      </Button>

                      <a
                        href={`https://wa.me/2348107814879?text=${encodeURIComponent(activeChallenge.whatsappPrefill)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-[#D4A017] text-white text-xs sm:text-sm font-semibold transition-colors duration-200 text-center"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        <span>WhatsApp Partner</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: High-Impact Brief Metrics Card */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-xl bg-white/[0.03] border border-white/10 p-5 sm:p-6 space-y-4 shadow-xl">
                      <div className="flex items-center justify-between pb-3 border-b border-white/10">
                        <span className="text-[11px] font-semibold text-[#F4C542] uppercase tracking-wider">
                          Matter Specifications
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">Abuja Practice Group</span>
                      </div>

                      <div className="space-y-3">
                        {activeChallenge.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="flex justify-between items-center text-xs">
                            <span className="text-gray-400">{metric.label}</span>
                            <span className="text-white font-medium">{metric.value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-white/10">
                        <div className="flex items-center gap-2 text-[11px] text-gray-300">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                          <span className="w-2 h-2 rounded-full bg-green-500 -ml-3" />
                          <span>Partners currently accepting briefs in this practice area</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
            </div>

            {/* Bottom Progress & Arrow Navigation Bar */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/10">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {LEGAL_CHALLENGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? "w-8 bg-[#F4C542]" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#D4A017] transition-all duration-200 active:scale-95"
                  aria-label="Previous legal challenge"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-[#D4A017] hover:bg-[#F4C542] text-slate-950 font-bold transition-all duration-200 active:scale-95 shadow-md shadow-[#D4A017]/20"
                  aria-label="Next legal challenge"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Animated Progress Timer Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
              {!isPaused && (
                <motion.div
                  key={currentIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5.5, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-[#D4A017] to-[#F4C542]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
