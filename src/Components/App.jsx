import React, { Component } from "react";
import GlobalStyle from "./GlobalStyle";
import Road from "./Road";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Road />
      </>
    );
  }
}

export default App;
