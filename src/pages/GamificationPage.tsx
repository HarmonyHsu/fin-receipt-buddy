import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Trophy, 
  Star, 
  Target, 
  Calendar,
  Zap,
  Award,
  TrendingUp,
  Coffee,
  ShoppingCart,
  Car
} from "lucide-react";

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: any;
  earned: boolean;
  earnedDate?: string;
  color: string;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  target: number;
  progress: number;
  reward: string;
  category: string;
  timeLeft: string;
  icon: any;
}

const GamificationPage = () => {
  const [badges] = useState<Badge[]>([
    {
      id: "1",
      name: "First Steps",
      description: "Created your first expense entry",
      icon: Star,
      earned: true,
      earnedDate: "2024-01-15",
      color: "bg-yellow-500"
    },
    {
      id: "2", 
      name: "Budget Tracker",
      description: "Tracked expenses for 7 consecutive days",
      icon: Calendar,
      earned: true,
      earnedDate: "2024-01-22",
      color: "bg-blue-500"
    },
    {
      id: "3",
      name: "Savings Hero",
      description: "Saved $100 in a single month",
      icon: Trophy,
      earned: true,
      earnedDate: "2024-02-01",
      color: "bg-green-500"
    },
    {
      id: "4",
      name: "Prediction Master",
      description: "Generated 10 AI receipt predictions",
      icon: Zap,
      earned: false,
      color: "bg-purple-500"
    },
    {
      id: "5",
      name: "Goal Achiever",
      description: "Completed your first savings goal",
      icon: Target,
      earned: false,
      color: "bg-orange-500"
    },
    {
      id: "6",
      name: "Consistent Saver",
      description: "Saved money for 3 months straight",
      icon: Award,
      earned: false,
      color: "bg-indigo-500"
    }
  ]);

  const [challenges] = useState<Challenge[]>([
    {
      id: "1",
      title: "Coffee Challenge",
      description: "Skip coffee purchases for 7 days",
      target: 7,
      progress: 3,
      reward: "$35 saved + Coffee Badge",
      category: "Food & Dining",
      timeLeft: "4 days left",
      icon: Coffee
    },
    {
      id: "2",
      title: "No-Buy Week",
      description: "No non-essential shopping for 7 days",
      target: 7,
      progress: 2,
      reward: "$150+ saved + Minimalist Badge",
      category: "Shopping",
      timeLeft: "5 days left",
      icon: ShoppingCart
    },
    {
      id: "3",
      title: "Transport Saver",
      description: "Use public transport or walk 10 times",
      target: 10,
      progress: 6,
      reward: "$50 saved + Eco Badge",
      category: "Transportation",
      timeLeft: "2 weeks left",
      icon: Car
    }
  ];

  const totalBadges = badges.length;
  const earnedBadges = badges.filter(badge => badge.earned).length;
  const activeChallenges = challenges.length;
  const userLevel = Math.floor(earnedBadges * 1.5) + 1;

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
            <h1 className="text-4xl font-bold mb-2">Your Progress 🏆</h1>
            <p className="text-muted-foreground">
              Earn badges, complete challenges, and level up your savings game
            </p>
          </div>
        </div>

        {/* Player Stats */}
        <Card className="mb-8 shadow-card-custom">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-warning" />
              Player Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Level {userLevel}</div>
                <p className="text-sm text-muted-foreground">Current Level</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">{earnedBadges}</div>
                <p className="text-sm text-muted-foreground">Badges Earned</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning mb-2">{activeChallenges}</div>
                <p className="text-sm text-muted-foreground">Active Challenges</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {((earnedBadges / totalBadges) * 100).toFixed(0)}%
                </div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Challenges */}
        <Card className="mb-8 shadow-card-custom">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              Active Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <challenge.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{challenge.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {challenge.description}
                          </p>
                          <Badge variant="outline" className="mb-2">
                            {challenge.category}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-success">
                            {challenge.reward}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {challenge.timeLeft}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span className="font-semibold">
                            {challenge.progress}/{challenge.target}
                          </span>
                        </div>
                        <Progress 
                          value={(challenge.progress / challenge.target) * 100} 
                          className="h-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Badges Collection */}
        <Card className="shadow-card-custom">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6 text-warning" />
              Badge Collection ({earnedBadges}/{totalBadges})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {badges.map((badge) => (
                <div 
                  key={badge.id} 
                  className={`p-4 rounded-lg border-2 transition-all ${
                    badge.earned 
                      ? 'border-success bg-success/5 shadow-sm' 
                      : 'border-muted bg-muted/30 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-full ${badge.color} ${!badge.earned && 'grayscale'}`}>
                      <badge.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{badge.name}</h4>
                      {badge.earned && badge.earnedDate && (
                        <p className="text-xs text-success">
                          Earned {new Date(badge.earnedDate).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {badge.description}
                  </p>
                  {badge.earned && (
                    <div className="mt-3">
                      <Badge variant="default" className="bg-success">
                        ✓ Earned
                      </Badge>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Level Progress */}
        <Card className="mt-8 shadow-card-custom">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Level Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Level {userLevel}</span>
                <span className="text-muted-foreground">Next: Level {userLevel + 1}</span>
              </div>
              <Progress value={((earnedBadges % 3) / 3) * 100} className="h-3" />
              <p className="text-sm text-muted-foreground">
                Earn {3 - (earnedBadges % 3)} more badges to reach Level {userLevel + 1}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button asChild variant="hero">
            <Link to="/goals">View Savings Goals</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/expenses">Track More Expenses</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GamificationPage;