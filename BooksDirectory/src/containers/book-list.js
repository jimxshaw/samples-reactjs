// This component will render a list of books. It will be a class 
// component, not functional component.

// A react component that's connected with redux is called a "smart" 
// component or container. A connection is defined as the react component has 
// direct access to the state produced by redux. A react component that does 
// not have this connection with redux and is called a "dumb" component.
// React and redux are distinct libraries and it's only through react-redux 
// that we can meld the two together.   

// Remember, if we import a word like React, we import the entire object. If
// we import something in {}, we import a single property.
import React, {Component} from "react";
import {connect} from "react-redux";

// This class component creates an ul tag and calls a helper function. 
class BookList extends Component {
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

// The purpose of this function is to take our application state as an argument 
// (the app state comprises of our list of books and our selected book) and 
// whatever is returned will show up as props inside BookList.
// This function is the glue that holds binds react and redux.
// Whenever the state from redux changes, the returned object with books property 
// will change and this BookList container will automatically re-render. 
function mapStateToProps(state) {
  // Usually an object is returned. Whatever's inside will be set to this.props 
  // in our component. The value of state.books is the array of books from our 
  // Redux reducer_books.js and it's assigned to the key of books, which BookList 
  // component will return with this.props.book.map(). 
  return {
    books: state.books
  };
}

// This connect import from react-redux contributes to the merging of react and redux.
// It takes a function (mapStateToProps) and a component (BookList) and produces 
// a container. A container is a react component that's aware of state contained 
// in redux. 
export default connect(mapStateToProps)(BookList);














