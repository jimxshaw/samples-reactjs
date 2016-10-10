// main.js

$ = jQuery = require("jquery");

var React = require("react");
var Home = require("./components/homePage");

// Take our Home page component and attach it to the DOM element 
// id of app.
React.render(<Home />, document.getElementById("app"));




