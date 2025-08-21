import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExpenseForm } from "@/components/ExpenseForm";
import { Link } from "react-router-dom";
import { ArrowLeft, Receipt } from "lucide-react";

interface ExpenseData {
  income?: number;
  expenses: Array<{
    name: string;
    amount: number;
    paymentMethod: string;
  }>;
}

const ExpensesPage = () => {
  const [expenseData, setExpenseData] = useState<ExpenseData | null>(null);

  const handleExpenseSubmit = (data: ExpenseData) => {
    setExpenseData(data);
    // TODO: Save to Supabase
    console.log("Expense data:", data);
  };

  if (expenseData) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="mb-8">
            <Button asChild variant="outline" className="mb-4">
              <Link to="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div className="text-center">
              <Receipt className="h-12 w-12 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-2 text-money-green">Expenses Saved! ✅</h1>
              <p className="text-muted-foreground mb-6">
                Your spending data has been recorded. Ready to see your future?
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
              <h3 className="font-semibold text-success mb-2">✨ What's Next?</h3>
              <p className="text-sm text-muted-foreground">
                Our AI will analyze your spending patterns and generate predictions. 
                Generate your future receipt to see what your spending might look like next month!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/receipt">
                Generate Future Receipt 🧾
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/dashboard">
                View Dashboard
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-center">
            <Button 
              variant="ghost" 
              onClick={() => setExpenseData(null)}
              className="text-sm"
            >
              Add More Expenses
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Add Your Expenses</h1>
            <p className="text-muted-foreground">
              Enter your spending data to get AI-powered predictions
            </p>
          </div>
        </div>
        
        <ExpenseForm onSubmit={handleExpenseSubmit} />
      </div>
    </div>
  );
};

export default ExpensesPage;