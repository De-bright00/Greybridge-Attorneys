"use client"

import { Phone, MessageCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FloatingContact() {
  const handleCall = () => {
    window.location.href = "tel:+2348107814879"
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/2348107814879?text=Hello, I would like to schedule a consultation.", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <Button
        asChild
        className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 py-3 shadow-xl border-2 border-accent/20 backdrop-blur-sm font-medium"
      >
        <Link href="/contact" className="flex items-center gap-2">
          <Calendar size={20} />
          <span className="hidden sm:inline">Book Consultation</span>
        </Link>
      </Button>

      <Button
        onClick={handleWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl border-2 border-green-400/20 backdrop-blur-sm"
        size="icon"
        title="WhatsApp"
      >
        <MessageCircle size={24} />
      </Button>

      <Button
        onClick={handleCall}
        className="bg-foreground hover:bg-foreground/90 text-background rounded-full p-4 shadow-xl border-2 border-foreground/20 backdrop-blur-sm"
        size="icon"
        title="Call Now"
      >
        <Phone size={24} />
      </Button>
    </div>
  )
}
