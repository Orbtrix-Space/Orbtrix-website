import { Layout } from "@/components/layout/Layout";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Activity, Target, Users, Rocket } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Autonomy",
    description: "Our satellites think and act independently, making real-time decisions without constant ground control intervention.",
  },
  {
    icon: Shield,
    title: "Mission Safety",
    description: "Built-in fault protection and safety-driven logic ensures your mission succeeds even in unexpected situations.",
  },
  {
    icon: Activity,
    title: "Availability",
    description: "Continuous operational capability with intelligent resource management and self-recovery systems.",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description: "Every component is designed and tested to meet the demanding requirements of space operations.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "We work closely with our clients to understand their unique mission requirements and deliver tailored solutions.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Pushing the boundaries of what's possible in satellite autonomy and Earth observation technology.",
  },
];

export default function About() {
  return (
    <Layout>
      <section className="pt-12 pb-20 bg-gradient-to-b from-gray-50 to-background dark:from-gray-900 dark:to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                About Us
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground" data-testid="text-about-headline">
                We simplify on-orbit operations so teams can focus on insight.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Orbtrix Space is redefining how satellites operate — fully autonomous, highly reliable, and cost-efficient. 
                With a team of seasoned aerospace engineers at the helm, we are making advanced 
                space capabilities accessible to organizations of every scale.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-pillars-heading">
                Our Focus Pillars
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Three core principles guide everything we build at Orbtrix.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <SectionReveal key={pillar.title} delay={index * 150}>
                <Card className="h-full text-center border-0 shadow-lg bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  <CardContent className="pt-8 pb-8">
                    <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                      <pillar.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`text-pillar-${index}`}>
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {pillar.description}
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
                  Our Mission
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground" data-testid="text-mission">
                  Building the Future of Satellite Operations
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  We believe that space should be more accessible and efficient. Our autonomous 
                  satellite platforms reduce the complexity of space operations, allowing mission 
                  teams to focus on what matters most, gathering insights and creating value.
                </p>
                <p className="mt-4 text-lg text-muted-foreground">
                  From our headquarters in Bengaluru, India, we're developing technology that 
                  will reshape how the world thinks about satellite operations.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg p-6 text-white">
                  <div className="text-4xl font-bold" data-testid="text-stat-1">10U+</div>
                  <div className="text-sm opacity-90 mt-1">CubeSat Configurations</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 text-white">
                  <div className="text-4xl font-bold" data-testid="text-stat-2">500kg</div>
                  <div className="text-sm opacity-90 mt-1">Max Bus Capacity</div>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 text-white">
                  <div className="text-4xl font-bold" data-testid="text-stat-3">24/7</div>
                  <div className="text-sm opacity-90 mt-1">Autonomous Operation</div>
                </div>
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg p-6 text-white">
                  <div className="text-4xl font-bold" data-testid="text-stat-4">Rigel</div>
                  <div className="text-sm opacity-90 mt-1">OS Powered</div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground" data-testid="text-values-heading">
                Our Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that drive innovation at Orbtrix.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <SectionReveal key={value.title} delay={index * 150}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-value-${index}`}>
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
