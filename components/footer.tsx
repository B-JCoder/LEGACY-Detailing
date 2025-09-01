"use client"

import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/legacylogo.jpg"
                  alt="Legacy Mobile Detailing"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <h3 className="text-xl font-bold">Legacy Mobile Detailing</h3>
                  <p className="text-primary font-medium">We Don't Judge We Detail</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-pretty">
                Professional mobile car detailing services across North Carolina. We bring premium detailing directly to
                your location with exceptional results and unmatched convenience.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:9199880582" className="text-gray-300 hover:text-primary transition-colors">
                    (919) 988-0582
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a
                    href="mailto:Legacydetailing2025@gmail.com"
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    Legacydetailing2025@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <div className="text-gray-300 text-sm">
                    <p>Serving:</p>
                    <p>Greenville, Kinston,</p>
                    <p>Farmville, New Bern</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Legacy Mobile Detailing. All rights reserved. | Professional mobile car detailing services in North
              Carolina.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
