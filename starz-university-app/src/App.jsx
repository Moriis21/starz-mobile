import React, { useState, useEffect } from 'react';

import LoadingScreen from './components/LoadingScreen';
import LoginSignupForm from './components/LoginSignupForm';
import AccountIcon from './components/AccountIcon';
import HomeTab from './components/HomeTab';
import StudentPortalTab from './components/StudentPortalTab';
import HandbooksTab from './components/HandbooksTab';
import ContactTab from './components/ContactTab';
import FAQTab from './components/FAQTab';
import BrowseProgramsTab from './components/BrowseProgramsTab';
import Navigation from './components/Navigation';
import { isUserLoggedIn } from './utils/googleSheets';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    // Check if user is already logged in
    setIsLoggedIn(isUserLoggedIn());
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab("home");
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab />;
      case "portal":
        return <StudentPortalTab />;
      case "handbooks":
        return <HandbooksTab />;
      case "programs":
        return <BrowseProgramsTab />;
      case "faq":
        return <FAQTab />;
      case "contact":
        return <ContactTab />;
      default:
        return <HomeTab />;
    }
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  if (!isLoggedIn) {
    return <LoginSignupForm onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Account Icon */}
      <AccountIcon onLogout={handleLogout} />
      
      {/* Main Content */}
      <main className="flex-1 p-4 pb-20">
        {renderActiveTab()}
      </main>

      {/* Bottom Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;

