"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Car, Sparkles, Droplets, Shield, Zap, Sun, Scissors, Brush, CircleDot, Wrench } from "lucide-react"

export function ServicesSection() {
  const mainServices = [
    {
      icon: Car,
      title: "Full Detail Service",
      description: "Complete interior and exterior detailing for the ultimate clean.",
      features: ["Exterior wash & wax", "Interior deep clean", "Tire shine", "Window cleaning"],
      price: "Starts at $200",
      popular: true,
    },
    {
      icon: Sparkles,
      title: "Interior Only Service",
      description: "Deep cleaning and protection for your vehicle's interior.",
      features: ["Vacuum & shampoo", "Dashboard cleaning", "Leather conditioning", "Odor elimination"],
      price: "Starts at $150",
    },
    {
      icon: Droplets,
      title: "Exterior Only Service",
      description: "Professional exterior cleaning and protection.",
      features: ["Hand wash", "Wax application", "Tire cleaning", "Chrome polishing"],
      price: "Starts at $80",
    },
    {
      icon: Shield,
      title: "Clay and Seal Service",
      description: "Advanced paint correction and protection treatment.",
      features: ["Clay bar treatment", "Paint sealant", "Contaminant removal", "UV protection"],
      price: "Starts at $135",
    },
  ]

  const otherServices = [
    {
      icon: Sun,
      title: "Headlight Restoration",
      description: "Restore clarity and brightness to your headlights.",
      features: ["Lens cleaning", "Scratch removal", "UV protection", "Polishing"],
      price: "Starts at $85",
    },
    {
      icon: Scissors,
      title: "Hair Removal",
      description: "Thorough removal of pet hair and other debris.",
      features: ["Pet hair removal", "Lint cleaning", "Deep vacuuming"],
      price: "Starts at $50",
    },
    {
      icon: Brush,
      title: "Seat/Carpet Shampooing",
      description: "Deep cleaning for fabric seats and carpets.",
      features: ["Stain removal", "Fabric shampooing", "Odor elimination"],
      price: "Starts at $75",
    },
    {
      icon: CircleDot,
      title: "Clay Bar Service",
      description: "Remove embedded contaminants for a smooth finish.",
      features: ["Clay bar treatment", "Surface decontamination", "Smooth paint finish"],
      price: "Starts at $60",
    },
  ]

  const maintenancePrices = [
    { vehicle: "Trucks / Bigger SUV’s", price: "$90" },
    { vehicle: "SUV’s", price: "$75" },
    { vehicle: "Sedans", price: "$60" },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Professional mobile detailing services tailored to your needs. We use premium products and proven
              techniques for exceptional results.
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="main" className="w-full">
            <TabsList className="flex justify-center gap-4 mb-10 flex-wrap">
              <TabsTrigger
                value="main"
                className="text-white border border-primary px-6 py-2 rounded-xl transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Main Services
              </TabsTrigger>
              <TabsTrigger
                value="other"
                className="text-white border border-primary px-6 py-2 rounded-xl transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Other Services
              </TabsTrigger>
              <TabsTrigger
                value="maintenance"
                className="text-white border border-primary px-6 py-2 rounded-xl transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Maintenance Prices
              </TabsTrigger>
            </TabsList>

            {/* Main Services */}
            <TabsContent value="main">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {mainServices.map((service, index) => (
                  <Card
                    key={index}
                    className={`relative shadow-lg hover:shadow-2xl transition-all duration-300 ${
                      service.popular ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-md">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 mx-auto">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                      <p className="text-primary font-semibold mt-2">{service.price}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-white">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-center">
                        <Button
                          onClick={scrollToContact}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-xl"
                        >
                          Book This Service
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Other Services */}
            <TabsContent value="other">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {otherServices.map((service, index) => (
                  <Card key={index} className="relative shadow-lg hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="text-center pb-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 mx-auto">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                      <p className="text-primary font-semibold mt-2">{service.price}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-white">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-center">
                        <Button
                          onClick={scrollToContact}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-xl"
                        >
                          Book This Service
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Maintenance Prices */}
            <TabsContent value="maintenance">
              <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 max-w-lg mx-auto">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 mx-auto">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Maintenance Prices</CardTitle>
                  <p className="text-muted-foreground">Affordable prices for regular maintenance detailing</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {maintenancePrices.map((item, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center border-b border-white/10 pb-2 text-white"
                      >
                        <span className="font-medium">{item.vehicle}</span>
                        <span className="text-primary font-bold">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center mt-6">
                    <Button
                      onClick={scrollToContact}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-xl"
                    >
                      Book Maintenance
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
