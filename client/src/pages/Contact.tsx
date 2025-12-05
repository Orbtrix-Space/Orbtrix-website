import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Layout } from "@/components/layout/Layout";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, MapPin, Building2, Send } from "lucide-react";

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

  const onSubmit = (data: InsertContact) => {
    const subject = `New enquiry - Orbtrix Space`;
    const body = `Name: ${data.name || "-"}
Organization: ${data.organization || "-"}
Email: ${data.email || "-"}

Message:
${data.message || "-"}`;

    const mailto = `mailto:info@orbtrix.space?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    toast({
      title: "Opening email app...",
      description: "Please send the email to complete your enquiry.",
    });

    form.reset();
  };

  return (
    <Layout>
      <section className="pt-12 pb-20 bg-gradient-to-b from-gray-50 to-background dark:from-gray-900 dark:to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Contact Us
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-foreground">
                Let's Talk About Your Mission
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Have questions about our products or services? We'd love to hear from you.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <SectionReveal>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Send Us a Message
                    </h2>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your name" {...field} />
                                </FormControl>
                                <FormMessage />
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
                                  <Input placeholder="Your organization" {...field} />
                                </FormControl>
                                <FormMessage />
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
                                <Input type="email" placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
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
                                  placeholder="Tell us about your mission..."
                                  rows={6}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                          <Send className="mr-2 h-4 w-4" /> Send via Email
                        </Button>

                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </SectionReveal>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">

              <SectionReveal delay={100}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <a href="mailto:info@orbtrix.space" className="text-muted-foreground hover:text-primary">
                          info@orbtrix.space
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SectionReveal>

              <SectionReveal delay={200}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Building2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Company</h3>
                        <p className="text-muted-foreground">Orbtrix Space Private Limited</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SectionReveal>

              <SectionReveal delay={300}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground">Office</h3>
                        <address className="not-italic text-sm text-muted-foreground leading-relaxed">
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

              {/* Google Map embed */}
              <SectionReveal delay={400}>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="aspect-[4/3] w-full h-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.907098596078!2d77.63060727575012!3d12.972252987340852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1522448fa4d9%3A0x15a14de267a9636f!2s22nd%20Cross%20Rd%2C%20Sector%203%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102!5e0!3m2!1sen!2sin!4v1733412467130!5m2!1sen!2sin"
                      className="w-full h-full border-0 rounded-md"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
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
