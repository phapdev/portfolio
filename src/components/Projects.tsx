import React, { useState, useMemo } from 'react';
import ProjectCard, { type ProjectType } from './ProjectCard';

const projectsData: ProjectType[] = [
  {
    id: '1',
    title: 'E-commerce Redesign',
    sender: 'Client X',
    preview: 'A complete overhaul of the user interface for an e-commerce platform, focusing on improving conversion rates and user experience.',
    tags: ['work', 'important']
  },
  {
    id: '2',
    title: 'Personal Blog',
    sender: 'Self',
    preview: 'A minimalist blog showcasing my thoughts on design, development, and creative processes.',
    tags: ['personal']
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    sender: 'Tech Startup',
    preview: 'An interactive weather application with data visualization and location-based forecasts.',
    tags: ['work']
  },
  {
    id: '4',
    title: 'Recipe Finder App',
    sender: 'Food Magazine',
    preview: 'A mobile-first web application that helps users find recipes based on ingredients they have available.',
    tags: ['work', 'important']
  },
  {
    id: '5',
    title: 'Photography Portfolio',
    sender: 'Self',
    preview: 'A responsive gallery showcasing my photography work with custom lightbox functionality.',
    tags: ['personal']
  }
];

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      // Filter by search query
      const matchesQuery = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.preview.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by tag if active
      const matchesTag = activeTag ? project.tags.includes(activeTag) : true;
      
      return matchesQuery && matchesTag;
    });
  }, [searchQuery, activeTag]);
  
  return (
    <div className="notebook-card h-full">
      <div className="notebook-card-inner">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-1">Projects</h2>
          <div className="flex items-center">
            <div className="h-[2px] w-16 bg-accent-blue dark:bg-accent-yellow/70 mr-3"></div>
            <p className="font-caveat text-xl text-primary/70">What I've been working on</p>
          </div>
        </div>
        
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="relative mb-4 sm:mb-0">
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="hand-drawn-border bg-white dark:bg-secondary/10 py-2 px-4 pr-10 text-sm w-full sm:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="absolute right-3 top-[10px] text-primary/70"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button 
              className={`tag ${activeTag === null ? 'bg-primary text-primary-foreground' : 'bg-secondary hover:bg-secondary/70'}`}
              onClick={() => setActiveTag(null)}
            >
              All
            </button>
            <button 
              className={`tag ${activeTag === 'work' ? 'bg-accent-blue' : 'bg-secondary hover:bg-secondary/70'}`}
              onClick={() => setActiveTag(activeTag === 'work' ? null : 'work')}
            >
              Work
            </button>
            <button 
              className={`tag ${activeTag === 'important' ? 'bg-accent-pink' : 'bg-secondary hover:bg-secondary/70'}`}
              onClick={() => setActiveTag(activeTag === 'important' ? null : 'important')}
            >
              Important
            </button>
            <button 
              className={`tag ${activeTag === 'personal' ? 'bg-accent-green' : 'bg-secondary hover:bg-secondary/70'}`}
              onClick={() => setActiveTag(activeTag === 'personal' ? null : 'personal')}
            >
              Personal
            </button>
          </div>
        </div>
        
        <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-220px)] pr-1">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="text-center py-10">
              <p className="font-patrick text-xl">No projects found matching your search.</p>
              <button 
                className="mt-4 hand-drawn-btn bg-accent-yellow text-primary hover:bg-accent-yellow/80"
                onClick={() => {
                  setSearchQuery('');
                  setActiveTag(null);
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;