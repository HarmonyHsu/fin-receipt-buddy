import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Plus, Calendar, DollarSign, Trash2 } from "lucide-react";

interface SavingsGoal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  category: string;
}

const GoalsPage = () => {
  const [goals, setGoals] = useState<SavingsGoal[]>([
    {
      id: "1",
      title: "Emergency Fund",
      targetAmount: 5000,
      currentAmount: 1250,
      deadline: "2024-12-31",
      category: "Security"
    },
    {
      id: "2", 
      title: "Vacation to Japan",
      targetAmount: 3500,
      currentAmount: 850,
      deadline: "2024-09-15",
      category: "Travel"
    },
    {
      id: "3",
      title: "New Laptop",
      targetAmount: 1200,
      currentAmount: 320,
      deadline: "2024-08-30",
      category: "Tech"
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: "",
    targetAmount: "",
    deadline: "",
    category: ""
  });

  const handleAddGoal = () => {
    if (newGoal.title && newGoal.targetAmount && newGoal.deadline) {
      const goal: SavingsGoal = {
        id: Date.now().toString(),
        title: newGoal.title,
        targetAmount: parseFloat(newGoal.targetAmount),
        currentAmount: 0,
        deadline: newGoal.deadline,
        category: newGoal.category || "Other"
      };
      setGoals([...goals, goal]);
      setNewGoal({ title: "", targetAmount: "", deadline: "", category: "" });
      setShowAddForm(false);
    }
  };

  const handleDeleteGoal = (id: string) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const updateGoalProgress = (id: string, amount: number) => {
    setGoals(goals.map(goal => 
      goal.id === id 
        ? { ...goal, currentAmount: Math.max(0, Math.min(goal.targetAmount, goal.currentAmount + amount)) }
        : goal
    ));
  };

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min(100, (current / target) * 100);
  };

  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Savings Goals 🎯</h1>
              <p className="text-muted-foreground">
                Track your progress and stay motivated
              </p>
            </div>
            <Button onClick={() => setShowAddForm(true)} variant="hero">
              <Plus className="h-4 w-4 mr-2" />
              Add Goal
            </Button>
          </div>
        </div>

        {/* Add Goal Form */}
        {showAddForm && (
          <Card className="mb-8 shadow-card-custom">
            <CardHeader>
              <CardTitle>Create New Savings Goal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="goalTitle">Goal Title</Label>
                  <Input
                    id="goalTitle"
                    placeholder="e.g., New Car, Vacation, Emergency Fund"
                    value={newGoal.title}
                    onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="targetAmount">Target Amount ($)</Label>
                  <Input
                    id="targetAmount"
                    type="number"
                    placeholder="5000"
                    value={newGoal.targetAmount}
                    onChange={(e) => setNewGoal({...newGoal, targetAmount: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Target Date</Label>
                  <Input
                    id="deadline"
                    type="date"
                    value={newGoal.deadline}
                    onChange={(e) => setNewGoal({...newGoal, deadline: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category (Optional)</Label>
                  <Input
                    id="category"
                    placeholder="Travel, Tech, Security, etc."
                    value={newGoal.category}
                    onChange={(e) => setNewGoal({...newGoal, category: e.target.value})}
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <Button onClick={handleAddGoal} variant="hero">
                  Create Goal
                </Button>
                <Button onClick={() => setShowAddForm(false)} variant="outline">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Goals Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-card-custom">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Total Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">{goals.length}</p>
              <p className="text-sm text-muted-foreground">Active savings goals</p>
            </CardContent>
          </Card>

          <Card className="shadow-card-custom">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-success" />
                Total Saved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-success">
                ${goals.reduce((sum, goal) => sum + goal.currentAmount, 0).toFixed(2)}
              </p>
              <p className="text-sm text-muted-foreground">Across all goals</p>
            </CardContent>
          </Card>

          <Card className="shadow-card-custom">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-warning" />
                Target Total
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-warning">
                ${goals.reduce((sum, goal) => sum + goal.targetAmount, 0).toFixed(2)}
              </p>
              <p className="text-sm text-muted-foreground">Total target amount</p>
            </CardContent>
          </Card>
        </div>

        {/* Goals List */}
        <div className="space-y-6">
          {goals.map((goal) => {
            const progress = getProgressPercentage(goal.currentAmount, goal.targetAmount);
            const daysRemaining = getDaysRemaining(goal.deadline);
            const isOverdue = daysRemaining < 0;
            
            return (
              <Card key={goal.id} className="shadow-card-custom">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {goal.title}
                        <span className="text-sm font-normal bg-primary/10 text-primary px-2 py-1 rounded">
                          {goal.category}
                        </span>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        Target: {goal.deadline} 
                        {isOverdue ? (
                          <span className="text-destructive ml-2">({Math.abs(daysRemaining)} days overdue)</span>
                        ) : (
                          <span className="text-muted-foreground ml-2">({daysRemaining} days left)</span>
                        )}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteGoal(goal.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>${goal.currentAmount.toFixed(2)} saved</span>
                        <span className="font-semibold">{progress.toFixed(1)}%</span>
                      </div>
                      <Progress value={progress} className="h-3" />
                      <div className="flex justify-between text-sm mt-2 text-muted-foreground">
                        <span>$0</span>
                        <span>${goal.targetAmount.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateGoalProgress(goal.id, 25)}
                        >
                          +$25
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateGoalProgress(goal.id, 50)}
                        >
                          +$50
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateGoalProgress(goal.id, 100)}
                        >
                          +$100
                        </Button>
                      </div>
                      <div className="ml-auto">
                        <span className="text-sm text-muted-foreground">
                          ${(goal.targetAmount - goal.currentAmount).toFixed(2)} remaining
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {goals.length === 0 && (
          <Card className="shadow-card-custom">
            <CardContent className="text-center py-12">
              <Target className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Savings Goals Yet</h3>
              <p className="text-muted-foreground mb-6">
                Start by creating your first savings goal to track your progress
              </p>
              <Button onClick={() => setShowAddForm(true)} variant="hero">
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Goal
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default GoalsPage;