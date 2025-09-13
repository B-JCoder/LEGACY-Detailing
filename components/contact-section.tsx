"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [service, setService] = useState("")
  const [location, setLocation] = useState("")
  const [time, setTime] = useState("")

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Book Your Detail Today</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Ready to give your vehicle the care it deserves? Fill out the form below or give us a call. We will get back
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
                <form
                  action="https://formsubmit.co/Legacydetailing2025@gmail.com"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label>Service Type *</Label>
                      <Select name="service" required onValueChange={(value) => setService(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full Detail Service ($200)">Full Detail Service ($200)</SelectItem>
                          <SelectItem value="Interior Only Service ($150)">Interior Only Service ($150)</SelectItem>
                          <SelectItem value="Exterior Only Service ($80)">Exterior Only Service ($80)</SelectItem>
                          <SelectItem value="Clay and Seal Service ($135)">Clay and Seal Service ($135)</SelectItem>
                          <SelectItem value="Headlight Restoration ($85)">Headlight Restoration ($85)</SelectItem>
                          <SelectItem value="Hair Removal ($50)">Hair Removal ($50)</SelectItem>
                          <SelectItem value="Seat/Carpet Shampooing ($75)">Seat/Carpet Shampooing ($75)</SelectItem>
                          <SelectItem value="Clay Bar Service ($60)">Clay Bar Service ($60)</SelectItem>
                          <SelectItem value="Custom Quote">Custom Quote</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="service" value={service} />
                    </div>
                    <div>
                      <Label>Service Location *</Label>
                      <Select name="location" required onValueChange={(value) => setLocation(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Greenville">Greenville</SelectItem>
                          <SelectItem value="Kinston">Kinston</SelectItem>
                          <SelectItem value="Farmville">Farmville</SelectItem>
                          <SelectItem value="New Bern">New Bern</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="location" value={location} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input id="date" name="date" type="date" />
                    </div>
                    <div>
                      <Label>Preferred Time</Label>
                      <Select name="time" onValueChange={(value) => setTime(value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8:00 AM">8:00 AM</SelectItem>
                          <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                          <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                          <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                          <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="time" value={time} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your vehicle, specific concerns, or special requests..."
                      rows={4}
                    />
                  </div>

                  {/* Hidden Fields (optional features) */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Book My Detail
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
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
                      <p className="text-muted-foreground">Mon–Sat: 8AM–6PM</p>
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
                      className="border-primary text-primary hover:bg-primary hover:text-primary
-foreground bg-transparent"
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
