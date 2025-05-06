import React, { createContext, useContext, useState } from 'react';

interface SearchContextType {
  isSearchOpen: boolean;
  searchQuery: string;
  searchResults: SearchResult[];
  openSearch: () => void;
  closeSearch: () => void;
  setSearchQuery: (query: string) => void;
}

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'lesson' | 'module';
  path: string;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  // Add more sophisticated search logic here
  // For now, this is a placeholder
  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
    
    // Mock search results based on query
    if (query.trim().length > 0) {
      // In a real app, you would search through your data
      setSearchResults([
        {
          id: 'what-is-react',
          title: 'What is React?',
          description: 'Introduction to React and its core concepts',
          type: 'lesson',
          path: '/lesson/what-is-react',
        },
        {
          id: 'components-props',
          title: 'Components and Props',
          description: 'Understanding React components and props',
          type: 'lesson',
          path: '/lesson/components-props',
        },
      ]);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        isSearchOpen,
        searchQuery,
        searchResults,
        openSearch,
        closeSearch,
        setSearchQuery: handleSearchQueryChange,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};