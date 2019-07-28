import React, { Component } from "react";
import "./App.scss";
import TextInputPanel from "./components/TextInputPanel";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { words, updateInputText } = this.props;
    
    return (
      <div className="App">
        <header className="header">
          
          <h1 className="title">
            Text Prediction
          </h1>
        </header>

        <p>Enter text to start typing</p>

        <TextInputPanel
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