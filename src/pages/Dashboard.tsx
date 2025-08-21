import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Receipt, 
  Plus, 
  TrendingUp, 
  Target, 
  Calendar,
  PiggyBank,
  Trophy,
  BarChart3 
} from "lucide-react";

const Dashboard = () => {
  // Mock data - replace with real data from Supabase
  const currentMonthSpending = 2847.50;
  const predictedSpending = 2654.20;
  const savingsGoal = 500;
  const currentSavings = 387.50;

  const quickStats = [
    {
      title: "This Month",
      value: `$${currentMonthSpending.toFixed(2)}`,
      icon: Calendar,
      color: "text-primary"
    },
    {
      title: "Predicted Next",
      value: `$${predictedSpending.toFixed(2)}`,
      icon: TrendingUp,
      color: currentMonthSpending > predictedSpending ? "text-money-green" : "text-money-red"
    },
    {
      title: "Savings Goal",
      value: `$${currentSavings.toFixed(2)} / $${savingsGoal.toFixed(2)}`,
      icon: Target,
      color: "text-success"
    },
    {
      title: "Saved This Month",
      value: `$${(currentMonthSpending - predictedSpending).toFixed(2)}`,
      icon: PiggyBank,
      color: "text-money-green"
    }
  ];

  const quickActions = [
    {
      title: "Add Expenses",
      description: "Record new spending data",
      icon: Plus,
      link: "/expenses",
      variant: "default" as const
    },
    {
      title: "Generate Receipt",
      description: "View AI spending forecast",
      icon: Receipt,
      link: "/receipt",
      variant: "hero" as const
    },
    {
      title: "View Insights",
      description: "Analyze spending patterns",
      icon: BarChart3,
      link: "/insights",
      variant: "outline" as const
    },
    {
      title: "Savings Goals",
      description: "Track progress & challenges",
      icon: Trophy,
      link: "/goals",
      variant: "outline" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Financial Dashboard</h1>
          <p className="text-muted-foreground">Your spending overview and quick actions</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index} className="shadow-card-custom">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current vs Future Preview */}
        <Card className="mb-8 shadow-card-custom">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Receipt className="h-5 w-5 text-primary" />
              Spending Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2 text-center">Current Month</h3>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">${currentMonthSpending.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">Total spending so far</p>
                </div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="font-semibold mb-2 text-center">AI Prediction</h3>
                <div className="text-center">
                  <p className="text-3xl font-bold text-money-green">${predictedSpending.toFixed(2)}</p>
                  <p className="text-sm text-muted-foreground">Forecasted next month</p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button asChild variant="hero">
                <Link to="/receipt">Generate Full Receipt Forecast 📄</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="shadow-card-custom hover-scale transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <action.icon className="h-5 w-5 text-primary" />
                    {action.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {action.description}
                  </p>
                  <Button asChild variant={action.variant} className="w-full">
                    <Link to={action.link}>
                      {action.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;