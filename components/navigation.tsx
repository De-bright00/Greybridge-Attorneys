"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"

const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const pathname = usePathname()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ]

  return (
    <motion.header
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: EASE_PREMIUM }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#050914]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
          <Image
            src="/images/greybridge-logo-horizontal.png"
            alt="Greybridge Attorneys"
            width={200}
            height={40}
            priority
            className="h-9 sm:h-10 w-auto brightness-0 invert object-contain"
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav
          onMouseLeave={() => setHoveredIndex(null)}
          className="hidden md:flex items-center space-x-1 lg:space-x-2"
        >
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#F4C542]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <span>{item.name}</span>

                {/* Animated Gold Underline on Hover or Active */}
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-2 right-2 h-[2px] bg-gradient-to-r from-[#D4A017] to-[#F4C542] rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                {hoveredIndex === null && isActive && (
                  <span className="absolute -bottom-1 left-2 right-2 h-[2px] bg-[#D4A017]/80 rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right: Book Consultation Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4A017] via-[#F4C542] to-[#F4B000] text-[#111111] font-semibold text-sm shadow-[0_2px_15px_rgba(212,160,23,0.25)] hover:shadow-[0_4px_25px_rgba(212,160,23,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="p-2 text-white/90 hover:text-[#F4C542] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4A017]/50 rounded-lg"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ==================================================== */}
      {/* 21. FULL-SCREEN MOBILE NAVIGATION OVERLAY */}
      {/* ==================================================== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_PREMIUM }}
            className="fixed inset-0 z-50 bg-[#050914]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-24 md:hidden"
          >
            {/* Top Bar with Logo and Close Button */}
            <div className="flex items-center justify-between">
              <Image
                src="/images/greybridge-logo-horizontal.png"
                alt="Greybridge Attorneys"
                width={160}
                height={32}
                className="h-8 w-auto brightness-0 invert object-contain"
              />
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2 text-white/90 hover:text-[#F4C542] transition-colors focus:outline-none rounded-lg"
              >
                <X size={28} />
              </button>
            </div>

            {/* Navigation Links with Staggered Reveal */}
            <nav className="flex flex-col space-y-6 my-auto py-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.08 * index,
                    ease: EASE_PREMIUM,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-4xl text-white hover:text-[#F4C542] transition-colors block py-1"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Consultation Action at Bottom of Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.4, ease: EASE_PREMIUM }}
              className="pt-6 border-t border-white/10"
            >
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-4 text-center rounded-xl bg-gradient-to-r from-[#D4A017] via-[#F4C542] to-[#F4B000] text-[#111111] font-bold text-lg shadow-xl tracking-wide"
              >
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
