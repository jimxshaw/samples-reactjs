import React from "react";
import { Link } from "react-router";

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>PS Administration with Redux</h1>
        <p>React and Redux in ES6 for responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
