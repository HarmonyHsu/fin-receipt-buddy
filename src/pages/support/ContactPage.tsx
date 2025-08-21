import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageCircle, Phone, MapPin, Clock, Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", subject: "", category: "", message: "" });
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@receiptbuddy.com",
      availability: "24/7 - Response within 4 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available in app",
      availability: "Mon-Fri, 9 AM - 6 PM PST"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak with an expert",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9 AM - 5 PM PST"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              We're here to help! Reach out with any questions or feedback.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card-custom">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Question</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing & Payments</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="bug">Bug Report</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide as much detail as possible about your question or issue..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="shadow-card-custom">
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{method.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          {method.description}
                        </p>
                        <p className="text-sm font-medium text-primary">
                          {method.contact}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {method.availability}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Office Info */}
            <Card className="shadow-card-custom">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-semibold">Receipt Buddy Inc.</p>
                  <p className="text-sm text-muted-foreground">
                    123 Financial District<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-card-custom">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-muted-foreground">9 AM - 6 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-muted-foreground">10 AM - 4 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground">
                      Email support is available 24/7 with responses within 4 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="shadow-card-custom">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Need Quick Answers?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Check our FAQ section for instant answers to common questions.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/faq">Browse FAQ</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Response Time Promise */}
        <Card className="mt-12 shadow-card-custom">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Our Response Promise</h3>
              <p className="text-muted-foreground mb-4">
                We're committed to providing excellent support. Here's what you can expect:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">&lt; 4 hours</div>
                  <p className="text-sm text-muted-foreground">Email response time</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-success mb-1">&lt; 2 minutes</div>
                  <p className="text-sm text-muted-foreground">Live chat response</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-warning mb-1">100%</div>
                  <p className="text-sm text-muted-foreground">Issues resolved</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;