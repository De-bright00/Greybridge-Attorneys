"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { FloatingContact } from "@/components/floating-contact"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@greybridgeattorney.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          "Case Type": formData.caseType || "General Legal Consultation",
          Message: formData.message,
          _subject: `New Legal Consultation Request - ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      })

      const data = await response.json()

      if (response.ok || data.success === "true" || data.success === true) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          caseType: "",
          message: "",
        })
      } else {
        throw new Error(data.message || "Failed to submit request. Please try again.")
      }
    } catch (err: any) {
      console.error("FormSubmit Error:", err)
      setSubmitStatus("error")
      setErrorMessage(
        err.message || "An unexpected error occurred. Please contact us directly via phone or WhatsApp."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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
              Contact Us
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed text-pretty drop-shadow-md">
              Ready to discuss your legal needs? We're here to help you achieve your objectives with clarity and
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Book a Consultation</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and our legal team will get back to you within 24 hours to schedule your consultation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" ? (
                  <div className="p-8 rounded-xl bg-accent/10 border border-accent/30 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto text-accent">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">Consultation Request Received!</h3>
                    <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out to Greybridge Attorneys. Your details have been submitted directly to our legal counsel. We will review your matter and contact you within 24 hours.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        onClick={() => setSubmitStatus("idle")}
                        variant="outline"
                        className="border-accent text-accent hover:bg-accent/10"
                      >
                        Submit Another Inquiry
                      </Button>
                      <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                        <a
                          href="https://wa.me/2348107814879?text=Hello, I just submitted a consultation request on your website."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Chat on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitStatus === "error" && (
                      <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 flex items-start gap-3 text-destructive text-sm">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">Submission Issue</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{errorMessage}</p>
                        </div>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          disabled={isSubmitting}
                          className="border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          disabled={isSubmitting}
                          className="border-border"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          disabled={isSubmitting}
                          className="border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="caseType">Case Type *</Label>
                        <Select
                          value={formData.caseType}
                          onValueChange={(value) => handleInputChange("caseType", value)}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger className="border-border">
                            <SelectValue placeholder="Select case type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Corporate & Commercial Law">Corporate & Commercial Law</SelectItem>
                            <SelectItem value="Tech & AI Law">Tech & AI Law</SelectItem>
                            <SelectItem value="Litigation & Disputes">Litigation & Disputes</SelectItem>
                            <SelectItem value="Real Estate & Property">Real Estate & Property</SelectItem>
                            <SelectItem value="Family Law">Family Law</SelectItem>
                            <SelectItem value="Intellectual Property">Intellectual Property</SelectItem>
                            <SelectItem value="Other Legal Matters">Other Legal Matters</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please describe your legal matter and any specific questions you have..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        disabled={isSubmitting}
                        className="min-h-32 border-border"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting Request...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Request Consultation
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Get in Touch</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Multiple ways to reach us for your convenience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">
                        <a href="tel:+2348107814879" className="text-accent hover:underline">
                          08107814879
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@greybridgeattorney.com" className="text-accent hover:underline">
                          info@greybridgeattorney.com
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">WhatsApp</h4>
                      <p className="text-muted-foreground">
                        <a
                          href="https://wa.me/2348107814879?text=Hello, I would like to schedule a consultation."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline"
                        >
                          Send Message
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground">Quick responses during business hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Office Location</h4>
                      <p className="text-muted-foreground">Wuye, Abuja</p>
                      <p className="text-sm text-muted-foreground">Federal Capital Territory, Nigeria</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Monday - Friday</span>
                      <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Saturday</span>
                      <span className="text-muted-foreground">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-foreground">Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Emergency consultations available by appointment
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-8">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">Visit Our Office</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Located in the heart of Wuye, Abuja, we're easily accessible for in-person consultations.
            </p>
          </div>

          <div className="bg-muted/50 rounded-lg h-96 flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center space-y-2">
              <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground font-medium">Interactive Map</p>
              <p className="text-sm text-muted-foreground">Wuye, Abuja Office Location</p>
              <p className="text-xs text-muted-foreground">Map integration can be added here</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Ready to Move Forward?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Don't let legal challenges hold you back. Contact Greybridge Attorneys today and take the first step toward
              resolving your legal matters with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                <a
                  href="https://wa.me/2348107814879?text=Hello, I would like to schedule a consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+2348107814879">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 08107814879
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Have questions about our services? Check out our{" "}
                <a href="/faq" className="text-accent hover:underline font-medium">
                  FAQ page
                </a>{" "}
                or contact us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FloatingContact />
    </div>
  )
}
