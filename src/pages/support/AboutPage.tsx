import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Receipt, Target, Shield, Users, Heart, Lightbulb } from "lucide-react";

const AboutPage = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      description: "Former fintech engineer passionate about making financial planning accessible."
    },
    {
      name: "Mike Rodriguez", 
      role: "Head of AI",
      description: "Machine learning expert focused on predictive financial analytics."
    },
    {
      name: "Emily Johnson",
      role: "UX Designer", 
      description: "Design advocate who believes financial tools should be beautiful and intuitive."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your financial data stays private. We never share personal information."
    },
    {
      icon: Target,
      title: "Accuracy Matters",
      description: "Our AI models are continuously improved for better predictions."
    },
    {
      icon: Heart,
      title: "User Focused",
      description: "Every feature is designed with real user needs and feedback in mind."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We're constantly exploring new ways to make financial planning easier."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <div className="text-center">
            <Receipt className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-2">About Receipt Buddy</h1>
            <p className="text-xl text-muted-foreground">
              Making financial planning as familiar as reading a receipt
            </p>
          </div>
        </div>

        {/* Mission */}
        <Card className="mb-8 shadow-card-custom">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe financial planning shouldn't require a degree in economics. By presenting 
                AI-powered spending predictions in the familiar format of a receipt, we make it easy 
                for anyone to understand their financial future and make smarter money decisions.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Story */}
        <Card className="mb-8 shadow-card-custom">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-neutral max-w-none">
              <p className="text-muted-foreground mb-4">
                Receipt Buddy was born from a simple observation: everyone knows how to read a receipt, 
                but most people find traditional budgeting apps confusing and overwhelming.
              </p>
              <p className="text-muted-foreground mb-4">
                Our founder, Sarah, was working as a financial advisor when she noticed clients 
                would often pull out crumpled receipts from their wallets to show their spending patterns. 
                That's when she realized - receipts are the universal language of spending.
              </p>
              <p className="text-muted-foreground">
                Today, Receipt Buddy helps thousands of users understand their financial future 
                through AI-powered predictions presented in the most familiar format possible: 
                a simple, clear receipt.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Values */}
        <Card className="mb-8 shadow-card-custom">
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Team */}
        <Card className="mb-8 shadow-card-custom">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Meet the Team
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <Card className="mb-8 shadow-card-custom">
          <CardHeader>
            <CardTitle>By the Numbers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <p className="text-muted-foreground">Happy Users</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-success mb-2">$2M+</div>
                <p className="text-muted-foreground">Money Saved</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-2">500K+</div>
                <p className="text-muted-foreground">Receipts Generated</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">94%</div>
                <p className="text-muted-foreground">Prediction Accuracy</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to See Your Financial Future?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of users who've taken control of their spending with Receipt Buddy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/signup">Get Started Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;