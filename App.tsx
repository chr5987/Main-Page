import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import News from './components/News';
import Footer from './components/Footer';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.ABOUT);

  const renderSection = useCallback(() => {
    switch (activeSection) {
      case Section.ABOUT:
        return <About />;
      case Section.PROJECTS:
        return <Projects />;
      case Section.NEWS:
        return <News />;
      default:
        return <About />;
    }
  }, [activeSection]);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-900 font-sans">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;