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
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constants";

// JSX => React.createElement => Object => HTML (DOM)

// JSX : JSX is HTML like syntax but it is not html inside JavaScript. Babel understand JSX and convert it into normal HTML.
// heading2 below is React element. React element is just an object.

/*
React Component: There are two types of React Component. 
1) Functional Component: It is just a function. New Way of Writting Code. Name of component starts with capital letter but it is not mandatory. 
   It is convention. It is good Practice. 
2) Class Based Component: Always been existed since long time in react. Old way of writting Code. 
*/

// Functional Compnent

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
//  React.fragment : React.fragment is a component which is exported by react.
//  JSX can have only one parent.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
