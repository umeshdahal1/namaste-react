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
 ** Caching while development
 ** Compression
 ** Compatible with older version of browser
 ** HTTPS on Dev
 ** Port Number
 ** Consistent Hashing Algorithms
 ** Zero Config
 **
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
const heading = React.createElement("h1", { id: "title" }, "Namaste Everyone!");

const heading2 = React.createElement(
  "h2",
  { id: "title" },
  "Namaste Everyone!"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
