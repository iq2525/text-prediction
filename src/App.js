import React, { Component } from "react";
import "./App.scss";
import TVGuideControlPanel from "./components/TVGuideControlPanel.js";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { words, getWords } = this.props;
    
    return (
      <div className="App">
        <header className="header">
          
          <h1 className="title">
            Welcome to the TVGuide App
          </h1>
        </header>

        <TVGuideControlPanel
          getWords={getWords}
          words={words}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    words: state.words
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getWords: () => dispatch({ type: "GET_WORDS" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);