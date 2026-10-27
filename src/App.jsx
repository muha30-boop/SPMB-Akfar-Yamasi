import React from 'react';
import Header from './components/Header';
import TopNotification from './components/TopNotification';
import HeroSection from './components/HeroSection';
import StepperSection from './components/StepperSection';
import FormSection from './components/FormSection';
import FacilitiesSection from './components/FacilitiesSection';
import FaqSection from './components/FaqSection';
import { HelpdeskSection, Footer } from './components/HelpdeskFooter';

function App() {
  return (
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
}

export default App;
