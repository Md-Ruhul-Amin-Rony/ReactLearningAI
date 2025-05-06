import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BookmarkPlus, Code, Play } from 'lucide-react';
import { Lesson } from '../data/tutorialData';
import { Link } from 'react-router-dom';
import CodeExample from './CodeExample';
import CodeExercise from './CodeExercise';
import MarkdownRenderer from './MarkdownRenderer';

interface LessonContentProps {
  lesson: Lesson;
  onNext?: () => void;
  onPrev?: () => void;
}

const LessonContent: React.FC<LessonContentProps> = ({ lesson, onNext, onPrev }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800';
      case 'advanced':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(lesson.level)}`}>
            {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
          </span>
        </div>
        <button
          onClick={toggleBookmark}
          className={`p-2 rounded-full ${
            bookmarked ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:bg-gray-100'
          }`}
          aria-label={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          <BookmarkPlus className="h-5 w-5" />
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p className="text-gray-600 mb-8">{lesson.description}</p>

      <div className="prose max-w-none mb-8">
        <MarkdownRenderer content={lesson.content} />
      </div>

      {lesson.codeExample && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <Code className="h-5 w-5 mr-2 text-blue-600" />
            Code Example
          </h2>
          <CodeExample code={lesson.codeExample} />
        </div>
      )}

      {lesson.exercise && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3 flex items-center">
            <Play className="h-5 w-5 mr-2 text-blue-600" />
            Practice Exercise
          </h2>
          <p className="mb-4">{lesson.exercise.task}</p>
          <CodeExercise
            starterCode={lesson.exercise.starterCode}
            solution={lesson.exercise.solution}
          />
        </div>
      )}

      <div className="flex justify-between mt-12 pt-4 border-t border-gray-200">
        {lesson.prevLessonId ? (
          <Link
            to={`/lesson/${lesson.prevLessonId}`}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Previous Lesson
          </Link>
        ) : (
          <div></div>
        )}
        {lesson.nextLessonId ? (
          <Link
            to={`/lesson/${lesson.nextLessonId}`}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            Next Lesson
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default LessonContent;