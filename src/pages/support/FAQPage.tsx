import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle, MessageCircle } from "lucide-react";

const FAQPage = () => {
  const faqs = [
    {
      question: "How accurate are the AI predictions?",
      answer: "Our AI achieves 94% accuracy based on analysis of over 500,000 receipts and spending patterns. The predictions become more accurate as you input more data and use the app regularly. The AI considers factors like seasonal trends, personal spending patterns, and market conditions."
    },
    {
      question: "Is my financial data safe and private?",
      answer: "Absolutely. Your data is encrypted both in transit and at rest. We never share your personal financial information with third parties. You don't need to link your bank account - all data is manually entered by you and stored securely on our servers."
    },
    {
      question: "Do I need to connect my bank account?",
      answer: "No! One of Receipt Buddy's key features is that you don't need to link any bank accounts. You manually input your spending data, giving you complete control over what information is shared and stored."
    },
    {
      question: "How does the receipt format help with budgeting?",
      answer: "Receipts are universally understood - everyone knows how to read one! By presenting your financial predictions in this familiar format, we make complex budgeting data instantly understandable. It's like getting a receipt for your future spending."
    },
    {
      question: "Can I export my data?",
      answer: "Yes! You can export your spending data and receipt predictions as PDF files for record keeping or sharing with financial advisors. We also offer data export in JSON format for advanced users."
    },
    {
      question: "How often should I update my expenses?",
      answer: "For best results, we recommend updating your expenses weekly. However, the AI can work with monthly updates too. The more frequently you update, the more accurate your predictions will be."
    },
    {
      question: "What categories of expenses can I track?",
      answer: "You can track expenses across customizable categories including Food & Dining, Transportation, Entertainment, Shopping, Utilities, Rent/Housing, Healthcare, and more. You can also create custom categories for your specific needs."
    },
    {
      question: "How do savings goals work?",
      answer: "Set specific financial goals (like saving for a vacation or emergency fund) with target amounts and dates. The app tracks your progress and provides personalized recommendations to help you reach your goals based on your spending predictions."
    },
    {
      question: "Is there a mobile app?",
      answer: "Receipt Buddy is a web application that works perfectly on all devices - phones, tablets, and desktops. It's fully responsive and optimized for mobile use, so you can access it anywhere through your browser."
    },
    {
      question: "What makes Receipt Buddy different from other budgeting apps?",
      answer: "Three main differences: 1) Receipt format makes financial data instantly understandable, 2) No bank account linking required for complete privacy, and 3) AI-powered predictions show your financial future, not just past spending."
    },
    {
      question: "How much does Receipt Buddy cost?",
      answer: "Receipt Buddy offers a free tier with core features including expense tracking, basic predictions, and receipt generation. Premium features like advanced analytics, unlimited goals, and PDF exports are available with our paid plans."
    },
    {
      question: "Can I share my receipts with others?",
      answer: "Yes! You can export receipt predictions as PDF files to share with financial advisors, partners, or family members. All shared data maintains your privacy settings and doesn't include sensitive account information."
    }
  ];

  const categories = [
    {
      title: "Getting Started",
      questions: faqs.slice(0, 3)
    },
    {
      title: "Privacy & Security", 
      questions: faqs.slice(3, 6)
    },
    {
      title: "Features & Usage",
      questions: faqs.slice(6, 9)
    },
    {
      title: "Plans & Pricing",
      questions: faqs.slice(9, 12)
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <div className="text-center">
            <HelpCircle className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Receipt Buddy
            </p>
          </div>
        </div>

        {/* Quick Help */}
        <Card className="mb-8 shadow-card-custom">
          <CardHeader>
            <CardTitle>Need Quick Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button asChild variant="outline" className="h-auto p-4">
                <Link to="/features">
                  <div className="text-center">
                    <div className="font-semibold mb-1">View Features</div>
                    <div className="text-xs text-muted-foreground">Learn what Receipt Buddy can do</div>
                  </div>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4">
                <Link to="/signup">
                  <div className="text-center">
                    <div className="font-semibold mb-1">Try It Free</div>
                    <div className="text-xs text-muted-foreground">Start using Receipt Buddy today</div>
                  </div>
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-auto p-4">
                <Link to="/contact">
                  <div className="text-center">
                    <div className="font-semibold mb-1">Contact Support</div>
                    <div className="text-xs text-muted-foreground">Get personal help</div>
                  </div>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {categories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-card-custom">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still Need Help */}
        <Card className="mt-12 shadow-card-custom">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-primary" />
              Still Need Help?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our support team is here to help you get the most out of Receipt Buddy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Popular Articles */}
        <Card className="mt-8 shadow-card-custom">
          <CardHeader>
            <CardTitle>Popular Help Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Getting Started Guide</h4>
                <p className="text-sm text-muted-foreground">
                  Step-by-step guide to setting up your first receipt prediction
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Understanding AI Predictions</h4>
                <p className="text-sm text-muted-foreground">
                  How our AI analyzes your spending to make accurate forecasts
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Setting Up Savings Goals</h4>
                <p className="text-sm text-muted-foreground">
                  Best practices for creating and achieving financial goals
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Privacy & Data Security</h4>
                <p className="text-sm text-muted-foreground">
                  How we protect your financial information and maintain privacy
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQPage;