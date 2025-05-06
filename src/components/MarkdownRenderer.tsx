import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Very basic markdown parsing for demonstration purposes
  // In a real app, you'd use a proper markdown library like react-markdown
  
  const parseMarkdown = (markdown: string) => {
    let html = markdown;
    
    // Headers
    html = html.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold my-4">$1</h1>');
    html = html.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold my-3">$1</h2>');
    html = html.replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold my-2">$1</h3>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Lists
    html = html.replace(/^\- (.*$)/gm, '<li class="ml-4">$1</li>');
    html = html.replace(/<\/li>\n<li/g, '</li><li');
    html = html.replace(/(<li.*<\/li>)/g, '<ul class="list-disc my-2 pl-5">$1</ul>');
    
    // Code
    html = html.replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded font-mono text-sm">$1</code>');
    
    // Paragraphs
    html = html.replace(/^\s*$/gm, '</p><p class="my-2">');
    html = html.replace(/^([^<].*)/gm, '$1<br>');
    
    // Wrap with p tags if not already in a block tag
    if (!html.startsWith('<')) {
      html = `<p class="my-2">${html}</p>`;
    }
    
    return html;
  };
  
  return (
    <div dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} />
  );
};

export default MarkdownRenderer;