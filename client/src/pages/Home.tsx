import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { ParallaxHero } from "@/components/ui/parallax-hero";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Satellite, Shield, Zap, Globe } from "lucide-react";
import heroImage from "@assets/generated_images/earth_from_orbit_with_satellite.png";
import satelliteImage from "@assets/generated_images/autonomous_eo_satellite_render.png";

const features = [
  {
    icon: Satellite,
    title: "Autonomous Operations",
    description: "Satellites that think and act independently, reducing the need for constant ground control.",
  },
  {
    icon: Shield,
    title: "Mission Safety",
    description: "Built-in fault protection and safety-driven logic ensures reliable performance.",
  },
  {
    icon: Zap,
    title: "Reduced Costs",
    description: "Lower operational overhead through intelligent automation and efficient resource usage.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Comprehensive Earth observation capabilities for any mission requirement.",
  },
];

export default function Home() {
  return (
    <Layout>
      <ParallaxHero backgroundImage={heroImage} overlayOpacity={0.6}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              data-testid="text-hero-headline"
            >
              Autonomous Satellites.{" "}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                Operational by Default.
              </span>
            </h1>
            <p 
              className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed"
              data-testid="text-hero-subheadline"
            >
              We build reliable Earth observation satellites powered by Rigel OS — 
              reducing ground operations and mission cost.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/products">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-none"
                  data-testid="button-hero-explore-products"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  data-testid="button-hero-contact-us"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </ParallaxHero>

      <section className="py-20 bg-background" data-testid="section-why-orbtrix">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-why-orbtrix">
                Why Choose Orbtrix
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-why-orbtrix-description">
                Built for the next generation of space missions with autonomous capabilities at the core.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <SectionReveal key={feature.title} delay={index * 100}>
                <Card className="h-full border-border/50 hover:border-primary/30 transition-colors" data-testid={`card-feature-${index}`}>
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-feature-title-${index}`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900/50" data-testid="section-featured-product">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div className="relative">
                <img
                  src={satelliteImage}
                  alt="Autonomous EO Satellite"
                  className="rounded-lg shadow-2xl"
                  data-testid="img-satellite-preview"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg opacity-20 blur-2xl" />
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider" data-testid="text-featured-label">
                  Featured Product
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground" data-testid="text-featured-product">
                  Autonomous EO Satellite Bus
                </h2>
                <p className="mt-4 text-lg text-muted-foreground" data-testid="text-featured-description">
                  Smarter satellites that work independently. From 10U CubeSats to 50 kg bus options, 
                  our platform delivers highly reliable Earth observation with continuous availability.
                </p>
                <ul className="mt-6 space-y-3" data-testid="list-featured-benefits">
                  {[
                    "Highly reliable with continuous availability",
                    "Reduced ground ops for lower mission cost",
                    "Flexible payload configurations",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground" data-testid={`text-benefit-${index}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/products/satellite-bus">
                  <Button className="mt-8" data-testid="button-learn-more-satellite">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800" data-testid="section-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white" data-testid="text-cta-section">
              Ready to Transform Your Space Mission?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto" data-testid="text-cta-description">
              Get in touch with our team to learn how Orbtrix can help you achieve 
              your Earth observation objectives with autonomous satellite technology.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                data-testid="button-get-started"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}
