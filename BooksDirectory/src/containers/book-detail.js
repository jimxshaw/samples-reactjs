import React, {Component} from "react";
import {connect} from "react-redux";

class BookDetail extends Component {
  render() {
    // When the app first starts up, this.props.book is null because
    // we defaulted the state to be null as specified in our ActiveBook 
    // reducer. A conditional has to be written to capture and rectify that.
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for: </h3>
        <div>Title: {this.props.book.title}</div>
        <div>Author: {this.props.book.author}</div>
        <div>Genre: {this.props.book.genre}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);

















