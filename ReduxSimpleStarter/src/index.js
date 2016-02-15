// React is a javascript library that is used to produce html that's 
// shown to users in a web browser. When we write react code, we're 
// writing components or views (the two terms can be used interchangeably).
// Components are snippets of code that produce html. We write multiple 
// components and nest them inside one another so that complex applications 
// can be made simple. 

// Javascript modules capture the idea that all the code we write in separate 
// files are siloed from other code we write or from code that get installed through 
// libraries in our project. Code in other files will have zero contact with the 
// code in this file unless access is explicitly granted. Module access is granted 
// by using the import statement.

// Find the library called react installed in my application as a dependency
// (./node_modules/react) and assign it to a variable called React.
import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

// A path has to be specified for a code file that we write ourselves. If the file 
// is a .js file then we do not have to include the .js extension in the path. The 
// above react and react-dom do not need paths specified because they're npm 
// modules. There can only ever be one library called react or react-dom for example. 
import SearchBar from "./components/search_bar";

// This is a youtube api key from console.developers.google.com.
const API_KEY = "AIzaSyB2X1sr_tOIz8xWclj96qmEjWXKLYPpnw0";

// // Create a new component and it should produce html. The constant App class returns
// // some JSX that will be transpiled to html. The () => fat arrow ES6 notation is a 
// // terse way to write a function. Below is an example of a functional component.
// const App = () => {
//   return (
//   	<div>
//   		<SearchBar />
//   	</div>
//   );
// };

// The App component needs to be refactored from a functional component to a class 
// component. We do this so that the App can keep track of the list of retrieved 
// videos by recording them on its state.
class App extends Component {
	// Whenever the user search for more videos, the newly searched for videos 
	// need to be set on the state. State has to be initialized by the constructor.
	constructor(props) {
		super(props);

		this.state = {videos: []};

		// The constructor kicks off the youtube search api with a default search 
		// term (vsauce in this case). The callback has the retrieved data and we 
		// use that data to set the initial value of state. By the way, the callback 
		// function utilizes fat arrow notation.
		YTSearch({key: API_KEY, term: "vsauce"}, (videos) => {
			// // this.setState({videos: videos});
			// Since the callback data is named the same as the state property name 
			// (videos), the code can be further simplified with below.
			this.setState({videos});
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

// Take the component's generated html and put it on the page (in the DOM).
// We cannot simply pass App into .render() because that would be passing 
// in the class directly. Instead, we should be passing in AN INSTANCE of 
// that class. That's done using JSX syntax wrapped around App. The second 
// argument of .render() is a reference to an existing DOM node on the page.
// Essentially, when the App component gets rendered and produces html, put 
// it in the existing DOM element class called container.  
ReactDOM.render(<App/>, document.querySelector(".container"));































