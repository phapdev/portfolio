import React from 'react';

export interface ProjectType {
  id: string;
  title: string;
  sender: string;
  preview: string;
  tags: string[];
}

interface ProjectCardProps {
  project: ProjectType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card mb-3">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg">{project.title}</h3>
        <div className="flex space-x-2">
          <button className="text-primary/70 hover:text-primary" aria-label="Save">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <button className="text-primary/70 hover:text-primary" aria-label="Share">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </button>
          <button className="text-primary/70 hover:text-primary" aria-label="Delete">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
      
      <p className="text-sm text-primary/70 mb-1">From: {project.sender}</p>
      <p className="font-patrick mb-3">{project.preview}</p>
      
      <div className="flex justify-between items-center">
        <div>
          {project.tags.map(tag => (
            <span key={tag} className={`tag tag-${tag.toLowerCase()}`}>{tag}</span>
          ))}
        </div>
        
        <button className="font-caveat text-primary/80 hover:text-primary flex items-center transition-colors">
          <span>See details</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;