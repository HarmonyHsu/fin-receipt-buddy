import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, TrendingDown, AlertTriangle, Target, Calendar, PieChart } from "lucide-react";

const InsightsPage = () => {
  // Mock data - replace with real data from Supabase
  const spendingHistory = [
    { month: "Jan", amount: 2650 },
    { month: "Feb", amount: 2890 },
    { month: "Mar", amount: 2545 },
    { month: "Apr", amount: 2847 },
    { month: "May", amount: 2654 }
  ];

  const categoryBreakdown = [
    { category: "Food & Dining", current: 450, predicted: 478, trend: "+6.2%" },
    { category: "Transportation", current: 320, predicted: 298, trend: "-6.9%" },
    { category: "Entertainment", current: 181, predicted: 195, trend: "+7.7%" },
    { category: "Shopping", current: 265, predicted: 289, trend: "+9.1%" }
  ];

  const insights = [
    {
      type: "warning",
      icon: AlertTriangle,
      title: "Overspending Alert",
      description: "Your shopping category is trending 9.1% higher than usual. Consider setting a monthly limit.",
      color: "text-destructive"
    },
    {
      type: "success",
      icon: TrendingDown,
      title: "Great Progress",
      description: "Transportation costs decreased by 6.9%. Your carpooling efforts are paying off!",
      color: "text-success"
    },
    {
      type: "info",
      icon: Calendar,
      title: "Seasonal Pattern",
      description: "Entertainment spending typically increases by 15% during summer months.",
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
            <h1 className="text-4xl font-bold mb-2">Spending Insights 📊</h1>
            <p className="text-muted-foreground">
              Analyze your patterns, trends, and get personalized recommendations
            </p>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card-custom">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Monthly Average
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">$2,717</p>
              <p className="text-sm text-muted-foreground">Last 5 months</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-card-custom">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Target className="h-4 w-4 text-success" />
                Best Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">$2,545</p>
              <p className="text-sm text-muted-foreground">March 2024</p>
            </CardContent>
          </Card>

          <Card className="shadow-card-custom">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-warning" />
                Highest Month
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-warning">$2,890</p>
              <p className="text-sm text-muted-foreground">February 2024</p>
            </CardContent>
          </Card>

          <Card className="shadow-card-custom">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <PieChart className="h-4 w-4 text-primary" />
                Top Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">Food</p>
              <p className="text-sm text-muted-foreground">$450 this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Category Analysis */}
        <Card className="mb-8 shadow-card-custom">
          <CardHeader>
            <CardTitle>Category Breakdown & Predictions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryBreakdown.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">{category.category}</h3>
                    <p className="text-sm text-muted-foreground">
                      Current: ${category.current} → Predicted: ${category.predicted}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold ${
                      category.trend.startsWith('+') ? 'text-money-red' : 'text-money-green'
                    }`}>
                      {category.trend}
                    </p>
                    <p className="text-sm text-muted-foreground">vs last month</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Spending History Chart Placeholder */}
        <Card className="mb-8 shadow-card-custom">
          <CardHeader>
            <CardTitle>Spending History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive chart coming soon</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Showing {spendingHistory.length} months of data
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="mb-8 shadow-card-custom">
          <CardHeader>
            <CardTitle>🤖 AI Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                  <insight.icon className={`h-6 w-6 ${insight.color} flex-shrink-0 mt-0.5`} />
                  <div>
                    <h3 className="font-semibold mb-1">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="hero">
            <Link to="/receipt">Generate Updated Receipt</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/goals">Set Savings Goals</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/expenses">Update Expenses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;