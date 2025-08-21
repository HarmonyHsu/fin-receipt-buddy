import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navigation from "@/components/Navigation";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Dashboard";
import ExpensesPage from "./pages/ExpensesPage";
import ReceiptPage from "./pages/ReceiptPage";
import InsightsPage from "./pages/InsightsPage";
import GoalsPage from "./pages/GoalsPage";
import GamificationPage from "./pages/GamificationPage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/support/AboutPage";
import FeaturesPage from "./pages/support/FeaturesPage";
import FAQPage from "./pages/support/FAQPage";
import ContactPage from "./pages/support/ContactPage";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Public routes - redirect to dashboard if authenticated */}
      <Route 
        path="/login" 
        element={user ? <Navigate to="/dashboard" replace /> : <Login />} 
      />
      <Route 
        path="/signup" 
        element={user ? <Navigate to="/dashboard" replace /> : <Signup />} 
      />
      
      {/* Redirect root to appropriate page */}
      <Route 
        path="/" 
        element={user ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} 
      />
      
      {/* Protected App Routes */}
      <Route path="/dashboard" element={<ProtectedRoute><Navigation /><Dashboard /></ProtectedRoute>} />
      <Route path="/expenses" element={<ProtectedRoute><Navigation /><ExpensesPage /></ProtectedRoute>} />
      <Route path="/receipt" element={<ProtectedRoute><Navigation /><ReceiptPage /></ProtectedRoute>} />
      <Route path="/insights" element={<ProtectedRoute><Navigation /><InsightsPage /></ProtectedRoute>} />
      <Route path="/goals" element={<ProtectedRoute><Navigation /><GoalsPage /></ProtectedRoute>} />
      <Route path="/gamification" element={<ProtectedRoute><Navigation /><GamificationPage /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Navigation /><SettingsPage /></ProtectedRoute>} />
      
      {/* Public Support Pages */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/contact" element={<ContactPage />} />
      
      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
