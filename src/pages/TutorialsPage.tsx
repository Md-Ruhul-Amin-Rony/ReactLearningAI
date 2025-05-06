import React, { useState } from 'react';
import { modules } from '../data/tutorialData';
import { BookOpen, Search, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TutorialsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const filteredModules = modules.filter(module => {
    const matchesLevel = selectedLevel ? module.level === selectedLevel : true;
    const matchesSearch = searchTerm.trim() === '' || 
      module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      module.lessons.some(lesson => 
        lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lesson.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    return matchesLevel && matchesSearch;
  });

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
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-bold mb-2">React Tutorials</h1>
        <p className="text-gray-600 mb-8">Browse our comprehensive React tutorials and start learning today.</p>
        
        <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search tutorials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedLevel(null)}
                className={`px-4 py-2 rounded-md text-sm ${
                  selectedLevel === null 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedLevel('beginner')}
                className={`px-4 py-2 rounded-md text-sm ${
                  selectedLevel === 'beginner' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-green-50 text-green-700 hover:bg-green-100'
                }`}
              >
                Beginner
              </button>
              <button
                onClick={() => setSelectedLevel('intermediate')}
                className={`px-4 py-2 rounded-md text-sm ${
                  selectedLevel === 'intermediate' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                }`}
              >
                Intermediate
              </button>
              <button
                onClick={() => setSelectedLevel('advanced')}
                className={`px-4 py-2 rounded-md text-sm ${
                  selectedLevel === 'advanced' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                }`}
              >
                Advanced
              </button>
            </div>
          </div>
        </div>
        
        {filteredModules.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No tutorials found matching your search criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedLevel(null);
              }}
              className="mt-4 text-blue-600 font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {filteredModules.map(module => (
              <div key={module.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-blue-100">
                        <BookOpen className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">{module.title}</h2>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${getLevelColor(module.level)}`}>
                          {module.level.charAt(0).toUpperCase() + module.level.slice(1)}
                        </span>
                      </div>
                    </div>
                    <Link
                      to={`/lesson/${module.lessons[0].id}`}
                      className="hidden md:flex items-center gap-1 text-blue-600 hover:text-blue-800"
                    >
                      Start Learning
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{module.description}</p>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium mb-2">Lessons in this module:</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {module.lessons.map((lesson, index) => (
                        <Link
                          key={lesson.id}
                          to={`/lesson/${lesson.id}`}
                          className="p-3 border border-gray-200 rounded hover:bg-blue-50 transition-colors flex items-center gap-3"
                        >
                          <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-gray-700">
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="font-medium">{lesson.title}</h4>
                            <p className="text-sm text-gray-600">{lesson.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 md:hidden">
                    <Link
                      to={`/lesson/${module.lessons[0].id}`}
                      className="block w-full py-3 bg-blue-600 text-white text-center rounded-md font-medium hover:bg-blue-700 transition-colors"
                    >
                      Start Learning
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialsPage;