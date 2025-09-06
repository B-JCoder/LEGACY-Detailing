import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, MapPin, Award } from "lucide-react"
import Image from "next/image"
export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete protection for your vehicle and peace of mind for you.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "We work around your schedule with convenient appointment times.",
    },
    {
      icon: MapPin,
      title: "Mobile Service",
      description: "Professional detailing at your home, office, or preferred location.",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Premium products and techniques for exceptional results every time.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Legacy Mobile Detailing</h2>
            <p className="text-lg text-white max-w-3xl mx-auto text-pretty">
              Based in Greenville, NC, we're passionate about bringing professional car detailing services directly to
              you. Our mobile approach means convenience without compromising quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Our Story</h3>
              <p className="text-white mb-4 text-pretty">
                Legacy Mobile Detailing was founded with a simple mission: to provide exceptional car detailing services
                with the convenience of mobile service. We understand that your time is valuable, which is why we bring
                our expertise directly to you.
              </p>
              <p className="text-white mb-4 text-pretty">
                Our tagline "We Don't Judge We Detail" reflects our commitment to treating every vehicle with the same
                level of care and attention, regardless of its current condition. Whether it's a daily driver or a
                weekend warrior, we're here to restore its beauty.
              </p>
              <p className="text-white text-pretty">
                Serving Greenville, Kinston, Farmville, and New Bern, we've built our reputation on quality work,
                reliable service, and customer satisfaction.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/professional-car-detailer-working-on-luxury-vehicl.png"
                alt="Professional car detailing service"
                className="rounded-lg shadow-lg w-full"
                width={500}
                height={300}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
