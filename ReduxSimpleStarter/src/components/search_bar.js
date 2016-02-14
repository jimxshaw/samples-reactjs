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
// you must fully qualify the below class by writing extends React.Component. Render 
// method must also always return some JSX or errors will occur. 
class SearchBar extends Component {
	render() {
		return <input onChange={this.onInputChange} />;
		// // Arrow notation can be used to increase code terseness, albeit at the
		// // the expense of readibility. Comment out onInputChange() {} and the
		// // above first return statement. Comment in the below second return.
		// // The app should still work the same as before.
		// return <input onChange={event => console.log(event.target.value)} />;
	}

	// Whenever the input element changes, run the code inside. This is essentially 
	// an event handler that's placed in the returned JSX of render. The event handler 
	// will trigger whenever an event occurs, specifically the change event hence 
	// why we wrote onChange above.
	onInputChange(event) {
		console.log(event.target.value);
	}
}

// Any file that imports SearchBar will be able to utilize our SearchBar
// component. 
export default SearchBar;























