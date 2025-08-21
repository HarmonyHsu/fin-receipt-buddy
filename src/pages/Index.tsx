import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExpenseForm } from "@/components/ExpenseForm";
import { ReceiptDisplay } from "@/components/ReceiptDisplay";
import { Receipt, TrendingUp, Target, Shield } from "lucide-react";
import heroImage from "@/assets/hero-fintech.jpg";

interface ExpenseData {
  income?: number;
  expenses: Array<{
    name: string;
    amount: number;
    paymentMethod: string;
  }>;
}

const Index = () => {
  const [currentData, setCurrentData] = useState<ExpenseData | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleExpenseSubmit = (data: ExpenseData) => {
    setCurrentData(data);
  };

  // Generate predictions (simplified AI logic for demo)
  const generatePredictions = (expenses: any[]) => {
    return expenses.map(expense => ({
      category: expense.name,
      amount: expense.amount * (0.95 + Math.random() * 0.2), // ±10% variation
      description: getRandomInsight(expense.name)
    }));
  };

  const getRandomInsight = (category: string) => {
    const insights: { [key: string]: string[] } = {
      'Food & Dining': ['Weekend dining spike expected', 'Delivery fees increasing', 'Seasonal menu changes'],
      'Transportation': ['Gas prices trending up', 'Public transit rate change', 'More commute days'],
      'Entertainment': ['New streaming service', 'Concert season approaching', 'Weekend activities up'],
      'Shopping': ['Holiday shopping ahead', 'Seasonal wardrobe update', 'Price inflation expected']
    };
    const categoryInsights = insights[category] || ['Normal spending pattern'];
    return categoryInsights[Math.floor(Math.random() * categoryInsights.length)];
  };

  if (currentData) {
    const currentTotal = currentData.expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const predictedExpenses = generatePredictions(currentData.expenses);
    const predictedTotal = predictedExpenses.reduce((sum, exp) => sum + exp.amount, 0);
    const savingsPotential = currentTotal - predictedTotal;

    return (
      <div className="min-h-screen bg-gradient-hero">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Button 
              variant="outline" 
              onClick={() => setCurrentData(null)}
              className="mb-4"
            >
              ← Start Over
            </Button>
            <h1 className="text-4xl font-bold mb-2">Your Financial Future 🔮</h1>
            <p className="text-muted-foreground">Here's what your spending might look like next month</p>
          </div>

          {/* Receipts Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center">This Month</h2>
              <ReceiptDisplay
                title="Current Spending"
                items={currentData.expenses.map(exp => ({
                  category: exp.name,
                  amount: exp.amount
                }))}
                total={currentTotal}
                type="current"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center">Predicted Next Month</h2>
              <ReceiptDisplay
                title="AI Forecast"
                items={predictedExpenses}
                total={predictedTotal}
                type="predicted"
                date={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              />
            </div>
          </div>

          {/* Insights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Spending Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-2xl font-bold ${
                  predictedTotal > currentTotal ? 'text-money-red' : 'text-money-green'
                }`}>
                  {predictedTotal > currentTotal ? '+' : ''}
                  {((predictedTotal - currentTotal) / currentTotal * 100).toFixed(1)}%
                </p>
                <p className="text-sm text-muted-foreground">vs this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-success" />
                  Savings Potential
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-2xl font-bold ${
                  savingsPotential > 0 ? 'text-money-green' : 'text-money-red'
                }`}>
                  ${Math.abs(savingsPotential).toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {savingsPotential > 0 ? 'potential savings' : 'overspend risk'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Receipt className="h-5 w-5 text-warning" />
                  Top Category
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-foreground">
                  {predictedExpenses.reduce((max, exp) => exp.amount > max.amount ? exp : max).category}
                </p>
                <p className="text-sm text-muted-foreground">highest predicted spend</p>
              </CardContent>
            </Card>
          </div>

          {/* Suggestions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>💡 AI Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {savingsPotential < 0 && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                    <p className="text-sm">
                      ⚠️ <strong>Overspend Alert:</strong> You might exceed your budget by ${Math.abs(savingsPotential).toFixed(2)}. 
                      Consider reducing spending in high-risk categories.
                    </p>
                  </div>
                )}
                <div className="p-3 bg-success/10 border border-success/20 rounded-md">
                  <p className="text-sm">
                    🎯 <strong>Saving Challenge:</strong> Cut food delivery by 20% to save ~$
                    {(currentData.expenses.find(e => e.name === 'Food & Dining')?.amount * 0.2 || 50).toFixed(0)} this month.
                  </p>
                </div>
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-md">
                  <p className="text-sm">
                    📱 <strong>Track Progress:</strong> Use the receipt format to monitor daily spending and stay on track.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (showForm) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Set Up Your Financial Profile</h1>
            <p className="text-muted-foreground">Enter your spending data to get AI-powered predictions</p>
          </div>
          
          <ExpenseForm onSubmit={handleExpenseSubmit} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              See Your Financial
              <span className="block text-primary">Future on a Receipt</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get AI-powered spending predictions in a familiar receipt format. 
              Plan better, save more, and avoid financial surprises.
            </p>
            <div className="space-y-4 mb-8">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => setShowForm(true)}
                className="mr-4"
              >
                Get Started Free 🚀
              </Button>
              <Button variant="outline" size="xl">
                View Demo Receipt
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Financial planning dashboard showing receipts and analytics"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Receipt Buddy?</h2>
            <p className="text-muted-foreground">Familiar format, powerful insights</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card-custom">
              <CardHeader>
                <Receipt className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Receipt Format</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  View your finances in the familiar receipt format you already know and trust.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card-custom">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-success mx-auto mb-4" />
                <CardTitle>AI Predictions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get accurate spending forecasts based on your patterns and market trends.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card-custom">
              <CardHeader>
                <Shield className="h-12 w-12 text-warning mx-auto mb-4" />
                <CardTitle>Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your financial data stays secure. No bank account linking required.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to See Your Financial Future?</h2>
          <p className="text-xl opacity-90 mb-8">
            Start making smarter financial decisions with AI-powered receipt predictions.
          </p>
          <Button 
            variant="secondary" 
            size="xl"
            onClick={() => setShowForm(true)}
          >
            Create Your First Receipt 📄
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;