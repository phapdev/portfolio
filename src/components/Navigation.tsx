import React from 'react';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const navItems = ['Home', 'About', 'Projects', 'Contact', 'CV'];
  
  return (
    <nav className="flex flex-col items-center md:items-start md:flex-row justify-between py-4 px-6 bg-secondary/50 dark:bg-secondary/20 border-b-2 border-primary/30 mb-4">
      <div className="flex items-center mb-4 md:mb-0">
        <span className="font-caveat text-2xl font-medium mr-6">My Notebook</span>
        <div className="hidden md:flex space-x-4">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => setActiveSection(item.toLowerCase())}
              className={`relative font-architects px-3 py-1 transition-colors ${
                activeSection === item.toLowerCase()
                  ? 'text-primary font-semibold'
                  : 'text-primary/70 hover:text-primary'
              }`}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <span className="absolute left-0 right-0 bottom-[-4px] h-[3px] bg-accent-blue dark:bg-accent-yellow/50 rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects..."
            className="hand-drawn-border bg-white dark:bg-secondary/10 py-1 px-3 text-sm rounded-full w-40 md:w-auto"
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute right-2.5 top-[7px] text-primary/70"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <ThemeToggle />
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 flex justify-around bg-secondary dark:bg-secondary/20 border-t-2 border-primary/30 py-2 z-20">
        {navItems.map(item => (
          <button
            key={item}
            onClick={() => setActiveSection(item.toLowerCase())}
            className={`flex flex-col items-center p-1 ${
              activeSection === item.toLowerCase()
                ? 'text-primary font-semibold'
                : 'text-primary/70'
            }`}
          >
            {/* Mobile icons for each section */}
            {item === 'Home' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            )}
            {item === 'About' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
              </svg>
            )}
            {item === 'Projects' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
            )}
            {item === 'Contact' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            )}
            {item === 'CV' && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            )}
            <span className="text-xs mt-1">{item}</span>
            {activeSection === item.toLowerCase() && (
              <span className="absolute top-[-1px] left-[calc(50%-10px)] w-5 h-[3px] bg-accent-blue dark:bg-accent-yellow/50 rounded-full"></span>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;