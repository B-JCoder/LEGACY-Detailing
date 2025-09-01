"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    date: "",
    time: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your booking request! We'll contact you within 24 hours to confirm your appointment.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Book Your Detail Today</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Ready to give your vehicle the care it deserves? Fill out the form below or give us a call. We'll get back
              to you within 24 hours to confirm your appointment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Schedule Your Service</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service">Service Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="interior">Interior Only ($80)</SelectItem>
                          <SelectItem value="exterior">Exterior Only ($60)</SelectItem>
                          <SelectItem value="full">Full Detail ($120)</SelectItem>
                          <SelectItem value="clay-seal">Clay & Seal ($180)</SelectItem>
                          <SelectItem value="custom">Custom Quote</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="location">Service Location *</Label>
                      <Select onValueChange={(value) => handleInputChange("location", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="greenville">Greenville</SelectItem>
                          <SelectItem value="kinston">Kinston</SelectItem>
                          <SelectItem value="farmville">Farmville</SelectItem>
                          <SelectItem value="new-bern">New Bern</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8am">8:00 AM</SelectItem>
                          <SelectItem value="10am">10:00 AM</SelectItem>
                          <SelectItem value="12pm">12:00 PM</SelectItem>
                          <SelectItem value="2pm">2:00 PM</SelectItem>
                          <SelectItem value="4pm">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your vehicle, specific concerns, or special requests..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Book My Detail
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:9199880582" className="text-muted-foreground hover:text-primary">
                        (919) 988-0582
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:Legacydetailing2025@gmail.com"
                        className="text-muted-foreground hover:text-primary"
                      >
                        Legacydetailing2025@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Service Areas</p>
                      <p className="text-muted-foreground">Greenville, Kinston, Farmville, New Bern</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-muted-foreground">Mon-Sat: 8AM-6PM</p>
                      <p className="text-muted-foreground">Sunday: By Appointment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <Instagram className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Follow us for before/after photos, detailing tips, and special offers!
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Quick Response Guarantee</h3>
                  <p className="text-sm opacity-90">
                    We respond to all booking requests within 24 hours. For urgent requests, call us directly at (919)
                    988-0582.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
