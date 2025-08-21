import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Receipt, 
  Brain, 
  Target, 
  TrendingUp, 
  Trophy,
  Shield,
  Download,
  Smartphone,
  BarChart3,
  Zap,
  Calendar
} from "lucide-react";

const FeaturesPage = () => {
  const mainFeatures = [
    {
      icon: Receipt,
      title: "Receipt-Style Predictions",
      description: "View your AI-powered spending forecasts in the familiar receipt format you already know and trust.",
      benefits: ["Easy to understand", "Familiar interface", "Clear breakdown"]
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced machine learning analyzes your spending patterns to predict future expenses with 94% accuracy.",
      benefits: ["Smart predictions", "Pattern recognition", "Continuous learning"]
    },
    {
      icon: Target,
      title: "Savings Goals",
      description: "Set and track progress toward your financial goals with personalized recommendations and challenges.",
      benefits: ["Goal tracking", "Progress visualization", "Motivation system"]
    },
    {
      icon: TrendingUp,
      title: "Spending Analytics",
      description: "Comprehensive charts and insights help you understand your spending habits and identify improvement areas.",
      benefits: ["Visual analytics", "Trend analysis", "Category breakdown"]
    }
  ];

  const additionalFeatures = [
    {
      icon: Trophy,
      title: "Gamification",
      description: "Earn badges and complete challenges to make saving money fun and engaging."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your financial data is encrypted and never shared. No bank account linking required."
    },
    {
      icon: Download,
      title: "PDF Export",
      description: "Download your receipt predictions as PDF files for easy sharing and record keeping."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Fully responsive design works perfectly on all devices, from phone to desktop."
    },
    {
      icon: BarChart3,
      title: "Expense Categories",
      description: "Organize spending across customizable categories like dining, transport, and entertainment."
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "See predictions update instantly as you add new expenses or change spending patterns."
    },
    {
      icon: Calendar,
      title: "Historical Tracking",
      description: "View spending history and track your financial progress over time with detailed records."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Features Overview</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how Receipt Buddy makes financial planning simple, accurate, and engaging
            </p>
          </div>
        </div>

        {/* Main Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Core Features</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="shadow-card-custom">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <feature.icon className="h-8 w-8 text-primary" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm">Key Benefits:</p>
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Additional Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="shadow-card-custom hover-scale transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                    <span className="text-lg">{feature.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <Card className="mb-16 shadow-card-custom">
          <CardHeader>
            <CardTitle className="text-center text-2xl">How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Add Expenses</h3>
                <p className="text-sm text-muted-foreground">
                  Input your recent spending across different categories
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">AI Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Our AI analyzes patterns and predicts future spending
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Receipt Preview</h3>
                <p className="text-sm text-muted-foreground">
                  View predictions in familiar receipt format
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">Take Action</h3>
                <p className="text-sm text-muted-foreground">
                  Set goals and make informed financial decisions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Accuracy & Trust */}
        <Card className="mb-16 shadow-card-custom">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Accuracy You Can Trust</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">94%</div>
                <p className="font-semibold mb-1">Prediction Accuracy</p>
                <p className="text-sm text-muted-foreground">
                  Based on analysis of over 500K receipts
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">$2M+</div>
                <p className="font-semibold mb-1">Money Saved</p>
                <p className="text-sm text-muted-foreground">
                  By users following our recommendations
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-warning mb-2">10K+</div>
                <p className="font-semibold mb-1">Active Users</p>
                <p className="text-sm text-muted-foreground">
                  Trust Receipt Buddy for their finances
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Try All Features?</h2>
          <p className="text-muted-foreground mb-6">
            Start your free account and experience the future of financial planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/signup">Get Started Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;