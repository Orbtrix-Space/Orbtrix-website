import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, MapPin, Building2, Send, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    if (!contactMutation.isPending) {
      contactMutation.mutate(data);
    }
  };

  return (
    <Layout>
      <section className="pt-12 pb-20 bg-gradient-to-b from-gray-50 to-background dark:from-gray-900 dark:to-background" data-testid="section-contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm font-medium text-primary uppercase tracking-wider" data-testid="text-contact-label">
                Contact Us
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground" data-testid="text-contact-headline">
                Let's Talk About Your Mission
              </h1>
              <p className="mt-6 text-lg text-muted-foreground" data-testid="text-contact-description">
                Have questions about our products or services? We'd love to hear from you. 
                Fill out the form below and our team will get back to you shortly.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 bg-background" data-testid="section-contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionReveal>
                <Card className="border-0 shadow-xl" data-testid="card-contact-form">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6" data-testid="text-form-title">
                      Send Us a Message
                    </h2>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-contact">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Your name" 
                                    {...field}
                                    disabled={contactMutation.isPending}
                                    data-testid="input-contact-name"
                                  />
                                </FormControl>
                                <FormMessage data-testid="error-contact-name" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="organization"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Organization</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Your organization" 
                                    {...field}
                                    disabled={contactMutation.isPending}
                                    data-testid="input-contact-organization"
                                  />
                                </FormControl>
                                <FormMessage data-testid="error-contact-organization" />
                              </FormItem>
                            )}
                          />
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="your.email@example.com" 
                                  {...field}
                                  disabled={contactMutation.isPending}
                                  data-testid="input-contact-email"
                                />
                              </FormControl>
                              <FormMessage data-testid="error-contact-email" />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell us about your mission or project..."
                                  rows={6}
                                  {...field}
                                  disabled={contactMutation.isPending}
                                  data-testid="input-contact-message"
                                />
                              </FormControl>
                              <FormMessage data-testid="error-contact-message" />
                            </FormItem>
                          )}
                        />
                        
                        <Button 
                          type="submit" 
                          className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                          disabled={contactMutation.isPending}
                          data-testid="button-submit-contact"
                        >
                          {contactMutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : contactMutation.isSuccess ? (
                            <>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Message Sent
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </SectionReveal>
            </div>

            <div className="space-y-6">
              <SectionReveal delay={100}>
                <Card className="border-0 shadow-lg" data-testid="card-contact-email">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground" data-testid="text-email-label">Email</h3>
                        <a 
                          href="mailto:contact@orbtrix.space" 
                          className="text-muted-foreground hover:text-primary transition-colors"
                          data-testid="link-contact-email"
                        >
                          contact@orbtrix.space
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SectionReveal>

              <SectionReveal delay={200}>
                <Card className="border-0 shadow-lg" data-testid="card-contact-company">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center flex-shrink-0">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground" data-testid="text-company-label">Company</h3>
                        <p className="text-muted-foreground" data-testid="text-company-name">
                          Orbtrix Space Private Limited
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SectionReveal>

              <SectionReveal delay={300}>
                <Card className="border-0 shadow-lg" data-testid="card-contact-address">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground" data-testid="text-office-label">Office</h3>
                        <address className="not-italic text-muted-foreground text-sm" data-testid="text-address">
                          No. 1190/1, FD 49, 4th Floor,<br />
                          HSR Layout, Sector 3,<br />
                          22nd Cross Road,<br />
                          Bengaluru — 560102
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SectionReveal>

              <SectionReveal delay={400}>
                <Card className="border-0 shadow-lg overflow-hidden" data-testid="card-map">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                    <div className="text-center p-6">
                      <MapPin className="h-12 w-12 text-primary/50 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground" data-testid="text-map-location">
                        HSR Layout, Bengaluru
                      </p>
                      <p className="text-xs text-muted-foreground mt-1" data-testid="text-map-coming-soon">
                        Interactive map coming soon
                      </p>
                    </div>
                  </div>
                </Card>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
