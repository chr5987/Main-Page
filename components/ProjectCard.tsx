import React from 'react';
import { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon } from './icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-teal-500/20">
      <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} />
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-semibold bg-teal-900/50 text-teal-300 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-neutral-400 text-sm mb-4">{project.description}</p>
        <div className="flex items-center justify-end space-x-4">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-teal-400 transition-colors">
              <GitHubIcon className="h-6 w-6" />
              <span className="sr-only">GitHub Repository</span>
            </a>
          )}
          {project.projectUrl && (
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-teal-400 transition-colors">
              <ExternalLinkIcon className="h-6 w-6" />
              <span className="sr-only">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;