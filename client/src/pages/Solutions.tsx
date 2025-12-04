import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeartPulse, Code2, Radio, Rocket, Users, Shield } from "lucide-react";
import starfieldImage from "@assets/generated_images/deep_space_starfield_background.png";

const solutions = [
  {
    icon: HeartPulse,
    title: "Mission Support",
    description: "End-to-end mission support from concept to operations. Our team works alongside yours to ensure mission success at every stage.",
    features: ["Mission planning & analysis", "Launch coordination", "Commissioning support", "Ongoing operational guidance"],
  },
  {
    icon: Code2,
    title: "Autonomy Development",
    description: "Custom autonomy solutions tailored to your mission requirements. Extend Rigel OS or develop new autonomous capabilities.",
    features: ["Custom algorithm development", "ML model training", "System integration", "Simulation & testing"],
  },
  {
    icon: Radio,
    title: "Satellite Operations",
    description: "Professional satellite operations services to ensure your mission runs smoothly around the clock.",
    features: ["24/7 monitoring", "Anomaly resolution", "Data management", "Performance optimization"],
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Faster Time to Mission",
    description: "Accelerate your timeline with proven solutions and expert guidance.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Work with engineers who understand the challenges of space operations.",
  },
  {
    icon: Shield,
    title: "Risk Reduction",
    description: "Leverage our experience to avoid common pitfalls and ensure success.",
  },
];

export default function Solutions() {
  return (
    <Layout>
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${starfieldImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Solutions
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground" data-testid="text-solutions-headline">
                Comprehensive Space Mission Services
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                From mission planning to operations, we provide the expertise and 
                support you need to succeed in space.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <SectionReveal key={solution.title} delay={index * 100}>
                <Card className="overflow-hidden border-0 shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gradient-to-br from-teal-500 to-cyan-500 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="w-16 h-16 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center mb-6">
                        <solution.icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white" data-testid={`text-solution-title-${index}`}>
                        {solution.title}
                      </h2>
                      <p className="mt-4 text-teal-100">
                        {solution.description}
                      </p>
                    </div>
                    <CardContent className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                      <h3 className="text-lg font-semibold text-foreground mb-6">
                        What We Offer
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3 text-foreground">
                            <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link href="/contact">
                        <Button className="mt-8 w-fit" data-testid={`button-solution-learn-${index}`}>
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

      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-benefits">
                Why Partner with Orbtrix
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We bring expertise, technology, and dedication to every mission.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <SectionReveal key={benefit.title} delay={index * 150}>
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center mb-6">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`text-benefit-${index}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white" data-testid="text-solutions-cta">
              Let's Build Your Mission Together
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Whether you're launching your first satellite or expanding your fleet, 
              we're here to help you succeed.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                data-testid="button-solutions-contact"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}
