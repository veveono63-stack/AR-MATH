
import React, { useState } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Implementation from './components/Implementation';
import { Tab } from './types';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Profile);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.Profile:
        return <Profile />;
      case Tab.Portfolio:
        return <Portfolio />;
      case Tab.Implementation:
        return <Implementation />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
