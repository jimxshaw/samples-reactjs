import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onTermSubmit = term => {
    console.log(term);
  };

  render() {
    return (
      <div class="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
