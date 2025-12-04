import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Satellite, Cpu, Camera } from "lucide-react";
import satelliteImage from "@assets/generated_images/autonomous_eo_satellite_render.png";
import uiImage from "@assets/generated_images/space_operations_ui_overlay.png";
import cameraImage from "@assets/generated_images/satellite_camera_earth_view.png";

const products = [
  {
    id: "satellite-bus",
    icon: Satellite,
    title: "Autonomous EO Satellite Bus",
    tagline: "Smarter satellites that work independently.",
    description: "High-reliability Earth observation platform with continuous availability. From 10U CubeSats to 50 kg bus configurations, optimized for reduced ground operations.",
    image: satelliteImage,
    href: "/products/satellite-bus",
    badge: null,
  },
  {
    id: "rigel-os",
    icon: Cpu,
    title: "Rigel OS",
    tagline: "Autonomy for every space mission.",
    description: "Intelligent satellite operating system featuring autonomous tasking, scheduling, and fault-protection. Operates even without constant ground link.",
    image: uiImage,
    href: "/products/rigel-os",
    badge: null,
  },
  {
    id: "videra",
    icon: Camera,
    title: "Videra",
    tagline: "Getting satellite imagery is now easier than watching Netflix.",
    description: "Revolutionary satellite imagery platform that makes accessing Earth observation data simple, fast, and accessible for everyone.",
    image: cameraImage,
    href: "/products/videra",
    badge: "Coming Soon",
  },
];

export default function Products() {
  return (
    <Layout>
      <section className="pt-12 pb-20 bg-gradient-to-b from-gray-50 to-background dark:from-gray-900 dark:to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Our Products
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground" data-testid="text-products-headline">
                Technology for the New Space Era
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                From autonomous satellite platforms to intelligent operating systems, 
                our products are designed to transform how you operate in space.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => (
              <SectionReveal key={product.id} delay={index * 100}>
                <Card className="overflow-hidden border-0 shadow-xl">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        data-testid={`img-product-${product.id}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                      {product.badge && (
                        <Badge 
                          className="absolute top-4 right-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-none"
                          data-testid={`badge-${product.id}`}
                        >
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                    
                    <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center mb-6">
                        <product.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground" data-testid={`text-product-title-${product.id}`}>
                        {product.title}
                      </h2>
                      <p className="mt-2 text-lg text-primary font-medium">
                        {product.tagline}
                      </p>
                      <p className="mt-4 text-muted-foreground">
                        {product.description}
                      </p>
                      <Link href={product.href}>
                        <Button className="mt-6 w-fit" data-testid={`button-learn-more-${product.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white" data-testid="text-products-cta">
              Need a Custom Solution?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Our team can work with you to develop tailored satellite solutions 
              that meet your specific mission requirements.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                data-testid="button-contact-products"
              >
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}
