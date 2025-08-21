import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import { ArrowLeft, User, Shield, Bell, Palette, Database, Trash2 } from "lucide-react";

const SettingsPage = () => {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe", 
    email: "john@example.com",
    lifestyle: "employee",
    currency: "USD"
  });

  const [preferences, setPreferences] = useState({
    notifications: true,
    emailUpdates: false,
    darkMode: false,
    currency: "USD",
    language: "en"
  });

  const [privacy, setPrivacy] = useState({
    dataSharing: false,
    analytics: true,
    marketing: false
  });

  const handleProfileUpdate = () => {
    // TODO: Update profile in Supabase
    alert("Profile updated successfully!");
  };

  const handleExportData = () => {
    // TODO: Implement data export
    alert("Data export feature coming soon!");
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmed) {
      // TODO: Implement account deletion
      alert("Account deletion feature coming soon!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <div>
            <h1 className="text-4xl font-bold mb-2">Settings ⚙️</h1>
            <p className="text-muted-foreground">
              Manage your account, preferences, and privacy settings
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Profile Settings */}
          <Card className="shadow-card-custom">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={profile.firstName}
                    onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={profile.lastName}
                    onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lifestyle">Lifestyle</Label>
                  <Select 
                    value={profile.lifestyle} 
                    onValueChange={(value) => setProfile({...profile, lifestyle: value})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="employee">Employee</SelectItem>
                      <SelectItem value="freelancer">Freelancer</SelectItem>
                      <SelectItem value="business-owner">Business Owner</SelectItem>
                      <SelectItem value="retired">Retired</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button onClick={handleProfileUpdate} className="mt-6">
                Update Profile
              </Button>
            </CardContent>
          </Card>

          {/* App Preferences */}
          <Card className="shadow-card-custom">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                App Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="notifications">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive spending alerts and goal reminders
                    </p>
                  </div>
                  <Switch
                    id="notifications"
                    checked={preferences.notifications}
                    onCheckedChange={(checked) => 
                      setPreferences({...preferences, notifications: checked})
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="emailUpdates">Email Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Weekly spending summaries and tips
                    </p>
                  </div>
                  <Switch
                    id="emailUpdates"
                    checked={preferences.emailUpdates}
                    onCheckedChange={(checked) => 
                      setPreferences({...preferences, emailUpdates: checked})
                    }
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currency">Default Currency</Label>
                    <Select 
                      value={preferences.currency} 
                      onValueChange={(value) => setPreferences({...preferences, currency: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD ($)</SelectItem>
                        <SelectItem value="EUR">EUR (€)</SelectItem>
                        <SelectItem value="GBP">GBP (£)</SelectItem>
                        <SelectItem value="CAD">CAD (C$)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select 
                      value={preferences.language} 
                      onValueChange={(value) => setPreferences({...preferences, language: value})}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Privacy & Security */}
          <Card className="shadow-card-custom">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="analytics">Usage Analytics</Label>
                    <p className="text-sm text-muted-foreground">
                      Help improve the app by sharing usage data
                    </p>
                  </div>
                  <Switch
                    id="analytics"
                    checked={privacy.analytics}
                    onCheckedChange={(checked) => 
                      setPrivacy({...privacy, analytics: checked})
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="dataSharing">Data Sharing</Label>
                    <p className="text-sm text-muted-foreground">
                      Share anonymized data for research
                    </p>
                  </div>
                  <Switch
                    id="dataSharing"
                    checked={privacy.dataSharing}
                    onCheckedChange={(checked) => 
                      setPrivacy({...privacy, dataSharing: checked})
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="marketing">Marketing Communications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive product updates and offers
                    </p>
                  </div>
                  <Switch
                    id="marketing"
                    checked={privacy.marketing}
                    onCheckedChange={(checked) => 
                      setPrivacy({...privacy, marketing: checked})
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card className="shadow-card-custom">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Data Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-2">Export Your Data</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download all your financial data in JSON format
                  </p>
                  <Button onClick={handleExportData} variant="outline">
                    Export Data
                  </Button>
                </div>

                <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <h4 className="font-semibold mb-2 text-destructive flex items-center gap-2">
                    <Trash2 className="h-4 w-4" />
                    Danger Zone
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <Button onClick={handleDeleteAccount} variant="destructive">
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;