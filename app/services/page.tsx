"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { FloatingContact } from "@/components/floating-contact"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Cpu, Scale, Home, Users, Shield, PhoneCall } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const [filter, setFilter] = useState("all")

  const services = [
    {
      id: "corporate",
      category: "business",
      icon: Building2,
      title: "Corporate & Commercial Law",
      tagline: "Empowering businesses through sound corporate structuring and contract precision.",
      desc: "We advise businesses on company formation, contract architecture, regulatory compliance, corporate governance, and cross-border transactions that drive sustainable growth.",
      items: [
        "Company formation, CAC registration & Post-incorporation filings",
        "Commercial contract drafting, negotiation & risk assessment",
        "Mergers, acquisitions, joint ventures & partnerships",
        "Corporate governance, regulatory compliance & board advisory",
        "Commercial licensing, restructuring & shareholder agreements",
      ],
    },
    {
      id: "tech-ai",
      category: "tech",
      icon: Cpu,
      title: "Tech & AI Law",
      tagline: "Pioneering legal solutions for artificial intelligence, fintech, and digital platforms.",
      desc: "Our firm supports tech innovators, software developers, and venture-backed startups with data privacy, algorithmic governance, and legal frameworks for cutting-edge technology.",
      items: [
        "AI governance frameworks, ethics & algorithmic compliance",
        "Nigeria Data Protection Act (NDPA) & NDPR audits",
        "Technology transfer & SaaS licensing agreements",
        "FinTech regulatory advisory, sandboxes & compliance",
        "Startup legal structuring, founder agreements & vesting",
      ],
    },
    {
      id: "litigation",
      category: "disputes",
      icon: Scale,
      title: "Litigation & Dispute Resolution",
      tagline: "Tenacious advocacy and strategic arbitration for complex legal conflicts.",
      desc: "We represent corporate clients and individuals in civil, commercial, and appellate proceedings with relentless dedication to achieving justice and defending legal rights.",
      items: [
        "Superior court litigation & commercial advocacy",
        "Alternative dispute resolution (ADR) & mediation",
        "International & domestic commercial arbitration",
        "Contractual breach disputes & debt recovery",
        "Employment, labor relations & executive disputes",
      ],
    },
    {
      id: "real-estate",
      category: "property",
      icon: Home,
      title: "Real Estate & Property Law",
      tagline: "Securing high-value property investments with rigorous title due diligence.",
      desc: "Whether purchasing, leasing, or developing real estate in Abuja and across Nigeria, we provide end-to-end title searches, conveyancing, and dispute-free property acquisition.",
      items: [
        "Title search verification & land registry due diligence",
        "Deed of assignment drafting & governor's consent perfection",
        "Commercial leasing, tenancy contracts & property management",
        "Real estate development joint ventures & estate structuring",
        "Land dispute settlement & compensation advisory",
      ],
    },
    {
      id: "ip",
      category: "tech",
      icon: Shield,
      title: "Intellectual Property",
      tagline: "Safeguarding your brands, inventions, and creative masterpieces.",
      desc: "Protecting your competitive advantage through comprehensive trademark registration, patent filings, copyright protection, and assertive infringement enforcement.",
      items: [
        "Trademark searches, registrations & renewals in Nigeria",
        "Copyright protection, documentation & digital rights",
        "Patent filing assistance & industrial designs",
        "IP licensing, royalty frameworks & franchise agreements",
        "Infringement defense, cease & desist, and IP litigation",
      ],
    },
    {
      id: "family",
      category: "private",
      icon: Users,
      title: "Family & Succession Law",
      tagline: "Compassionate, discreet, and structured legal guidance for private matters.",
      desc: "From estate planning and wills to child custody and divorce proceedings, our dedicated attorneys provide empathetic counsel and strong legal representation.",
      items: [
        "Wills, testamentary trusts & estate administration",
        "Probate applications & letters of administration",
        "Divorce, legal separation & matrimonial property division",
        "Child custody, maintenance & guardianship proceedings",
        "Adoption processes & family settlement agreements",
      ],
    },
  ]

  const categories = [
    { id: "all", label: "All Practice Areas" },
    { id: "business", label: "Corporate & Commercial" },
    { id: "tech", label: "Tech, AI & IP" },
    { id: "disputes", label: "Disputes & Litigation" },
    { id: "property", label: "Real Estate & Land" },
    { id: "private", label: "Family & Estate" },
  ]

  const filteredServices = services.filter((s) => filter === "all" || s.category === filter)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/greybridge-hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-950/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-md">
              <span className="text-xs sm:text-sm font-semibold text-amber-200 uppercase tracking-wider">
                Full-Service Legal Solutions
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white drop-shadow-lg text-balance">
              Our Legal Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed text-pretty">
              Comprehensive legal solutions engineered for corporate enterprises, innovative startups, and private clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with Interactive Filter */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={filter === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(cat.id)}
                className={`rounded-full text-xs sm:text-sm transition-all duration-200 ${
                  filter === cat.id
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "border-border hover:border-accent hover:text-accent bg-card"
                }`}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredServices.map((service) => {
              const Icon = service.icon
              return (
                <Card
                  key={service.id}
                  className="border-border bg-card hover:shadow-2xl hover:border-accent/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <CardTitle className="font-serif text-2xl group-hover:text-accent transition-colors">
                          {service.title}
                        </CardTitle>
                        <p className="text-xs text-accent font-medium mt-0.5">{service.tagline}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{service.desc}</p>

                    <div className="space-y-2.5 pt-2 border-t border-border">
                      <h4 className="font-semibold text-xs uppercase tracking-wider text-foreground">
                        Practice Capabilities:
                      </h4>
                      <ul className="space-y-2">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border flex items-center justify-between">
                      <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                        <Link href="/contact" className="flex items-center gap-2">
                          <span>Book Consultation for this Area</span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* High-Impact Consultation Banner */}
      <section className="py-16 bg-muted/40 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Need Tailored Legal Advice?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Whether you are launching a tech venture, securing high-value real estate, or resolving a corporate brief,
            our team is ready to assist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg px-8 py-6">
              <Link href="/contact" className="flex items-center gap-2">
                <span>Schedule a Consultation</span>
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted px-8 py-6">
              <a href="tel:+2348107814879" className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>Call 08107814879</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <FloatingContact />
    </div>
  )
}

