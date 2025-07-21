'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { useToast } from '@/hooks/use-toast';
import InquiryForm from '@/components/inquiry-form';
import { Mail, MapPin, Phone, Clock, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInquirySubmit = async (data: any) => {
    try {
      // The InquiryForm component handles the API call
      setIsSubmitted(true);
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
      });
    } catch (error) {
      console.error('Failed to send inquiry:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <Image
          src="/placeholder.svg?height=800&width=1600&query=mountain landscape with office desk"
          alt="Contact DreamGo Adventures"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="text-xl text-white/90">
              Have questions about our adventures? We're here to help you plan your next journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          {isSubmitted ? (
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Icons.check className="h-10 w-10" />
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Thank You!</h2>
              <p className="text-muted-foreground mb-6">
                Your message has been received. A member of our team will contact you within 24 hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                  <p className="mt-2 text-muted-foreground">
                    We'd love to hear from you. Fill out the form and our team will get back to you within 24 hours.
                  </p>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <InquiryForm 
                      onSuccess={handleInquirySubmit}
                      showSuccessMessage={false}
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                  <p className="mt-2 text-muted-foreground">Reach out to us directly or visit our office.</p>
                </div>

                <div className="grid gap-6">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Our Office</h3>
                          <p className="text-muted-foreground">123 Adventure Way, Trekville</p>
                          <p className="text-muted-foreground">Mountain Country, 12345</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Email Us</h3>
                          <p className="text-muted-foreground">info@dreamgoadventure.com</p>
                          <p className="text-muted-foreground">bookings@dreamgoadventure.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Call Us</h3>
                          <p className="text-muted-foreground">+1 (555) 123-4567</p>
                          <p className="text-muted-foreground">+1 (555) 987-6543</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Clock className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">Office Hours</h3>
                          <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                            <div>Monday - Friday</div>
                            <div>9:00 AM - 6:00 PM</div>
                            <div>Saturday</div>
                            <div>10:00 AM - 4:00 PM</div>
                            <div>Sunday</div>
                            <div>Closed</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="rounded-lg overflow-hidden border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620796484186!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="DreamGo Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our adventure packages and services.
              </p>
            </div>
          </div>

          <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  How do I book a package?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can book a package directly through our website by selecting your preferred package and filling out the booking form. Our team will contact you to confirm the details.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  What's included in the package price?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Package prices typically include accommodation, meals, transportation, guide services, and permits. Specific inclusions vary by package and are listed in the package details.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Can I customize a package?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We offer custom packages tailored to your preferences. Contact us with your requirements and we'll create a personalized adventure for you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  What's the cancellation policy?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cancellation policies vary by package and timing. Generally, cancellations made 30+ days before departure receive a full refund, with decreasing refunds for closer dates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Do you provide equipment?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide all necessary safety equipment and camping gear. Personal items like clothing and footwear are the responsibility of participants.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  What fitness level is required?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer packages for all fitness levels, from easy family treks to challenging expeditions. Each package description includes difficulty ratings and requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
