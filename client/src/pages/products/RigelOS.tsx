import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { ParallaxHero } from "@/components/ui/parallax-hero";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield, Wifi, Brain, Zap, RefreshCw } from "lucide-react";
import uiImage from "@assets/generated_images/space_operations_ui_overlay.png";

const highlights = [
  {
    icon: Calendar,
    title: "Intelligent Tasking & Scheduling",
    description: "AI-powered mission planning that optimizes resource utilization and maximizes data collection opportunities.",
  },
  {
    icon: Shield,
    title: "Fault-Protection & Safety Logic",
    description: "Autonomous hazard detection and response systems ensure mission safety in any scenario.",
  },
  {
    icon: Wifi,
    title: "Ground-Link Independence",
    description: "Full operational capability even during communication blackouts or link disruptions.",
  },
];

const features = [
  {
    icon: Brain,
    title: "Machine Learning Core",
    description: "On-board ML models for image analysis, anomaly detection, and predictive maintenance.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Edge computing capabilities for immediate data processing and decision-making.",
  },
  {
    icon: RefreshCw,
    title: "Self-Recovery",
    description: "Automated fault recovery and system restoration without ground intervention.",
  },
];

export default function RigelOS() {
  return (
    <Layout>
      <ParallaxHero backgroundImage={uiImage} overlayOpacity={0.75}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-teal-400 uppercase tracking-wider">
              Product
            </span>
            <h1 
              className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              data-testid="text-rigel-os-headline"
            >
              Rigel OS
            </h1>
            <p 
              className="mt-6 text-xl text-gray-200 leading-relaxed"
              data-testid="text-rigel-os-tagline"
            >
              Autonomy for every space mission.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              The intelligent operating system that powers the next generation of autonomous satellites.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                data-testid="button-rigel-os-contact"
              >
                Request Demo
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-rigel-highlights">
                Core Capabilities
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Built from the ground up for autonomous satellite operations.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <SectionReveal key={highlight.title} delay={index * 150}>
                <Card className="h-full border-0 shadow-lg bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                      <highlight.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`text-highlight-${index}`}>
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {highlight.description}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Architecture
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground" data-testid="text-rigel-architecture">
                  Built for Space
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Rigel OS is designed specifically for the challenges of space operations. 
                  Our modular architecture ensures reliability while enabling rapid updates 
                  and customization for specific mission requirements.
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    "Real-time operating system core with deterministic execution",
                    "Modular plugin architecture for mission-specific functions",
                    "Hardware abstraction layer for platform portability",
                    "Secure boot and runtime integrity verification",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="font-mono text-sm">
                    <div className="text-teal-400">// Rigel OS Mission Planning</div>
                    <div className="mt-2">
                      <span className="text-purple-400">function</span>{" "}
                      <span className="text-cyan-400">planMission</span>() {"{"}
                    </div>
                    <div className="ml-4 mt-1">
                      <span className="text-gray-400">// Autonomous tasking</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-yellow-400">scheduler</span>.optimize();
                    </div>
                    <div className="ml-4 mt-1">
                      <span className="text-gray-400">// Safety checks</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-yellow-400">faultProtection</span>.verify();
                    </div>
                    <div className="ml-4 mt-1">
                      <span className="text-gray-400">// Execute</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-green-400">return</span> <span className="text-yellow-400">mission</span>.execute();
                    </div>
                    <div>{"}"}</div>
                  </div>
                </CardContent>
              </Card>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-rigel-features">
                Advanced Features
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge technology for next-generation space missions.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <SectionReveal key={feature.title} delay={index * 100}>
                <Card className="h-full">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground" data-testid={`text-feature-${index}`}>
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        {feature.description}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white" data-testid="text-rigel-cta">
              Power Your Mission with Rigel OS
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Learn how Rigel OS can bring autonomous capabilities to your satellite platform.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="mt-8 bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                data-testid="button-rigel-demo"
              >
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}
