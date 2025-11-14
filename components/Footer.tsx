import React from 'react';
import { GitHubIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-center items-center">
          <div className="flex space-x-6">
            <a href="https://x.com/PTWaffles" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-teal-400 transition-colors">
              <TwitterIcon className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://github.com/chr5987" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-teal-400 transition-colors">
              <GitHubIcon className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;