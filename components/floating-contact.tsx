"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Calendar, MessageCircle, Phone } from "lucide-react"

const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function FloatingContact() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const prefersReducedMotion = useReducedMotion()

  const handleCall = () => {
    window.location.href = "tel:+2348107814879"
  }

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/2348107814879?text=Hello, I would like to schedule a consultation with Greybridge Attorneys.",
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-40 flex flex-col items-end gap-3 pointer-events-none select-none"
    >
      {/* 1. Primary Action: Book Consultation (Gold Pill Button) */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 2.0, ease: EASE_PREMIUM }}
        className="pointer-events-auto relative group flex items-center"
      >
        {/* Tooltip */}
        {hoveredButton === "book" && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="hidden md:block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#08101F]/90 backdrop-blur-md border border-[#D4A017]/30 text-white text-xs font-medium whitespace-nowrap shadow-xl"
          >
            Schedule direct legal consultation
          </motion.div>
        )}

        <motion.div
          whileHover={prefersReducedMotion ? {} : { scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          onMouseEnter={() => setHoveredButton("book")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <Link
            href="/contact"
            className="flex items-center gap-2.5 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-gradient-to-r from-[#D4A017] via-[#F4C542] to-[#F4B000] text-[#111111] font-semibold text-sm shadow-[0_4px_25px_rgba(212,160,23,0.4)] hover:shadow-[0_4px_35px_rgba(212,160,23,0.6)] transition-shadow duration-300"
          >
            <Calendar className="w-4 h-4 text-[#111111]" />
            <span className="tracking-wide">Book Consultation</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* 2. Secondary Action: WhatsApp (Green Circular Button) */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 2.15, ease: EASE_PREMIUM }}
        className="pointer-events-auto relative group flex items-center"
      >
        {/* Tooltip */}
        {hoveredButton === "whatsapp" && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="hidden md:block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#08101F]/90 backdrop-blur-md border border-emerald-500/30 text-white text-xs font-medium whitespace-nowrap shadow-xl"
          >
            Chat directly on WhatsApp
          </motion.div>
        )}

        <motion.button
          onClick={handleWhatsApp}
          whileHover={prefersReducedMotion ? {} : { scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          onMouseEnter={() => setHoveredButton("whatsapp")}
          onMouseLeave={() => setHoveredButton(null)}
          aria-label="Direct WhatsApp Consultation"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-colors duration-300"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* 3. Third Action: Direct Phone Call (Dark Navy Circular Button) */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 2.3, ease: EASE_PREMIUM }}
        className="pointer-events-auto relative group flex items-center"
      >
        {/* Tooltip */}
        {hoveredButton === "call" && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="hidden md:block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#08101F]/90 backdrop-blur-md border border-white/20 text-white text-xs font-medium whitespace-nowrap shadow-xl"
          >
            Call +234 810 781 4879
          </motion.div>
        )}

        <motion.button
          onClick={handleCall}
          whileHover={prefersReducedMotion ? {} : { scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
          onMouseEnter={() => setHoveredButton("call")}
          onMouseLeave={() => setHoveredButton(null)}
          aria-label="Call Greybridge Attorneys"
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#08101F] hover:bg-[#0d1a33] text-white border border-white/20 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-colors duration-300"
        >
          <Phone className="w-5 h-5 text-[#F4C542]" />
        </motion.button>
      </motion.div>
    </aside>
  )
}
