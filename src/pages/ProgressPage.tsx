import React from 'react';
import { modules } from '../data/tutorialData';
import { ChevronRight, CheckCircle2, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgressPage: React.FC = () => {
  // This would normally come from state/context, but for demo we'll use mock data
  const completedLessons = ['what-is-react', 'jsx-basics'];
  
  // Calculate progress statistics
  const totalLessons = modules.reduce((sum, module) => sum + module.lessons.length, 0);
  const completedCount = completedLessons.length;
  const progressPercentage = Math.round((completedCount / totalLessons) * 100);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'text-green-600';
      case 'intermediate':
        return 'text-blue-600';
      case 'advanced':
        return 'text-purple-600';
      default:
        return 'text-gray-600';
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-bold mb-2">Your Learning Progress</h1>
        <p className="text-gray-600 mb-8">Track your journey to mastering React</p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium mb-2">Overall Progress</h3>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-3">
              <div 
                className="bg-blue-600 h-4 rounded-full transition-all duration-500" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-gray-700">
              <span className="font-bold text-blue-600">{progressPercentage}%</span> complete
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium mb-2">Lessons Completed</h3>
            <p className="text-3xl font-bold text-blue-600">{completedCount}</p>
            <p className="text-gray-600">out of {totalLessons} total lessons</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium mb-2">Next Recommended</h3>
            <p className="text-gray-700 mb-2">Continue with:</p>
            <Link 
              to="/lesson/components-props"
              className="block p-3 bg-blue-50 rounded-md text-blue-700 hover:bg-blue-100 transition-colors"
            >
              Components and Props
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Course Progress by Module</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {modules.map(module => {
              const totalModuleLessons = module.lessons.length;
              const completedModuleLessons = module.lessons.filter(lesson => 
                completedLessons.includes(lesson.id)
              ).length;
              const moduleProgress = Math.round((completedModuleLessons / totalModuleLessons) * 100);
              
              return (
                <div key={module.id} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-medium mb-1">{module.title}</h3>
                      <p className="text-sm text-gray-600">{module.description}</p>
                    </div>
                    <span className={`font-medium ${getLevelColor(module.level)}`}>
                      {moduleProgress}% Complete
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        module.level === 'beginner' 
                          ? 'bg-green-600' 
                          : module.level === 'intermediate'
                            ? 'bg-blue-600'
                            : 'bg-purple-600'
                      }`}
                      style={{ width: `${moduleProgress}%` }}
                    ></div>
                  </div>
                  
                  <div className="space-y-2 mt-4">
                    {module.lessons.map(lesson => (
                      <Link
                        key={lesson.id}
                        to={`/lesson/${lesson.id}`}
                        className="flex items-center justify-between p-3 rounded-md hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {completedLessons.includes(lesson.id) ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          ) : (
                            <Circle className="h-5 w-5 text-gray-300" />
                          )}
                          <span className={completedLessons.includes(lesson.id) ? 'text-gray-700' : 'text-gray-600'}>
                            {lesson.title}
                          </span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;