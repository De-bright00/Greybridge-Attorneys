"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  Building2,
  ShieldCheck,
  Scale,
  Cpu,
  Landmark,
  BookOpen,
  Briefcase,
  Award,
  ArrowRight,
} from "lucide-react"

export interface LegalBook {
  id: string
  title: string
  subtitle: string
  volume: string
  icon: React.ComponentType<{ className?: string }>
  leatherGradient: string
  accentFoil: string
  href: string
}

export const LEGAL_BOOKS: LegalBook[] = [
  {
    id: "corporate",
    title: "Corporate Law",
    subtitle: "M&A, CAC & Governance",
    volume: "VOL. I",
    icon: Building2,
    leatherGradient: "from-[#0a1224] via-[#080d19] to-[#04070d]",
    accentFoil: "#F4C542",
    href: "/services",
  },
  {
    id: "ip",
    title: "Intellectual Property",
    subtitle: "Trademarks & Patents",
    volume: "VOL. II",
    icon: ShieldCheck,
    leatherGradient: "from-[#0c1626] via-[#09101d] to-[#050912]",
    accentFoil: "#D4A017",
    href: "/services",
  },
  {
    id: "litigation",
    title: "Dispute Resolution",
    subtitle: "Superior Court Litigation",
    volume: "VOL. III",
    icon: Scale,
    leatherGradient: "from-[#101420] via-[#0a0e18] to-[#04060c]",
    accentFoil: "#F4C542",
    href: "/services",
  },
  {
    id: "tech-ai",
    title: "Technology & Startups",
    subtitle: "AI Governance & FinTech",
    volume: "VOL. IV",
    icon: Cpu,
    leatherGradient: "from-[#081329] via-[#060e1d] to-[#03070f]",
    accentFoil: "#F4C542",
    href: "/services",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Land Due Diligence & Deeds",
    volume: "VOL. V",
    icon: Landmark,
    leatherGradient: "from-[#14121e] via-[#0d0c14] to-[#06050a]",
    accentFoil: "#D4A017",
    href: "/services",
  },
  {
    id: "family",
    title: "Family Law",
    subtitle: "Succession, Wills & Estates",
    volume: "VOL. VI",
    icon: BookOpen,
    leatherGradient: "from-[#0d1522] via-[#090e18] to-[#04070c]",
    accentFoil: "#F4C542",
    href: "/services",
  },
  {
    id: "employment",
    title: "Employment Law",
    subtitle: "Labor & Executive Contracts",
    volume: "VOL. VII",
    icon: Briefcase,
    leatherGradient: "from-[#0b1320] via-[#070d17] to-[#03060c]",
    accentFoil: "#D4A017",
    href: "/services",
  },
  {
    id: "commercial",
    title: "Commercial Advisory",
    subtitle: "Cross-Border Transactions",
    volume: "VOL. VIII",
    icon: Award,
    leatherGradient: "from-[#0e1728] via-[#0a101d] to-[#05080f]",
    accentFoil: "#F4C542",
    href: "/services",
  },
]

