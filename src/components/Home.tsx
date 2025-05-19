import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="notebook-card h-full flex flex-col md:flex-row">
      <div className="notebook-card-inner w-full md:w-1/2 flex flex-col justify-center pr-4">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Hi, I'm <span className="text-primary">Jane Doe</span></h1>
          <div className="flex items-center">
            <div className="h-[2px] w-16 bg-accent-blue dark:bg-accent-yellow/70 mr-3"></div>
            <p className="font-caveat text-xl md:text-2xl">Front-end Developer</p>
          </div>
        </div>
        
        <p className="mb-6 text-lg font-patrick">
          Welcome to my digital notebook! This is where I collect my ideas, 
          projects, and experiences as a passionate web developer 
          focused on creating beautiful and functional interfaces.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <button className="hand-drawn-btn flex items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
            View Projects
          </button>
          
          <button className="hand-drawn-btn bg-accent-blue text-primary hover:bg-accent-blue/80 flex items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Contact Me
          </button>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full bg-accent-pink dark:bg-accent-blue/30 rounded-lg transform rotate-6"></div>
          <div className="absolute -top-2 -left-2 w-full h-full bg-accent-yellow dark:bg-accent-green/30 rounded-lg transform -rotate-3"></div>
          <div className="relative bg-white dark:bg-secondary/30 p-6 rounded-lg border-2 border-primary/60 dark:border-primary/40">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-accent-pink rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-accent-yellow rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-accent-green rounded-full"></div>
            </div>
            
            <div className="font-patrick text-primary">
              <div className="mb-2 pb-2 border-b border-dashed border-primary/30">
                <span className="text-primary/50 mr-2">&#47;&#47;</span>
                <span>Hello World!</span>
              </div>
              <div className="ml-4 mb-1">
                <span className="text-primary/50 mr-2">const</span>
                <span className="text-primary">developer</span>
                <span className="text-primary/70"> = </span>
                <span>&#123;</span>
              </div>
              <div className="ml-8 mb-1">
                <span className="text-primary/70">name:</span>
                <span className="text-accent-blue dark:text-accent-yellow"> 'Jane Doe'</span>,
              </div>
              <div className="ml-8 mb-1">
                <span className="text-primary/70">skills:</span>
                <span> [</span>
                <span className="text-accent-blue dark:text-accent-yellow">'HTML'</span>,
                <span className="text-accent-blue dark:text-accent-yellow"> 'CSS'</span>,
                <span className="text-accent-blue dark:text-accent-yellow"> 'JS'</span>
                <span>]</span>,
              </div>
              <div className="ml-8 mb-1">
                <span className="text-primary/70">loves:</span>
                <span className="text-accent-blue dark:text-accent-yellow"> 'Clean UI'</span>
              </div>
              <div className="ml-4 mb-1">
                <span>&#125;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;