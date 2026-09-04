"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { FloatingContact } from "@/components/floating-contact"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MessageCircle, Mail, Clock, Search, HelpCircle, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "booking", label: "Booking & Consultations" },
    { id: "practice", label: "Practice Areas" },
    { id: "startups", label: "Startups & Tech" },
    { id: "corporate", label: "Corporate & Cross-Border" },
    { id: "confidentiality", label: "Confidentiality & Process" },
  ]

  const faqs = [
    {
      id: "item-1",
      category: "booking",
      question: "How do I book a consultation?",
      answer: (
        <>
          <p className="mb-4">Booking a consultation is simple and can be done in several ways:</p>
          <ul className="space-y-2 ml-4">
            <li>• Fill out our online contact form on the Contact page</li>
            <li>• Call us directly at 08107814879 during business hours</li>
            <li>• Send us a WhatsApp message for quick scheduling</li>
            <li>• Email us at info@greybridgeattorney.com with your preferred consultation time</li>
          </ul>
          <p className="mt-4">
            We typically respond within 24 hours to schedule your consultation at a time that works for you.
          </p>
        </>
      ),
    },
    {
      id: "item-2",
      category: "practice",
      question: "What areas of law do you handle?",
      answer: (
        <>
          <p className="mb-4">
            Greybridge Attorneys provides comprehensive legal services across multiple practice areas:
          </p>
          <ul className="space-y-2 ml-4">
            <li>
              • <strong>Corporate & Commercial Law:</strong> Company formation, contracts, M&A, compliance
            </li>
            <li>
              • <strong>Tech & AI Law:</strong> Data privacy, IP protection, AI governance, tech licensing
            </li>
            <li>
              • <strong>Litigation:</strong> Civil, criminal, and commercial dispute resolution
            </li>
            <li>
              • <strong>Real Estate:</strong> Property transactions, leasing, due diligence
            </li>
            <li>
              • <strong>Family Law:</strong> Divorce, custody, succession planning
            </li>
            <li>
              • <strong>Intellectual Property:</strong> Trademarks, copyrights, patents, licensing
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "item-3",
      category: "startups",
      question: "Do you work with startups and tech innovators?",
      answer: (
        <>
          <p className="mb-4">
            Yes! We specialize in working with startups and understand the unique challenges they face. Our
            startup services include:
          </p>
          <ul className="space-y-2 ml-4">
            <li>• Company formation and optimal legal structures</li>
            <li>• Founder agreements and equity arrangements</li>
            <li>• Investment documentation and term sheets</li>
            <li>• Intellectual property protection strategies</li>
            <li>• Employment contracts and equity compensation plans</li>
            <li>• Regulatory compliance and data privacy frameworks</li>
          </ul>
          <p className="mt-4">
            We offer flexible fee structures and understand the budget constraints of early-stage companies.
          </p>
        </>
      ),
    },
    {
      id: "item-4",
      category: "corporate",
      question: "Do you handle international clients and cross-border transactions?",
      answer: (
        <>
          <p className="mb-4">
            Yes, we regularly work with international clients and handle cross-border transactions. Our experience
            includes:
          </p>
          <ul className="space-y-2 ml-4">
            <li>• Foreign investment into Nigerian companies</li>
            <li>• International joint ventures and partnerships</li>
            <li>• Cross-border technology licensing agreements</li>
            <li>• International data privacy compliance</li>
            <li>• Multi-jurisdictional IP protection strategies</li>
          </ul>
          <p className="mt-4">
            We work with international law firms and can coordinate legal services across multiple jurisdictions.
          </p>
        </>
      ),
    },
    {
      id: "item-5",
      category: "practice",
      question: "What makes Greybridge Attorneys different from other law firms?",
      answer: (
        <>
          <p className="mb-4">Several factors set us apart:</p>
          <ul className="space-y-2 ml-4">
            <li>
              • <strong>Tech & AI Specialization:</strong> Deep expertise in emerging technology law
            </li>
            <li>
              • <strong>Startup Focus:</strong> Understanding of the unique needs of growing companies
            </li>
            <li>
              • <strong>Personalized Service:</strong> Direct access to experienced legal counsel
            </li>
            <li>
              • <strong>Clear Communication:</strong> Jargon-free explanations and regular updates
            </li>
            <li>
              • <strong>Flexible Pricing:</strong> Fee structures that work for businesses of all sizes
            </li>
            <li>
              • <strong>Modern Approach:</strong> Leveraging technology for efficient service delivery
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "item-6",
      category: "confidentiality",
      question: "How do you ensure client confidentiality?",
      answer: (
        <>
          <p className="mb-4">
            Client confidentiality is fundamental to our practice. We maintain strict confidentiality through:
          </p>
          <ul className="space-y-2 ml-4">
            <li>• Attorney-client privilege protection</li>
            <li>• Secure document management systems</li>
            <li>• Confidentiality agreements with all staff</li>
            <li>• Encrypted communication channels</li>
            <li>• Strict access controls to client information</li>
          </ul>
          <p className="mt-4">Your sensitive information is protected at every stage of our engagement.</p>
        </>
      ),
    },
    {
      id: "item-7",
      category: "corporate",
      question: "Can you help with ongoing legal compliance for my business?",
      answer: (
        <>
          <p className="mb-4">
            Absolutely. We offer ongoing legal support through retainer arrangements that include:
          </p>
          <ul className="space-y-2 ml-4">
            <li>• Regular compliance reviews and updates</li>
            <li>• Contract review and negotiation</li>
            <li>• Employment law guidance</li>
            <li>• Regulatory change notifications</li>
            <li>• General legal advice and consultation</li>
            <li>• Risk assessment and mitigation strategies</li>
          </ul>
          <p className="mt-4">
            This ensures your business stays compliant while you focus on growth and operations.
          </p>
        </>
      ),
    },
    {
      id: "item-8",
      category: "booking",
      question: "What should I bring to my first consultation?",
      answer: (
        <>
          <p className="mb-4">To make the most of your consultation, please bring:</p>
          <ul className="space-y-2 ml-4">
            <li>• Any relevant documents related to your legal matter</li>
            <li>• A clear summary of your objectives and concerns</li>
            <li>• Timeline requirements or deadlines</li>
            <li>• Questions about the legal process</li>
            <li>• Information about your business or personal circumstances</li>
          </ul>
          <p className="mt-4">
            Don't worry if you don't have all documents ready - we can guide you on what's needed as we proceed.
          </p>
        </>
      ),
    },
  ]

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (typeof faq.answer === "string" && faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && (searchQuery.trim() === "" || matchesSearch)
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/greybridge-hero-bg.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-950/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-md">
              <HelpCircle className="w-4 h-4 text-amber-300" />
              <span className="text-xs sm:text-sm font-semibold text-amber-200 uppercase tracking-wider">
                Client Help Center
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white drop-shadow-lg text-balance">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed text-pretty">
              Clear answers regarding our legal practice areas, startup advisory, fees, and consultation process.
            </p>

            {/* Interactive Search Bar */}
            <div className="pt-4 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search questions (e.g. startup, contracts, fees, AI)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 rounded-2xl bg-card/90 backdrop-blur-md border-border shadow-xl text-foreground text-base focus:ring-accent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full text-xs sm:text-sm transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "border-border hover:border-accent hover:text-accent bg-card"
                }`}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {filteredFaqs.length > 0 ? (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-border bg-card rounded-xl px-6 hover:border-accent/40 transition-colors"
                >
                  <AccordionTrigger className="text-left font-serif text-lg font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-5 border-t border-border/50">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12 bg-card rounded-2xl border border-border p-8 space-y-4">
              <HelpCircle className="w-12 h-12 text-accent mx-auto" />
              <h3 className="font-serif text-xl font-bold text-foreground">No matching questions found</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                We couldn't find an answer for "{searchQuery}". Please reach out to our team directly for immediate assistance.
              </p>
              <Button asChild size="sm" className="bg-primary text-primary-foreground">
                <Link href="/contact">Ask a Lawyer Directly</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We are here to assist. Reach out to our legal team through any of these direct channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-border hover:shadow-xl hover:border-accent/40 transition-all">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <CardTitle className="font-serif text-lg">Call Us Directly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  <a href="tel:+2348107814879" className="text-accent hover:underline font-medium text-base">
                    08107814879
                  </a>
                </CardDescription>
                <p className="text-xs text-muted-foreground mt-2">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-xl hover:border-accent/40 transition-all">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <CardTitle className="font-serif text-lg">WhatsApp Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  <a
                    href="https://wa.me/2348107814879?text=Hello, I would like to schedule a consultation with Greybridge Attorneys."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-medium text-base"
                  >
                    Chat on WhatsApp
                  </a>
                </CardDescription>
                <p className="text-xs text-muted-foreground mt-2">Quick responses within minutes</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-xl hover:border-accent/40 transition-all">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <CardTitle className="font-serif text-lg">Official Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  <a href="mailto:info@greybridgeattorney.com" className="text-accent hover:underline font-medium text-sm">
                    info@greybridgeattorney.com
                  </a>
                </CardDescription>
                <p className="text-xs text-muted-foreground mt-2">24-hour turnaround</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-xl hover:border-accent/40 transition-all">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent">
                  <Clock className="w-6 h-6" />
                </div>
                <CardTitle className="font-serif text-lg">Online Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  <Link href="/contact" className="text-accent hover:underline font-medium text-base">
                    Book Consultation
                  </Link>
                </CardDescription>
                <p className="text-xs text-muted-foreground mt-2">Pick date & case details</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FloatingContact />
    </div>
  )
}

