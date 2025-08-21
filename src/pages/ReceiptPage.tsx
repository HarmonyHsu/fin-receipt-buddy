import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReceiptDisplay } from "@/components/ReceiptDisplay";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, TrendingUp, Target, Receipt } from "lucide-react";

const ReceiptPage = () => {
  // Mock data - replace with real data from Supabase/state management
  const currentExpenses = [
    { name: "Food & Dining", amount: 450.00, paymentMethod: "Card" },
    { name: "Transportation", amount: 320.50, paymentMethod: "Card" },
    { name: "Entertainment", amount: 180.75, paymentMethod: "Cash" },
    { name: "Shopping", amount: 265.30, paymentMethod: "Mobile" }
  ];

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

  const currentTotal = currentExpenses.reduce((sum, exp) => sum + exp.amount, 0);
  const predictedExpenses = generatePredictions(currentExpenses);
  const predictedTotal = predictedExpenses.reduce((sum, exp) => sum + exp.amount, 0);
  const savingsPotential = currentTotal - predictedTotal;

  const handleDownloadPDF = () => {
    // TODO: Implement PDF download functionality
    alert("PDF download feature coming soon!");
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Your Future Receipt 🔮</h1>
            <p className="text-muted-foreground">AI-powered spending forecast for next month</p>
          </div>
        </div>

        {/* Receipts Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">This Month</h2>
            <ReceiptDisplay
              title="Current Spending"
              items={currentExpenses.map(exp => ({
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
          <Card className="shadow-card-custom">
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

          <Card className="shadow-card-custom">
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

          <Card className="shadow-card-custom">
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

        {/* AI Recommendations */}
        <Card className="mb-8 shadow-card-custom">
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
                  {(currentExpenses.find(e => e.name === 'Food & Dining')?.amount * 0.2 || 50).toFixed(0)} this month.
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

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={handleDownloadPDF} variant="hero" size="lg">
            <Download className="h-4 w-4 mr-2" />
            Download PDF Receipt
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/insights">View Detailed Insights</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/expenses">Update Expenses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;