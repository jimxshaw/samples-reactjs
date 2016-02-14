// When a user submits something through the search bar, a request 
// is sent to the youtube data api. 

// The react module needs to be imported for all components that use JSX.
import React, {Component} from "react";

// // Here's an example of a functional component.
// const SearchBar = () => {
//   return <input />;
// };

// Here's an example of a class component. Define a new class called SearchBar that 
// extends or inherits the members of React.Component. Every class must have a render 
// method. Note that if the above import does not explicitly pull in {Component} then 
// you must fully qualify the below class by writing extends React.Component.
class SearchBar extends Component {
	render() {
		return <input />;
	}
}

// Any file that imports SearchBar will be able to utilize our SearchBar
// component. 
export default SearchBar;























