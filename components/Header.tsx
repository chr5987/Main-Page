import React from 'react';
import { Section } from '../types';
import { CodeBracketIcon } from './icons';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const NavLink: React.FC<{
  section: Section;
  activeSection: Section;
  onClick: (section: Section) => void;
  children: React.ReactNode;
}> = ({ section, activeSection, onClick, children }) => {
  const isActive = section === activeSection;
  return (
    <button
      onClick={() => onClick(section)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'bg-neutral-800 text-teal-400'
          : 'text-neutral-300 hover:bg-neutral-700 hover:text-teal-300'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  return (
    <header className="bg-neutral-900/70 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-neutral-900/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-teal-400">
              <CodeBracketIcon className="h-8 w-8" />
            </div>
            <span className="text-white text-xl ml-3 font-bold">PT's Corner</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink section={Section.ABOUT} activeSection={activeSection} onClick={setActiveSection}>
                About
              </NavLink>
              <NavLink section={Section.PROJECTS} activeSection={activeSection} onClick={setActiveSection}>
                Projects
              </NavLink>
              <NavLink section={Section.NEWS} activeSection={activeSection} onClick={setActiveSection}>
                News
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;