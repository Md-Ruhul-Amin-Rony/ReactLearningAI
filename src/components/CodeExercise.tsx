import React, { useState } from 'react';
import { Check, Eye, EyeOff, RotateCcw } from 'lucide-react';
import CodeExample from './CodeExample';

interface CodeExerciseProps {
  starterCode: string;
  solution: string;
}

const CodeExercise: React.FC<CodeExerciseProps> = ({ starterCode, solution }) => {
  const [code, setCode] = useState(starterCode);
  const [showSolution, setShowSolution] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
    setIsCorrect(false);
  };

  const resetCode = () => {
    setCode(starterCode);
    setIsCorrect(false);
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  const checkSolution = () => {
    // This is a simplified check - in a real app you might want to 
    // compare ASTs or run tests against the code
    const userCodeClean = code.replace(/\s+/g, ' ').trim();
    const solutionClean = solution.replace(/\s+/g, ' ').trim();
    
    setIsCorrect(userCodeClean.includes(solutionClean));
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="bg-gray-800 p-2 flex justify-between items-center">
          <span className="text-xs text-gray-300">Your code</span>
          <div className="flex gap-1">
            <button
              onClick={resetCode}
              className="p-1 rounded hover:bg-gray-700 transition-colors text-gray-400"
              aria-label="Reset code"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
            <button
              onClick={toggleSolution}
              className="p-1 rounded hover:bg-gray-700 transition-colors text-gray-400"
              aria-label={showSolution ? "Hide solution" : "Show solution"}
            >
              {showSolution ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        <div className="p-4">
          <textarea
            value={code}
            onChange={handleCodeChange}
            className="w-full h-48 bg-gray-900 text-gray-100 font-mono text-sm p-0 border-0 focus:ring-0 resize-none"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={checkSolution}
          className={`px-4 py-2 rounded-md flex items-center gap-2 ${
            isCorrect
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          } transition-colors`}
        >
          {isCorrect && <Check className="h-4 w-4" />}
          {isCorrect ? 'Correct!' : 'Check Solution'}
        </button>
        {isCorrect && (
          <span className="text-green-600 flex items-center gap-1">
            <Check className="h-4 w-4" />
            Great job!
          </span>
        )}
      </div>

      {showSolution && (
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-2">Solution</h3>
          <CodeExample code={solution} />
        </div>
      )}
    </div>
  );
};

export default CodeExercise;