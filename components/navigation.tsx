"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background/95 backdrop-blur-sm shadow-lg border-b border-accent/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/greybridge-logo-horizontal.png"
              alt="Greybridge Attorneys"
              width={200}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-accent transition-colors font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/services"
              className="text-foreground hover:text-accent transition-colors font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/blog"
              className="text-foreground hover:text-accent transition-colors font-medium relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/faq"
              className="text-foreground hover:text-accent transition-colors font-medium relative group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
            </Link>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg px-6 py-2">
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-accent p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-2 bg-background/95 backdrop-blur-sm border-t border-accent/20">
              <Link
                href="/"
                className="block px-4 py-3 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-4 py-3 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="block px-4 py-3 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/faq"
                className="block px-4 py-3 text-foreground hover:text-accent hover:bg-accent/5 transition-colors rounded-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <div className="px-4 py-2">
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
