import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A slick online store built with Next.js and Stripe for a seamless shopping experience.',
    imageUrl: 'https://picsum.photos/seed/project1/400/300',
    projectUrl: '#',
    repoUrl: '#',
    tags: ['React', 'Next.js', 'Stripe', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard that makes complex data easy to understand with D3.js and React.',
    imageUrl: 'https://picsum.photos/seed/project2/400/300',
    projectUrl: '#',
    repoUrl: '#',
    tags: ['React', 'D3.js', 'WebSocket', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A simple and clean task manager with drag-and-drop, auth, and cloud sync. Built with Vue and Firebase.',
    imageUrl: 'https://picsum.photos/seed/project3/400/300',
    projectUrl: '#',
    repoUrl: '#',
    tags: ['Vue.js', 'Firebase', 'SCSS'],
  },
   {
    id: 4,
    title: 'AI-Powered Chatbot',
    description: 'A smart chatbot powered by the Gemini API to handle customer service inquiries.',
    imageUrl: 'https://picsum.photos/seed/project4/400/300',
    repoUrl: '#',
    tags: ['React', 'Gemini API', 'Node.js', 'Express'],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2 className="text-3xl font-bold text-center text-white mb-10">Stuff I've Built</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;