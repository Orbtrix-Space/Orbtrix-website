import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { ParallaxHero } from "@/components/ui/parallax-hero";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { ArrowRight, Play, Zap, Globe, Clock, CheckCircle, Loader2 } from "lucide-react";
import cameraImage from "@assets/generated_images/satellite_camera_earth_view.png";

const features = [
  {
    icon: Play,
    title: "Instant Access",
    description: "Request satellite imagery with the simplicity of streaming your favorite show.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get your imagery delivered in record time with our optimized pipeline.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Access imagery from anywhere on Earth with our satellite network.",
  },
  {
    icon: Clock,
    title: "Fresh Data",
    description: "Regularly updated imagery ensuring you always have the latest view.",
  },
];

export default function Videra() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const waitlistMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/waitlist", { email });
      return response;
    },
    onSuccess: () => {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when Videra launches.",
      });
      setEmail("");
    },
    onError: (error: Error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !waitlistMutation.isPending) {
      waitlistMutation.mutate(email);
    }
  };

  return (
    <Layout>
      <ParallaxHero backgroundImage={cameraImage} overlayOpacity={0.65}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <Badge 
              className="mb-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-none text-sm px-4 py-1"
              data-testid="badge-coming-soon"
            >
              Coming Soon
            </Badge>
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              data-testid="text-videra-headline"
            >
              Videra
            </h1>
            <p 
              className="mt-6 text-xl text-gray-200 leading-relaxed"
              data-testid="text-videra-tagline"
            >
              Getting satellite imagery is now easier than watching Netflix.
            </p>
            <p className="mt-4 text-lg text-gray-300" data-testid="text-videra-description">
              Revolutionary satellite imagery platform that democratizes access to 
              Earth observation data for everyone.
            </p>

            <Card className="mt-10 bg-white/10 backdrop-blur-md border-white/20" data-testid="card-waitlist-hero">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4" data-testid="text-waitlist-title">
                  Join the Waitlist
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/90 border-0 text-gray-900 placeholder:text-gray-500"
                    required
                    disabled={waitlistMutation.isPending}
                    data-testid="input-waitlist-email"
                  />
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                    disabled={waitlistMutation.isPending}
                    data-testid="button-join-waitlist"
                  >
                    {waitlistMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
                {waitlistMutation.isSuccess && (
                  <div className="mt-3 flex items-center gap-2 text-green-400" data-testid="text-waitlist-success">
                    <CheckCircle className="h-4 w-4" />
                    <span className="text-sm">You're on the list!</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </ParallaxHero>

      <section className="py-20 bg-background" data-testid="section-videra-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-primary uppercase tracking-wider" data-testid="text-future-label">
                The Future of Earth Observation
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground" data-testid="text-videra-features">
                Imagery at Your Fingertips
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-videra-features-description">
                We're reimagining how the world accesses satellite imagery.
              </p>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <SectionReveal key={feature.title} delay={index * 100}>
                <Card className="h-full text-center" data-testid={`card-videra-feature-${index}`}>
                  <CardContent className="pt-6">
                    <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-videra-feature-title-${index}`}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-videra-feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900/50" data-testid="section-videra-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider" data-testid="text-vision-label">
                  Our Vision
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground" data-testid="text-videra-vision">
                  Satellite Imagery for Everyone
                </h2>
                <p className="mt-6 text-lg text-muted-foreground" data-testid="text-videra-vision-p1">
                  For too long, satellite imagery has been locked behind complex systems 
                  and high costs. Videra changes that by making Earth observation data 
                  accessible to businesses, researchers, and individuals alike.
                </p>
                <p className="mt-4 text-lg text-muted-foreground" data-testid="text-videra-vision-p2">
                  With an intuitive interface and transparent pricing, getting the 
                  imagery you need will be as simple as pressing play.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <Card className="overflow-hidden border-0 shadow-2xl" data-testid="card-preview">
                <div className="aspect-video relative bg-gradient-to-br from-gray-900 to-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                      <p className="text-white font-medium" data-testid="text-preview-label">Preview Coming Soon</p>
                    </div>
                  </div>
                </div>
              </Card>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600" data-testid="section-videra-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white" data-testid="text-videra-cta">
              Be First to Know
            </h2>
            <p className="mt-4 text-lg text-teal-100 max-w-2xl mx-auto" data-testid="text-videra-cta-description">
              Join our waitlist and be among the first to experience the future of satellite imagery.
            </p>
            
            <Card className="mt-8 max-w-md mx-auto bg-white/10 backdrop-blur-md border-white/20" data-testid="card-waitlist-bottom">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/90 border-0 text-gray-900 placeholder:text-gray-500"
                    required
                    disabled={waitlistMutation.isPending}
                    data-testid="input-waitlist-email-bottom"
                  />
                  <Button 
                    type="submit"
                    className="bg-white text-teal-600 hover:bg-gray-100"
                    disabled={waitlistMutation.isPending}
                    data-testid="button-join-waitlist-bottom"
                  >
                    {waitlistMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </SectionReveal>
        </div>
      </section>
    </Layout>
  );
}
