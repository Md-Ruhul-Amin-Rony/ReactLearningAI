import React from 'react';
import { BookOpen, ChevronRight, Home, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onSearchToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchToggle }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-blue-600">
          <BookOpen className="h-6 w-6" />
          <span className="font-bold text-xl">ReactMaster</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/tutorials" className="text-gray-700 hover:text-blue-600 transition-colors">
            Tutorials
          </Link>
          <Link to="/bookmarks" className="text-gray-700 hover:text-blue-600 transition-colors">
            Bookmarks
          </Link>
          <Link to="/progress" className="text-gray-700 hover:text-blue-600 transition-colors">
            My Progress
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onSearchToggle}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-gray-600" />
          </button>
          <Link
            to="/tutorials"
            className="hidden md:flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            <span>Start Learning</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
          <button className="md:hidden">
            <Home className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;