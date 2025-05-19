import React from 'react';

const CV: React.FC = () => {
  const handleDownload = () => {
    // In a real application, this would download an actual PDF
    alert('This would download a real CV in a production environment');
  };
  
  return (
    <div className="notebook-card h-full">
      <div className="notebook-card-inner">
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h2 className="text-3xl font-bold mb-1">Curriculum Vitae</h2>
            <div className="flex items-center">
              <div className="h-[2px] w-16 bg-accent-blue dark:bg-accent-yellow/70 mr-3"></div>
              <p className="font-caveat text-xl text-primary/70">My professional journey</p>
            </div>
          </div>
          
          <button 
            className="hand-drawn-btn flex items-center bg-accent-blue text-primary hover:bg-accent-blue/80 mt-4 sm:mt-0"
            onClick={handleDownload}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download CV
          </button>
        </div>
        
        <div className="bg-white dark:bg-secondary/10 p-6 rounded-lg border-2 border-primary/60 dark:border-primary/40 overflow-auto max-h-[calc(100vh-200px)]">
          <div className="space-y-6">
            <section>
              <h3 className="text-2xl font-bold border-b border-dashed border-primary/30 pb-2 mb-4">
                Work Experience
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-6 pb-6 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-accent-blue dark:bg-accent-yellow rounded-full left-[-9px] top-0"></div>
                  <h4 className="text-xl font-bold">Senior Front-end Developer</h4>
                  <div className="flex items-center text-primary/70 mb-2">
                    <p className="font-caveat">Creative Tech Solutions</p>
                    <span className="mx-2">•</span>
                    <p>2020 - Present</p>
                  </div>
                  <ul className="font-patrick space-y-1 list-disc list-inside">
                    <li>Led the front-end development of the company's flagship product</li>
                    <li>Implemented responsive design principles across all web properties</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                    <li>Reduced page load time by 40% through code optimization</li>
                  </ul>
                </div>
                
                <div className="relative pl-6 pb-6 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-accent-blue dark:bg-accent-yellow rounded-full left-[-9px] top-0"></div>
                  <h4 className="text-xl font-bold">Front-end Developer</h4>
                  <div className="flex items-center text-primary/70 mb-2">
                    <p className="font-caveat">WebDev Agency</p>
                    <span className="mx-2">•</span>
                    <p>2018 - 2020</p>
                  </div>
                  <ul className="font-patrick space-y-1 list-disc list-inside">
                    <li>Built responsive websites for clients across various industries</li>
                    <li>Collaborated with designers to implement pixel-perfect interfaces</li>
                    <li>Created interactive prototypes for client presentations</li>
                  </ul>
                </div>
                
                <div className="relative pl-6">
                  <div className="absolute w-4 h-4 bg-accent-blue dark:bg-accent-yellow rounded-full left-[-9px] top-0"></div>
                  <h4 className="text-xl font-bold">Junior Developer</h4>
                  <div className="flex items-center text-primary/70 mb-2">
                    <p className="font-caveat">Digital Solutions Inc.</p>
                    <span className="mx-2">•</span>
                    <p>2016 - 2018</p>
                  </div>
                  <ul className="font-patrick space-y-1 list-disc list-inside">
                    <li>Developed and maintained client websites</li>
                    <li>Assisted in UI/UX improvements based on user feedback</li>
                    <li>Participated in daily stand-ups and sprint planning meetings</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h3 className="text-2xl font-bold border-b border-dashed border-primary/30 pb-2 mb-4">
                Education
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-6 pb-6 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-accent-pink dark:bg-accent-pink/60 rounded-full left-[-9px] top-0"></div>
                  <h4 className="text-xl font-bold">B.S. in Computer Science</h4>
                  <div className="flex items-center text-primary/70 mb-2">
                    <p className="font-caveat">University of Technology</p>
                    <span className="mx-2">•</span>
                    <p>2012 - 2016</p>
                  </div>
                  <p className="font-patrick">Graduated with honors. Focused on web technologies and user interface design.</p>
                </div>
                
                <div className="relative pl-6">
                  <div className="absolute w-4 h-4 bg-accent-pink dark:bg-accent-pink/60 rounded-full left-[-9px] top-0"></div>
                  <h4 className="text-xl font-bold">Web Development Bootcamp</h4>
                  <div className="flex items-center text-primary/70 mb-2">
                    <p className="font-caveat">Code Academy</p>
                    <span className="mx-2">•</span>
                    <p>2016</p>
                  </div>
                  <p className="font-patrick">Intensive 12-week program focusing on modern front-end frameworks and best practices.</p>
                </div>
              </div>
            </section>
            
            <section>
              <h3 className="text-2xl font-bold border-b border-dashed border-primary/30 pb-2 mb-4">
                Skills & Certifications
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-bold mb-3">Technical Skills</h4>
                  <div className="space-y-2 font-patrick">
                    <div>
                      <p className="mb-1">HTML/CSS</p>
                      <div className="w-full bg-secondary/50 rounded-full h-2">
                        <div className="bg-accent-blue dark:bg-accent-yellow h-2 rounded-full" style={{ width: '95%' }}></div>
                      </div>
                    </div>
                    <div>
                      <p className="mb-1">JavaScript</p>
                      <div className="w-full bg-secondary/50 rounded-full h-2">
                        <div className="bg-accent-blue dark:bg-accent-yellow h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <p className="mb-1">React</p>
                      <div className="w-full bg-secondary/50 rounded-full h-2">
                        <div className="bg-accent-blue dark:bg-accent-yellow h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <p className="mb-1">UI/UX Design</p>
                      <div className="w-full bg-secondary/50 rounded-full h-2">
                        <div className="bg-accent-blue dark:bg-accent-yellow h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <p className="mb-1">Node.js</p>
                      <div className="w-full bg-secondary/50 rounded-full h-2">
                        <div className="bg-accent-blue dark:bg-accent-yellow h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-3">Certifications</h4>
                  <ul className="font-patrick space-y-2 list-disc list-inside">
                    <li>Google UX Design Professional Certificate</li>
                    <li>AWS Certified Developer - Associate</li>
                    <li>Microsoft Certified: JavaScript Developer</li>
                    <li>Accessibility Fundamentals - Web</li>
                  </ul>
                  
                  <h4 className="text-xl font-bold mt-6 mb-3">Languages</h4>
                  <ul className="font-patrick space-y-2">
                    <li>English (Native)</li>
                    <li>Spanish (Professional Proficiency)</li>
                    <li>French (Basic)</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;