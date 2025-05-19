import React from 'react';

const About: React.FC = () => {
  return (
    <div className="notebook-card h-full">
      <div className="notebook-card-inner">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-1">About Me</h2>
          <div className="flex items-center">
            <div className="h-[2px] w-16 bg-accent-blue dark:bg-accent-yellow/70 mr-3"></div>
            <p className="font-caveat text-xl text-primary/70">The story so far</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16l4-4-4-4M8 12h8"></path>
              </svg>
              My Journey
            </h3>
            
            <div className="bg-white dark:bg-secondary/10 p-4 rounded-lg border-2 border-primary/60 dark:border-primary/40">
              <p className="font-patrick text-lg mb-4">
                I started my coding journey 5 years ago with a simple HTML page, and since then, 
                I've been hooked on creating beautiful and functional websites. 
              </p>
              <p className="font-patrick text-lg">
                With experience in front-end development, I enjoy turning complex problems into 
                simple, beautiful and intuitive designs. When I'm not coding, you'll find me 
                sketching in my actual notebook or hiking.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3" y2="6"></line>
                <line x1="3" y1="12" x2="3" y2="12"></line>
                <line x1="3" y1="18" x2="3" y2="18"></line>
              </svg>
              Skills
            </h3>
            
            <div className="bg-white dark:bg-secondary/10 p-4 rounded-lg border-2 border-primary/60 dark:border-primary/40">
              <div className="mb-3">
                <p className="font-caveat text-lg mb-1">Languages & Frameworks</p>
                <div className="flex flex-wrap gap-2">
                  <span className="tag bg-accent-blue">HTML5</span>
                  <span className="tag bg-accent-blue">CSS3</span>
                  <span className="tag bg-accent-blue">JavaScript</span>
                  <span className="tag bg-accent-yellow">React</span>
                  <span className="tag bg-accent-yellow">Vue</span>
                  <span className="tag bg-accent-green">Node.js</span>
                </div>
              </div>
              <div className="mb-3">
                <p className="font-caveat text-lg mb-1">Design</p>
                <div className="flex flex-wrap gap-2">
                  <span className="tag bg-accent-pink">Figma</span>
                  <span className="tag bg-accent-pink">Adobe XD</span>
                  <span className="tag bg-accent-pink">Sketch</span>
                </div>
              </div>
              <div>
                <p className="font-caveat text-lg mb-1">Other</p>
                <div className="flex flex-wrap gap-2">
                  <span className="tag bg-accent-green">Git</span>
                  <span className="tag bg-accent-green">Responsive Design</span>
                  <span className="tag bg-accent-green">SEO</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-3 flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              What I'm looking for
            </h3>
            
            <div className="bg-white dark:bg-secondary/10 p-4 rounded-lg border-2 border-primary/60 dark:border-primary/40">
              <p className="font-patrick text-lg">
                I'm currently looking for new opportunities where I can apply my skills to create 
                meaningful projects. I enjoy collaborative environments where I can continue learning 
                and growing as a developer. If you have a project that could use my skills or just 
                want to chat about web development, feel free to contact me!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;