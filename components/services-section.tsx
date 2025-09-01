"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Sparkles, Droplets, Shield, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Car,
      title: "Full Detail Service",
      description: "Complete interior and exterior detailing for the ultimate clean.",
      features: ["Exterior wash & wax", "Interior deep clean", "Tire shine", "Window cleaning"],
      popular: true,
    },
    {
      icon: Sparkles,
      title: "Interior Only Service",
      description: "Deep cleaning and protection for your vehicle's interior.",
      features: ["Vacuum & shampoo", "Dashboard cleaning", "Leather conditioning", "Odor elimination"],
    },
    {
      icon: Droplets,
      title: "Exterior Only Service",
      description: "Professional exterior cleaning and protection.",
      features: ["Hand wash", "Wax application", "Tire cleaning", "Chrome polishing"],
    },
    {
      icon: Shield,
      title: "Clay and Seal Service",
      description: "Advanced paint correction and protection treatment.",
      features: ["Clay bar treatment", "Paint sealant", "Contaminant removal", "UV protection"],
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              Professional mobile detailing services tailored to your needs. We use premium products and proven
              techniques for exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative ${service.popular ? "ring-2 ring-primary" : ""}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-pretty">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Need a custom service package? We're happy to create a solution that fits your needs.
            </p>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
