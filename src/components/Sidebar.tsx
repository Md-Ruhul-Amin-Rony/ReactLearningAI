import React from 'react';
import { modules } from '../data/tutorialData';
import { ChevronRight, BookOpen, Bookmark } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside 
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-20 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
    >
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-600" />
          <span>React Tutorial</span>
        </h2>
        <button 
          className="md:hidden p-2 rounded-full hover:bg-gray-100"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tutorials..."
            className="w-full px-3 py-2 pl-8 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
        </div>
      </div>

      <nav className="p-4 h-[calc(100vh-140px)] overflow-y-auto">
        <div className="space-y-6">
          {modules.map((module) => (
            <div key={module.id} className="space-y-2">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {module.title}
              </h3>
              <ul className="space-y-1">
                {module.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <NavLink
                      to={`/lesson/${lesson.id}`}
                      className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${
                          isActive
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`
                      }
                    >
                      <span>{lesson.title}</span>
                      {Math.random() > 0.7 && (
                        <Bookmark className="h-4 w-4 ml-auto text-blue-500" />
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

// Import for the Search icon
import { Search } from 'lucide-react';