"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Greenville, NC",
      rating: 5,
      text: "Absolutely amazing service! They came to my office and my car looked brand new when they finished. The attention to detail was incredible.",
      service: "Full Detail Service",
    },
    {
      name: "Mike Rodriguez",
      location: "Kinston, NC",
      rating: 5,
      text: "Professional, punctual, and thorough. My truck had never looked so good. Will definitely be using Legacy Mobile Detailing again!",
      service: "Exterior Only Service",
    },
    {
      name: "Jennifer Lee",
      location: "New Bern, NC",
      rating: 5,
      text: "The convenience of mobile service is unbeatable. They worked around my schedule and delivered exceptional results. Highly recommend!",
      service: "Interior Only Service",
    },
    {
      name: "David Thompson",
      location: "Farmville, NC",
      rating: 5,
      text: "The clay and seal service was worth every penny. My car's paint looks better than when I bought it. True professionals!",
      service: "Clay and Seal Service",
    },
    {
      name: "Lisa Martinez",
      location: "Greenville, NC",
      rating: 5,
      text: "Great communication, fair pricing, and outstanding work. They really live up to their motto - no judgment, just excellent detailing.",
      service: "Full Detail Service",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Don't just take our word for it. Here&apos;s what our satisfied customers have to say about our service.
            </p>
          </div>

          <div className="relative">
            <Card className="min-h-[300px]">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  <blockquote className="text-lg text-foreground mb-6 text-pretty">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  <div className="text-center">
                    <div className="font-semibold text-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</div>
                    <div className="text-sm text-primary font-medium mt-1">{testimonials[currentIndex].service}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
