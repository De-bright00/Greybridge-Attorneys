import { Navigation } from "@/components/navigation"
import { FloatingContact } from "@/components/floating-contact"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Sparkles, ArrowRight, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
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
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="text-xs sm:text-sm font-semibold text-amber-200 uppercase tracking-wider">
                Publications & Editorial
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white drop-shadow-lg text-balance">
              Blog
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed text-pretty">
              Authoritative legal analysis, commercial advisories, and emerging tech governance from Greybridge Attorneys.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border bg-card/60 backdrop-blur-sm p-8 sm:p-14 text-center rounded-3xl border-accent/30 shadow-xl space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-accent/10 flex items-center justify-center text-accent mx-auto shadow-inner">
              <BookOpen className="w-10 h-10" />
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                Inaugural Articles Coming Soon
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-base sm:text-lg">
                We are preparing comprehensive legal analyses, practical compliance guides, and regulatory updates
                tailored for businesses, tech innovators, and property investors in Nigeria.
              </p>
            </div>

            <div className="pt-4 grid sm:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
              <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-1">
                <span className="text-xs font-semibold text-accent uppercase">Upcoming Topic</span>
                <h4 className="font-serif font-bold text-sm text-foreground">AI Governance in Nigeria</h4>
                <p className="text-xs text-muted-foreground">Navigating NDPA & tech regulation.</p>
              </div>

              <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-1">
                <span className="text-xs font-semibold text-accent uppercase">Upcoming Topic</span>
                <h4 className="font-serif font-bold text-sm text-foreground">Startup Legal Architecture</h4>
                <p className="text-xs text-muted-foreground">Cap tables, vesting & IP rights.</p>
              </div>

              <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-1">
                <span className="text-xs font-semibold text-accent uppercase">Upcoming Topic</span>
                <h4 className="font-serif font-bold text-sm text-foreground">Real Estate Due Diligence</h4>
                <p className="text-xs text-muted-foreground">Land registry title verification.</p>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Contact Our Legal Team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <FloatingContact />
    </div>
  )
}

