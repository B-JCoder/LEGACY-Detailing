"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Star, ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-car-being-detailed-with-professional-equipm.png"
          alt="Professional car detailing"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto mt-16 sm:mt-20 md:mt-24">

         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7  xl font-bold text-white  sm:mb-6 text-balance leading-tight">
    <span className="text-primary">Legacy</span> Mobile Detailing
  </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-primary font-bold mb-4 sm:mb-6 text-balance">
            "We Don't Judge We Detail"
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Professional mobile car detailing services across North Carolina. We bring premium detailing directly to
            your location.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-[rgba(255,6,4,0.9)] border border-[rgba(254,254,254,0.2)] shadow-lg shadow-[#FEFEFE]/20"
            >
              Book Your Detail
            </Button>
            <Button
              variant="outline"
              size="lg"
              className=" text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-[rgba(254,254,254,0.1)] border-[rgba(254,254,254,0.2)] shadow-lg shadow-[#FEFEFE]/10"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Services
            </Button>
          </div>

         
            </div>
          </div>
       

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="text-white/70 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
