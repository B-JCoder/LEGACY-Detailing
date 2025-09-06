"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Image from "next/image"

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "https://i.pinimg.com/1200x/7c/d1/0b/7cd10ba5d50eabb7adcded841a94e058.jpg",
      alt: "Luxury sedan before and after detailing",
      category: "Before & After",
    },
    {
      src: "https://i.pinimg.com/736x/70/37/88/7037885767bafe64db2b8d176a0c9724.jpg",
      alt: "Interior detailing - leather seats",
      category: "Interior",
    },
    {
      src: "https://i.pinimg.com/736x/96/3a/bd/963abd49d3eb71762adc27869d7d30bf.jpg",
      alt: "Exterior paint correction",
      category: "Exterior",
    },
    {
      src: "https://i.pinimg.com/1200x/fb/8c/00/fb8c00d5c2fd2612516e46363206c9b9.jpg",
      alt: "Mobile detailing service",
      category: "Mobile Service",
    },
    {
      src: "https://i.pinimg.com/1200x/82/46/56/824656e17717c3a444983e40f1ca708f.jpg",
      alt: "Clay bar treatment on truck",
      category: "Clay & Seal",
    },
    {
      src: "https://i.pinimg.com/736x/fd/16/75/fd1675a1933159bd875f358b5bf49419.jpg",
      alt: "Dashboard cleaning",
      category: "Interior",
    }
 
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Work Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              See the transformation we bring to every vehicle. From everyday cars to luxury vehicles, we treat each one
              with the same level of care and attention to detail.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden cursor-pointer group">
                <div className="relative aspect-square">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    onClick={() => setSelectedImage(image.src)}
                    
                    width={400}
                    height={400}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more of our work? Follow us on social media for daily updates!
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Follow on Instagram
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Like on Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged gallery image"
              className="max-w-full max-h-full object-contain"
              width={800}
              height={800}
              
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
