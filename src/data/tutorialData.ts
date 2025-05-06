import { ReactNode } from 'react';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExample?: string;
  exercise?: {
    task: string;
    starterCode: string;
    solution: string;
  };
  nextLessonId?: string;
  prevLessonId?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  level: 'beginner' | 'intermediate' | 'advanced';
}

export const modules: Module[] = [
  {
    id: 'getting-started',
    title: 'Getting Started with React',
    description: 'Learn the fundamentals of React and set up your first React application',
    level: 'beginner',
    lessons: [
      {
        id: 'what-is-react',
        title: 'What is React?',
        description: 'Introduction to React and its core concepts',
        content: `
# What is React?

React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Facebook and a community of individual developers and companies.

## Key characteristics of React:

- **Component-Based**: React applications are built using components, which are reusable pieces of code that represent a part of the user interface.
- **Declarative**: You describe what you want to see, and React handles the DOM updates for you.
- **Virtual DOM**: React creates a lightweight representation of the real DOM in memory to improve performance.
- **One-Way Data Flow**: Data flows down from parent components to child components.
- **JSX**: A syntax extension that allows you to write HTML-like code in JavaScript.

React makes it easier to build interactive UIs by efficiently updating and rendering the right components when your data changes.
        `,
        level: 'beginner',
        nextLessonId: 'jsx-basics',
        codeExample: `
// A simple React component
function Welcome() {
  return <h1>Hello, world!</h1>;
}

// Usage
<Welcome />
        `,
      },
      {
        id: 'jsx-basics',
        title: 'JSX Basics',
        description: 'Learn about JSX, the syntax extension used in React',
        content: `
# JSX Basics

JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It makes writing React elements more intuitive and readable.

## Key points about JSX:

- JSX produces React elements that are rendered to the DOM
- JSX allows you to embed JavaScript expressions within curly braces {}
- JSX attributes use camelCase naming convention
- JSX elements can be nested like HTML
- JSX must have a single root element (or use React Fragments)

## Why JSX?

React separates concerns with loosely coupled units called "components" that contain both markup and logic, rather than separating technologies by putting markup and logic in separate files.
        `,
        level: 'beginner',
        prevLessonId: 'what-is-react',
        nextLessonId: 'components-props',
        codeExample: `
// JSX example
function Greeting() {
  const name = 'John';
  return (
    <div className="greeting">
      <h1>Hello, {name}!</h1>
      <p>Welcome to React</p>
    </div>
  );
}
        `,
        exercise: {
          task: 'Create a JSX element that displays your name and favorite hobby in a paragraph.',
          starterCode: `
function AboutMe() {
  // Add your code here
  return (
    // Your JSX goes here
  );
}
          `,
          solution: `
function AboutMe() {
  const name = 'Your Name';
  const hobby = 'coding';
  
  return (
    <div>
      <h2>About Me</h2>
      <p>My name is {name} and I love {hobby}!</p>
    </div>
  );
}
          `,
        }
      },
      {
        id: 'components-props',
        title: 'Components and Props',
        description: 'Understanding React components and how to pass data using props',
        content: `
# Components and Props

Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.

## Types of Components:

1. **Function Components**: Simple JavaScript functions that accept props and return React elements.
2. **Class Components**: ES6 classes that extend React.Component and have additional features.

## Props (Properties):

Props are how you pass data from parent to child components. They are read-only and help make your components reusable.

## Key Characteristics:

- Props are passed down from parent to child components
- Props are immutable (read-only)
- Components should be pure with respect to their props
- Props can be any JavaScript value: strings, numbers, objects, functions, etc.
        `,
        level: 'beginner',
        prevLessonId: 'jsx-basics',
        nextLessonId: 'state-lifecycle',
        codeExample: `
// Function component with props
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Welcome name="Sara" />

// Class component with props
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
        `,
        exercise: {
          task: 'Create a "Card" component that accepts title, description, and imageUrl props and displays them in a styled card.',
          starterCode: `
function Card(props) {
  // Use the props to display a card
  return (
    // Your JSX goes here
  );
}

// Usage
// <Card title="React Basics" description="Learn the fundamentals" imageUrl="https://example.com/image.jpg" />
          `,
          solution: `
function Card(props) {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

// Usage
// <Card title="React Basics" description="Learn the fundamentals" imageUrl="https://example.com/image.jpg" />
          `,
        }
      },
    ],
  },
  {
    id: 'react-hooks',
    title: 'React Hooks',
    description: 'Learn how to use React Hooks to add state and side effects to functional components',
    level: 'intermediate',
    lessons: [
      {
        id: 'state-hooks',
        title: 'State Hooks',
        description: 'Learn how to use the useState hook to add state to functional components',
        content: `
# State Hooks

React Hooks were introduced in React 16.8 to allow you to use state and other React features in function components without writing a class.

## useState Hook

The useState hook lets you add state to function components. It returns a pair: the current state value and a function to update it.

## Key points:

- useState takes an initial state value as an argument
- The returned update function can be used to change the state
- The state update triggers a re-render
- You can use multiple useState hooks in a single component
- Unlike this.setState in class components, useState does not merge objects

## When to use:

Use useState when you need to track a piece of data that changes over time in your component.
        `,
        level: 'intermediate',
        nextLessonId: 'effect-hooks',
        codeExample: `
import React, { useState } from 'react';

function Counter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
        `,
        exercise: {
          task: 'Create a toggle component that switches between "ON" and "OFF" states when clicked.',
          starterCode: `
import React, { useState } from 'react';

function Toggle() {
  // Add your code here
  
  return (
    // Your JSX goes here
  );
}
          `,
          solution: `
import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <div>
      <button 
        onClick={() => setIsOn(!isOn)}
        style={{
          backgroundColor: isOn ? 'green' : 'gray',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          border: 'none'
        }}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}
          `,
        }
      },
      {
        id: 'effect-hooks',
        title: 'Effect Hooks',
        description: 'Learn how to use the useEffect hook to perform side effects in function components',
        content: `
# Effect Hooks

The useEffect hook lets you perform side effects in function components. Side effects are operations that affect things outside your component, like data fetching, subscriptions, or manually changing the DOM.

## useEffect Hook

This hook serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React class components, but unified into a single API.

## Key points:

- The first argument is a function that contains the effect code
- Effects run after every completed render by default
- The second argument is an optional array of dependencies
- Return a function from your effect to clean up resources
- Multiple effects can be used to separate concerns

## Common use cases:

- Data fetching
- Setting up subscriptions
- Manually changing the DOM
- Logging
        `,
        level: 'intermediate',
        prevLessonId: 'state-hooks',
        nextLessonId: 'custom-hooks',
        codeExample: `
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
    
    // Clean up function (similar to componentWillUnmount)
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
        `,
        exercise: {
          task: 'Create a component that fetches and displays user data from the JSONPlaceholder API when the component mounts.',
          starterCode: `
import React, { useState, useEffect } from 'react';

function UserData() {
  // Add state for user data
  
  // Add useEffect to fetch data
  
  return (
    <div>
      {/* Display the user data here */}
    </div>
  );
}
          `,
          solution: `
import React, { useState, useEffect } from 'react';

function UserData() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch user data');
        setLoading(false);
      }
    }
    
    fetchData();
    
    // Clean up function
    return () => {
      // Cancel any pending requests if needed
    };
  }, []); // Empty dependency array means this runs once on mount
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  
  return (
    <div>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}
    </div>
  );
}
          `,
        }
      },
    ],
  },
  {
    id: 'advanced-patterns',
    title: 'Advanced React Patterns',
    description: 'Learn advanced React patterns for building scalable applications',
    level: 'advanced',
    lessons: [
      {
        id: 'context-api',
        title: 'Context API',
        description: 'Learn how to use the Context API for state management across components',
        content: `
# Context API

The Context API provides a way to share values between components without having to explicitly pass a prop through every level of the tree. It's designed to share data that can be considered "global" for a tree of React components.

## When to use Context:

- Theme data (e.g., dark or light mode)
- User data (authenticated user, preferences)
- Language preferences
- Any data that needs to be accessed by many components at different nesting levels

## Key Components:

1. **React.createContext**: Creates a Context object
2. **Context.Provider**: Component that provides the value
3. **Context.Consumer**: Component that consumes the value
4. **useContext**: Hook to consume context in function components

## Considerations:

- Don't overuse context for everything - it's not a replacement for all prop passing
- Context changes cause all components that use that context to re-render
- Consider using it alongside other state management approaches for complex apps
        `,
        level: 'advanced',
        nextLessonId: 'custom-hooks',
        codeExample: `
import React, { createContext, useContext, useState } from 'react';

// Create a context with a default value
const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Header />
        <Main />
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);
  return (
    <header className={theme}>
      <h1>Theme Example</h1>
    </header>
  );
}

function Main() {
  const theme = useContext(ThemeContext);
  return (
    <main className={theme}>
      <p>Current theme: {theme}</p>
    </main>
  );
}
        `,
        exercise: {
          task: 'Create a simple theme context that provides dark/light theme values and a toggle function to components.',
          starterCode: `
import React, { createContext, useContext, useState } from 'react';

// Create your context here

function ThemeProvider({ children }) {
  // Add state and toggle function
  
  return (
    // Wrap children with Provider
  );
}

function useTheme() {
  // Create and return custom hook to use the theme
}

export { ThemeProvider, useTheme };
          `,
          solution: `
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };
          `,
        }
      },
      {
        id: 'custom-hooks',
        title: 'Custom Hooks',
        description: 'Learn how to create and use custom hooks to reuse stateful logic',
        content: `
# Custom Hooks

Custom Hooks are JavaScript functions whose names start with "use" and that may call other Hooks. They let you extract component logic into reusable functions.

## Benefits of Custom Hooks:

- **Reusability**: Extract stateful logic from components to reuse across your application
- **Composition**: Compose multiple hooks together to create more powerful abstractions
- **Encapsulation**: Hide complex implementation details behind a simple interface
- **Testability**: Easier to test logic in isolation from the UI

## When to create a custom Hook:

- When you notice you're duplicating stateful logic between components
- When a component becomes too complex due to multiple pieces of state and effects
- When you want to share logic between different components

## Rules for Custom Hooks:

- Always start the name with "use" (e.g., useFormInput, useFetch)
- Can call other Hooks inside custom Hooks
- Must follow the Rules of Hooks (only call at the top level)
        `,
        level: 'advanced',
        prevLessonId: 'context-api',
        codeExample: `
import { useState, useEffect } from 'react';

// Custom hook for handling form input
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  function handleChange(e) {
    setValue(e.target.value);
  }
  
  return {
    value,
    onChange: handleChange
  };
}

// Custom hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Usage in components
function ProfilePage({ userId }) {
  const name = useFormInput('');
  const { data, loading, error } = useFetch(\`https://api.example.com/users/\${userId}\`);
  
  // Rest of component...
}
        `,
        exercise: {
          task: 'Create a custom hook called useLocalStorage that syncs state with localStorage.',
          starterCode: `
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Implement the custom hook here
  
  return [/* value */, /* setValue function */];
}

// Example usage:
// function App() {
//   const [name, setName] = useLocalStorage('name', '');
//   return (
//     <input
//       value={name}
//       onChange={e => setName(e.target.value)}
//       placeholder="Enter your name"
//     />
//   );
// }
          `,
          solution: `
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Get stored value from localStorage or use initialValue
  const getStoredValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return initialValue;
    }
  };
  
  // State to store our value
  const [value, setValue] = useState(getStoredValue);
  
  // Update localStorage when the state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }, [key, value]);
  
  return [value, setValue];
}

// Example usage:
// function App() {
//   const [name, setName] = useLocalStorage('name', '');
//   return (
//     <input
//       value={name}
//       onChange={e => setName(e.target.value)}
//       placeholder="Enter your name"
//     />
//   );
// }
          `,
        }
      },
    ],
  },
];