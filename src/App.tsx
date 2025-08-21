import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Main App Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/receipt" element={<ReceiptPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/gamification" element={<GamificationPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          
          {/* Support Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
