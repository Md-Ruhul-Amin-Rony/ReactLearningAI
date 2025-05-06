import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SearchModal from './components/SearchModal';
import HomePage from './pages/HomePage';
import TutorialsPage from './pages/TutorialsPage';
import LessonPage from './pages/LessonPage';
import BookmarksPage from './pages/BookmarksPage';
import ProgressPage from './pages/ProgressPage';
import { ProgressProvider } from './context/ProgressContext';
import { SearchProvider } from './context/SearchContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <ProgressProvider>
        <SearchProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar onSearchToggle={() => setSidebarOpen(!sidebarOpen)} />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <main className="md:ml-64">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tutorials" element={<TutorialsPage />} />
                <Route path="/lesson/:lessonId" element={<LessonPage />} />
                <Route path="/bookmarks" element={<BookmarksPage />} />
                <Route path="/progress" element={<ProgressPage />} />
              </Routes>
            </main>
            <SearchModal />
          </div>
        </SearchProvider>
      </ProgressProvider>
    </Router>
  );
}

export default App;