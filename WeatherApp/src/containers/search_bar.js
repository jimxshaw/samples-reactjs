import React, {Component} from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ""};

    // The keyword this in this context refers to our SearchBar component.
    // It has an onInputChange function. Bind the function to this, our 
    // SearchBar, and replace onInputChange with this new bound instance of 
    // the function. Essentially, take the existing function and bind keyword 
    // this and then replace the existing function with what's bound.

    // General rule for the keyword this. If we're ever passing around a callback 
    // as a function and that callback has a reference to keyword this, the 
    // context must be bound. 
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value});
  } 

  render() {
    return (
      <form className="input-group">
        <input 
          placeholder="Get a five day forcast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Submit</button>
        </span>
      </form>
    );
  }
}



























