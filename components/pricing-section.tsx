"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const pricingPlans = [
    {
      name: "Interior Only",
      price: "$80",
      description: "Perfect for maintaining your vehicle's interior",
      features: [
        "Complete vacuum service",
        "Dashboard & console cleaning",
        "Seat cleaning & conditioning",
        "Window cleaning (interior)",
        "Air freshener application",
      ],
    },
    {
      name: "Exterior Only",
      price: "$60",
      description: "Keep your vehicle looking great on the outside",
      features: [
        "Hand wash & dry",
        "Wheel & tire cleaning",
        "Chrome polishing",
        "Window cleaning (exterior)",
        "Basic wax application",
      ],
    },
    {
      name: "Full Detail",
      price: "$120",
      description: "Complete interior and exterior service",
      features: [
        "Everything in Interior Only",
        "Everything in Exterior Only",
        "Premium wax application",
        "Tire shine treatment",
        "Complete vehicle inspection",
      ],
      popular: true,
    },
    {
      name: "Clay & Seal",
      price: "$180",
      description: "Advanced paint correction and protection",
      features: [
        "Clay bar paint treatment",
        "Paint sealant application",
        "Contaminant removal",
        "UV protection coating",
        "Premium finish guarantee",
      ],
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              No hidden fees, no surprises. Choose the service that fits your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-primary scale-105" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <p className="text-sm text-muted-foreground text-pretty">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={scrollToContact}
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    }`}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-2">Additional Services Available</h3>
            <p className="text-muted-foreground mb-4">
              Engine bay cleaning, headlight restoration, pet hair removal, and more. Contact us for custom pricing on
              additional services.
            </p>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
