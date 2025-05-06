import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeExampleProps {
  code: string;
  language?: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ code, language = 'jsx' }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-900 text-gray-100">
      <div className="flex items-center justify-between p-2 bg-gray-800">
        <span className="text-xs font-mono">{language}</span>
        <button
          onClick={copyToClipboard}
          className="p-1 rounded hover:bg-gray-700 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4 text-gray-400" />
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
};

export default CodeExample;