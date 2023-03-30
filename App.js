/*
 ** Created a Server
 ** HMR - Hot Module Replacement
 ** File Watcher Algorithm: Written in C++
 ** BUNDLING
 ** MINIFY
 ** Cleaning Our App
 ** Dev and Production Build
 ** Super Fast build algorithm
 ** Image Optimization
 ** JS Optimization
 ** Caching while development
 ** Compression
 ** Compatible with older version of browser
 ** HTTPS on Dev
 ** Port Number
 ** Consistent Hashing Algorithms
 ** Zero Config
 ** Tree Shaking : Removing Unwanted Code
 **
 */

/*
 **  Transitive Dependencies: We have our package manager which handles and takes care of our transitive depenencies of code. In another word, when we are building
    production ready app, we need to do a lot of things which are Bunddling, Minification, Image Optimazation, Caching, Differential Bundling, Hot Module Replacement
    so many things we have to do and we cann't do this alone. We need some dependencies on it. When we need dependencies so those dependencies are also dependent on
    somethings other dependencies out there. 
  */

import React from "react";
import ReactDOM from "react-dom/client";

// JSX => React.createElement => Object => HTML (DOM)

// JSX : JSX is HTML like syntax but it is not html inside JavaScript. Babel understand JSX and convert it into normal HTML.
// heading2 below is React element. React element is just an object.
const heading = (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);
/*
React Component: There are two types of React Component. 
1) Functional Component: It is just a function. New Way of Writting Code. Name of component starts with capital letter but it is not mandatory. 
   It is convention. It is good Practice. 
2) Class Based Component: Always been existed since long time in react. Old way of writting Code. 
*/

// Functional Compnent
const HeaderComponent = () => {
  return (
    <div>
      {heading}
      <h1>Namaste React Functional Component</h1>
      <h2>This is a h2 tags</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