export function InteractiveBookshelf() {
  const prefersReducedMotion = useReducedMotion()
  const [isDesktop, setIsDesktop] = useState(false)
  const [hoveredBookId, setHoveredBookId] = useState<string | null>(null)

  // Focus index tracked with lerp smoothing
  const [focusIndex, setFocusIndex] = useState(3.5)
  const targetIndexRef = useRef(3.5)
  const currentIndexRef = useRef(3.5)

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  // Smooth lerp loop with inertia: currentPosition += (targetPosition - currentPosition) * 0.08
  const isAnimatingRef = useRef(false)

  const startAnimationLoop = () => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true

    const updateMotion = () => {
      const diff = targetIndexRef.current - currentIndexRef.current
      if (Math.abs(diff) > 0.001) {
        currentIndexRef.current += diff * 0.08
        setFocusIndex(currentIndexRef.current)
        requestAnimationFrame(updateMotion)
      } else {
        currentIndexRef.current = targetIndexRef.current
        setFocusIndex(targetIndexRef.current)
        isAnimatingRef.current = false
      }
    }

    requestAnimationFrame(updateMotion)
  }

  // Mouse interaction across hero window:
  // Mouse moves left -> books shift left and reveal books on right
  // Mouse moves right -> books shift right and reveal books on left
  useEffect(() => {
    if (!isDesktop || prefersReducedMotion) return

    const handleWindowMouseMove = (e: MouseEvent) => {
      const normX = e.clientX / window.innerWidth // 0 to 1
      // Map 0 -> 1 to book range (0 to 7)
      const newTarget = Math.max(0, Math.min(7, normX * 7))
      targetIndexRef.current = newTarget
      startAnimationLoop()
    }

    // Initial settle
    startAnimationLoop()

    window.addEventListener("mousemove", handleWindowMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleWindowMouseMove)
  }, [isDesktop, prefersReducedMotion])

  return (
    <div className="relative w-full max-w-full h-[320px] sm:h-[440px] lg:h-[480px] flex items-center justify-center select-none overflow-hidden">
      {/* 3D Perspective Stage on Desktop */}
      <div
        style={{
          perspective: "1500px",
          transformStyle: "preserve-3d",
        }}
        className="hidden lg:flex items-center justify-center relative w-full h-full"
      >
        {/* Books Perspective Arc */}
        {LEGAL_BOOKS.map((book, index) => {
          const delta = index - focusIndex
          const absDelta = Math.abs(delta)
          const isDirectlyHovered = hoveredBookId === book.id

          // Spacing calculations
          const baseSpacing = 68 // overlapping width
          let translateX = delta * baseSpacing
          if (delta > 0) translateX += 22
          if (delta < 0) translateX -= 22

          // 3D Perspective Arc (Center is closer, outer books curve back)
          let translateZ = 80 - Math.pow(absDelta, 1.35) * 32
          if (isDirectlyHovered) translateZ += 32

          // 3D rotation around Y axis:
          // Maximum rotateY between -20deg and 20deg
          let rotateY = Math.max(-18, Math.min(18, -delta * 6.5))
          if (isDirectlyHovered) rotateY = 0

          // Subtle organic tilt
          const rotateZ = Math.max(-3, Math.min(3, -delta * 0.7))

          // Scale
          let scale = 1.03 - absDelta * 0.035
          if (isDirectlyHovered) scale = 1.06

          // Brightness & depth of field
          const brightness = Math.max(0.65, 1.12 - absDelta * 0.12)
          const blur = absDelta > 2.8 ? (absDelta - 2.8) * 0.75 : 0

          // Stacking order: center / focused book on top
          const zIndex = Math.round(50 - absDelta * 5 + (isDirectlyHovered ? 25 : 0))

          const Icon = book.icon

          return (
            <Link
              key={book.id}
              href={book.href}
              onMouseEnter={() => setHoveredBookId(book.id)}
              onMouseLeave={() => setHoveredBookId(null)}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
                zIndex,
                filter: `brightness(${brightness}) blur(${blur}px)`,
                willChange: "transform, filter",
              }}
              className="absolute w-[205px] h-[315px] rounded-[3px] transition-shadow duration-300 group cursor-pointer focus:outline-none"
            >
              {/* Hardcover Book Wrapper */}
              <div
                className={`relative w-full h-full rounded-[3px] bg-gradient-to-br ${book.leatherGradient} border border-[#D4A017]/35 shadow-[-12px_22px_35px_rgba(0,0,0,0.85)] group-hover:border-[#F4C542]/80 group-hover:shadow-[0_0_35px_rgba(244,197,66,0.35),-15px_25px_40px_rgba(0,0,0,0.9)] transition-all duration-300 overflow-hidden flex flex-col justify-between p-4.5`}
              >
                {/* Book Spine Bevel Highlight (Left side of hardcover) */}
                <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-black/70 via-white/10 to-transparent pointer-events-none" />

                {/* Classic Gold Ribbed Spine Bands */}
                <div className="absolute left-0 top-9 w-4.5 h-[2px] bg-gradient-to-r from-[#F4C542]/50 to-transparent pointer-events-none" />
                <div className="absolute left-0 top-24 w-4.5 h-[2px] bg-gradient-to-r from-[#F4C542]/50 to-transparent pointer-events-none" />
                <div className="absolute left-0 bottom-24 w-4.5 h-[2px] bg-gradient-to-r from-[#F4C542]/50 to-transparent pointer-events-none" />
                <div className="absolute left-0 bottom-9 w-4.5 h-[2px] bg-gradient-to-r from-[#F4C542]/50 to-transparent pointer-events-none" />

                {/* Gilded Book Page Thickness (Right edge of book) */}
                <div className="absolute top-1.5 bottom-1.5 -right-2.5 w-2.5 bg-gradient-to-r from-[#d4af37]/80 via-[#f7eed4] to-[#8a6d2b] rounded-r-xs shadow-md pointer-events-none" />

                {/* Inner Embossed Gold Border Filigree */}
                <div className="absolute inset-2 border border-[#D4A017]/25 rounded-[2px] pointer-events-none" />
                <div className="absolute inset-2.5 border border-[#D4A017]/10 rounded-[1px] pointer-events-none" />

                {/* Top: Volume Number & Codex Label */}
                <div className="relative z-10 text-center pt-2">
                  <span className="text-[8.5px] font-sans font-semibold tracking-[0.25em] text-[#F4C542]/80 uppercase block">
                    GREYBRIDGE CODEX
                  </span>
                  <span className="text-[8px] font-sans font-medium tracking-[0.2em] text-[#B8BAC0]/60 uppercase block mt-0.5">
                    {book.volume}
                  </span>
                </div>

                {/* Center: Legal Seal & Gold Foil Stamped Title */}
                <div className="relative z-10 text-center my-auto px-1">
                  {/* Gold Emblem Crest */}
                  <div className="w-11 h-11 mx-auto rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 flex items-center justify-center shadow-[0_0_15px_rgba(212,160,23,0.2)] mb-3 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-[#F4C542]" />
                  </div>

                  {/* Gold Foil Title */}
                  <h3 className="font-serif text-lg font-bold tracking-wide leading-snug uppercase bg-gradient-to-r from-[#D4A017] via-[#F4C542] to-[#C99216] bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    {book.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-[9px] tracking-wider text-[#B8BAC0]/70 uppercase mt-1 font-medium line-clamp-2">
                    {book.subtitle}
                  </p>
                </div>

                {/* Bottom: Subtle Gold Filigree and Interactive Hover Tag */}
                <div className="relative z-10 text-center pb-2">
                  {/* Subtle filigree line */}
                  <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4A017]/50 to-transparent mx-auto mb-2" />

                  {/* Hover Tag */}
                  <div className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#F4C542] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Explore Area</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Mobile Touch Carousel (< 1024px) */}
      <div className="lg:hidden w-full max-w-full overflow-x-auto scrollbar-none flex gap-3.5 snap-x snap-mandatory px-4 py-3 touch-pan-x">
        {LEGAL_BOOKS.map((book) => {
          const Icon = book.icon
          return (
            <Link
              key={book.id}
              href={book.href}
              className="flex-shrink-0 snap-center w-[175px] sm:w-[210px] h-[260px] sm:h-[310px] rounded-[3px] bg-gradient-to-br from-[#0a1224] via-[#080d19] to-[#04070d] border border-[#D4A017]/40 shadow-xl flex flex-col justify-between p-3.5 sm:p-4.5 relative"
            >
              {/* Inner gold border */}
              <div className="absolute inset-2 border border-[#D4A017]/20 rounded-[2px] pointer-events-none" />

              <div className="text-center pt-2">
                <span className="text-[9px] font-sans font-semibold tracking-[0.2em] text-[#F4C542] uppercase block">
                  {book.volume}
                </span>
              </div>

              <div className="text-center my-auto">
                <div className="w-11 h-11 mx-auto rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 flex items-center justify-center shadow-md mb-3">
                  <Icon className="w-5 h-5 text-[#F4C542]" />
                </div>
                <h3 className="font-serif text-lg font-bold tracking-wide leading-snug uppercase bg-gradient-to-r from-[#D4A017] via-[#F4C542] to-[#C99216] bg-clip-text text-transparent">
                  {book.title}
                </h3>
                <p className="text-[9.5px] tracking-wider text-[#B8BAC0]/80 uppercase mt-1 font-medium">
                  {book.subtitle}
                </p>
              </div>

              <div className="text-center pb-2">
                <div className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-[#F4C542]">
                  <span>Explore Practice Area</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
