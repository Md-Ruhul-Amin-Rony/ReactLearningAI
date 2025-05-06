import React, { useEffect, useRef } from 'react';
import { useSearch, SearchResult } from '../context/SearchContext';
import { X, Search, BookOpen, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchModal: React.FC = () => {
  const { 
    isSearchOpen, 
    closeSearch, 
    searchQuery, 
    setSearchQuery, 
    searchResults 
  } = useSearch();
  
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleResultClick = (result: SearchResult) => {
    navigate(result.path);
    closeSearch();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeSearch();
    }
  };

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4">
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[70vh] flex flex-col"
        onKeyDown={handleKeyDown}
      >
        <div className="p-4 border-b border-gray-200 flex items-center gap-3">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search tutorials, lessons, concepts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow border-none focus:outline-none focus:ring-0 text-lg"
          />
          <button 
            onClick={closeSearch}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        <div className="overflow-y-auto p-2">
          {searchResults.length === 0 && searchQuery.trim() !== '' ? (
            <div className="p-4 text-center text-gray-500">
              No results found for "{searchQuery}"
            </div>
          ) : searchQuery.trim() === '' ? (
            <div className="p-4 text-center text-gray-500">
              Start typing to search
            </div>
          ) : (
            <ul>
              {searchResults.map((result) => (
                <li key={result.id}>
                  <button
                    onClick={() => handleResultClick(result)}
                    className="w-full text-left p-3 hover:bg-gray-50 rounded-md flex items-start gap-3"
                  >
                    {result.type === 'module' ? (
                      <BookOpen className="h-5 w-5 text-blue-500 mt-0.5" />
                    ) : (
                      <FileText className="h-5 w-5 text-green-500 mt-0.5" />
                    )}
                    <div>
                      <h4 className="font-medium">{result.title}</h4>
                      <p className="text-sm text-gray-600">{result.description}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;