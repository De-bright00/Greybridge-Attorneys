"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/2348107814879?text=Hello, I would like to schedule a consultation.", "_blank")
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <Image
              src="/images/greybridge-logo-horizontal.png"
              alt="Greybridge Attorneys"
              width={200}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-background/80 leading-relaxed max-w-md">
              At Greybridge Attorneys, legal representation means excellent outcomes for our clients.
            </p>
            <div className="flex items-center gap-4">
              <Button
                onClick={handleWhatsApp}
                variant="outline"
                size="sm"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <MessageCircle size={16} className="mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold text-background">Quick Links</h3>
            <nav className="space-y-3">
              <Link href="/" className="block text-background/80 hover:text-accent transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-background/80 hover:text-accent transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-background/80 hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="/blog" className="block text-background/80 hover:text-accent transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="block text-background/80 hover:text-accent transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="block text-background/80 hover:text-accent transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-semibold text-background">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0" />
                <span className="text-background/80">Wuye, Abuja</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:+2348107814879" className="text-background/80 hover:text-accent transition-colors">
                  08107814879
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span className="text-background/80">info@greybridgeattorney.com</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-medium text-background">Stay Updated</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">© 2024 Greybridge Attorneys. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-background/60 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-background/60 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
