"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:flex items-center justify-end py-2 text-sm text-muted-foreground border-b border-secondary/30">
          <div className="flex items-center gap-6">
            <a href="tel:9199880582" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              (919) 988-0582
            </a>
            <a
              href="mailto:Legacydetailing2025@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              Legacydetailing2025@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between py-3 sm:py-4">
          <div className="flex items-center">
            <Image
              src="/images/legacylogo.jpg"
              alt="Legacy Mobile Detailing"
              width={50}
              height={50}
              className="rounded-full sm:w-[60px] sm:h-[60px]"
            />
            <div className="ml-2 sm:ml-3">
              <h1 className="text-lg sm:text-xl font-bold text-white leading-tight">Legacy Mobile Detailing</h1>
              <p className="text-xs sm:text-sm text-primary font-medium">We Don't Judge We Detail</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              Book Now
            </Button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-secondary/30 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              <div className="flex flex-col space-y-2 pb-3 border-b border-secondary/30 mb-3">
                <a
                  href="tel:9199880582"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  (919) 988-0582
                </a>
                <a
                  href="mailto:Legacydetailing2025@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  Legacydetailing2025@gmail.com
                </a>
              </div>

              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-primary transition-colors font-medium text-left py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-primary transition-colors font-medium text-left py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-primary transition-colors font-medium text-left py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-primary transition-colors font-medium text-left py-2"
              >
                Contact
              </button>
              <div className="pt-3">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full transition-all duration-300 hover:scale-105"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
