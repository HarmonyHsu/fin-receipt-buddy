import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2 } from "lucide-react";

interface ExpenseCategory {
  name: string;
  amount: number;
  paymentMethod: string;
}

interface ExpenseFormProps {
  onSubmit: (data: { income?: number; expenses: ExpenseCategory[] }) => void;
}

const defaultCategories = [
  'Food & Dining',
  'Transportation',
  'Rent/Housing',
  'Subscriptions',
  'Shopping',
  'Entertainment',
  'Healthcare',
  'Utilities',
  'Other'
];

const paymentMethods = ['Cash', 'Credit Card', 'Debit Card', 'Mobile Wallet', 'Bank Transfer'];

export const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
  const [income, setIncome] = useState<string>('');
  const [expenses, setExpenses] = useState<ExpenseCategory[]>([
    { name: 'Food & Dining', amount: 0, paymentMethod: 'Credit Card' }
  ]);

  const addExpense = () => {
    setExpenses([...expenses, { name: 'Food & Dining', amount: 0, paymentMethod: 'Credit Card' }]);
  };

  const removeExpense = (index: number) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const updateExpense = (index: number, field: keyof ExpenseCategory, value: string | number) => {
    const updated = [...expenses];
    updated[index] = { ...updated[index], [field]: value };
    setExpenses(updated);
  };

  const handleSubmit = () => {
    const validExpenses = expenses.filter(exp => exp.amount > 0);
    onSubmit({
      income: income ? parseFloat(income) : undefined,
      expenses: validExpenses
    });
  };

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <Card className="shadow-card-custom">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          💰 Enter Your Financial Data
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Income */}
        <div className="space-y-2">
          <Label htmlFor="income">Monthly Income (Optional)</Label>
          <Input
            id="income"
            type="number"
            placeholder="5000"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>

        {/* Expenses */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Monthly Expenses by Category</Label>
            <Button variant="outline" size="sm" onClick={addExpense}>
              <Plus className="h-4 w-4 mr-1" />
              Add Category
            </Button>
          </div>

          {expenses.map((expense, index) => (
            <div key={index} className="grid grid-cols-12 gap-2 items-end">
              <div className="col-span-4">
                <Select
                  value={expense.name}
                  onValueChange={(value) => updateExpense(index, 'name', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {defaultCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="col-span-3">
                <Input
                  type="number"
                  placeholder="Amount"
                  value={expense.amount || ''}
                  onChange={(e) => updateExpense(index, 'amount', parseFloat(e.target.value) || 0)}
                />
              </div>

              <div className="col-span-4">
                <Select
                  value={expense.paymentMethod}
                  onValueChange={(value) => updateExpense(index, 'paymentMethod', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {paymentMethods.map((method) => (
                      <SelectItem key={method} value={method}>
                        {method}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-1">
                {expenses.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeExpense(index)}
                    className="h-9 w-9 p-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}

          {/* Total */}
          {totalExpenses > 0 && (
            <div className="bg-muted p-3 rounded-md">
              <div className="flex justify-between font-medium">
                <span>Total Monthly Expenses:</span>
                <span className="font-mono">${totalExpenses.toFixed(2)}</span>
              </div>
              {income && parseFloat(income) > 0 && (
                <div className="text-sm text-muted-foreground mt-1">
                  <span>Remaining after expenses: </span>
                  <span className={`font-mono ${
                    parseFloat(income) - totalExpenses > 0 ? 'text-money-green' : 'text-money-red'
                  }`}>
                    ${(parseFloat(income) - totalExpenses).toFixed(2)}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        <Button 
          onClick={handleSubmit} 
          className="w-full" 
          variant="hero" 
          size="lg"
          disabled={totalExpenses === 0}
        >
          Generate My Future Receipt 🧾
        </Button>
      </CardContent>
    </Card>
  );
};