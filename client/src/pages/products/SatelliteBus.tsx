import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { ParallaxHero } from "@/components/ui/parallax-hero";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Satellite, Battery, Radio, Cpu, BarChart3, Shield } from "lucide-react";
import satelliteImage from "@assets/generated_images/autonomous_eo_satellite_render.png";

const valueProps = [
  {
    icon: CheckCircle,
    title: "Highly Reliable",
    description: "Continuous availability with built-in redundancy and fault-tolerant systems.",
  },
  {
    icon: BarChart3,
    title: "Reduced Ground Ops",
    description: "Lower mission cost through autonomous operations and minimal intervention.",
  },
  {
    icon: Satellite,
    title: "Flexible Configurations",
    description: "From 10U CubeSats to 500 kg bus options to match your payload requirements.",
  },
];

const specifications = [
  { label: "Platform Size", value: "10U - 500kg" },
  { label: "Mission Life", value: "3-10 years" },
  { label: "Orbit Range", value: "LEO (400-800 km)" },
  { label: "Power Generation", value: "Up to 4KW" },
  { label: "Data Storage", value: "256 GB - 1 TB" },
  { label: "Downlink Rate", value: "Up to 400 Mbps" },
];

const subsystems = [
  { icon: Battery, title: "Power System", description: "Deployable solar arrays with efficient battery management" },
  { icon: Radio, title: "Communications", description: "Multi-band radio with high-speed data links" },
  { icon: Cpu, title: "On-board Computer", description: "Rigel OS-powered autonomous computing" },
  { icon: Shield, title: "ADCS", description: "Precision attitude determination and control" },
];

export default function SatelliteBus() {
  return (
    <Layout>
      <ParallaxHero backgroundImage={satelliteImage} overlayOpacity={0.7}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-teal-400 uppercase tracking-wider">
              Product
            </span>
            <h1 
              className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              data-testid="text-satellite-bus-headline"
            >
              Autonomous EO Satellite Bus
            </h1>
            <p 
              className="mt-6 text-xl text-gray-200 leading-relaxed"
              data-testid="text-satellite-bus-tagline"
            >
              Smarter satellites that work independently.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                data-testid="button-satellite-bus-contact"
              >
                Request Information
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </ParallaxHero>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-key-value">
                Key Value Propositions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Built for missions that demand reliability and efficiency.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <SectionReveal key={prop.title} delay={index * 150}>
                <Card className="h-full text-center border-0 shadow-lg">
                  <CardContent className="pt-8 pb-8">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                      <prop.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`text-value-prop-${index}`}>
                      {prop.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {prop.description}
                    </p>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-specifications">
                Technical Specifications
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Engineered for performance and reliability in Low Earth Orbit.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={100}>
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                  {specifications.map((spec, index) => (
                    <div 
                      key={spec.label} 
                      className={`p-6 text-center ${
                        index < specifications.length - 1 ? "border-r border-border" : ""
                      } ${index < 3 ? "border-b border-border lg:border-b-0" : ""}`}
                    >
                      <div className="text-2xl font-bold text-primary" data-testid={`text-spec-value-${index}`}>
                        {spec.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {spec.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-subsystems">
                Subsystems
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Integrated systems designed to work seamlessly together.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subsystems.map((system, index) => (
              <SectionReveal key={system.title} delay={index * 100}>
                <Card className="h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <system.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground" data-testid={`text-subsystem-${index}`}>
                        {system.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        {system.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white" data-testid="text-satellite-cta">
              Ready to Launch Your Mission?
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Contact our team to discuss your mission requirements and 
              learn how our autonomous satellite bus can support your objectives.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                data-testid="button-satellite-launch"
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
