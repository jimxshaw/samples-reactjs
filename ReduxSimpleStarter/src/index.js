// React is a javascript library that is used to produce html that's 
// shown to users in a web browser. When we write react code, we're 
// writing components or views (the two terms can be used interchangeably).
// Components are snippets of code that produce html. We write multiple 
// components and nest them inside one another so that complex applications 
// can be made simple. 

// Javascript modules capture the idea that all the code we write in separate 
// files is siloed from other code we write or code that get installed through 
// libraries in our project. Code in other files will have zero contact with the 
// code in this file unless access is explicitly granted. Module access is granted 
// by using the import statement.

// Find the library called react installed in my application as a dependency
// (./node_modules/react) and assign it to a variable called React.
import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component and it should produce html. The constant App class returns
// some JSX that will be transpiled to html. The () => fat arrow ES6 notation is a 
// terse way to write a function.
const App = () => {
  return <div>This is a test!</div>;
};

// Take the component's generated html and put it on the page (in the DOM).
// We cannot simply pass App into .render() because that would be passing 
// in the class directly. Instead, we should be passing in AN INSTANCE of 
// that class. That's done using JSX syntax wrapped around App. The second 
// argument of .render() is a reference to an existing DOM node on the page.
// Essentially, when the App component gets rendered and produces html, put 
// it in the existing DOM element class called container.  
ReactDOM.render(<App/>, document.querySelector('.container'));































