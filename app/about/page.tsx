import { Navigation } from "@/components/navigation"
import { FloatingContact } from "@/components/floating-contact"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Award, Users, Scale, Shield, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="py-16 lg:py-24 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/greybridge-hero-bg.png')",
          opacity: 0.8,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white drop-shadow-lg text-balance">
              About Greybridge Attorneys
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed text-pretty drop-shadow-md">
              Bridging the gap between complex legal issues and accessible solutions
            </p>
          </div>
        </div>
      </section>

      {/* Firm Story Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p className="text-pretty">
                  Greybridge Attorneys was established with a clear purpose: to bridge the gap between complex legal issues
                  and accessible solutions. Many individuals and businesses struggle to navigate the legal system,
                  leading to costly mistakes and missed opportunities.
                </p>
                <p className="text-pretty">
                  Our commitment is to provide clarity, confidence, and exceptional representation—delivered with
                  integrity and precision. We understand that legal challenges can be overwhelming, which is why we
                  focus on making the law accessible and understandable for our clients.
                </p>
                <p className="text-pretty">
                  With specialized expertise in emerging technologies, corporate law, and traditional legal practice
                  areas, we serve as trusted advisors to startups, established businesses, and individuals throughout
                  Abuja and beyond.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>

            {/* Greybridge Attorneys Logo Presentation */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-card rounded-2xl flex flex-col items-center justify-center p-8 border border-accent/30 shadow-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/10 pointer-events-none"></div>
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div className="w-28 h-28 rounded-2xl bg-foreground/5 p-3 flex items-center justify-center border border-accent/20 shadow-inner">
                      <Image
                        src="/images/greybridge-logo-black.png"
                        alt="Greybridge Attorneys Emblem"
                        width={100}
                        height={100}
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground">Greybridge Attorneys</h3>
                      <p className="text-xs uppercase tracking-widest text-accent font-semibold mt-1">
                        Legal Practitioners & Advisors
                      </p>
                    </div>
                    <div className="w-12 h-0.5 bg-accent/60"></div>
                    <p className="text-xs text-muted-foreground italic max-w-[200px]">
                      Justice • Integrity • Excellence
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-accent/40 shadow-lg">
                  <Scale className="w-8 h-8 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Leadership Section */}
      <section className="py-20 bg-muted/20 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              <Users className="w-4 h-4" />
              <span>Leadership & Legal Counsel</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground text-balance">
              Partners & Associates
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Strategic counsel, seasoned advocacy, and executive leadership dedicated to achieving exceptional client outcomes.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Managing Partner Card */}
            <Card className="border-border bg-card hover:border-accent/40 shadow-xl overflow-hidden rounded-3xl transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                {/* Partner Headshot */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative group w-full max-w-sm">
                    <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-accent/30 bg-muted">
                      <Image
                        src="/images/managing-partner.jpg"
                        alt="Abdulsamad Opeyemi Ishola, Esq. - Managing Partner at Greybridge Attorneys"
                        fill
                        className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-accent-foreground shadow-xl border-2 border-background">
                      <Scale className="w-7 h-7" />
                    </div>
                  </div>
                </div>

                {/* Partner Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                      Managing Partner
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                      ABDULSAMAD OPEYEMI ISHOLA, ESQ.
                    </h3>
                    <p className="text-sm font-medium text-accent mt-1">
                      DIL, LL.B, B.L, PGD (in view)
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Abdulsamad Opeyemi Ishola is the Managing Partner of Greybridge Attorneys. He holds a Diploma in Law
                    from Kwara State College of Arabic and Islamic Legal Studies, Ilorin (CAILS), LL.B from Usmanu
                    Danfodiyo University, Sokoto (UDUSOK), and B.L from the Nigerian Law School, Abuja Campus. He is
                    currently pursuing a Postgraduate Diploma at the University of Benin (UNIBEN). He is involved in the
                    Firm&apos;s legal advisory, litigation, commercial, and corporate matters and oversees the day-to-day
                    management of the Firm.
                  </p>

                  <div className="space-y-3 pt-2 border-t border-border">
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-foreground">
                      Key Practice Disciplines:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Legal Advisory & Corporate Practice
                      </span>
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Commercial Law & Transactions
                      </span>
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Superior Court Litigation
                      </span>
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Firm Management
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
                      <Link href="/contact" className="flex items-center gap-2">
                        <span>Book a Consultation</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
                      <a
                        href="https://wa.me/2348107814879?text=Hello, I would like to schedule a consultation with the Managing Partner."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Direct WhatsApp Inquiry
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Partner Card */}
            <Card className="border-border bg-card hover:border-accent/40 shadow-xl overflow-hidden rounded-3xl transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                {/* Partner Headshot */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative group w-full max-w-sm">
                    <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-accent/30 bg-muted">
                      <Image
                        src="/images/fatiu-bolakale-lawal.jpg"
                        alt="Fatiu Bolakale Lawal, Esq. - Partner at Greybridge Attorneys"
                        fill
                        className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-accent-foreground shadow-xl border-2 border-background">
                      <Scale className="w-7 h-7" />
                    </div>
                  </div>
                </div>

                {/* Partner Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                      Partner
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                      FATIU BOLAKALE LAWAL, ESQ.
                    </h3>
                    <p className="text-sm font-medium text-accent mt-1">
                      B.A, LL.B, B.L, MTI , LL.M (in view)
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Fatiu Bolakale Lawal is a Partner at Greybridge Attorneys. He holds a B.A. in History and
                    International Studies and an LL.B from Kwara State University, Malete (KWASU), and a B.L from
                    the Nigerian Law School, Lagos Campus. He is currently pursuing an LL.M at Al-Hikmah University,
                    Ilorin. His practice covers litigation, legal advisory, corporate matters, and legal research.
                  </p>

                  <div className="space-y-3 pt-2 border-t border-border">
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-foreground">
                      Key Practice Disciplines:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Superior Court Litigation
                      </span>
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Legal Advisory
                      </span>
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Corporate Matters
                      </span>
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Legal Research & Strategy
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Partner Card - Kamaldeen Abdulhameed */}
            <Card className="border-border bg-card hover:border-accent/40 shadow-xl overflow-hidden rounded-3xl transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                {/* Partner Headshot */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative group w-full max-w-sm">
                    <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-accent/30 bg-muted">
                      <Image
                        src="/images/kamaldeen-abdulhameed.jpg"
                        alt="Kamaldeen Abdulhameed, Esq. - Partner at Greybridge Attorneys"
                        fill
                        className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-accent-foreground shadow-xl border-2 border-background">
                      <Scale className="w-7 h-7" />
                    </div>
                  </div>
                </div>

                {/* Partner Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                      Partner
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                      KAMALDEEN ABDULHAMEED, ESQ.
                    </h3>
                    <p className="text-sm font-medium text-accent mt-1">
                      LL.B, B.L, AICMC
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Kamaldeen Abdulhameed is a Partner at Greybridge Attorneys and a Legal Practitioner with
                    experience in litigation, property law, corporate and commercial law, and regulatory
                    compliance. He obtained his LL.B from Usmanu Danfodiyo University and his B.L from
                    the Nigerian Law School, Abuja Campus. He is a Certified Associate of the Institute of
                    Chartered Mediators and Conciliators, with competence in dispute resolution, Arbitration
                    and mediation. Kamaldeen is committed to building a forward-thinking legal practice focused
                    on access to justice, corporate governance, and alternative dispute resolution.
                  </p>

                  <div className="space-y-3 pt-2 border-t border-border">
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-foreground">
                      Key Practice Disciplines:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Superior Court Litigation
                      </span>
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Property & Real Estate Law
                      </span>
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Corporate & Commercial Law
                      </span>
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Regulatory Compliance
                      </span>
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Arbitration & Mediation (ICMC)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Associate Card */}
            <Card className="border-border bg-card hover:border-accent/40 shadow-xl overflow-hidden rounded-3xl transition-all duration-300">
              <div className="grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                {/* Associate Headshot */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative group w-full max-w-sm">
                    <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-accent/30 bg-muted">
                      <Image
                        src="/images/comfort-oluwabiyi.jpg"
                        alt="Comfort Oluwabiyi, Esq. - Associate at Greybridge Attorneys"
                        fill
                        className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-accent-foreground shadow-xl border-2 border-background">
                      <Scale className="w-7 h-7" />
                    </div>
                  </div>
                </div>

                {/* Associate Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                      Associate
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                      COMFORT OLUWABIYI, ESQ.
                    </h3>
                    <p className="text-sm font-medium text-accent mt-1">
                      LL.B, B.L
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Comfort Oluwabiyi is an Associate at Greybridge Attorneys. She holds an LL.B from the University of
                    Abuja and a B.L from the Nigerian Law School, Lagos Campus. Her practice covers litigation, legal
                    advisory, corporate matters, legal research, and public sector engagements.
                  </p>

                  <div className="space-y-3 pt-2 border-t border-border">
                    <h4 className="font-semibold text-xs uppercase tracking-wider text-foreground">
                      Key Practice Disciplines:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Superior Court Litigation
                      </span>
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Legal Advisory
                      </span>
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Corporate Matters
                      </span>
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Legal Research
                      </span>
                      <span className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium border border-accent/20">
                        Public Sector Engagements
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-serif text-2xl text-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  To provide exceptional legal representation with professionalism, integrity, and dedication to
                  achieving the best outcomes for our clients.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="font-serif text-2xl text-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                  To become a leading law firm recognised for innovative legal solutions, client trust, and unwavering
                  excellence in the legal profession.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-serif text-xl">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  We uphold the highest ethical standards in all our professional dealings and client relationships.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-serif text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  We strive for excellence in every case, delivering superior legal services and outcomes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-serif text-xl">Client Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Our clients' success is our priority. We provide personalized attention and tailored solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Why Choose Greybridge Attorneys?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Specialized Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deep knowledge in corporate law, technology regulations, AI governance, and emerging legal frameworks
                that affect modern businesses.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Personalized Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every client receives individual attention with legal strategies tailored to their specific needs and
                business objectives.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Proven Results</h3>
              <p className="text-muted-foreground leading-relaxed">
                Track record of successful outcomes in complex legal matters, from startup formations to major
                commercial transactions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Accessible Communication</h3>
              <p className="text-muted-foreground leading-relaxed">
                Clear, jargon-free communication that helps clients understand their legal options and make informed
                decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Let's discuss how we can help you achieve your legal objectives with confidence and clarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Book a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FloatingContact />
    </div>
  )
}

