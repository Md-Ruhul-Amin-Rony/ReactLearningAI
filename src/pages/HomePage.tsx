import React from 'react';
import { ArrowRight, BookOpen, Code, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { modules } from '../data/tutorialData';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Master React from Beginner to Expert
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Step-by-step tutorials with interactive examples and exercises
                to help you become a React professional.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/tutorials"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2"
                >
                  Start Learning
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/lesson/what-is-react"
                  className="bg-blue-700 text-white hover:bg-blue-800 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  First Lesson
                </Link>
              </div>
            </div>
            <div className="md:w-5/12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <pre className="text-blue-100 font-mono text-sm overflow-x-auto">
                  <code>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Why Learn With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Structured Learning Path</h3>
              <p className="text-gray-600">
                Follow a carefully designed curriculum that takes you from basics to advanced concepts
                in a logical progression.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Interactive Code Examples</h3>
              <p className="text-gray-600">
                Learn by doing with interactive code examples you can modify and experiment with
                directly in the browser.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Practical Exercises</h3>
              <p className="text-gray-600">
                Reinforce your learning with hands-on exercises and projects that help you build real-world skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">Your Learning Path</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            From understanding React fundamentals to mastering advanced patterns, our curriculum has you covered at every step.
          </p>
          
          <div className="space-y-8">
            {modules.map((module, index) => (
              <div key={module.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    {module.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{module.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {module.lessons.slice(0, 4).map((lesson) => (
                      <Link
                        key={lesson.id}
                        to={`/lesson/${lesson.id}`}
                        className="p-4 border border-gray-200 rounded-md hover:bg-blue-50 transition-colors"
                      >
                        <h4 className="font-medium mb-1">{lesson.title}</h4>
                        <p className="text-sm text-gray-600">{lesson.description}</p>
                      </Link>
                    ))}
                  </div>
                  {module.lessons.length > 4 && (
                    <div className="mt-4 text-center">
                      <Link
                        to={`/module/${module.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1"
                      >
                        View all {module.lessons.length} lessons
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Frontend Developer",
                quote: "This tutorial series helped me transition from a complete beginner to confidently building React applications for my company."
              },
              {
                name: "Michael Chen",
                role: "Software Engineer",
                quote: "The step-by-step approach with practical examples made learning React incredibly easy. I particularly loved the interactive exercises."
              },
              {
                name: "Emily Rodriguez",
                role: "UX Designer",
                quote: "As a designer wanting to understand React, this was perfect. The visual explanations helped me grasp concepts quickly."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master React?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Start your journey today and join thousands of developers who have transformed their skills with our tutorials.
          </p>
          <Link
            to="/tutorials"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-md font-medium text-lg transition-colors inline-flex items-center gap-2"
          >
            Get Started Now
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;