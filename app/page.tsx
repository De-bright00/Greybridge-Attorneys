"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { FloatingContact } from "@/components/floating-contact"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building2,
  Cpu,
  Scale,
  Home,
  Users,
  BookOpen,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  PhoneCall,
  MessageCircle,
  Briefcase,
  ChevronRight,
  Award,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [selectedCaseType, setSelectedCaseType] = useState<string>("corporate")

  const practiceAreas = [
    {
      id: "corporate",
      icon: Building2,
      title: "Corporate & Commercial Law",
      shortDesc: "Company incorporation, contract architecture, regulatory compliance, and M&A transactions.",
      detailedDesc:
        "We empower startups, growing enterprises, and established conglomerates with ironclad commercial contracts, corporate restructuring, partnership agreements, and regulatory advisory.",
      features: [
        "Company Formation & CAC Registration",
        "Commercial Contracts & SLAs",
        "Mergers, Acquisitions & Joint Ventures",
        "Corporate Governance & Board Advisory",
      ],
      linkText: "Explore Corporate Law",
    },
    {
      id: "tech-ai",
      icon: Cpu,
      title: "Tech & AI Law",
      shortDesc: "Pioneering AI governance, data privacy compliance, technology licensing, and FinTech frameworks.",
      detailedDesc:
        "Nigeria's cutting-edge practice for tech founders and innovators. We guide AI developers, SaaS companies, and digital platforms through emerging AI ethics, NDPR data privacy, and IP rights.",
      features: [
        "AI Governance & Regulatory Compliance",
        "NDPR & Global Data Privacy Audits",
        "SaaS & Technology Licensing Agreements",
        "FinTech & Emerging Tech Advisory",
      ],
      linkText: "Explore Tech & AI Law",
    },
    {
      id: "litigation",
      icon: Scale,
      title: "Litigation & Dispute Resolution",
      shortDesc: "Strategic advocacy in civil, commercial, appellate litigation, and international arbitration.",
      detailedDesc:
        "Relentless representation and strategic dispute mediation. Our litigation counsel defends your legal rights across superior courts of record and commercial arbitration tribunals.",
      features: [
        "Commercial & Contract Dispute Resolution",
        "Alternative Dispute Resolution (ADR) & Arbitration",
        "Civil & Appellate Court Advocacy",
        "Debt Recovery & Asset Protection",
      ],
      linkText: "Explore Litigation",
    },
    {
      id: "real-estate",
      icon: Home,
      title: "Real Estate & Property Law",
      shortDesc: "Secure property conveyancing, title search due diligence, land documentation, and leases.",
      detailedDesc:
        "Protecting your real estate investments in Abuja and across Nigeria with rigorous title verification, governor's consent processing, tenancy drafting, and developer joint ventures.",
      features: [
        "Title Verification & Due Diligence Searches",
        "Deed of Assignment & Conveyancing",
        "Commercial Leases & Tenancy Agreements",
        "Real Estate Development Joint Ventures",
      ],
      linkText: "Explore Real Estate",
    },
    {
      id: "ip",
      icon: ShieldCheck,
      title: "Intellectual Property",
      shortDesc: "Trademark registration, patent filings, copyright protection, and anti-infringement enforcement.",
      detailedDesc:
        "Defending your brand identity and inventions. We secure trademark registrations, copyright protection, and negotiate licensing agreements to monetize your creative and industrial assets.",
      features: [
        "Trademark & Brand Registration",
        "Copyright Documentation & Licensing",
        "Patent Filings & Industrial Designs",
        "IP Infringement Defense & Cease/Desist",
      ],
      linkText: "Explore Intellectual Property",
    },
    {
      id: "family",
      icon: Users,
      title: "Family & Succession Law",
      shortDesc: "Compassionate legal counsel for estate planning, wills, probate, custody, and matrimonial matters.",
      detailedDesc:
        "Providing discreet, empathetic, and thorough legal counsel for estate administration, wills, trusts, divorce proceedings, child custody, and matrimonial property distribution.",
      features: [
        "Wills, Trusts & Succession Planning",
        "Probate & Letters of Administration",
        "Matrimonial & Divorce Proceedings",
        "Child Custody & Maintenance Orders",
      ],
      linkText: "Explore Family Law",
    },
  ]

  const quickCases = [
    { id: "corporate", label: "🏢 Form a Company / Contracts", route: "/contact" },
    { id: "tech-ai", label: "🤖 AI, Data Privacy & Tech IP", route: "/contact" },
    { id: "real-estate", label: "🏡 Land Due Diligence & Purchase", route: "/contact" },
    { id: "litigation", label: "⚖️ Dispute or Court Representation", route: "/contact" },
    { id: "ip", label: "🛡️ Trademark / Brand Protection", route: "/contact" },
    { id: "family", label: "📜 Wills, Estates & Family Matters", route: "/contact" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden py-20 lg:py-28">
        {/* Background Image - Vividly visible */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-100 transition-transform duration-1000"
          style={{ backgroundImage: "url('/greybridge-hero-bg.png')" }}
        ></div>

        {/* Cinematic Gradient Scrim - Keeps picture vivid while delivering high contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-slate-950/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/40 to-slate-950/90 pointer-events-none"></div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 backdrop-blur-md shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-700">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-amber-200 uppercase">
                Premier Legal Counsel in Abuja & Beyond
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] drop-shadow-md text-balance">
                Your Trusted <span className="text-amber-300 drop-shadow-sm">Legal Partners</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-light tracking-wide drop-shadow text-pretty">
                Excellence • Integrity • Precision in Legal Solutions
              </p>
            </div>

            {/* Lead Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto text-pretty font-normal drop-shadow">
              At Greybridge Attorneys, we bridge the gap between complex legal challenges and clear, accessible outcomes
              for forward-thinking businesses, tech startups, and private individuals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold shadow-xl hover:shadow-amber-500/25 text-base sm:text-lg px-8 py-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/30 hover:border-white text-white hover:bg-white/10 text-base sm:text-lg px-8 py-6 rounded-xl bg-slate-900/40 backdrop-blur-md transition-all duration-300"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>

            {/* Quick trust metrics ticker */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-white/15">
              <div className="p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-2xl sm:text-3xl font-bold text-amber-300 font-serif">10+</p>
                <p className="text-xs text-gray-300">Practice Disciplines</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-2xl sm:text-3xl font-bold text-amber-300 font-serif">24h</p>
                <p className="text-xs text-gray-300">Response Guarantee</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-2xl sm:text-3xl font-bold text-amber-300 font-serif">98%</p>
                <p className="text-xs text-gray-300">Client Satisfaction</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <p className="text-2xl sm:text-3xl font-bold text-amber-300 font-serif">Abuja</p>
                <p className="text-xs text-gray-300">FCT Headquarters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quick Consultation Matcher */}
      <section className="py-12 bg-muted/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-6 sm:p-8 border border-accent/30 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Instant Inquiry Dispatch</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                What legal challenge can we solve for you?
              </h2>
              <p className="text-sm text-muted-foreground">
                Select your area of interest to schedule tailored legal counsel directly:
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-end max-w-xl">
              {quickCases.map((qc) => (
                <Button
                  key={qc.id}
                  asChild
                  variant={selectedCaseType === qc.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCaseType(qc.id)}
                  className={`rounded-lg text-xs sm:text-sm transition-all duration-200 ${
                    selectedCaseType === qc.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "border-border hover:border-accent hover:text-accent bg-background"
                  }`}
                >
                  <Link href={qc.route}>{qc.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Practice Area Explorer */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              <Briefcase className="w-4 h-4" />
              <span>Full-Spectrum Legal Services</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground text-balance">
              Our Core Legal Practice Areas
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Deep legal knowledge in Corporate Law, Tech & AI Governance, Dispute Resolution, Real Estate, Intellectual
              Property, and Family Law.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {practiceAreas.map((area, idx) => {
              const Icon = area.icon
              const isActive = activeTab === idx
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 border ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                      : "bg-card text-muted-foreground border-border hover:border-accent/40 hover:text-foreground"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-accent"}`} />
                  <span>{area.title}</span>
                </button>
              )
            })}
          </div>

          {/* Active Tab Preview Card */}
          <div className="bg-card rounded-2xl border border-accent/20 shadow-xl overflow-hidden p-6 sm:p-10 transition-all duration-500">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                    {(() => {
                      const ActiveIcon = practiceAreas[activeTab].icon
                      return <ActiveIcon className="w-6 h-6" />
                    })()}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                      {practiceAreas[activeTab].title}
                    </h3>
                    <p className="text-xs text-accent font-semibold uppercase tracking-wider mt-0.5">
                      Practice Area Spotlight
                    </p>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {practiceAreas[activeTab].detailedDesc}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="font-semibold text-sm text-foreground uppercase tracking-wide">Key Capabilities:</h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {practiceAreas[activeTab].features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                    <Link href="/contact" className="flex items-center gap-2">
                      <span>Schedule Consultation for this Area</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-border hover:bg-accent/10">
                    <Link href="/services">View All Legal Services</Link>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm bg-muted/40 rounded-2xl p-6 border border-border space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border">
                    <span className="text-xs font-semibold text-accent uppercase">Why Greybridge</span>
                    <Award className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-sm font-medium text-foreground italic">
                    "At Greybridge Attorneys, legal representation means excellent outcomes for our clients."
                  </p>
                  <div className="space-y-2 text-xs text-muted-foreground pt-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      <span>Available for Urgent Consultations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      <span>Wuye, Abuja Legal Office</span>
                    </div>
                  </div>
                  <Button asChild variant="secondary" size="sm" className="w-full mt-2">
                    <a
                      href="https://wa.me/2348107814879?text=Hello, I would like to inquire about your legal services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp (08107814879)</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with High-Impact Visual */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                  <Scale className="w-4 h-4" />
                  <span>About Our Firm</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground text-balance">
                  About Greybridge Attorneys
                </h2>
                <div className="w-20 h-1 bg-accent"></div>
              </div>

              <div className="space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p className="text-xl font-medium text-foreground">
                  Greybridge Attorneys was founded with a clear purpose: to bridge the gap between complex legal issues
                  and accessible solutions.
                </p>
                <p>
                  We focus on making the law accessible and understandable for our clients, serving as trusted advisors
                  to startups, established businesses, and private individuals throughout Abuja and Nigeria.
                </p>
                <p className="text-lg font-medium text-accent">
                  At Greybridge Attorneys, legal representation means excellent outcomes for our clients.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-serif font-bold text-foreground">Integrity & Diligence</h4>
                  <p className="text-xs text-muted-foreground mt-1">Upholding the highest ethical standards across all briefs.</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border">
                  <h4 className="font-serif font-bold text-foreground">Modern & Proactive</h4>
                  <p className="text-xs text-muted-foreground mt-1">Leveraging technology for rapid and accurate execution.</p>
                </div>
              </div>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 bg-transparent"
              >
                <Link href="/about" className="flex items-center gap-2">
                  <span>Learn More About Our Firm</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-accent/30">
                  <Image
                    src="/justice-statue-professional.jpg"
                    alt="Lady Justice - Symbol of Legal Excellence at Greybridge Attorneys"
                    width={450}
                    height={550}
                    className="rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <p className="text-foreground font-serif text-lg font-semibold">
                      Justice • Integrity • Excellence
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Greybridge Attorneys • Abuja, Nigeria
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              <span>Publications & Commentary</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground text-balance">
              Blog
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Authoritative legal analysis, commercial advisories, and emerging technology law commentaries from Greybridge Attorneys.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-border bg-card/60 backdrop-blur-sm p-8 sm:p-12 text-center rounded-2xl border-accent/30 shadow-lg space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mx-auto">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                  Inaugural Articles Coming Soon
                </h3>
                <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
                  Our legal team is curating in-depth articles on Nigerian corporate law, AI compliance frameworks,
                  real estate due diligence, and startup intellectual property.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                  <Link href="/blog" className="flex items-center gap-2">
                    <span>Visit Blog Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  <Link href="/contact">Inquire for Direct Advisory</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* High-Conversion Bottom CTA Banner */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-balance">
            Ready to Secure Your Legal Objectives?
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
            Schedule a confidential consultation with Greybridge Attorneys today. We respond promptly within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 py-6 rounded-xl shadow-xl"
            >
              <Link href="/contact" className="flex items-center gap-2">
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground px-8 py-6 rounded-xl"
            >
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

