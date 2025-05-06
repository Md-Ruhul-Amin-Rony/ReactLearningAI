import React from 'react';
import { BookmarkX, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookmarksPage: React.FC = () => {
  // This would normally come from state/context, but for demo purposes we'll use mock data
  const bookmarks = [
    {
      id: 'what-is-react',
      title: 'What is React?',
      description: 'Introduction to React and its core concepts',
      module: 'Getting Started with React',
      level: 'beginner',
      addedAt: '2 days ago'
    },
    {
      id: 'state-hooks',
      title: 'State Hooks',
      description: 'Learn how to use the useState hook to add state to functional components',
      module: 'React Hooks',
      level: 'intermediate',
      addedAt: '1 week ago'
    }
  ];

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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Your Bookmarks</h1>
            <p className="text-gray-600">Lessons you've saved to revisit later</p>
          </div>
          <button className="text-red-600 hover:text-red-800 flex items-center gap-1 text-sm">
            <BookmarkX className="h-4 w-4" />
            Clear All
          </button>
        </div>

        {bookmarks.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Bookmark className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">No bookmarks yet</h3>
            <p className="text-gray-600 mb-6">
              When you find lessons you want to revisit, bookmark them by clicking the bookmark
              icon at the top of the lesson page.
            </p>
            <Link
              to="/tutorials"
              className="px-4 py-2 bg-blue-600 text-white rounded-md inline-block hover:bg-blue-700 transition-colors"
            >
              Browse Tutorials
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {bookmarks.map(bookmark => (
              <div key={bookmark.id} className="bg-white rounded-lg shadow-sm p-4 flex items-start gap-4">
                <div className="text-blue-500 pt-1">
                  <Bookmark className="h-5 w-5" />
                </div>
                <div className="flex-grow">
                  <Link to={`/lesson/${bookmark.id}`} className="block">
                    <h3 className="text-lg font-medium hover:text-blue-600 transition-colors">{bookmark.title}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-3">{bookmark.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500">{bookmark.module}</span>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(bookmark.level)}`}>
                        {bookmark.level.charAt(0).toUpperCase() + bookmark.level.slice(1)}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">Added {bookmark.addedAt}</span>
                  </div>
                </div>
                <button
                  className="text-gray-400 hover:text-red-600 p-1"
                  aria-label="Remove bookmark"
                >
                  <BookmarkX className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookmarksPage;