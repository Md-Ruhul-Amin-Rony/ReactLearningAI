import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProgressContextType {
  completedLessons: string[];
  bookmarkedLessons: string[];
  markLessonComplete: (lessonId: string) => void;
  toggleBookmark: (lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  isLessonBookmarked: (lessonId: string) => boolean;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [bookmarkedLessons, setBookmarkedLessons] = useState<string[]>([]);

  // Load from localStorage on initial render
  useEffect(() => {
    const savedCompletedLessons = localStorage.getItem('completedLessons');
    const savedBookmarkedLessons = localStorage.getItem('bookmarkedLessons');
    
    if (savedCompletedLessons) {
      setCompletedLessons(JSON.parse(savedCompletedLessons));
    }
    
    if (savedBookmarkedLessons) {
      setBookmarkedLessons(JSON.parse(savedBookmarkedLessons));
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('bookmarkedLessons', JSON.stringify(bookmarkedLessons));
  }, [bookmarkedLessons]);

  const markLessonComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const toggleBookmark = (lessonId: string) => {
    if (bookmarkedLessons.includes(lessonId)) {
      setBookmarkedLessons(bookmarkedLessons.filter(id => id !== lessonId));
    } else {
      setBookmarkedLessons([...bookmarkedLessons, lessonId]);
    }
  };

  const isLessonCompleted = (lessonId: string) => {
    return completedLessons.includes(lessonId);
  };

  const isLessonBookmarked = (lessonId: string) => {
    return bookmarkedLessons.includes(lessonId);
  };

  return (
    <ProgressContext.Provider
      value={{
        completedLessons,
        bookmarkedLessons,
        markLessonComplete,
        toggleBookmark,
        isLessonCompleted,
        isLessonBookmarked,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};