// SearchBar is a container that uses the fetchWeather action creator 
// in actions/index.js.

import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../actions/index";


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
    // context must be bound. Again, we're binding this again with this.onFormSubmit.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    // Don't submit the form immediately because we haven't retrieved weather data yet.
    event.preventDefault();

    // We need to go and fetch weather data. After importing fetchWeather action creator 
    // and binding it to props, we can call it here with the user input city. That would 
    // be the term of this.state. After searching and grasping the city term, we clear 
    // the term so that a new search could start. 
    this.props.fetchWeather(this.state.term); 
    this.setState({term: ""});
  } 

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// Since we're not mapping any state to props with this SearchBar container, 
// we pass in a null value in the first argument. 
export default connect(null, mapDispatchToProps)(SearchBar);























