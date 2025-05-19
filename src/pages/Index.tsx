import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Home from '@/components/home';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import CV from '@/components/CV';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'cv':
        return <CV />;
      default:
        return <Home />;
    }
  };
  
  return (
    <div className="min-h-screen bg-secondary/20 dark:bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-96px)]">
          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default Index;