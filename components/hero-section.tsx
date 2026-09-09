"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Scale } from "lucide-react"
import { InteractiveBookshelf } from "@/components/interactive-bookshelf"

// Easing curve specified in design guidelines
const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Animated Counter Component for Statistics
function AnimatedStatCounter({
  target,
  suffix = "",
  duration = 1.5,
}: {
  target: number
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Triggers at 2.0s to coincide with statistics card reveal
    const startTimeout = setTimeout(() => {
      let startTime: number | null = null
      let animationFrameId: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        const easeOut = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOut * target))

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step)
        } else {
          setCount(target)
        }
      }

      animationFrameId = requestAnimationFrame(step)
      return () => cancelAnimationFrame(animationFrameId)
    }, 2000)

    return () => clearTimeout(startTimeout)
  }, [target, duration])

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

// Magnetic Button Wrapper for Desktop
function MagneticButton({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const prefersReducedMotion = useReducedMotion()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || typeof window === "undefined" || window.innerWidth < 1024) return
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = e.clientX - centerX
    const deltaY = e.clientY - centerY

    const distance = Math.hypot(deltaX, deltaY)
    const maxPull = 5 // max 5px per requirements

    if (distance < 140) {
      const pullFactor = (1 - distance / 140) * maxPull
      const angle = Math.atan2(deltaY, deltaX)
      setOffset({
        x: Math.cos(angle) * pullFactor,
        y: Math.sin(angle) * pullFactor,
      })
    } else {
      setOffset({ x: 0, y: 0 })
    }
  }

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  // Staggered headline words
  const lineOneWords = ["Your", "Trusted"]
  const lineTwoWords = ["Legal", "Partners"]

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050914] text-white flex flex-col justify-between">
      {/* ==================================================== */}
      {/* 4. CINEMATIC BACKGROUND DEPTH (Replaced static image with dynamic 3D library) */}
      {/* ==================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Deep Navy Base */}
        <div className="absolute inset-0 bg-[#050914]" />

        {/* Ambient Animated Gold Glows */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.1, 0.22, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-24 right-1/4 w-[600px] h-[600px] bg-[#D4A017]/10 blur-[180px] rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 -left-20 w-[550px] h-[550px] bg-[#08101F]/90 blur-[160px] rounded-full"
        />

        {/* Architectural Subtle Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,160,23,0.03)_1px,transparent_1px)] bg-[size:120px_100%] opacity-60" />

        {/* Text Readability Gradient Scrim (Guarantees headline clarity) */}
        <div
          style={{
            background:
              "linear-gradient(90deg, #050914 0%, rgba(5,9,20,0.95) 35%, rgba(5,9,20,0.6) 55%, rgba(5,9,20,0) 100%)",
          }}
          className="absolute inset-0 z-[3]"
        />

        {/* Bottom Page Fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent z-[3]" />

        {/* Abstract watermark Scales of Justice outline in lower-right */}
        <div className="absolute -bottom-16 right-0 lg:right-12 w-96 h-96 opacity-[0.04] pointer-events-none">
          <Scale className="w-full h-full text-[#D4A017] stroke-[0.7]" />
        </div>
      </div>

      {/* ==================================================== */}
      {/* 6. MAIN HERO CONTENT CONTAINER */}
      {/* ==================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 min-h-screen flex flex-col justify-between pt-24 sm:pt-28 lg:pt-36 pb-8 sm:pb-10 w-full min-w-0 overflow-x-hidden">
        {/* Main Upper Split: Left Content + Right 3D Bookshelf */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto w-full min-w-0">
          {/* Left Content Column (55% width) */}
          <div className="lg:col-span-6 xl:col-span-7 z-20 space-y-4 sm:space-y-6 relative w-full min-w-0">
            {/* ==================================================== */}
            {/* 7. PREMIUM EYEBROW BADGE (0.4s reveal) */}
            {/* ==================================================== */}
            <div>
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: EASE_PREMIUM }}
                className="inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-[#D4A017]/40 bg-[#D4A017]/10 backdrop-blur-md shadow-[0_0_20px_rgba(212,160,23,0.15)] max-w-full"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4C542] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4C542]" />
                </span>
                <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider text-[#F4C542] uppercase truncate sm:overflow-visible">
                  Premier Legal Counsel in Abuja &amp; Beyond
                </span>
              </motion.div>
            </div>

            {/* ==================================================== */}
            {/* 8. MAIN HEADLINE (0.6s reveal, staggered words) */}
            {/* ==================================================== */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[84px] font-bold tracking-tight leading-[1.08] sm:leading-[0.95] text-balance">
              {/* First phrase: "Your Trusted" in crisp white */}
              <span className="block text-white mb-1">
                {lineOneWords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 50, filter: "blur(10px)" }
                    }
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.9,
                      delay: 0.6 + i * 0.12,
                      ease: EASE_PREMIUM,
                    }}
                    className="inline-block mr-2 sm:mr-4 last:mr-0"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>

              {/* Second phrase: "Legal Partners" in premium gold gradient */}
              <span className="block bg-gradient-to-r from-[#D4A017] via-[#F4C542] to-[#C99216] bg-clip-text text-transparent">
                {lineTwoWords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 50, filter: "blur(10px)" }
                    }
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.9,
                      delay: 0.6 + (i + 2) * 0.12,
                      ease: EASE_PREMIUM,
                    }}
                    className="inline-block mr-2 sm:mr-4 last:mr-0"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* ==================================================== */}
            {/* 9. SUBHEADLINE (1.1s reveal) */}
            {/* ==================================================== */}
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: EASE_PREMIUM }}
              className="text-xs sm:text-base md:text-lg lg:text-[22px] text-white/85 font-light tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1"
            >
              <span>Excellence</span>
              <span className="text-[#D4A017] font-normal">•</span>
              <span>Integrity</span>
              <span className="text-[#D4A017] font-normal">•</span>
              <span>Precision in Legal Solutions</span>
            </motion.p>

            {/* ==================================================== */}
            {/* 10. DESCRIPTION TEXT (1.3s reveal) */}
            {/* ==================================================== */}
            <motion.p
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: EASE_PREMIUM }}
              className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-xl text-pretty font-normal"
            >
              At Greybridge Attorneys, we bridge the gap between complex legal challenges and clear,
              accessible outcomes for forward-thinking businesses, tech startups, and private
              individuals.
            </motion.p>

            {/* ==================================================== */}
            {/* 11 & 12. INTERACTIVE CTA BUTTONS (1.5s reveal) */}
            {/* ==================================================== */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: EASE_PREMIUM }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 w-full sm:w-auto items-stretch sm:items-center"
            >
              {/* Primary CTA Button */}
              <div className="w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="group relative flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-[#D4A017] via-[#F4C542] to-[#F4B000] text-slate-950 font-bold text-sm sm:text-base shadow-[0_4px_25px_rgba(212,160,23,0.3)] hover:shadow-[0_4px_35px_rgba(212,160,23,0.5)] transition-all duration-300 overflow-hidden w-full text-center active:scale-[0.98]"
                >
                  <span className="relative z-10 font-bold tracking-wide">
                    Book a Consultation
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>

              {/* Secondary CTA Button */}
              <div className="w-full sm:w-auto">
                <Link
                  href="/services"
                  className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/30 hover:border-white/70 text-white hover:bg-white/10 backdrop-blur-md text-sm sm:text-base font-medium transition-all duration-300 w-full text-center active:scale-[0.98]"
                >
                  <span>Explore Our Services</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Perspective Interactive Bookshelf (45% width) */}
          <div className="lg:col-span-6 xl:col-span-5 relative z-10 flex items-center justify-center w-full min-w-0 max-w-full overflow-hidden mt-4 lg:mt-0">
            <InteractiveBookshelf />
          </div>
        </div>

        {/* ==================================================== */}
        {/* Lower Anchor: Divider + Statistics + Scroll Indicator */}
        {/* ==================================================== */}
        <div className="w-full relative z-20 pt-4">
          {/* ==================================================== */}
          {/* 15. PREMIUM DIVIDER (1.8s reveal) */}
          {/* ==================================================== */}
          <div className="w-full pb-6 sm:pb-8">
            <motion.div
              initial={prefersReducedMotion ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.8, ease: EASE_PREMIUM }}
              className="h-[1px] w-full origin-left bg-gradient-to-r from-transparent via-[#D4A017]/35 via-white/25 to-transparent"
            />
          </div>

          {/* ==================================================== */}
          {/* 13 & 14. STATISTICS SECTION WITH ANIMATED COUNTERS (2.0s reveal) */}
          {/* ==================================================== */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5 w-full">
            {/* Stat 1: 10+ Practice Disciplines */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0, ease: EASE_PREMIUM }}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
              className="group relative bg-white/[0.06] hover:bg-white/[0.09] backdrop-blur-xl border border-white/10 hover:border-[#D4A017]/60 rounded-xl px-3.5 py-3 sm:px-6 sm:py-4.5 transition-colors duration-300 shadow-lg"
            >
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F4C542] mb-1">
                <AnimatedStatCounter target={10} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm text-[#B8BAC0] font-medium tracking-wide">
                Practice Disciplines
              </p>
            </motion.div>

            {/* Stat 2: 24hrs Response Guarantee */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.1, ease: EASE_PREMIUM }}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
              className="group relative bg-white/[0.06] hover:bg-white/[0.09] backdrop-blur-xl border border-white/10 hover:border-[#D4A017]/60 rounded-xl px-3.5 py-3 sm:px-6 sm:py-4.5 transition-colors duration-300 shadow-lg"
            >
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F4C542] mb-1">
                <AnimatedStatCounter target={24} suffix="hrs" />
              </p>
              <p className="text-xs sm:text-sm text-[#B8BAC0] font-medium tracking-wide">
                Response Guarantee
              </p>
            </motion.div>

            {/* Stat 3: 98% Client Satisfaction */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2, ease: EASE_PREMIUM }}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
              className="group relative bg-white/[0.06] hover:bg-white/[0.09] backdrop-blur-xl border border-white/10 hover:border-[#D4A017]/60 rounded-xl px-3.5 py-3 sm:px-6 sm:py-4.5 transition-colors duration-300 shadow-lg"
            >
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F4C542] mb-1">
                <AnimatedStatCounter target={98} suffix="%" />
              </p>
              <p className="text-xs sm:text-sm text-[#B8BAC0] font-medium tracking-wide">
                Client Satisfaction
              </p>
            </motion.div>

            {/* Stat 4: Abuja Head Office */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.3, ease: EASE_PREMIUM }}
              whileHover={prefersReducedMotion ? {} : { y: -6 }}
              className="group relative bg-white/[0.06] hover:bg-white/[0.09] backdrop-blur-xl border border-white/10 hover:border-[#D4A017]/60 rounded-xl px-3.5 py-3 sm:px-6 sm:py-4.5 transition-colors duration-300 shadow-lg"
            >
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F4C542] mb-1">
                Abuja
              </p>
              <p className="text-xs sm:text-sm text-[#B8BAC0] font-medium tracking-wide">
                Head Office
              </p>
            </motion.div>
          </div>

          {/* ==================================================== */}
          {/* 18. SCROLL INDICATOR (2.5s reveal) */}
          {/* ==================================================== */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5, ease: EASE_PREMIUM }}
            className="hidden sm:flex items-center gap-3 pt-5 text-white/40 select-none"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase font-medium">
              Scroll to explore
            </span>
            <div className="relative w-12 h-[1px] bg-white/20 overflow-hidden">
              <motion.div
                animate={{ x: [-20, 50] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 w-4 h-full bg-[#F4C542]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
