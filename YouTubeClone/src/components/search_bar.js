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

// State is a difficult concept to grasp with React but it's important to understand it
// as soon as possible. State is a plain javascript object that is used to record and 
// react to user events. Each class component (functional components don't have state) 
// has its own state object. Whenever the class component state changes, the component 
// immediately re-renders and forces its child components to re-render as well.  
class SearchBar extends Component {
	// The state object is initialized through a constructor. 
	constructor(props) {
		super(props);

		// State is used by creating a new object and assigning it to the state property 
		// of this present class component. The new state object has properties we want 
		// to record on the state. In this case, we want state to record the term AKA 
		// the search term of the SearchBar component. Term is defaulted to empty but 
		// as the user inputs search terms, those values will be recorded by the state.  
		this.state = {term: ""};
	}

	// Render method must also always return some JSX or errors will occur. 
	render() {
		// return <input onChange={this.onInputChange} />;

		// Arrow notation can be used to increase code terseness, albeit at the
		// the expense of readibility. Comment out onInputChange() {} and the
		// above first return statement. Comment in the below second return.
		// The app should still work the same as before.
		// Because the value attribute is bound with this.state.term, input has
		// become a controlled component form element. Controlled components have
		// their values set by state. Their values only ever change when the state 
		// changes. First, this.state.term's value is whatever was initialized in 
		// the constructor. The user inputs a new value captured by 
		// event.target.value. The this.setState method takes the new value and 
		// changes the state by assigning it to the state object's property of 
		// term. Finally, the input JSX tag's value attribute will have the new 
		// user input value that's captured with this.state.term.
		return (
			<div className="search-bar">
				<input
					value={this.state.term}	 
					onChange={event => this.onInputChange(event.target.value)} 
					placeholder="Sup Andrew?" />
			</div>
		);
	}

	// Whenever SearchBar is executed with a search term, the term is passed in as an
	// event argument. We then call onInputChange that specifically captures the 
	// argument's target value property, which is our search term. Since SearchBar is 
	// a class component, we must update its state object properties. It happens that 
	// there's only one state property called term and we set the new search term to it.
	onInputChange(term) {
		this.setState({term});
		// The passed in props from App has the onSearchTermChange callback function that 
		// needs an argument. We fulfill it with the new search term input by the user.  
		this.props.onSearchTermChange(term);
	}

	// // Whenever the input element changes, run the code inside. This is essentially 
	// // an event handler that's placed in the returned JSX of render. The event handler 
	// // will trigger whenever an event occurs, specifically the change event hence 
	// // why we wrote onChange above.
	// onInputChange(event) {
	// 	// Only in the constructor do we ever assign the state object to the state 
	// 	// property. In every other case, we use the this.setState method that takes in 
	// 	// the state object to be set. 
	// 	this.setState({term: event.target.value});
	// }
}

// Any file that imports SearchBar will be able to utilize our SearchBar
// component. 
export default SearchBar;























