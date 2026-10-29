import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TopNotification from './components/TopNotification';
import HeroSection from './components/HeroSection';
import StepperSection from './components/StepperSection';
import FormSection from './components/FormSection';
import FacilitiesSection from './components/FacilitiesSection';
import FaqSection from './components/FaqSection';
import { HelpdeskSection, Footer } from './components/HelpdeskFooter';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import PanitiaAkademik from './pages/PanitiaAkademik';
import StudentDashboard from './pages/StudentDashboard';
import { AuthProvider } from './lib/AuthContext';

const LandingPage = () => (
  <div className="bg-surface font-body-md text-body-md text-on-surface antialiased">
    <Header />
    <main className="w-full pt-20 bg-surface min-h-screen">
      <div className="flex flex-col w-full">
        <TopNotification />
        <HeroSection />
        <StepperSection />
        <FormSection />
        <FacilitiesSection />
        <FaqSection />
        <HelpdeskSection />
        <Footer />
      </div>
    </main>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/panitia-akademik"
          element={
            <ProtectedRoute requiredRole="admin">
              <PanitiaAkademik />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal-mahasiswa"
          element={
            <ProtectedRoute requiredRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
