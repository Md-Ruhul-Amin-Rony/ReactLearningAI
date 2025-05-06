import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modules } from '../data/tutorialData';
import LessonContent from '../components/LessonContent';
import { Menu } from 'lucide-react';

const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Find the current lesson in the modules data
  const currentLesson = modules.flatMap(m => m.lessons).find(l => l.id === lessonId);

  // Handlers for navigation
  const goToNextLesson = () => {
    if (currentLesson?.nextLessonId) {
      navigate(`/lesson/${currentLesson.nextLessonId}`);
    }
  };

  const goToPrevLesson = () => {
    if (currentLesson?.prevLessonId) {
      navigate(`/lesson/${currentLesson.prevLessonId}`);
    }
  };

  useEffect(() => {
    // If lesson not found, navigate to the first lesson or home
    if (!currentLesson && modules.length > 0 && modules[0].lessons.length > 0) {
      navigate(`/lesson/${modules[0].lessons[0].id}`);
    }
  }, [currentLesson, navigate]);

  if (!currentLesson) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <button
        className="fixed top-20 left-4 md:hidden z-30 bg-white p-2 rounded-md shadow-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <Menu className="h-5 w-5 text-gray-600" />
      </button>
      
      <div className="md:pl-64">
        <LessonContent 
          lesson={currentLesson}
          onNext={goToNextLesson}
          onPrev={goToPrevLesson}
        />
      </div>
    </div>
  );
};

export default LessonPage;