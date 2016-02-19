// This component will render a list of books. It will be a class 
// component, not functional component.

// A react component that's connected with redux is called a "smart" 
// component or container. This container takes the data from redux 
// and renders it with a view. A react component that does not utilize 
// redux and its data is called a "dumb" component.  

import React, {Component} from "react";

// This class component creates an ul tag and calls a helper function. 
export default class BookList extends Component {
  // This function maps over an array of books passed in from props. For each book in
  // the array, create an li tag that contains the book title. Make the book title the 
  // unique identifier key as well.  
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}


















