import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Only directly assign state in the constructor.
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // State can only be updated using setState.
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );
  }

  // React requires the render method.
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
