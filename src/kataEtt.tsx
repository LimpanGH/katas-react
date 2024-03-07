// ! Vanliga imports -------------------------------------------------------
// * Bas-imports:
import React from 'react';
import ReactDOM from 'react-dom/client';

// * Hook imports:
import React, { useState } from 'react';
import React, { useEffect } from 'react';
import React, { useContext } from 'react';
import React, { useReducer } from 'react';
import React, { useCallback } from 'react';
import React, { useMemo } from 'react';

// ! Komponent-anatomi -------------------------------------------------------
function exempelFunktion({ props1, props2, props3 }) {
  // 1. Hooks måste stå högst upp
  // 2. Vilken javascript som helst, mappa, filtrer, requesta
  // 3. Rendera med JSX:
  //    Här kan du skriva javascript men det måste vara inom { }, och du kan använda dessa men det bör göras försiktigt:
  //    map, for-loop, forEach, map, filter, reduce, find.
  //
  //    Undvik:
  //    Direkt manipulation av DOM,
  //    Anropa setState utanför livscykelmetoderna,
  //    Direkta HTTP-anrop,
  //    Funktioner som orsakar bieffekter som setTimeout och setInterval,
  //    Skriva långa kodblock direkt:
}

// ! Info  ---------------------------------------------------------------------
// * React.js is a JavaScript library developed by engineers at Facebook. Here are just a few of the reasons why people choose to program with React:
// * React is fast. Apps made in React can handle complex updates and still feel quick and responsive.
// * React is modular. Instead of writing large, dense files of code, you can write many smaller, reusable files. React’s modularity can be a beautiful solution to JavaScript’s maintainability problems.
// * React is scalable. Large programs that display a lot of changing data are where React performs best.
// * React is flexible. You can use React for interesting projects that have nothing to do with making a web app. People are still figuring out React’s potential. There’s room to explore.
// * JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.
// * If a JavaScript file contains JSX code, then that file will have to be compiled. This means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.
// * A basic unit of JSX is called a JSX element. Here’s an example of a JSX element: <h1>Hello world</h1>
// * JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go. This means that a JSX element can be saved in a variable, passed to a function, stored in an object or array… you name it.

// * Here’s an example of a JSX element being saved in a variable:
// *   const navBar = <nav>I am a nav bar</nav>;

// * Here’s an example of several JSX elements being stored in an object:
// *   const myTeam = {
// *     center: <li>Benzo Walli</li>,
// *     powerForward: <li>Rasha Loa</li>,
// *     smallForward: <li>Tayshaun Dasmoto</li>,
// *     shootingGuard: <li>Colmar Cumberbatch</li>,
// *     pointGuard: <li>Femi Billon</li>
// *   };

// * JSX elements can have attributes, just like how HTML elements can:
// *  const panda = <img src='images/panda.jpg' alt='panda' width='500px' height='500px'>;

// * NESTING. You can nest JSX elements inside of other JSX elements, just like in HTML.
// * If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses.
// * Nested JSX expressions can be saved as variables, passed to functions, etc., just like non-nested JSX expressions can:
// *    const theExample = (
// *      <a href="https://www.example.com">
// *        <h1>
// *          Click me!
// *        </h1>
// *      </a>
// *    );

//* JSX expression must have exactly one outermost element, the solution is usually simple: wrap the JSX expression in a <div> element or a Fragment.

// * Tailwind är vanligt i React

// todo Props är imutable, one-way dataflow. Man kan alltså bara skicka props från parent till child och inte tvärtom!! Det gör att man får bättre koll på datan och det minskar buggar.

// * React-komponent under huven är en funktion som gör saker tex renderar ut saker i DOMen

// todo React components very often follow this structure:
// * 1. Hooks at the top
// * 2. Helper-functions or code that is parsing data
// * 3. A return with all your JSX

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ! Small excercises ---------------------------------------------------------

// * 1. Render 'Hello World' in the DOM
import { createRoot } from 'react-dom/client';

const container = document.getElementById('container');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);

// * 2. Passing a Variable to render()

import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  // State declaration example
  const [count, setCount] = useState(0);

  // Effect declaration example (useEffect hook)
  useEffect(() => {
    // Code to run on component mount
    console.log('Component mounted');

    // Code to run on component unmount (cleanup)
    return () => {
      console.log('Component unmounted');
    };
  }, []); // The empty dependency array means this effect runs once on mount

  // JSX content of the component
  return (
    <div>
      <h1>My React Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MyComponent;
