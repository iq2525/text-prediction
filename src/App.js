import React, { Component } from "react";
import "./App.scss";
import TVGuideControlPanel from "./components/TVGuideControlPanel.js";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { words, updateInputText } = this.props;
    
    return (
      <div className="App">
        <header className="header">
          
          <h1 className="title">
            Welcome to the TVGuide App
          </h1>
        </header>

        <TVGuideControlPanel
          updateInputText={updateInputText}
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
    updateInputText: (inputText) => dispatch({ type: "UPDATE_INPUT_TEXT", inputText: inputText })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);