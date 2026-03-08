import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import { ThemeProvider } from "./components/layout/ThemeContext";
import ThemeContext from "./components/layout/ThemeContext";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import InstitutionPage from "./pages/InstitutionPage";
import BranchPage from "./pages/BranchPage";
import UsersPage from "./pages/UsersPage";
import ServicePage from "./pages/ServicePage";
import VipServicePage from "./pages/VipServicePage";
import AppointmentPage from "./pages/AppointmentPage";
import UrgentAppointmentsPage from "./pages/UrgentAppointmentPage";

const AppContent = () => {
  const { theme, currentTheme } = useContext(ThemeContext);
  
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/institutions" element={<InstitutionPage />} />
        <Route path="/branches" element={<BranchPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/vip-services" element={<VipServicePage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/urgent-appointments" element={<UrgentAppointmentsPage />} />

      </Routes>
    </AppLayout>
  );
};

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Router>
  );
};

export default App;